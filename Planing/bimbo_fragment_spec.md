# Bimbo Fragment Table System — Design Spec

## Overview

The bimbo pill currently injects stage behavior text directly to the model, telling it *how to perform* the effect. This is inconsistent with XCW's core philosophy — the model should react to injected state, not be scripted. This spec defines a replacement system using the existing fragment table infrastructure combined with two new mechanisms: **baseline tracking** and **short-circuit logic**.

---

## Core Design Goals

- The model witnesses a character's *voice devolving* over time, not being told "she is ditzy now"
- A genius going bimbo reads completely differently from someone already dim
- The delta between who they were and who they're becoming is the flavor
- No new table infrastructure needed — bimbo stage applies a band offset at lookup time, not to the raw stat

---

## Mechanism 1 — Baseline INT Tracking

At pill intake, store the character's current INT as `state.bimbo_baseline_int`.

The baseline is used silently each turn to calculate delta — the gap between who the character was and who they're becoming. It is not injected into state directly. It drives the lucid moment system (see §Lucid Moment System below).

Delta tiers for reference:

| Gap | Delta Tier | Voice Character |
|-----|-----------|-----------------|
| 0-1 | `none` | Already there. No devolve arc. Skip to settled voice. |
| 2-3 | `small` | Slight slip. Character notices something's off but can't name it. |
| 4-5 | `medium` | Noticeable degradation. Character insists they're fine. Defensive. |
| 6+  | `large` | Sharp contrast. Visible collapse. The character *was* someone. |

---

## Mechanism 2 — Short-Circuit Logic

If `state.bimbo_baseline_int` is at or below band threshold `low` at pill intake, skip the devolve arc entirely. The character was already there. Pull from settled/natural bimbo voice instead of transition voice.

This prevents the awkward situation where a low-INT character appears to "devolve" from a place they never occupied.

Threshold: `INT <= 4` (maps to `low` band) triggers short-circuit.

---

## Band Offset Integration

Bimbo stage applies a band offset at fragment lookup time — not to the raw stat value. Whatever band INT would normally resolve to, bimbo stage shifts it downward by stage count. The stat itself is unchanged.

| Stage | Band Offset |
|-------|-------------|
| 1 | -1 band |
| 2 | -2 bands |
| 3 | -3 bands |
| 4 | -4 bands |
| 5 | -5 bands (floor at `vlow`) |

This ensures the offset always crosses band boundaries regardless of where in the band the raw stat sits.

---

## Lucid Moment System

The lucid moment is a brief contrast tag injected for one turn only when the character surfaces awareness of what is happening to them. It is not persistent state. It has no fixed trigger. It fires randomly based on two independent rolls — both must pass.

The goal is organic, unpredictable surfacing of self-awareness during the devolve arc. It should never feel like a scheduled event.

### Roll 1 — d100 vs Arousal

Roll d100. The threshold is derived from current arousal level — higher arousal makes passing harder.

- Higher arousal = higher threshold = less likely to pass
- Baseline INT scales the probability: higher baseline INT shifts the threshold more favorable
- Exact threshold curve to be tuned during implementation

### Roll 2 — CHA Check vs DC

Roll current CHA against DC: `6 + session_failed_arousal_gates`

- Uses current CHA (not baseline — CHA redirects under bimbo rather than tanking, so it stays a meaningful stat)
- DC rises as the session progresses and failed gates accumulate
- Both rolls must pass for the lucid moment to fire

### Arc Self-Taper

As bimbo stages advance, effective INT drops. The character's diminishing capacity naturally reduces the likelihood of Roll 1 clearing. No explicit stage gate needed — the arc tapers on its own. By late stages, both rolls clearing simultaneously becomes rare enough to feel like it's gone.

### On Successful Roll

Inject the contrast tag for that turn only. Gone the following turn. The tag reflects delta tier — the larger the gap between baseline and current INT, the sharper the contrast language.

The model is not told when or how to use it. It is available context. If the scene calls for it, it surfaces. If not, it doesn't.

### Delta Tier Contrast Tags (single-turn injection)

**`small` (gap 2-3)**
- "thoughts a little lighter than usual"
- "something slipping before fully forming"
- "simpler word came out than intended"
- "easier not to finish the complicated ones"
- "not noticing the gaps yet"

**`medium` (gap 4-5)**
- "I'm not faking anything"
- "I'm fine, seriously"
- "thoughts keep drifting somewhere easier"
- "had a point somewhere, it's just gone"
- "not struggling, nothing to struggle against"
- "complicated things take effort and trail off"

**`large` (gap 6+)**
- "used to be able to hold this thought"
- "thinky-ness going somewhere pink and fuzzy"
- "brain getting all gooey and silly"
- "who needs smarts when you just wanna have fun"
- "thinking is like sooo overrated"
- "sorry for the drool, where was I"
- "hard things feel far away and unimportant"

---

## Short-Circuit Voice (Already There)

When `INT <= 4` at intake and `bimbo_stage >= 1`, pull from settled bimbo voice. These replace the devolve arc entirely — no journey, just state. Lucid moment system does not fire in short-circuit path.

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

Recommend: bimbo_stage shifts CHA lookup toward `avg` from above (flattening commanding presence into crowd-pleasing presence) rather than simply penalizing it. This needs separate handling from the INT band offset.

CHA authoring note from flavor reference: *"bimbo | INT | CHA — cognition drain + presentation fixation"* — CHA isn't diminished, it's redirected.

---

## WIS Axis Notes

WIS under bimbo represents the disappearance of self-protective instinct. Stages 1-2: gut still whispering but character not listening. Stages 3-5: gut has gone quiet, or is pointing the wrong direction.

No separate WIS offset needed — INT band offset carries most of the load. WIS fragments at lower bands already capture the "instincts redirected" voice adequately.

---

## Implementation Checklist

- [ ] Store `bimbo_baseline_int` at pill intake in state
- [ ] Apply band offset at fragment lookup time (not to raw stat)
- [ ] Add short-circuit check: `INT <= 4` at intake disables lucid moment system
- [ ] Add delta tier calculation function (baseline minus current effective INT)
- [ ] Implement dual-roll lucid moment system (d100 vs arousal + CHA vs DC)
- [ ] Scale Roll 1 probability by baseline INT
- [ ] Author delta tier contrast tag banks (small / medium / large)
- [ ] Author settled voice fragment bank for short-circuit path
- [ ] Handle CHA redirect logic separately from INT band offset
- [ ] Remove stage behavior text injection (or keep as internal dev notes only)
- [ ] Tune arousal threshold curve for Roll 1

---

## What This Does NOT Require

- New fragment tables per bimbo stage
- Gender-specific bimbo tables (existing gendered INT tables handle this)
- Changes to the fragment table structure itself
- Separate bimbo band entries
- Persistent state fields for lucid moment contrast tags

The system rides entirely on existing infrastructure plus: baseline tracking, band offset at lookup, and a dual-roll lucid moment system.
