# Demetri Repertoire Module — Issue Tracker

**Module:** `Demetri_Repertoire_Module.js` (Planing/v1.0.4)
**Reporter:** DJLegends (Discord, 2026-03-29)
**Endpoint:** OpenRouter — Chat Completion
**Model:** Claude Opus (via OpenRouter)
**Scene Page Mode:** Disabled
**ST API Mode:** Chat Completion

---

## Confirmed Issues (Reproduced 2026-03-30)

### 1. `{{user}}` Placeholders Not Resolved

**Severity:** High — affects every turn

**Problem:**
The module's `staticLore` strings (The Method, Madison) are full of `{{user}}` placeholders (SillyTavern macros). These get injected raw into the header because the extension's fetch interceptor does NOT run ST's macro replacement on the assembled payload. The model receives literal `{{user}}` text instead of the character name.

**Reproduction:**
```
processTurn output contains:
  "{{user}}'s mimicry abilities"
  "{{user}} cannot simply will himself back"
  "{{user}}'s conscious will"
```

**Impact:**
- Model has to guess who `{{user}}` refers to — may not match the character card.
- On Opus, this creates ambiguity between the header and the card, leading to inconsistent behavior.
- Character descriptions in form lore reference `{{user}}` for Demetri-specific rules, so the model may not connect them properly.

**Fix options:**
- **Module-side (simple):** Replace all `{{user}}` in staticLore with "Demetri" directly, since this module is Demetri-specific.
- **Engine-side (better):** Have the fetch interceptor run ST macro replacement on the header before injection. This would fix it for all modules.

---

### 2. Character Description Override (Blue Skin Bug)

**Severity:** High — core functionality broken

**Symptoms:**
- OC character with red skin keeps being described with blue skin.
- Model has zero training data on the OC, so it's not a training data collision.
- Happens intermittently, then persists once it starts.

**Root Cause (confirmed via test):**
With Scene Page Mode OFF, the extension uses the fallback injection path:
```
Message [0]: [SCENE CONTEXT] header (lore module output, ~1187 tokens)
Message [1]: Character card system prompt
Message [2+]: FULL chat history (all previous messages)
```

The full chat history includes all previous assistant responses. If the model hallucinated "blue skin" in ANY prior turn, that hallucination sits in the history. Opus weighs its own prior outputs heavily — it will anchor on what it previously wrote over what the header says. One wrong description early on poisons every subsequent turn.

**Why it "randomly works":**
- If the first response gets the description right, subsequent turns stay correct (anchoring works both ways).
- If the first response gets it wrong, it self-reinforces through history.

**Fix options:**
- **User-side (immediate):** Enable Scene Page Mode. This discards full history and only keeps the last N messages, forcing the model to rely on the header each turn.
- **Module-side:** Add explicit reinforcement in the instructions block, e.g. "The following physical descriptions are AUTHORITATIVE and override any previous descriptions in chat history."
- **Engine-side:** In fallback mode, place the header AFTER the chat history (closer to the model's generation point) instead of before it, so it has stronger recency weight.

---

### 3. Malformed Game Blocks Not Stripped

**Severity:** Medium — causes visible artifacts and state desync

**Problem:**
If the model outputs a game block with invalid JSON (e.g. missing closing `}`), the regex matches it but `JSON.parse` fails inside a try/catch. The block is NOT stripped from `cleanedText` and the state does NOT update.

**Reproduction:**
```javascript
// Input:
"```game { \"type\": \"change_form\", \"forms\": [\"Meru\"] ```"
// Missing closing } before ```

// Result:
// - Block stays visible in chat text
// - State unchanged (activeForms still ["Vannessa Cain"])
// - Model sees its own broken block in next turn's history
```

**Impact:**
- Visible `game { ... }` artifacts in chat.
- State doesn't update — HUD shows wrong form, next turn's header injects wrong form's lore.
- Model sees the broken block in history and may repeat the pattern, compounding the problem.

**Fix options:**
- **Module-side:** Always strip the regex match from cleanedText regardless of whether JSON.parse succeeds. Failed parses should still be cleaned from visible text.
- **Module-side:** Add fallback parsing for common malformations (missing braces, extra whitespace, trailing commas).

---

### 4. UI / HUD Mismatch

**Severity:** Low-Medium — cosmetic but confusing

**Symptoms:**
- Repertoire settings panel shows data but labels don't match module code.
- Exported state JSON shows `activeForms: ["Vannessa Cain"]` but UI showed `(Demetri)`.
- Labels in DJLegends' UI ("Current Form", "Method: Dormant", "Madison: Mindlinke...") do NOT match v1.0.4 module labels ("Currently Active", "Madison: ✅/💭", "Mastered Forms").

**Likely Cause:**
DJLegends is running a different version of the module than what's in Planing/. The v1.0.4 code has completely different HUD labels and layout.

**Needs from DJLegends:**
- [ ] Export the actual .js module file he has loaded.

---

### 5. Streaming Breaks on Second Response

**Severity:** High — blocks generation entirely

**Symptoms:**
- First response works (streams normally).
- Second response's streaming never starts.
- "Currently rn it randomly just works and not" — intermittent.

**Likely Causes:**

**A. Fetch interceptor timing / IDB contention:**
The fetch interceptor does multiple `await idbGet` / `await idbPut` calls before forwarding the request. If IDB is slow or locked (e.g. from a concurrent tab), the fetch hangs and the model response never starts.

**B. `lastTurnResult` lifecycle:**
- Set during fetch intercept (before response).
- Cleared to `null` at end of `onMessageReceived` (after response).
- If the interceptor skips on the second request (e.g. body check fails), `lastTurnResult` stays null and `handleResponse` never runs.

**C. Opus + game block interaction:**
Opus is reliable with structured output, but if it places the game block mid-stream in a way that interacts badly with ST's streaming renderer + the extension's DOM replacement in `onMessageReceived`, it could cause a display freeze that looks like streaming never started.

**Needs from DJLegends:**
- [ ] Enable Debug mode, reproduce, and share console output.
- [ ] Note if the issue happens on first message of a new chat or only after multiple exchanges.

---

## Pending Investigation

### Engine-side fixes to explore (index.js)

1. **Macro replacement on headers** — Run ST's `{{user}}` / `{{char}}` macro replacement on the header before injecting it into the payload.
2. **Add non-debug error logging** — Fetch interceptor catch block (line ~1490) silently swallows errors when debug is off. Should always log `[OW]` errors.
3. **Header placement in fallback mode** — Consider injecting the header AFTER chat history instead of before, so it has stronger recency bias with the model.
4. **Guard against IDB stalls** — Add a timeout/fallback so a slow IDB read doesn't block the fetch indefinitely.

### Module-side fixes to explore (Demetri_Repertoire_Module.js)

1. **Replace `{{user}}` with "Demetri"** — Module is character-specific, no need for macros.
2. **Always strip matched game blocks** — Even on JSON.parse failure, remove the block from cleanedText.
3. **Add fallback JSON parsing** — Handle common malformations (missing braces, trailing commas).
4. **Add description authority reinforcement** — Explicit instruction that form descriptions override chat history.

---

## Endpoint Profiles (Future)

Different models/endpoints behave differently. Track known behaviors here.

| Endpoint | Model | Structured Output | Game Blocks | Streaming | Scene Page | Notes |
|----------|-------|-------------------|-------------|-----------|------------|-------|
| OpenRouter | Claude Opus | Reliable | Usually correct | Intermittent break on 2nd | OFF | DJLegends' report — blue skin anchoring bug |
| — | — | — | — | — | — | — |

---

*Last updated: 2026-03-30 — Updated with reproduction test results*
