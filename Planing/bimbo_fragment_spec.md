# Bimbo Fragment Table System — Design Spec

## Overview

The bimbo pill currently injects stage behavior text directly to the model, telling it *how to perform* the effect. This is inconsistent with XCW's core philosophy — the model should react to injected state, not be scripted. This spec defines a replacement system using the existing fragment table infrastructure combined with two new mechanisms: **baseline tracking** and **short-circuit logic**.

---

## Core Design Goals

- The model witnesses a character's *voice devolving* over time, not being told "she is ditzy now"
- A genius going bimbo reads completely differently from someone already dim
- The delta between who they were and who they're becoming is the flavor
- No new table infrastructure needed — bimbo stage acts as a stat penalty that slides the existing band lookup downward

---

## Mechanism 1 — Baseline INT Tracking

At pill intake, store the character's current INT as `state.bimbo_baseline_int`.

Use the gap between baseline and current INT to determine **delta tier**:

| Gap | Delta Tier | Voice Character |
|-----|-----------|-----------------|
| 0-1 | `none` | Already there. No devolve arc. Skip to settled voice. |
| 2-3 | `small` | Slight slip. Character notices something's off but can't name it. |
| 4-5 | `medium` | Noticeable degradation. Character insists they're fine. Defensive. |
| 6+  | `large` | Sharp contrast. Visible collapse. The character *was* someone. |

Delta tier is used to color overlay fragments (see §Overlay System below).

---

## Mechanism 2 — Short-Circuit Logic

If `state.bimbo_baseline_int` is at or below band threshold `low` at pill intake, skip the devolve arc entirely. The character was already there. Pull from settled/natural bimbo voice instead of transition voice.

This prevents the awkward situation where a low-INT character appears to "devolve" from a place they never occupied.

Threshold: `INT <= 4` (maps to `low` band) triggers short-circuit.

---

## Stat Penalty Integration

Bimbo stage applies INT penalty as defined in existing stage data:

| Stage | INT Penalty | Effective Band Shift |
|-------|-------------|---------------------|
| 1 | -1 | One band down |
| 2 | -2 | Two bands down |
| 3 | -3 | Three bands down |
| 4 | -4 | Four bands down |
| 5 | -5 | Five bands down (floor at `vlow`) |

The fragment table system already handles band lookup from stat value. No new tables required — bimbo stage rides the existing INT stat penalty mechanic.

---

## Overlay System

The stat penalty handles the *destination* (what band fires). The overlay handles the *journey voice* — a short injected line that colors the current fragment with delta-tier appropriate language.

Overlay fires only when:
- `bimbo_stage >= 1`
- `delta_tier != none` (short-circuit not triggered)
- Overlays are 3-6 words, prepended to the INT fragment line

### Delta Tier Overlay Banks

**`small` (gap 2-3) — slight drift, character unaware**
- "thoughts a little lighter than usual"
- "something slipping before fully forming"
- "simpler word came out than intended"
- "easier not to finish the complicated ones"
- "not noticing the gaps yet"

**`medium` (gap 4-5) — noticeable, character defensive**
- "I'm not faking anything"
- "I'm fine, seriously"
- "thoughts keep drifting somewhere easier"
- "had a point somewhere, it's just gone"
- "not struggling, nothing to struggle against"
- "complicated things take effort and trail off"

**`large` (gap 6+) — sharp collapse, was someone**
- "used to be able to hold this thought"
- "thinky-ness going somewhere pink and fuzzy"
- "brain getting all gooey and silly"
- "who needs smarts when you just wanna have fun"
- "thinking is like sooo overrated"
- "sorry for the drool, where was I"
- "hard things feel far away and unimportant"

---

## Short-Circuit Voice (Already There)

When `INT <= 4` at intake and `bimbo_stage >= 1`, pull from settled bimbo voice. These replace the devolve overlays entirely — no journey, just state.

**Settled voice fragments (INT low/vlow bands, bimbo active):**
- "only one thing on her mind"
- "cock-focused, attention-seeking, warm"
- "depth never occurred to her to look for"
- "thoughts move easily between pleasure and whoever is in front of her"
- "totes consent"
- "not that it matters at this point"
- "brainless and unbothered"

---

## Source Material — Card Flavor by Stage

The following card text maps to stage progression. Use as authoring reference for fragment voice, not injected directly.

### Stage 0→1 (First signs, unaware)
> *"don't feel stupid at all? That was a fucking waste. Whatever, might as well get off..."* — OG-096  
> *"I just get really, mmmmm, horny"* — OG-076  

Character: dismissive of the effect, unaware it has started. Normal voice with first soft drift.

### Stage 1→2 (Defending, unaware of defense)
> *"I'm SO not faking. I'm tired of everyone telling me I'm faking."* — OG-076  
> *"thoughts keep drifting toward how they look, who's watching, what feels good"*  
> *"complex topics take effort and tend to trail off unfinished"*  

Character: insists nothing has changed. The defense IS the tell.

### Stage 2→3 (Loops, fixation, losing thread)
> *"Sorry for the drool. I do that when I talk about cock... mmmmm, cock... Where was I?"* — OG-076  
> *"mid-sentence derailments are noticeable"*  
> *"knew they had a point somewhere — it's just gone"*  
> *"describing themselves in simpler, glossier terms without embarrassment"*  

Character: thought loops, loses the thread, bright affect. No distress.

### Stage 3→4 (Simple, happy, no resistance)
> *"Hard things feel far away and unimportant. Short sentences. Easy feelings."*  
> *"fixated on attention, how they look, what feels good. They're happy."*  
> *"Reasoning is simple and self-consistent within that narrow frame."*  
> *"OMG, my titties are totes soft. I bet any guy would love to get his dick..."* — OG-099  
> *"I can't think fast cept when I wanna get cute or satisfy dick."* — OG-100  

Character: no struggle remaining. Simple and content. Happy within the narrow frame.

### Stage 5 (Permanent — settled identity)
> *"This is just who they are. Warm, bright, cock-focused, attention-seeking."*  
> *"Depth is not missing — it never occurred to them to look for it."*  
> *"I totes consent!"* — OG-077  
> *"Not that it matters at this point"*  
> *"I love the feeling of being dominated by a strong man as he fucks me senseless."* — OG-240  
> *"Brainless bimbo with only one thing on her mind: Cock."* — OG-240  
> *"I finally took my Bimbo Plus and made it permanent."* — OG-097  

Character: no memory of another self. This is native ground.

---

## CHA Axis Notes

CHA under bimbo doesn't devolve — it *redirects*. High CHA bimbo characters become performatively attention-seeking rather than commanding. The band shift for CHA under bimbo should push toward exhibitionist/display language rather than downward in the same way INT does.

Recommend: bimbo_stage shifts CHA lookup toward `avg` from above (flattening commanding presence into crowd-pleasing presence) rather than simply penalizing it. This needs separate handling from the INT penalty.

CHA authoring note from flavor reference: *"bimbo | INT | CHA — cognition drain + presentation fixation"* — CHA isn't diminished, it's redirected.

---

## WIS Axis Notes

WIS under bimbo represents the disappearance of self-protective instinct. Stages 1-2: gut still whispering but character not listening. Stages 3-5: gut has gone quiet, or is pointing the wrong direction.

No separate WIS penalty needed — INT penalty carries most of the load. WIS fragments at lower bands already capture the "instincts redirected" voice adequately.

---

## Implementation Checklist

- [ ] Store `bimbo_baseline_int` at pill intake in state
- [ ] Add delta tier calculation function comparing baseline to current INT
- [ ] Add short-circuit check: `INT <= 4` at intake skips devolve overlays
- [ ] Add delta tier overlay bank to bimbo data structure
- [ ] Wire overlay injection to fire on bimbo stage > 0 when delta tier != none
- [ ] Author settled voice fragment bank for short-circuit path
- [ ] Handle CHA redirect logic separately from INT penalty
- [ ] Remove stage behavior text injection (or keep as internal dev notes only)

---

## What This Does NOT Require

- New fragment tables per bimbo stage
- Gender-specific bimbo tables (existing gendered INT tables handle this)
- Changes to the fragment table structure itself
- Separate bimbo band entries

The system rides entirely on existing infrastructure plus two small additions: baseline tracking and a delta-tier overlay bank.

