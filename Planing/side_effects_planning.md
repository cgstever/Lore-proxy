# X-Change World
## Side Effects System — Planning Document
### Status: Pre-design. Not ready for implementation. For planning and discussion only.

---

## 1. What This System Is

Side effects are secondary mechanical and narrative consequences that fire alongside the primary fragment system. They are distinct from the main fragment pool — they are not arousal flavor, they are things the pill is doing to the character beyond the core effect.

All side effects require a pill to be active. There are no side effects without a pill. This is a hard gate — the system does not fire for unpilled characters regardless of arousal.

---

## 2. Table Structure

### 2.1 Effect Tables (Reference — Already Designed)
The existing effect tables are organized along three axes:
- **Per effect** — breeder, bimbo, bull, denial etc.
- **Per birth anatomy** — born male / born female (intersex handled as variant)
- **Per stat** — all 6 stats (INT, WIS, CON, CHA, DOM, SUB)
- **Pass / fail pairs** per entry

Generic tables cover unpilled characters and pilled characters with no active effect. Effect tables replace generic as the base layer the moment a pill effect activates.

### 2.2 Side Effect Tables (This System)
Side effect tables are organized along **exactly the same axes**:
- **Per effect** — one side effect table per effect, mirroring the effect table
- **Per birth anatomy** — born male / born female
- **Per stat** — all 6 stats
- **Pass / fail pairs** per entry

The only structural differences from effect tables:
- **Pass/fail are both negative** — there is no good outcome in a side effect table. Pass means barely holding on. Fail means it gets significantly worse. The roll only determines degree of bad.
- Tone gradient across the full stack: Generic (neutral/negative) → Effect (good/bad) → Side Effect (bad/worse)
- fires_if gates on tier 17+ AND low stat condition (see Section 3)

### 2.3 Authoring Implication
Every new effect requires two parallel tables — the effect table and the side effect table. Same organizational structure, written in tandem. The side effect table is what happens when that effect has been running deep into a session and the character's weakest stat finally breaks hard.

This will make the lore file very large. It is almost certainly the most comprehensive stateful roleplay lore system anyone has built for SillyTavern.

---

## 3. How Side Effects Fire

Side effects are **not fragment replacements**. They fire alongside the existing fragment assembly as an additional layer. They do not consume a fragment slot — they are appended or integrated into the turn inject separately.

### 3.1 Trigger Conditions
Side effects have their own trigger conditions separate from the d12 stat roll:
- **Tier milestone** — specific tiers always check for a side effect (e.g. every 5 tiers, a side effect roll fires)
- **Fail accumulation** — after X fragment fails this session, a side effect becomes eligible
- **Pill duration** — after the pill has been active for N turns, certain side effects unlock

These are not mutually exclusive — a tier milestone AND fail accumulation can both be active simultaneously.

### 3.2 The Roll
When a side effect is eligible, a separate roll fires to determine which one triggers and whether it has mechanical weight this turn. The exact mechanic is TBD pending core system testing, but the intent is:
- Roll to determine which side effect fires from the eligible pool
- Separate pass/fail to determine if it has mechanical consequence this turn or is narrative only

---

## 4. Duration

Side effects have two duration types. A side effect's duration is defined in its entry.

### Session-Persistent
Fires once and stays for the rest of the session. Represents a permanent shift in the character's state for this session — something the pill has done that does not reverse until the session ends. Tracked in session state.

Examples: A sensitivity threshold that is now permanently lower. An emotional shift that colors all subsequent fragments. A physical change that is now present regardless of arousal level.

### Orgasm-Reset
Active until the next orgasm event, then clears. Represents a temporary peak effect — the pill pushing hard during a high-arousal cycle, resetting when the cycle completes.

Examples: Heightened sensitivity during the current arousal climb. A specific compulsion that intensifies this cycle then releases. Emotional volatility during the current build.

A single side effect can have a **base duration of orgasm-reset with a persistence chance** — on a failed resistance roll it becomes session-persistent instead. This creates a meaningful moment: the character fails to shake it off and it stays.

---

## 5. Mechanical Consequences

Side effects with mechanical weight do one or more of the following:

| Consequence Type | Description |
|---|---|
| Stat mod (temporary) | Applies a modifier to a specific stat for the duration. Does not affect d12 face map (temp mod rule). |
| DC shift | Raises or lowers the tier climb DC for the duration. |
| Fragment pool modification | Makes a specific fragment group fire with advantage or disadvantage. |
| Arousal floor raise | Permanently raises the arousal floor slightly. Stacks with consequence band escalation. |
| Trigger chance bump | Adds to the orgasm trigger percentage (stacks with fail accumulation). |

Not all side effects have mechanical weight. Narrative-only side effects still fire and inject flavor but leave state unchanged.

---

## 6. Multiple Active Effects — Side Effect Interaction (WIP)
How multiple active effects interact with side effect table selection is not yet decided. Both side effect tables being in the pool when two effects are active is the working assumption but this is subject to change during implementation and testing.

---

## 7. What Needs Designing Later

This document is intentionally incomplete. The following are deferred until the core fragment system has been tested:

- **The actual side effect tables** — specific entries per pill color and general pool
- **Exact trigger thresholds** — which tiers, what fail counts, what pill durations
- **The resistance roll mechanic** — whether characters can resist a side effect becoming persistent
- **Interaction with addiction stage** — higher addiction stage probably expands the eligible side effect pool
- **Display format** — how side effects appear in the turn inject alongside fragments
- **Cap** — whether there is a maximum number of active side effects at once

---

## 7. Design Principles to Hold Onto

- Side effects should feel like the pill doing something, not just more arousal pressure. They are chemically distinct from the compulsion.
- Narrative-only side effects are not filler — they set atmosphere and make the pill feel real even when there is no mechanical consequence.
- Session-persistent side effects should feel earned and meaningful when they lock in. They are not routine.
- The system should not inflate turn output significantly. Side effects are additive but the total inject length must stay controlled.

---

*X-Change World Side Effects System — Cody Stever*
*Planning Document v0.1 — Pre-implementation*
