# Masculinity Band Text Architecture — Design Doc v3

Status: Active design — XCL analysis complete, delta redesign in progress
Last updated: March 2026

---

## What This System Does

On turns where masculinity shifts, inject identity text into the prompt that tells
the model how the character FEELS in their body. The text is layered: pill-specific
base, effect overlays, and body-mod-aware dynamic text. All filtered through the
current masculinity band.

The identity text STACKS with the existing portrait/fragment system (not replace).
Portrait lines describe the stat-mechanical state. Identity text describes the
character's relationship to their changing body. Both run on shift turns.

Future consideration: shrink portrait lines to make room as more systems come online.

---

## Decisions Made

- Full set of band text per pill (pink, blue, purple). Green/red later.
- All active effects fire their overlay lines. No cap.
- Body mod text is dynamic from actual body state values, not archetypes.
- Fires only on turns where masculinity actually changed.
- Stacks alongside portraits (both inject).
- Born_female bands mirror (low masc = strongly feminine = comfort zone).
- 5 bands (informed by XCL), not 4.
- Delta mechanics use d20 gate at band boundaries (not flat per-event stacking).
- No-pill masculinity: frozen (no drift).

---

## XCL Analysis — Key Findings

### XCL Masculinity Bands (from gain/lose flavor text)

XCL uses a 0-100 scale with **5 functional bands**, each split by a reluctance axis:

| XCL Band  | Range  | Loss Flavor (born_male)                          | Gain Flavor (born_male)                    |
|-----------|--------|--------------------------------------------------|--------------------------------------------|
| Band E    | 81-100 | "masculinity slipping away", "sense of manhood eroding" | "feel like a man again", "masculine energy" |
| Band D    | 61-80  | "losing more of your masculinity", "less like a man"    | "mostly a guy again", "male confidence"    |
| Band C    | 41-60  | "can't help but feel girlier", "notably feminine"       | "more like your male self"                 |
| Band B    | 21-40  | "becoming even more of a girl", "quite a girl"          | "some masculinity returning"               |
| Band A    | 0-20   | "practically all girl", "barely any masculinity"        | "femininity fading", "less like a girl"    |

### XCL Reluctance System

Reluctance is a 0-10 scale (inverse of acceptance). It adds a sub-axis within each band:

| Reluctance | Label                       | Penalty Modifier |
|------------|-----------------------------|-----------------|
| 0          | fully embrace               | full penalty    |
| 1          | feel excited about          | full penalty    |
| 2          | feel a bit excited about    | full penalty    |
| 3          | feel comfortable with       | full penalty    |
| 4          | feel mostly comfortable with| full penalty    |
| 5          | are ok with                 | full penalty    |
| 6          | are mostly ok with          | full penalty    |
| 7          | feel slightly nervous about | 70% penalty     |
| 8          | feel nervous about          | 50% penalty     |
| 9          | feel extremely nervous about| 50% penalty     |
| 10         | are resistant towards       | 50% penalty     |

**Reluctance derivation from masculinity:**
- Initial: `typical_reluctance = min(9, ceil(masc / 10))`
- Dropdown range: `begin = max(1, min(7, ceil((masc - 30) / 10)))`, 4 options offered
- Meaning: masc 95 → reluctance ~10 (resistant), masc 20 → reluctance ~2 (excited)
- Reluctance shifts slowly: -1 on wins, +10 on shock events (spikes then decays)

**Key XCL insight:** High reluctance PROTECTS against loss (halves penalties).
A masculine character resists harder, losing less per event. A feminized character
with low reluctance takes full hits. This creates the "slow burn then avalanche" curve.

### XCL Gain/Loss Text Structure

XCL organizes flavor text on TWO axes simultaneously:

```
gain_text[masculinity_band][reluctance_threshold]
```

For loss (gain < 0), reluctance thresholds per band:
- Band E (>80): splits at rel>8, rel>5, rel<=5
- Band D (60-80): splits at rel>7, rel<=7
- Band C (40-60): splits at rel>6, rel<=6
- Band B (20-40): splits at rel>5, rel<=5
- Band A (<=20): splits at rel>4, rel<=4

Higher reluctance = more distress/resistance language ("slipping away", "horror").
Lower reluctance = more acceptance language ("feels different", "softer", neutral).

### XCL Delta Triggers

Masculinity changes in XCL happen via:
- Scene-specific `$gain` variable set before calling `display:"gain masculinity"`
- Typical values: -1 (small loss), -5 to -10 (scene penalties), +1 to +5 (gains)
- Minigame masculinity level: tracked per-encounter, floors at max:40-60
- Satisfaction-based gains: satisfaction < 4 → +1-2, < 8 → +3-4, else → +5
- Caught/humiliation: -10 with floor at max:40
- Sexual act penalties: -5 per escalation step, floor at max:60

---

## Revised Band Structure (11 bands, 0-10)

Directly mapped to XCL's reluctance labels. Each 10-point range of masculinity = one band.
Uses XCL formula: `band = min(10, ceil(masc / 10))`, with masc=0 → band 0.

```python
MASCULINITY_BAND_NAMES = {
    10: 'resistant_towards',       # 91-100
    9:  'extremely_nervous',       # 81-90
    8:  'nervous',                 # 71-80
    7:  'slightly_nervous',        # 61-70
    6:  'mostly_ok_with',          # 51-60
    5:  'ok_with',                 # 41-50
    4:  'mostly_comfortable',      # 31-40
    3:  'comfortable',             # 21-30
    2:  'bit_excited',             # 11-20
    1:  'excited',                 # 1-10
    0:  'fully_embrace',           # 0
}
```

**Born_male interpretation (pink pill = losing masculinity):**
- Band 10 (91-100): "This is NOT happening." Maximum denial, active resistance.
- Band 9 (81-90): "I can handle this." Wall of resistance, white-knuckle grip.
- Band 8 (71-80): "I can't ignore this anymore." Cracks forming, can't deny changes.
- Band 7 (61-70): "This is getting harder to fight." Discomfort growing, facade slipping.
- Band 6 (51-60): "Maybe fighting this is pointless." Ambivalent, tired of resisting.
- Band 5 (41-50): "This is just how it is now." Resigned middle ground.
- Band 4 (31-40): "The old me feels far away." Familiarity with new self growing.
- Band 3 (21-30): "This feels normal." New normal, resistance feels silly.
- Band 2 (11-20): "I like who I'm becoming." Acceptance, this body works.
- Band 1 (1-10): "This is who I am." Embracing, this feels right.
- Band 0 (0): "There was never anything else." Transformation complete.

**Born_female inversion:** band = 10 - band. Low masc (band 0) → lookup band 10 (comfort).
Center (band 5) stays at 5. High masc (band 10) → lookup band 0 (fully transformed).

**Born_female interpretation (pink pill = forced feminization of already-female):**
- Band 4 (inverted to 0 lookup): chemically exaggerated, body pushed beyond her norm
- Band 0 (inverted to 4 lookup): this is her comfort zone, nothing alien

---

## Revised Delta Mechanics — D20 Gate System

### Philosophy

Replacing flat per-event stacking with a **gated resistance model**.

Every sex/orgasm event triggers a d20 roll against the character's resistance.
Pass = event BLOCKED (no masculinity change). Fail = full delta applies.
The DC escalates within each session, creating a "wearing down" pressure
where early events are resisted but the character breaks later in the session.

### Gate Mechanic

```
On sex/orgasm event:
  1. Determine base_delta from pill + role (same table as before)
  2. Roll d20 + resistance_mod vs current DC
  3. If PASS: delta BLOCKED (0 applied). DC += 1 (pressure builds slowly)
  4. If FAIL: full delta applies. DC += 2 (pressure builds faster)
  5. No session cap — gate is sole speed control
  6. Log result

DC resets to 5 each session. Character "walks in fresh" but their
lower masculinity persists cross-session.
```

### Resistance Modifier

Snapshotted at session start from DOM + WIS (straight sum, no halving):

```python
def _snapshot_masculinity_resist(state):
    dom_mod = _mod(state, 'DOM')  # using base + perm, no temp
    wis_mod = _mod(state, 'WIS')
    resist = dom_mod + wis_mod
    state['_masc_resist_mod'] = resist  # fixed for session
```

Rationale: DOM represents the character's will to maintain control/identity.
WIS represents their insight into what's happening. Both contribute equally.
The snapshot means stats eroding mid-session from gate consequences don't
spiral the resistance down — it recalculates next session instead.

### DC Escalation (Dynamic, Per-Session)

DC starts at 5 each session and climbs with every gated event:
- **Pass (resist):** DC += 1 — resisting still wears you down
- **Fail (hit lands):** DC += 2 — failing accelerates the erosion

This creates a per-session narrative arc: character resists early events,
pressure mounts, eventually the dam breaks. Next session the DC resets
but the masculinity loss persists.

**Within-session example (mod +2, masc 70):**
```
Turn  1: d20+2=13 vs DC 5  RESIST → DC→6
Turn  2: d20+2= 9 vs DC 6  RESIST → DC→7
Turn  4: d20+2=18 vs DC 7  RESIST → DC→8
Turn  7: d20+2=20 vs DC 8  RESIST → DC→9
Turn 11: d20+2=18 vs DC 9  RESIST → DC→10
Turn 12: d20+2= 9 vs DC10  FAIL delta=-3 → masc=67, DC→12
Session end: lost 3 points, DC was 12 at close
```

**Pacing across character archetypes (sessions to reach milestones):**

| Character                  | Mod | →masc≤50 | →masc≤10 |
|----------------------------|-----|----------|----------|
| DOM 20 + WIS 18 (godlike)  | +7  | ~100     | ~190     |
| DOM 16 + WIS 14 (warrior)  | +5  | ~34      | ~66      |
| DOM 16 + WIS 12 (strong)   | +4  | ~23      | ~44      |
| DOM 12 + WIS 12 (average)  | +2  | ~13      | ~24      |
| DOM 10 + WIS 10 (baseline) | +0  | ~9       | ~17      |
| DOM 8 + WIS 8 (low stats)  | -2  | ~7       | ~13      |
| DOM 6 + WIS 6 (submissive) | -4  | ~6       | ~11      |

Stats drive the pace: a dominant warrior takes ~6x longer than a submissive
character to reach the same milestone. The DC escalation creates the
within-session tension, while the stat modifier controls the macro pace.

### Delta Table (unchanged base values)

| Pill   | Sex (top) | Sex (bottom) | No sex |
|--------|-----------|--------------|--------|
| Pink   | n/a       | -3           | -1*    |
| Blue   | +3        | -1           | 0      |
| Purple | +2        | -1           | 0      |

*Pink no-sex erosion: fires once per session (first turn), also gated by d20 vs DC.

**Role detection:**
- Pink: always bottoming (receiving)
- Blue: topping unless `creampie_vaginal` event (then bottoming)
- Purple: topping (has dick) unless `creampie_vaginal` event

### Session Cap

±8 per session, unchanged. The gate system means fewer deltas actually land,
so the effective change per session is much smaller than the cap suggests.
Typical session with 2-3 sex events under pink pill at band 4:
- 2-3 rolls vs DC 8, ~80% resist each → expect 0-1 actual hits of -3.
- Net session: 0 to -3. Slow burn.

At band 2 with same events:
- 2-3 rolls vs DC 14, ~40% resist → expect 1-2 hits of -3.
- Net session: -3 to -6. Accelerating.

---

## Text Layers

### Layer 1: Pill Base (6 lines per turn — one per stat)

Each pill's transformation creates a fundamentally different identity experience.

**Pink pill** — Male-to-female transformation.
  Body: curves appearing, sensitivity increasing, strength fading, softness replacing hardness.
  Identity arc: "This body is wrong" (Band 4) → "This body is mine" (Band 0).
  Born_male perspective: losing what defined him.
  Born_female perspective: the mirror of her born body, but chemically forced.

**Blue pill** — Female-to-male transformation.
  Body: hardening, broadening, blunted sensitivity, muscle density, body hair.
  Identity arc (born_female): "This is not me" (Band 4/mirrored) → "I don't remember softness" (Band 0/mirrored).
  Born_male perspective: returning toward something familiar but not the same.

**Purple pill** — Dual genitalia, intersex state.
  Body: both sets of genitalia, hormonal confusion, the tension of being neither fully one thing.
  Identity arc: the unique experience of occupying a body that doesn't map to either binary.
  Neither loss nor gain — a third state with its own identity pressure.

Data structure:
```python
_MASC_PILL_TEXT = {
    'pink': {
        'born_male': {
            4: {  # Band 4: Entrenched (81-100)
                'CON': "...",
                'INT': "...",
                'WIS': "...",
                'CHA': "...",
                'DOM': "...",
                'SUB': "...",
            },
            3: { ... },  # Band 3: Contested (61-80)
            2: { ... },  # Band 2: Eroding (41-60)
            1: { ... },  # Band 1: Yielding (21-40)
            0: { ... },  # Band 0: Rewritten (0-20)
        },
        'born_female': { ... },
    },
    'blue': { ... },
    'purple': { ... },
}
```

Total: 3 pills x 2 origins x 11 bands x 6 stats = **396 lines**

---

### Layer 2: Effect Overlays (variable lines per turn)

Active effects append their own identity-colored lines. Each effect "owns" certain
stats where it has the strongest identity impact. On shift turns, the effect adds
its line for those stats.

**Effect ownership map:**

| Effect            | Stats Owned | Identity Theme                                     |
|-------------------|-------------|-----------------------------------------------------|
| breeder           | SUB, CON    | Compulsion, body preparing, breeding instinct       |
| breeder_resist    | INT, WIS    | Fighting the compulsion, mental resistance          |
| breeder_addiction | SUB, WIS    | Surrender to the compulsion, craving normalization  |
| bimbo             | INT, CHA    | Thought simplification, appearance obsession        |
| submissive        | DOM, SUB    | Power erosion, yielding becoming natural            |
| compliant         | WIS, DOM    | Decision-making override, obedience as reflex       |
| denial            | CON, WIS    | Physical frustration, willpower vs body             |
| bull              | DOM, CON    | Aggression, physical dominance, territorial         |
| psyche            | INT, WIS    | Mental architecture changing, thought patterns      |

Each effect line is band-aware: breeder at Band 4 = fighting the compulsion with
masculine horror. Breeder at Band 0 = the compulsion feels natural, wanted.

Data structure:
```python
_MASC_EFFECT_TEXT = {
    'breeder': {
        'born_male': {
            4: {  # Band 4
                'SUB': "...",
                'CON': "...",
            },
            # ... bands 3, 2, 1, 0
        },
        'born_female': { ... },
    },
    # ... other effects
}
```

Total: 9 effects x 2 origins x 11 bands x 2 stats = **~396 lines**
(breeder + companions count as 3 separate effects)

---

### Layer 3: Body Mod Dynamic Text

Reads actual body values from `state['card_body']` and `state['resolved_body']`
to generate text referencing specific physical changes. Not a static table —
assembled from templates and body data.

**Input data available:**
- `card_body['height_str']` — e.g. "5'4", "5ft10"
- `card_body['weight']` — e.g. "120lbs"
- `card_body['bust']` — e.g. "D-cup", "flat"
- `card_body['build_keywords']` — e.g. ["curvy", "soft"]
- `card_body['modifier']` — the body modifier applied by transformation
- `resolved_body` — confirmed post-transformation body (if available)

**Template categories:**

Height awareness:
- If transformed height < original: references the world being taller, reaching
- If transformed height > original: references everything being closer

Build awareness:
- Muscular → soft: references lost muscle mass, new softness
- Slim → curvy: references new curves, weight distribution
- Athletic → petite: references the shrinking, the compactness

Bust awareness:
- Flat → busty: references the weight, the movement, the attention
- Already busty → more: references the exaggeration
- Bust removed: references the absence, the flatness

These get appended as 1-2 sentences after the pill CON and CHA lines.

**Implementation:** A function `_body_mod_text(state, band, origin)` that reads
body data and returns a dict of {stat: extra_sentence} to append.

---

## Injection Budget Analysis

Current MAX_INJECT = 4000 chars.

Typical non-shift turn:
- Header lines (name, sex, pill, effects, rules): ~400-600 chars
- Portrait fragments (6 lines): ~600-800 chars
- System rules: ~200-300 chars
- **Total: ~1200-1700 chars** — well within budget

Masculinity shift turn (adds to above):
- Identity label: ~60 chars
- Pill base (6 lines x ~130 chars): ~780 chars
- Effect overlays (2-6 lines x ~110 chars): ~220-660 chars
- Body mod (1-2 lines x ~100 chars): ~100-200 chars
- **Identity total: ~1160-1700 chars**

**Combined on shift turn: ~2400-3400 chars** — fits within 4000 cap.

Heavy case (3+ effects active, shift turn): could approach 3500-3800 chars.
Still fits, but tight. This is why the future plan to shrink portrait lines
matters — gives more room as the system grows.

---

## Composition Logic (Pseudocode)

```python
def _get_identity_text(state):
    if not state.get('_masc_shifted_this_turn'):
        return []

    masc  = state['masculinity']
    band  = _masculinity_band(masc)
    origin = 'born_female' if state['_sex_baseline'] == 'female' else 'born_male'
    pill  = state.get('active_pill')

    # For born_female, invert band (low masc = comfort zone)
    lookup_band = (10 - band) if origin == 'born_female' else band

    lines = []

    # Layer 1: Pill base
    pill_text = _MASC_PILL_TEXT.get(pill, {}).get(origin, {}).get(lookup_band, {})
    for stat in STAT_ASSEMBLY_ORDER:
        line = pill_text.get(stat, '')
        if line:
            lines.append(line)

    # Layer 2: Effect overlays
    effects = state.get('active_effects', [])
    for eff in effects:
        eff_text = _MASC_EFFECT_TEXT.get(eff, {}).get(origin, {}).get(lookup_band, {})
        for stat in STAT_ASSEMBLY_ORDER:
            line = eff_text.get(stat, '')
            if line:
                lines.append(line)

    # Layer 3: Body mod awareness
    body_extra = _body_mod_text(state, lookup_band, origin)
    for stat in STAT_ASSEMBLY_ORDER:
        extra = body_extra.get(stat, '')
        if extra:
            lines.append(extra)

    return lines
```

---

## Delta Gate Logic (Pseudocode)

```python
def _gate_masculinity_delta(state, base_delta):
    """Roll d20 + resistance vs DC. Returns actual delta to apply."""
    if base_delta == 0:
        return 0

    masc = state.get('masculinity', 50)
    band = _masculinity_band(masc)

    # DC escalates as masculinity drops (for loss) or rises (for gain)
    if base_delta < 0:  # losing masculinity
        dc_table = {4: 8, 3: 11, 2: 14, 1: 17, 0: 19}
    else:  # gaining masculinity (recovery)
        # Inverted: harder to recover at high masc (diminishing returns)
        dc_table = {4: 19, 3: 17, 2: 14, 1: 11, 0: 8}

    dc = dc_table.get(band, 14)

    # Resistance mod: DOM primary + WIS/2
    res_mod = _masculinity_resistance_mod(state)

    roll = random.randint(1, 20)
    total = roll + res_mod

    if total >= dc:
        # RESIST: halve the delta (round toward zero)
        actual = base_delta // 2  # -3 → -1, +3 → +1
        resisted = True
    else:
        # FAIL: full delta
        actual = base_delta
        resisted = False

    # Log for debug
    _notes_log(state, f"MASC GATE: d20({roll})+{res_mod}={total} vs DC{dc} "
               f"{'RESIST' if resisted else 'FAIL'} "
               f"delta {base_delta}→{actual}")

    return actual
```

---

## Implementation Order

**Phase 1 — Architecture (DONE)**
  [x] State key, band calculation, delta logic
  [x] Generic band text (placeholder — will be replaced)
  [x] D12 integration
  [x] XCL analysis and data extraction

**Phase 2 — Delta Redesign (NEXT)**
  [ ] Update to 5 bands (0-4 instead of 0-3)
  [ ] Implement d20 gate in _gate_masculinity_delta()
  [ ] Add _masculinity_resistance_mod()
  [ ] Update DC table
  [ ] Wire gate into process_events delta application
  [ ] Update debug output for gate rolls
  [ ] Test: verify resist rates at each band match design targets

**Phase 3 — Pink Pill Text (prototype)**
  [ ] Write 30 lines: pink pill, born_male, all 5 bands, all 6 stats
  [ ] Review tone/style with user
  [ ] Write 30 lines: pink pill, born_female
  [ ] Replace generic _MASC_BAND_TEXT with _MASC_PILL_TEXT structure

**Phase 4 — Blue + Purple Pill Text**
  [ ] 60 lines: blue pill (both origins)
  [ ] 60 lines: purple pill (both origins)

**Phase 5 — Effect Overlays**
  [ ] Start with breeder (most developed effect)
  [ ] Pattern from breeder → submissive, compliant, bimbo, denial, bull, psyche
  [ ] breeder_resist, breeder_addiction as companion overlays

**Phase 6 — Body Mod Dynamic Text**
  [ ] Build _body_mod_text() function
  [ ] Template library for height/build/bust awareness
  [ ] Integration with pill CON/CHA lines

**Phase 7 — Portrait Reduction**
  [ ] Audit current portrait line lengths
  [ ] Design shorter portrait format to make room for identity system
  [ ] Migrate existing fragments to compact format

---

## Line Count Summary

| Component           | Lines to Write |
|---------------------|---------------|
| Pill base text      | 396           |
| Effect overlays     | ~396          |
| Body mod templates  | ~30-40        |
| **Total**           | **~820-830**  |

This is a significant writing effort. Each line needs to be evocative,
pill-specific, band-aware, and gender-aware. Quality matters more than speed.

---

## XCL Reference Data

### Reluctance Labels (for tone reference)
```
0: "fully embrace"           — no resistance, this is welcome
1: "feel excited about"      — positive anticipation
2: "feel a bit excited about" — mild positive
3: "feel comfortable with"   — neutral acceptance
4: "feel mostly comfortable" — slight unease underneath
5: "are ok with"             — tolerance, not enthusiasm
6: "are mostly ok with"      — some discomfort showing
7: "feel slightly nervous"   — visible resistance beginning
8: "feel nervous about"      — active discomfort
9: "feel extremely nervous"  — strong resistance
10: "are resistant towards"  — maximum resistance
```

### How XCL maps reluctance to our bands
```
Our Band 4 (81-100) → XCL reluctance ~8-10 → nervous/resistant tone
Our Band 3 (61-80)  → XCL reluctance ~7-8  → slightly nervous tone
Our Band 2 (41-60)  → XCL reluctance ~5-6  → ok with/mostly ok tone
Our Band 1 (21-40)  → XCL reluctance ~3-4  → comfortable/mostly comfortable
Our Band 0 (0-20)   → XCL reluctance ~1-2  → excited/embrace tone
```

This mapping guides the EMOTIONAL REGISTER of our band text:
- Band 4 text should feel tense, resistant, distressed
- Band 3 text should feel uncomfortable, ambivalent
- Band 2 text should feel resigned, confused, neither-nor
- Band 1 text should feel accepting, familiar, settling
- Band 0 text should feel natural, owned, integrated
