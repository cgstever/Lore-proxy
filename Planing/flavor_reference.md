# X-Change Flavor Reference — Cards × Game × Arousal Tiers

**Purpose:** Combined flavor source mined from 198 TCG cards + X-Change-Life.html game data.
Organized for authoring `_NEGATIVE_BLOCKS_COMPACT`, `_EFFECT_AROUSAL_COMPACT`, and future side-effect tables in `x_change_world.py`.

**Arousal gate tiers (0-100 scale):**
- **cold/warm/build (0-44):** Flavor only — embarrassment, discomfort, noticing something's off
- **heat/intense (45-74):** Temp stat penalty + flavor — something weakened until orgasm
- **over/edge (75-100):** Permanent stat mod + flavor — something broke; side effects territory (TBD)

**Stat axes:** CON (endurance/body), INT (cognition/intellect), WIS (instinct/willpower), CHA (presence/social), DOM (authority/control), SUB (compliance/yielding)

---

# §1 — GAME HTML: Official Pill Descriptions

Source: `X-Change-Life.html` line 108322 (`$pill_descriptions`)

| Pill | Description | Duration | Preg% | Key Mechanic |
|------|-------------|----------|-------|--------------|
| Basic | Hallmark product. Affordable, ~24hr, impossible to get pregnant, STD protection. | 4 ticks (~24hr) | 0% | Safe, entry-level |
| Resistance | Inexpensive week-long pill. Cheaper formulation interacts poorly with orgasms. Limit to 1 climax per 3 days or experience side effects. Orgasms prolong duration. | 28-40 ticks (~1-2wk) | 20% | Orgasm = risk escalation |
| Breeder | Temporary pill, greatly increases fertility. Probably end up pregnant. Can't orgasm unless creampied. | 28-40 ticks | 65% | Orgasm-gated by creampie |
| Compliant | Lasts two weeks. Cost-effective. Known to make taker quite suggestible. | 56-64 ticks (~2wk) | 20% | People-pleaser side effect |
| Show-Off | Two week pill encouraging user to display their new body. Discounted for self-assured exhibitionists. | 56-64 ticks | 20% | Exhibitionist side effect |
| Bimbo | Lasts two weeks. Even cheaper than Compliant but temporarily wreaks havoc on your thinky-ness. | 56-64 ticks | 20% | INT penalty + exhibitionist chance |
| Cum-Cure | Fundamentally flawed product. Lasts ~month. Effects wear off quickly if you swallow cum. Each load removes ~1-2 weeks. | 120-128 ticks | 15% | Swallowing = cure |
| X-Tra Strength | More expensive. ~30 day duration. Possible but very low pregnancy chance; if it happens, transformation permanent. | 120-128 ticks | 25% | Pregnancy = permanent |
| Plus | Very expensive deluxe pill. Once taken, transformation is permanent with no way back. Indistinguishable from any other woman. | Permanent | 25% | No revert |

**Pill types referenced in cards but NOT in game database (card-only lore):**
Bull, Petite, Purple, Blue, Oral, Passion, Clone, Wearable, Choice, Piper, Drain, Size Empress, Max, Custom

---

# §2 — GAME HTML: Side Effect Names & Descriptions

Source: `X-Change-Life.html` lines 111616-111681

## Core Side Effects

| Internal Key | Display Name | Description | Stat Axis |
|-------------|-------------|-------------|-----------|
| bimbo / bimbo temp | Brainless Bimbo | You're a bit of a ditz. | INT |
| people pleaser / pp temp | People Pleaser | You find it hard to turn down direct requests. | WIS/SUB |
| breeder / breeder temp | Breeder | Your body craves breeding. You'll need to be creampied to cum. | CON/SUB |
| resistance / resistance temp | Resistance | Orgasms may extend your transformation and cause side effects. | WIS/CON |
| Exhibitionist / Exhib temp | Exhibitionist | You enjoy displaying your body, and find it difficult to do otherwise. | CHA/DOM |
| milky | Mommy Milkers | You lactate, regardless of pregnancy. | CON |
| maid | Live-In Maid | You'll clean the house *whenever* you're asked. | SUB |
| Libido overdrive | Libido Overdrive | Your arousal increases without provocation. | CHA/DES |
| Submissive pleasure | Submissive Pleasure | You gain double pleasure in passive sex positions. | SUB |
| Arousal is bad | Arousal is bad | Extreme arousal can cause problems. | WIS |

## Drain/Degradation Side Effects

| Internal Key | Display Name | Description | Stat Axis |
|-------------|-------------|-------------|-----------|
| Swallow decreases dick | Gulp n' Shrink | Swallowing cum will shrink your dick. | CON |
| Creampies decrease dick | Breeder's Bane | Getting creampied will shrink your dick. | CON |
| Orgasms decrease dick | Shrinkgasm | Cumming will shrink your dick. | CON |
| Swallow decreases intellect | Swallowing makes you stupid | Swallowing cum will decrease your intellect. | INT |
| Creampies decrease intellect | Breed me dumber | Getting creampied will decrease your intellect. | INT |
| Orgasms decrease intellect | Cum n' Dumb | Cumming will decrease your intellect. | INT |
| Swallow decreases fitness | Soft after swallowing | Swallowing cum will decrease your fitness. | CON |
| Creampies decrease fitness | Breed me weaker | Getting creampied will decrease your fitness. | CON |
| Orgasms decrease fitness | Cum so soft | Cumming will decrease your fitness. | CON |

## Permanence-Threat Side Effects

| Internal Key | Display Name | Description |
|-------------|-------------|-------------|
| Swallow or permanent ID | Swallow or it's permanent | You must swallow cum daily, or this DNA becomes permanent. |
| Orgasm or permanent ID | Orgasm or it's permanent | You must orgasm at least once daily, or this DNA becomes permanent. |
| Get creampied or permanent ID | Get creampied or it's permanent | You must get creampied at least once daily, or this DNA becomes permanent. |
| Swallow to continue | Swallow to continue | You must swallow cum daily, or your New-U transformation will expire the next day. |
| Orgasm to continue | Orgasm to continue | You must orgasm daily, or your New-U transformation will expire the next day. |
| Get creampied to continue | Get creampied to continue | You must get creampied daily, or your New-U transformation will expire the next day. |

## Knockoff Pill Effects (WANGL / SWP / InstaGirl)

| Pill ID | Brand | Product Name | Effect |
|---------|-------|-------------|--------|
| maid | WANGL | Ready-Maid™ | You just really love cleaning. It turns you on! |
| dumb bitch | SWP | Dumb Bitch™ | Orgasms might damage your brain, permanently. |
| dairy queen | WANGL | Dairy Queen® | You are a walking, talking dairy farm! |
| skylar | SWP | Insta-Strip™ | You've got the dancing ability of a professional stripper, and accept most verbal commands. |
| secretary | WANGL | SECRET-ary™ | You've got the body and skills of a super busty secretary. |
| goodgirl basic | InstaGirl | Goodgirl Basic™ | You're the perfect image of the chosen DNA. |
| goodgirl petite | InstaGirl | Goodgirl Petite™ | You're the perfect image of the chosen DNA - and you're less than 5 feet tall! |
| hot and ready | SWP | Hot and Ready™ | Your arousal and brainpower are on overdrive - be careful. |
| goodgirl max | InstaGirl | Goodgirl Max™ | You're the perfect image of the chosen DNA. |

---

# §3 — LORE ENGINE: Behavior References (from x_change_world.py)

These define the "voice" each effect uses across arousal tiers.

## Breeder
- **Persona:** Compulsion to receive vaginal creampies grows with arousal
- **Urges:** Crave insemination as 'proper completion'
- **Diction:** Completion metaphors (filled, sealed, settled); pleading undertones near release
- **Thought prompts:** "If I'm filled properly, this ache will finally calm." / "If I follow this pull a little, maybe the pressure will ease."
- **Gates:** Pleading diction at arousal 40+, creampie begging at 70+, creampie relief insight at 85+

## Bimbo
- **Persona:** Playful, glossy, attention-seeking; intellect narrows around pleasure and presentation
- **Urges:** Dress to draw the eye; lean into praise and attention
- **Diction:** Simpler syntax at peaks; bubbly descriptors
- **Thought prompts:** "I look so cute—why not enjoy it?"
- **Gates:** Simple syntax at 55+, girlish fillers at 70+

## Bull (from entry line 890)
- **Persona:** Hyper-fertile semen; strong urge to finish inside
- **Mechanic:** Does not itself grant permanence; combines with Blue Plus for permanence path
- **Flavor axis:** DOM heavy, CON secondary

## Denial (from entry line 1585)
- **Mechanic:** Orgasm denial escalation system

---

# §4 — CARD FLAVOR MINED BY PILL TYPE / EFFECT

Themes extracted from 198 TCG cards, organized by which pill/effect they depict and what emotional/physical arc they describe. Each entry notes which stat axis and arousal tier range the language best fits.

---

## 4A — BASIC PILL CARDS

**Defining flavor:** Temporary, safe, exploratory. The "what if" pill. Shame/excitement tension. Often first-time or casual use.

### Cold/Warm Tier Language (flavor-only, 0-44)
**CON themes:**
- "I was just a regular guy" / "just wanted to feel" / "out of curiosity" (TC-40, TC-34)
- Body noticing unfamiliar sensations, soft build, first changes
- "The transition was difficult" / adjusting to new shape (TC-05)

**INT themes:**
- "I thought I'd hate it" / internal argument with self (TC-37)
- Awareness of change vs denial: "I swore I'd hate taking X-Change, no matter what" (TC-37)
- "I just wanted to try it out of curiosity" (TC-40)

**WIS themes:**
- Instinct whispering: "something held me back" (OG-066)
- Gut feeling being wrong: "Seemed like an easy way to make $75" (TC-42)
- Hesitation overridden: "it took me nearly five months to work up the courage" (TC-24)

**CHA themes:**
- Social awkwardness in new body: "What a great idea! I can prove I would do anything for her" (TC-25)
- Presentation anxiety: "I'd bought a bikini to use at the backyard pool, so I can put my body on display, but only for me" (TC-40)

**DOM themes:**
- Control slipping: "I kept swearing it, even to the moment that I jokingly swallowed the pill" (TC-37)
- Authority challenged: "I told him that most of them were probably faking it" / then losing the argument with own body (TC-38)

**SUB themes:**
- Reluctant yielding: "he pushed his cock straight into my mouth. I can't prove it, but I think he knows how much I'm enjoying this" (TC-37)
- First compliance: "I agreed eventually" / "I hesitated but agreed" (TC-11)

### Heat/Intense Tier Language (temp penalty, 45-74)
**CON:** "my body... I couldn't stop shaking through orgasm after orgasm" (OG-210) / "feeling the swish of my dress around my smooth thighs" becoming craving (TC-31)
**INT:** "my brain turning to mush with every orgasm" (TC-02) / "Why am I getting so turned on?" (TC-35)
**WIS:** "SLUT ALERT!!! MANHOOD LEVELS DROPPING TO 0%" (TC-35) — instincts overridden by sensation
**DOM:** "Wanting to satisfy him, I offered little resistance" (TC-10) / "he just fucks me harder" (OG-061)
**SUB:** "I was past caring" (TC-58) / "things quickly got out of hand" (TC-26)

### Over/Edge Tier Language (permanent, 75-100)
**CON:** "I'm never changing back. Oh well." (TC-04) — body has accepted
**INT:** "I lost count of the orgasms" (OG-066) / "the excitement of being a woman has never faded" (TC-21)
**WIS:** "How could he go back to his old life after this?" (TC-20) — instinct fundamentally rewired
**DOM:** "He was a woman now" — authority fully surrendered (TC-20)
**SUB:** "I fell in love with being a fuck puppet" (OG-067) / "I finally took my Plus" (TC-21)

---

## 4B — RESISTANCE CARDS

**Defining flavor:** Extended duration, orgasm = risk. Competitive/challenge framing. The ticking clock.

### Cold/Warm (0-44)
- "I'm sure I can make it to the end of the week without cumming" (TC-48) — confident resistance
- "Rules: pop the pill and go to the bar" (OG-203) — challenge accepted, stakes clear
- "My friend group came up with this stupid challenge" (TC-28) — bravado, overconfidence

### Heat/Intense (45-74)
- "I had been consistently getting the pink, 5 weeks in a row" (TC-23) — mounting suspicion, control eroding
- "I am not sure how many times I have cum, but I am pretty sure its more than 30" (OG-203) — count lost, body winning
- "The constant feeling up sensations and heat between my legs, in my womb" (TC-28) — body overriding mind

### Over/Edge (75-100)
- "Not sure if I have any hope of getting my old life back" (TC-45) — point of no return
- "they tell me not to worry my pretty little head about it. So I don't." (TC-45) — compliance accepted as identity
- "these days my friends all kinda share me" (TC-45) — permanent state, no resistance left
- "I realized I wasn't going to be fucking him after this. Or any woman ever again." (OG-310) — WIS shattered

---

## 4C — BREEDER CARDS

**Defining flavor:** Womb ache, completion craving, pregnancy as climax. Urgency/desperation arc.

### Cold/Warm (0-44)
- "I was just so insanely curious" (TC-26) — curiosity about the feeling
- "All I had to do was take an X-Change Breeder Compliant on my day of the wedding" (TC-29) — anticipation
- "I wanted to be the best wife he could ask for" (TC-29) — willingness framed as duty

### Heat/Intense (45-74)
- "things quickly got out of hand" (TC-26) — lost control of situation
- "I couldn't help myself from teasing him" (TC-26) — compulsion overtaking decision
- "OH YES FUCK ME HARD! Cum inside me please cum inside me!" (OG-064) — verbal begging, breeder diction peak
- "What do you mean you just wanted to cover me in cum? Didn't you hear what I was saying?" (OG-064) — desperation at denied completion
- "the desperately frustrated look in her eyes told me what she really wanted" (OG-063) — body's need visible

### Over/Edge (75-100)
- "I came SO hard when she unloaded in me" (OG-234) — completion euphoria
- "I broke down in tears" (TC-21) — overwhelming sensation at identity level
- "Breeder orgasms man, they're fucking incredible!!" (TC-28) — body fundamentally rewired
- "now that I've started showing he just fucks me harder" (OG-061) — permanence embraced
- "I love my daddy and I can't wait to bear as many kids as he can give me" (OG-084) — identity dissolved into breeder role
- "There's no orgasm like a breeder orgasm" (OG-229) — breeder state as addiction

---

## 4D — BIMBO CARDS

**Defining flavor:** Intelligence drain, giggly presentation-focus, cock-fixation. "Thinky-ness" dissolving.

### Cold/Warm (0-44)
- "don't feel stupid at all? That was a fucking waste" (OG-096) — early bimbo, unaware of change starting
- "I just get really, mmmmm, horny" (OG-076) — first signs of narrowing focus

### Heat/Intense (45-74)
- "I'm SO not faking. I'm tired of everyone telling me I'm faking" (OG-076) — INT draining, unaware of own change
- "Sorry for the drool. I do that when I talk about cock... mmmmm, cock... Where was I?" (OG-076) — thought loops, fixation
- "more, remember god, this is the best feeling ever...oh...harder here...fuck me, baby...please never stop" (OG-096) — INT fully hijacked
- "I am a teeny tiny bimbo so not faking" (OG-076) — self-description as bimbo accepted

### Over/Edge (75-100)
- "I totes consent!" (OG-077) — giggly compliance, no critical thinking
- "Not that it matters at this point" — brain too far gone to care (Game HTML test kit)
- "She'd had enough and gave you X-Change...it drained your brain with every thrust" (OG-233) — INT permanently destroyed
- "I took my Bimbo Plus and made it permanent" (OG-097) — point of no return, identity = bimbo
- "With how many times we've made 'him' cum, the pills are ours" — external exploitation of bimbo state (OG-104)

---

## 4E — BULL CARDS

**Defining flavor:** Hyper-virility, impregnation drive, DOM-heavy. The predator/stud archetype.

### Cold/Warm (0-44)
- "Bull sure gives the stamina you need to satisfy three girls" (OG-074) — confident, capability-focused
- "More than one load, right?" (OG-074) — underestimating what Bull does
- "My thing is catching girls. The ones with more to lose." (OG-071) — predatory intent, controlled

### Heat/Intense (45-74)
- "my cock was ready for another" (OG-073) — relentless drive, no refractory
- "All it takes is one little push" (OG-071) — compulsion to finish inside
- "it won't cum. It hungers for pussy." (OG-072) — cock has its own agenda, body overriding mind
- "she told them to remind me to pull out, but Lily 'forgot'" (OG-075) — compulsion wins over intention

### Over/Edge (75-100)
- "Every sister I fucked is pregnant. Some asshole fraternity switched my Resistance for a Bull." (OG-073) — consequences of lost control
- "I wonder how many children I have out there" (OG-071) — permanent widespread consequence
- "we've been at it for a long time... we now have three kids together" (OG-230/BULL-230) — Bull state as permanent lifestyle
- "There's no orgasm like a breeder orgasm" (OG-229) — even the Bull user gets addicted

---

## 4F — BLUE / PURPLE CARDS

**Defining flavor:** Gender swap for born-females (Blue), futa state (Purple). Power dynamics, size themes.

### Cold/Warm (0-44)
- "I always wanted to know what it was like to be the other sex" (OG-222) — curiosity, exploration
- "if I took it, how big would my dick be?" (TC-52) — novelty/excitement
- "I agreed to sleep with her under one condition: I'd take a Blue pill first" (TC-53) — negotiation, control still intact

### Heat/Intense (45-74)
- "I couldn't stop shaking" (generic) — body responding to new anatomy
- "The thing was rock hard and had a mind of its own" (OG-088) — Purple: cock controlling thoughts
- "I've jerked off three times today already and its only 9:30am" (OG-088) — arousal hijacking routine
- "My cock was getting harder and hornier by the second" (OG-089) — escalating without input

### Over/Edge (75-100)
- "I love forcing my now-female 'husband' to wear my lingerie, and suck my massive cock" (TC-54) — DOM fully inverted, power seized
- "I don't think I have a boyfriend anymore" (TC-51) — relationship dynamics permanently altered
- "she's just my obedient little bitch to play with" (TC-54) — Blue enabling permanent dominance shift

---

## 4G — COMPLIANT / PEOPLE PLEASER CARDS

**Defining flavor:** Suggestibility, inability to refuse. The WIS/SUB axis. Exploitation themes.

### Cold/Warm (0-44)
- "I told him I'd been on X-Change before, and now it's worn off" — trying to explain/maintain self
- "be his servant for 'a while'" (TC-41) — request framed as reasonable

### Heat/Intense (45-74)
- "two weeks I've been cooking, cleaning for him...and servicing him in other ways too" (TC-41) — compliance deepening
- "You had balls today. So I figured we'd take 'em away." (TC-43) — forced compliance via pill
- "Melody made me go study in the sorority library. Two of her sisters came in and seduced me." (OG-316) — set up for compliance exploitation

### Over/Edge (75-100)
- "Not sure if I have any hope of getting my old life back" — identity subsumed by pleaser role
- "stuffed into my mouth and I was fucked in this weak, petite body that I'm trapped in, forever" (TC-44) — permanence through exploitation
- "they tell me not to worry my pretty little head about it. So I don't." (TC-45) — WIS permanently zeroed

---

## 4H — PASSION / ORAL / SPECIALTY CARDS

### Passion
- "the most insane, quivering, screaming orgasms I've ever experienced" (TC-58) — sensation amplifier
- "He whispered in my ear that he knew it was me...right before giving me my 14th climax" (TC-58) — awareness + overwhelming sensation

### Oral
- "hooked up to this diabolical machine for the whole afternoon, thoroughly exhausted after countless drooling orgasms" (TC-42) — oral fixation pushed to extreme

### Petite
- "I'm getting lifted and dominated by guys who I would normally tower over" (TC-17) — size/power inversion
- "Once I had his cock in my tiny hands I knew I needed to taste it" (OG-078) — Petite Breeder combo = extreme helplessness

### Piper (Series 1, 111-115)
- "Every fiber of my being wanted nothing but cock" (OG-111) — total compulsion, all stats overridden
- "The Piper pills got to me and I wanted to be fucked so bad" (OG-111) — pure drive, no reasoning
- "His buddy was helpless against the Piper and Haley was helpless against her own desires" (OG-114) — WIS obliterated

### Wearable
- "Nobody thought to tell me when you rip wearables, the change becomes permanent" (TC-44) — accidental permanence

---

## 4I — SPINNER CHALLENGE / TINY PACK / MAX CARDS (Series 1, 101-110)

**Defining flavor:** Competitive framing, escalating stakes, combined pill effects (Max Petite + Bull).

- "The spinner challenge is just a way to get your friends on pills" (OG-101)
- "whichever of them changed back would get me all to themselves. Of course, neither of them changed back" (OG-321) — permanent through competition
- "The new Max line maximized any trait it was paired with" (OG-106) — amplification to extreme
- "Now they are racing to see how fast they can make it permanent" (OG-106) — permanence as goal, not accident

---

## 4J — DARK / REVENGE / TRAPPED CARDS

**Defining flavor:** Non-consensual, exploitation, permanent consequences. The edge-tier emotional palette.

### Betrayal/Trap Themes (maps to WIS failure)
- "my sister slipped me a Petite Match Canned Breeder" (OG-084) — family betrayal
- "Mom told me she'd swapped my Basics for Breeders" (TC-27) — trust destroyed
- "she'd been increasingly distant... she ordered me to go in the bedroom" (OG-081) — setup and exploitation
- "He said if I wanted it back, I had to be his servant" (TC-41) — leveraging vulnerability

### Identity Dissolution (maps to DOM/WIS permanent loss)
- "he was a woman now" (TC-20) — statement of fact, identity change complete
- "I fell in love with being a fuck puppet" (OG-067)
- "Not that it matters at this point" — too far gone to care
- "She might not pass her classes, but she has never been happier" (OG-243) — INT/WIS traded for contentment

### Forced Permanence (maps to over/edge consequences)
- "rip wearables, the change becomes permanent" (TC-44)
- "if you cum too much, you won't turn back" (TC-45)
- "One of them was spiked with a Purple!" (OG-089)
- "your contract actually stipulates fully unprotected sex" (TC-46)

---

# §5 — STAT-AXIS PHRASE BANK

Organized by stat, sourced from both cards and game. Ready for direct table authoring.

---

## CON (Endurance / Body)

**Cold (aware, no penalty):**
- body tingles with unfamiliar sensation
- muscles remember being stronger than this
- frame shivers once, then steadies
- skin prickles at the wrongness of new proportions

**Warm (discomfort building):**
- warmth spreading through unfamiliar muscles
- body struggling to keep up with new demands
- endurance faltering under sustained sensation
- frame trembling at the edges of what it can hold

**Build (flavor-only peak):**
- body running on borrowed stamina now
- every nerve reporting from unfamiliar positions
- constitution tested by what this form requires
- muscles aching in ways that have no male reference

**Heat (temp penalty territory):**
- body gave way, something in the core cracked
- endurance failing under sustained pleasure assault
- breathing ragged, muscles unable to brace anymore
- physical composure shattered, temporarily weakened

**Intense (deeper temp penalty):**
- body dissolved into pure sensation, no stamina left
- constitution overwhelmed, trembling uncontrollably
- all physical resistance collapsed under the intensity
- flesh responding without permission, body acting on its own

**Over (permanent territory):**
- something fundamental broke in the body's ability to resist
- endurance permanently diminished, the body remembers being overwhelmed
- constitution rewired by what happened, never fully returning
- body learned helplessness it cannot unlearn

**Edge (permanent + side effect territory):**
- body fundamentally restructured by the breaking point
- stamina permanently reduced, physiology shifted at its core
- iron constitution melted and reformed weaker
- the body will never return to what it was before this moment

---

## INT (Cognition / Intellect)

**Cold:** thoughts registering something unfamiliar / mind cataloging changes clinically
**Warm:** thinking getting softer, harder to focus / thoughts drifting to sensation over analysis
**Build:** coherent thought increasingly rare / mind splitting between logic and wanting
**Heat:** brain turning to mush (TC-02) / thinking drowned out by feeling / "Why am I getting so turned on?" (TC-35)
**Intense:** intellect hijacked by sensation / "lost count of the orgasms" (OG-066) / thoughts replaced by need
**Over:** thinking permanently simplified / "sorry for the drool" (OG-076) / "not that it matters at this point"
**Edge:** cognition fundamentally rewired / "I totes consent!" (OG-077) / intelligence is a memory of another life

---

## WIS (Instincts / Willpower)

**Cold:** gut feeling that something is wrong / instincts whispering warnings / "something held me back" (OG-066)
**Warm:** instincts giving mixed signals / "I'm sure I can make it" (TC-48) / false confidence
**Build:** willpower tested for real / "I figured it wouldn't be a risk" (TC-46) / judgment compromised
**Heat:** instincts overridden by body / "SLUT ALERT!!! MANHOOD LEVELS DROPPING" (TC-35) / gut screaming but body not listening
**Intense:** willpower dissolved / "I was past caring" (TC-58) / instincts pointing wrong direction
**Over:** instincts permanently rewired / "How could he go back to his old life after this?" (TC-20) / compass broken
**Edge:** willpower is a word from another life / "they tell me not to worry my pretty little head. So I don't." (TC-45)

---

## CHA (Presence / Social)

**Cold:** social presence adjusting to new body / composure holding but awareness of being perceived differently
**Warm:** presentation shifting involuntarily / body language betraying inner state / "putting my body on display, but only for me" (TC-40)
**Build:** social mask cracking / "I couldn't wait to see him fall flat on his face when he tried to flirt with me" then losing composure (TC-60)
**Heat:** presence fully feminized / people reading you as female / "no one knows what's happening underneath" (TC-59) — trying to hide arousal state
**Intense:** broadcasting arousal to everyone / "She wouldn't stop paying" (TC-04) / presence drawing unwanted/wanted attention
**Over:** social identity permanently altered / "I started popping X-Change Clone to look like his favorite crush" (TC-60) — embracing new social role
**Edge:** old social self unrecognizable / presence is fully the new identity / "I was his petite BBC fuck now" (OG-228)

---

## DOM (Authority / Control)

**Cold:** control intact but aware of challenge / "I swore I'd hate it" (TC-37) — defiance
**Warm:** authority wavering / "I told him that most of them were probably faking it" — confidence shaken (TC-38)
**Build:** control actively contested / "I couldn't help myself from teasing him" (TC-26) — acting against own authority
**Heat:** authority surrendered in the moment / "Wanting to satisfy him, I offered little resistance" (TC-10)
**Intense:** control impossible to reclaim / "I was mesmerized by his massive, jerking cock" (TC-08) / "I grabbed the first guy I could find and threw him on the bed" (OG-111)
**Over:** authority permanently transferred / "I love forcing my now-female 'husband'" (TC-54) — DOM fully inverted
**Edge:** control is an alien concept / "she's just my obedient little bitch" (TC-54) — from either side, permanent power transfer

---

## SUB (Compliance / Yielding)

**Cold:** resistance holding, compliance dormant / "I figured this was payback" (OG-103) — aware of submission frame but resisting
**Warm:** yielding impulse noticed / "I hesitated but agreed eventually" (TC-11) / first signs of compliance
**Build:** compliance becoming easier than fighting / "He said he could help me explore my desires" (OG-066)
**Heat:** submission feels natural / "I was a fool for Breeders" (OG-212) / "I let him dump his thick, hot load deep inside me" (OG-078) — active participation in own submission
**Intense:** yielding is the default / "I am ready to have your child! And you're gonna leave?" (OG-064) — begging
**Over:** submission is identity / "I finally took my Plus" (TC-21) / "I can't wait to bear as many kids as he can give me" (OG-084)
**Edge:** compliance is the only state that exists / "she will provide you with many offspring, Your Highness" (OG-081) — SUB as permanent designation

---

# §6 — CROSS-REFERENCE: Card Tags → Stat Axes

| Card Tag | Primary Stat | Secondary Stat | Notes |
|----------|-------------|----------------|-------|
| slut | CHA | SUB | Presentation + compliance |
| wholesome | WIS | DOM | Positive instinct + agency retained |
| dark | WIS | DOM | Instinct betrayed + control stripped |
| revenge | DOM | WIS | Power dynamics inverted |
| passion | CHA | CON | Sensation amplification |
| basic | — | — | Entry-level, broad stat pressure |
| resistance | WIS | CON | Willpower vs body endurance |
| breeder | CON | SUB | Body craving + compliance with drive |
| bimbo | INT | CHA | Cognition drain + presentation fixation |
| nogoingback | All | — | Terminal state flag |
| stuck | WIS | DOM | Trapped = willpower and authority destroyed |
| oops | WIS | — | Instinct failure, unintended consequence |
| bet | DOM | WIS | Competitive framing → authority challenged |
| cum | CON | INT | Physical overwhelm + cognitive drain |
| orgasm | CON | CHA | Body peak + social display |
| bbc | CON | SUB | Size overwhelm + yielding |
| gangbang | CON | DOM | Endurance tested + control dissolved |
| solo | CHA | WIS | Self-exploration, internal journey |
| practical | INT | WIS | Rational framing (often ironic) |
| money | WIS | SUB | Judgment compromised by incentive |
| family | WIS | SUB | Trust betrayed + forced compliance |
| urges | WIS | CON | Instinct hijacked + body responding |
| blue | DOM | CON | Power acquisition + physical change |
| wearable | WIS | — | Accidental permanence, instinct failure |
| choice | DOM | WIS | Agency exercised then trapped |

---

# §7 — MISSING COVERAGE / NEXT STEPS

## Effects needing tables authored (not yet in _EFFECT_AROUSAL_COMPACT):
1. **Piper** — total compulsion, all stats overridden. Card source: OG-111 through OG-115
2. **Drain** — stat degradation per sexual act. Card source: OG-233, game side effects
3. **Size Empress** — capacity modification. Card source: OG-092, OG-093, OG-238
4. **Petite** — size reduction, helplessness. Card source: OG-076-081, TC-17
5. **Max** — trait amplification. Card source: OG-106-110
6. **Wearable** — accidental permanence. Card source: TC-44
7. **Choice** — reversible pill with trap. Card source: TC-41
8. **Clone** — identity duplication. Card source: TC-60
9. **Passion** — sensation amplification. Card source: TC-58, OG-306
10. **Oral** — oral fixation. Card source: TC-42, TC-22

## Side effect tables (15+ tier, TBD):
- Need escalation chains matching side_effects_list.md Categories 1-7
- Need mapping from arousal gate failure → side effect trigger
- Need flavor text per side effect per stat value group
- Card sources for terminal states: Paragon of Femininity, Crimson Absorber, Broodmother

## Identity tables needing expansion:
- trans_male origin needs card-sourced language (Blue cards: TC-51-55, OG-221-222)
- intersex origin is underrepresented in cards (Purple cards: OG-086-090)
- Effect identity tables for bull, piper, drain, petite, max effects

---

# §8 — GAME HTML: Arousal Journey Text (Mined from Passages 893-908)

Source: `X-Change-Life.html` gain arousal passages. These contain the **actual in-game text** players see as arousal builds, organized by the exact dimensions our phrase tables need.

## Structure of Game Arousal Text

The game uses a branching tree:
1. **Gender**: male vs female
2. **Situation**: alone (clothed/nude), with guy, seeing cock, having sex
3. **Reluctance level**: very reluctant (masc>84, rel>7), reluctant (masc>60, rel>6), normal
4. **Effect type**: breeder vs non-breeder
5. **Arousal tier**: 0-2, 2-4, 4-6, 6-8, 8+ (maps to our cold/warm/build/heat/intense/over/edge)

Each node has 5-20 `twirl` variants (random pick). Total: ~500+ unique phrases.

## Key Patterns by Arousal Tier

### Tier 0-2 (Cold) — Noticing/Awareness
- **Body signals**: "flutter in your stomach", "skin prickles", "breasts feel heavier", "heartbeat quickens"
- **Emotional tone**: confusion, curiosity, denial. "Despite yourself..."
- **Breeder variant**: same signals but focused on womb/pussy awakening. "Your pussy feels unusually sensitive"
- **Male (low masc)**: "strange sensation in groin", "blunt and intrusive", "muted echo of past", disconnect between expected and felt
- **Key phrases**: "whisper of warmth", "ticklish warmth", "a trickle of warmth blooming"

### Tier 2-4 (Warm) — Building Discomfort
- **Body signals**: "heat pools in lower belly", "pussy flutter at his voice", "breasts feel tender", "wetness gathering"
- **Emotional tone**: embarrassment, alarm, fighting the feeling. "Your body betrays your mind"
- **Breeder variant**: "warmth kindles in lower torso", "pussy throbs to slow steady rhythm"
- **Male (low masc)**: "confusing reminder of maleness", "alien melody to a song body no longer sings"
- **Key phrases**: "embarrassing heat", "body reacting in baffling ways", "alien sensation"

### Tier 4-6 (Build) — Control Contested
- **Body signals**: "pussy throbs uncomfortably", "breasts feel heavy", "wetness impossible to ignore", "body pulling toward him"
- **Emotional tone**: losing the argument with body. "Every instinct screams against this betrayal"
- **Breeder variant**: "body aching to be filled and stretched", "foreign sensation of needing to be inseminated"
- **Male (low masc)**: "hardening feels alien and obnoxious", "reading a book in a language you once knew"
- **Key phrases**: "alien heat engulfs", "throbbing you cannot comprehend", "hips rocking on their own"

### Tier 6-8 (Heat) — Control Lost
- **Body signals**: "pussy on fire", "body rebels against will", "craving to be filled gnaws", "hips demanding"
- **Emotional tone**: surrender against will. "Your body cries for a man's touch feels utterly absurd"
- **Breeder variant**: "terrible sensation of needing to be inseminated", "fantasizing about his hot thick semen"
- **Male (low masc)**: "primal need in loins but stranger's request", "aches for release but disjointed"
- **Key phrases**: "all-consuming", "demanding attention", "body screams for release"

### Tier 8+ (Over/Edge) — Body Rules
- **Body signals**: "wildfire of desire", "pussy demanding release", "body screaming for release", "every cell demands"
- **Emotional tone**: total overwhelm, no resistance remains. "Your mind screams in protest but body sings in delight"
- **Breeder variant**: "primal hunger", "womb begging to be flooded", "insatiable thirst for seed", "ache that only a thick heavy load can quench"
- **Male (low masc)**: "mere ember to inferno you were accustomed to", "ill-fitted costume on your sensibilities"
- **Key phrases**: "overwhelming surge", "can barely think", "desperate whimpers", "mind fogged"

## Situation-Specific Patterns

### During Sex (passage 902)
- Reluctant: "shameful heat", "feeling of him against inner walls is reminder of vulnerability", "confusing sense of arousal and mortification"
- Normal: "intoxicating warmth", "searing heat radiates", "each thrust sends shivers of hot pleasure"
- Progression: warmth → waves → blazing heat → tsunami → all-consuming blaze → mind-numbing peak

### Seeing Cock (passage 903)
- Reluctant: "perplexing warmth", "shiver involuntarily", "femininity feels foreign as pussy stirs"
- Normal: "eyes drawn", "warmth deepens", "anticipation builds"
- Breeder: adds seed-craving language layered on top

### Alone Clothed (passage 899)
- Uses clothing references: "panties increasingly moist", "nipples poking through top", "wet spot on panties"
- Breeder variant: "pussy demanding release through fabric"

---

# §9 — GAME HTML: Transformation Descriptions (Passage 1628+)

## Initial Transformation (passage 1628)
40+ variant first-line descriptions covering: heat wave, skin sensitivity, height shift, muscle softening, body hair retracting, bone reshaping, feature feminization, voice change

**Key phrases by body type:**
- **Boobs**: A-cup "cute little breasts poke forward" → D-cup "straining and flopping forward" → DD+ "erupting from chest, keep growing"
- **Holistic/Voluptuous**: "waist pulled in as hips and ass expand", "muscles weaken, feel weight of new form"
- **Holistic/Normal**: "toned muscles melt away", "skin turns softer and smoother", "manhood shrink"
- **Dick loss**: "emptiness between thighs hits hard", "feel manhood slimming and retracting", "hollow like pastry in need of filling"
- **Frame**: "hips grow wider, shoulders narrow", "frame melts into hourglass"

## First-Time Transformation Stages (passages 1642-1643)
Interactive multi-stage transformation with Stability/Comfort/Adaptation meters:
- Stage 1 variants: Heat wave, Skin sensitivity, Height shift, Muscle softening, Body hair retracting
- Stage 2 variants: Shoulder restructuring, Hip expansion, Bone density changing, Frame reshaping, Height reduction
- Player choices (breathe/brace/massage/stay still/move) affect the meters differently

## Character-Specific Transformation Flavor (passages 1630-1638)
Each character model has unique post-transformation descriptions emphasizing their body type and personality.

## Bimbo Supplement (passage 1639)
30+ first-person bimbo internal monologue phrases during transformation:
"O-Oh... brain's getting all fuzzy... gooey and silly" / "who needs smarts when you just wanna have fun" / "thinking is like sooo overrated"

---

# §10 — GAME HTML: Masculinity Drift Text (Passage 909)

Organized by masculinity band × reluctance level, covering both masculinity LOSS and GAIN. Maps directly to `_PILL_IDENTITY_COMPACT` bands.

## Masculinity Loss (-1 gain) by Band:

| Masc Band | High Reluctance | Low Reluctance |
|-----------|----------------|----------------|
| 80+ | "not very manly", "chipped away at masculinity", "inner man took a tiny hit" | "felt different", "bit softer", "masculine edge dulls" |
| 60-80 | "bit more girly", "chipped away at what's left of manliness" | "bit less manly", "masculine side dims" |
| 40-60 | "kinda girly", "bit more feminine", "felt pretty femme" | "bit girlier", "somewhat feminine" |
| 20-40 | "getting even girlier", "totally feminine", "more like a girl" | "nicely feminine", "felt girly" |
| 0-20 | "completely girly", "such a girl", "pure girliness" | (same) |

## Masculinity Gain (+1 gain) by Band:

| Masc Band | High Reluctance | Low Reluctance |
|-----------|----------------|----------------|
| 0-20 | "tiny spark of masculinity", "touch less girly" | "less girly than usual", "girliness wavers" |
| 20-40 | "touch manlier", "bit of male side returns" | "less feminine", "wasn't very girly" |
| 40-60 | "slightly more masculine", "kinda manly", "touch more like a guy" | (same) |
| 60-80 | "pretty masculine", "bit manlier", "fairly guy-like" | (same) |
| 80+ | "very manly", "properly masculine", "pure manliness" | (same) |

---

# §11 — GAME HTML: Female Arousal Ambient Text (Passage 1618)

Nine variant templates for passive arousal flavor, using word substitution pools:

1. **Body shudder**: "_pleasant _shudder travels up back" (pleasant: warm/soothing/relaxing; shudder: shiver/tremor/tickle)
2. **Mental fog**: "feel light-headed/woozy/dizzy → harder to concentrate/focus/think → carnal/sensual/primal urges/instincts replace rational thought"
3. **Breast awareness**: "breasts feel warm/hot/flushed and tight/heavy/engorged, like they're expanding/growing"
4. **Nipple reactions**: "nipples ache/throb/tingle and swell/harden/go erect" — context-aware (clothed: "poking through shirt"; nude: "plainly visible")
5. **Vulnerability**: "feel fragile/vulnerable/weak/delicate and feminine/soft/girlish/powerless"
6. **Wetness**: pussy dampness progression (awareness → soaking → dripping)
7. **Size awareness**: becoming aware of being smaller, lighter, more delicate
8. **Temperature**: internal heat building in waves
9. **Emotional**: involuntary feminine emotional responses

---

# §12 — GAME HTML: Side Effect Flavor (Passage 1561)

## Bimbo Side Effect (in-game description)
"You're not as quick-witted as you used to be. In fact, you could be called a bimbo, who has far more dick on her brain than, well, brains. You might freeze up or say something unintentionally slutty at inopportune moments."
- Mechanically: caps intellect talent maximum at 3
- Adds "bimbo" to character side effects array

## Identity Game Over (passage 101)
"You've changed your body so many times, somewhere down the line you lost your soul. You'll still have a long, fulfilling life in Summer City, but you're not exactly 'you' anymore."
- Terminal state for identity loss — maps to the absolute bottom of identity tables
