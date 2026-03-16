# X-Change World Fragment System
## D12 Stat Weighting & Tiebreaker Rules — Design Addendum
### Status: Approved design. Ready for implementation.

---

## Context

This addendum covers the stat-weighted d12 mechanic that replaces the flat d6 roll for stat selection during fragment pressure turns. It is an addition to the Fragment System Design Specification (fragment_system_design.docx).

---

## 1. The D12 Stat Weighting System

Each turn, a d12 roll selects which stat is the "pressure point" for that turn. The die faces are assigned by ranking the character's six stats relative to each other. The highest and lowest ranked stats get the most faces — both extremes are narratively interesting and should surface more often. Neutral middle stats are less character-defining and get fewer faces.

### 1.1 Face Assignment

Stats are ranked 1–6 from highest mod to lowest mod. Faces are assigned by rank:

| Rank | Position | Faces |
|---|---|---|
| 1 | Highest stat | 3 |
| 2 | Second highest | 2 |
| 3 | Third highest | 1 |
| 4 | Third lowest | 1 |
| 5 | Second lowest | 2 |
| 6 | Lowest stat | 3 |

Total faces: 3+2+1+1+2+3 = **12**. Always d12, always balanced, fully card-agnostic.

### 1.2 Why Both Extremes Get 3 Faces

- **High stats** are strengths being tested. They pass the d20 more often when rolled but represent what defines the character — they should surface frequently.
- **Low stats** are weaknesses that drive failures and escalation. A character's flaws undoing them is a better story engine than their strengths holding.
- **Neutral stats** (middle ranks) are the least character-defining and naturally get fewer faces.

### 1.3 Die Roll Procedure

1. Calculate face assignments at T1 from the stat block. Lock for the session.
2. Each pressure turn: `roll = randint(1, 12)`
3. Map roll to the stat that owns that face range.
4. Roll d20 + that stat's modifier vs tier DC.
5. Pass → hold. Fail → arousal climbs, that stat's fail flavor block fires.

---

## 2. Tiebreaker Chain

Ties are resolved entirely at T1 when stats are first read. The resolution is deterministic and requires no authoring on the card.

### Step 1 — Mods differ
Higher modifier wins the higher rank. Standard case, no tiebreaker needed.

### Step 2 — Mods equal, raw stat differs
If two stats have the same modifier but different raw values, the higher raw stat wins the higher rank.

> Example: INT 14 (mod +2) vs WIS 12 (mod +2). INT wins the higher rank because 14 > 12.

### Step 3 — Mod AND raw stat are identical
If two stats are completely identical (same mod, same raw value), they **share the faces and trigger together**.

**Shared trigger behavior:**
- The shared stats occupy the same face range on the d12.
- When that range is rolled, **both stats trigger simultaneously**.
- d20 roll uses either mod (identical, so no difference).
- **Pass:** Normal single pass result.
- **Fail:** **Both** negative flavor blocks fire for that turn.

> Narratively: two equally matched stats cracking at the same moment is a bigger event than one stat failing alone. This is intentional — it should feel significant.

This case requires both mod and raw value to match exactly, making it genuinely rare in practice.

---

## 3. T1 Setup Procedure

At session start (turn 1), the proxy performs the following once and stores the result:

1. Read all 6 stat values from the character card.
2. Calculate mod for each: `floor((stat - 10) / 2)`
3. Rank stats 1–6 using the tiebreaker chain (mod → raw → shared).
4. Assign faces per rank table above.
5. Build the face map: a list of 12 entries mapping face index to stat.
6. If any stats share faces (Step 3 tie), record them as a paired entry in the face map.
7. Store face map in session state. Do not recalculate mid-session.

---

## 4. State Keys Required

| Key | Value |
|---|---|
| `stat_face_map` | List of 12 entries, each a stat name or paired stat tuple |
| `stat_ranks` | Dict of stat → rank, for reference |
| `shared_stats` | List of any stat pairs that resolved via Step 3, or empty |

---

## 5. Recalculation Rules

The face map is session-locked at T1 but must recalculate when stats change permanently.

### Temporary Stat Mods
Temp mods (e.g. a single-turn effect, a scene-level buff/debuff) affect the **d20 pass/fail roll only**. The face map does not change. The stat's presence in the pool stays the same — only its chance of passing when rolled shifts.

### Permanent Stat Changes
When a stat changes permanently (e.g. transformation completing, addiction stage crossing a threshold, a consequence that writes a lasting stat change to the card) the face map **recalculates immediately** to reflect the new values. The full T1 setup procedure reruns on the updated stat block. The new face map applies from the next turn onward.

> This means a pink pill character mid-transformation will have their face map update when the transformation permanently alters their stat block, correctly reflecting who they are becoming rather than who they were at session start.

---

## 6. Notes for Implementation

- The d12 is always exactly 12 faces regardless of stat values because ranking is relative, not absolute.
- A stat with mod -4 still gets faces (rank 6 = 3 faces). Weaknesses are never removed from the pool.
- The only dynamic element is whether any Step 3 shared pairs exist. Most characters will have none.
- This mechanic is stat-selection only. The d20 pass/fail and flavor block logic are unchanged from the main spec.
- Recalculation is triggered by permanent stat writes to state, not by temp mod application. The proxy should flag the difference at the point of writing.

---

*Fragment System Design Addendum — Cody Stever*
*D12 Stat Weighting & Tiebreaker Rules*
