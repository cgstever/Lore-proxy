# X-Change World
## Effect Stacking Rules — Design Document
### Status: Locked. Ready for implementation.

---

## 1. Core Rule

When multiple effects are active simultaneously, **both effect tables contribute to the merged stat line**. Same merge logic as a single active effect — both are contributors to the same stat line output, assembled in order. This applies to all effect table combinations without exception.

---

## 2. How Multiple Effects Become Active

Effects stack when a pill carries more than one effect. The primary example:

**Pink pill** = transformation effect + breeder effect simultaneously
- Transformation fires from turn 1 as the body begins changing
- Breeder activates progressively as female anatomy develops
- Both are active and both contribute once breeder has activated

Other combinations will follow the same rule as additional effects and pills are implemented.

---

## 3. Merge Behavior

The stat line merge works identically whether one or two effects are active:

- d12 selects the stat for this turn
- All active effect tables that have an entry for that stat contribute
- Entries are assembled into a single merged stat line output
- Output stays at 6 stat lines regardless of how many effects are active

**Single effect active:**
`Generic stat line + Effect A entry → merged stat line`

**Two effects active:**
`Generic stat line + Effect A entry + Effect B entry → merged stat line`

The merge does not balloon output. The stat line is still one line — it just has more contributors assembled into it.

---

## 4. Birth Anatomy Axis

Each effect table has entries per birth anatomy (born male / born female). When two effects are active both pull from the correct birth anatomy entry. Birth anatomy is locked at T1 and never changes — current anatomy may differ but birth anatomy is always the correct axis for table selection.

---

## 5. Assembly Order

When multiple effect entries contribute to the same stat line, they assemble in effect priority order. Priority order is determined by which effect is primary vs secondary for the active pill. For the pink pill:

1. Transformation entry (primary — the pill's core physical action)
2. Breeder entry (secondary — activates as transformation progresses)

Assembly order for other pill combinations to be defined when those pills are implemented.

---

## 6. Interaction With Side Effect Tables

Side effect table stacking behavior when multiple effects are active is a separate question and is documented as WIP in the side effects planning document. This document covers effect tables only.

---

*X-Change World Effect Stacking Rules — Cody Stever*
*v1.0 — Locked*
