# Demetri Repertoire Module — Issue Tracker

**Module:** `Demetri_Repertoire_Module.js` (Planing/v1.0.4)
**Reporter:** DJLegends (Discord, 2026-03-29)
**Endpoint:** OpenRouter — Chat Completion
**Model:** Gemini (exact variant unknown)
**ST API Mode:** Chat Completion

---

## Reported Issues

### 1. UI / HUD Not Displaying Correctly

**Symptoms:**
- Repertoire settings panel shows data but doesn't reflect actual state.
- Exported state JSON shows `activeForms: ["Vannessa Cain"]` but UI showed `(Demetri)`.
- Labels in DJLegends' UI ("Current Form", "Method: Dormant", "Madison: Mindlinke...") do NOT match the v1.0.4 module code labels ("Currently Active", "Madison: ✅/💭", "Mastered Forms").
- Possible version mismatch — DJLegends may be running a different build than what's in Planing/.

**Likely Causes:**
- `_hudState` starts null; HUD shows "Waiting for first turn..." until first full send+receive cycle.
- On page load, `updateHud` only fires if IDB already has saved state (index.js line ~1171). Fresh sessions get no HUD until first response completes.
- If DJLegends is on a different module version, that version's HUD code may have its own bugs.

**Needs from DJLegends:**
- [ ] Export the actual .js module file he has loaded (not the Planing/ version).
- [ ] Screenshot of the extension settings panel (Enabled, Scene Page Mode, Debug toggles).

---

### 2. Streaming Breaks on Second Response

**Symptoms:**
- First response works (streams normally).
- Second response's streaming never starts.
- "Currently rn it randomly just works and not" — intermittent.

**Likely Causes:**

**A. Fetch interceptor timing / IDB contention:**
The fetch interceptor does multiple `await idbGet` / `await idbPut` calls before forwarding the request. If IDB is slow or locked (e.g. from a concurrent tab), the fetch hangs and the model response never starts. This would explain intermittent failures.

**B. `lastTurnResult` lifecycle:**
- Set during fetch intercept (before response).
- Cleared to `null` at end of `onMessageReceived` (after response).
- If the interceptor skips on the second request (e.g. body check fails), `lastTurnResult` stays null and `handleResponse` never runs — state doesn't update, HUD freezes.

**C. Gemini + game block parsing:**
The module tells the model to emit ` ```game { "type": "..." } ``` ` blocks. Gemini models are inconsistent with structured output in fenced code blocks. If Gemini emits a malformed block (partial JSON, missing closing backticks), the `handleResponse` regex could:
- Match an incomplete block and fail JSON.parse (caught, but event lost).
- Not match at all, leaving raw game blocks visible in the chat.
- Match across multiple blocks incorrectly due to `[\s\S]*?` being greedy across newlines.

**D. OpenRouter-specific:**
Some OpenRouter endpoints return responses differently (chunked vs non-chunked). If MESSAGE_RECEIVED fires before the full response is assembled, handleResponse gets partial text.

**Needs from DJLegends:**
- [ ] Enable Debug mode in extension settings, reproduce the issue, and share console output.
- [ ] Confirm whether Scene Page Mode is on or off.
- [ ] Note if the issue happens on first message of a new chat or only after multiple exchanges.

---

## Pending Investigation

### Engine-side fixes to explore (index.js)

1. **Add non-debug error logging** — Fetch interceptor catch block (line ~1490) silently swallows errors when debug is off. Should always log `[OW]` errors to console.
2. **Guard `handleResponse` against partial text** — If streaming is active, defer handleResponse until streaming is confirmed complete.
3. **IDB timeout / fallback** — If idbGet takes too long, proceed with empty state rather than hanging the fetch.

### Module-side fixes to explore (Demetri_Repertoire_Module.js)

1. **Game block format** — Consider whether ` ```game ``` ` fenced blocks are the best format for Gemini. Alternatives: XML tags (`<game>...</game>`), or a single-line JSON format that's less likely to get mangled.
2. **Regex robustness** — Current regex assumes well-formed fenced blocks. Add fallback parsing for common malformations.

---

## Endpoint Profiles (Future)

Different models/endpoints behave differently with structured output. Track known behaviors here as we gather data.

| Endpoint | Model | Structured Output | Game Blocks | Streaming | Notes |
|----------|-------|-------------------|-------------|-----------|-------|
| OpenRouter | Gemini (unknown) | Inconsistent | Intermittent | Breaks on 2nd | DJLegends' report |
| — | — | — | — | — | — |

---

*Last updated: 2026-03-30*
