# X-Change World — Side Effects Design Decisions

## Design Axioms
- All side effects require an active pill — hard gate, no exceptions
- Gender gating is handled implicitly by pill type and session mechanics where possible
- No fragment tables — narrative handled via header flags or context injection
- Effect types: **mechanical**, **narrative**, or **hybrid**
- Trigger types: **event-triggered**, **probabilistic (roll-based)**, or **both**

---

## Category 1 — Stat-Mechanical

### 1. Hair Trigger
**Gender:** Female only (implicit — male orgasm ends session, so multiple orgasms = female by definition)  
**Effect type:** Mechanical  
**Trigger type:** Event-triggered + probabilistic  

**Mechanic:**
- DES floor +2, arousal DC -1 for remainder of session
- Fires on 3rd orgasm and beyond within a single sex session

**Roll:**
- On 3rd+ orgasm, roll d100 against threshold
- Base threshold set by total session fail accumulation:
  - 0–4 fails: 10%
  - 5–9 fails: 20%
  - 10–14 fails: 30%
  - 15–19 fails: 40%
  - 20+ fails: 50%
- Each orgasm beyond the 2nd adds +10% to the threshold
  - 3rd orgasm: base %
  - 4th orgasm: base +10%
  - 5th orgasm: base +20%
  - etc.

**Conflicts:** Incompatible with Enduramax. First acquired wins.  
**Leads to:** Two in the Chamber (prerequisite)  
**Session reset:** Orgasm counter resets each session. Must reach 3 orgasms again before rolls start, even if Hair Trigger was active last session.

---

### 2. Two in the Chamber
**Gender:** Female only (implicit — same as Hair Trigger)  
**Effect type:** Mechanical  
**Trigger type:** Event-triggered + probabilistic  

**Mechanic:**
- After each orgasm, arousal resets to tier-3 instead of full reset — enabling one additional orgasm more easily
- After that second orgasm within the chain, arousal fully resets

**Prerequisite:** Hair Trigger must already be active in state this session  
**Roll:** Same structure as Hair Trigger — same fail band percentages, same +10% per orgasm beyond 2nd  
**Earliest possible trigger:** 4th orgasm (Hair Trigger fires on 3rd at earliest, Two in the Chamber cannot roll until the orgasm after Hair Trigger is active)  
**Session reset:** Orgasm counter resets each session. Must reach 3 orgasms before rolls start regardless of prior session state.

---

### 3. Confirmed Submissive
**Gender:** Both  
**Effect type:** Hybrid — mechanical stat mods + narrative via existing Submissive fragment tables  
**Trigger type:** Probabilistic, tier-gated  

**Trigger conditions:**
- Arousal tier 17+
- SUB fails a check at that tier
- Roll d100 against fail band threshold:
  - 0–4 fails: 10%
  - 5–9 fails: 20%
  - 10–14 fails: 30%
  - 15–19 fails: 40%
  - 20+ fails: 50%
- Each orgasm this session adds +10% on top of the band percentage

**Mechanic:**
- SUB +5 (direct stat modification, ceiling 20)
- WIL DC +1 on all resist checks for session
- If Submissive effect is not already active, add it to active effects — uses Submissive fragment tables but displays as "Confirmed Submissive" in the side effects category
- If Submissive is already active, stat mods only

**Model context:** Fragment flavor from Submissive tables only — no names or numbers injected  
**Status panel:** Appears under a separate Side Effects category, not with pill effects  
**Conflicts:** Mutually exclusive with Tyrant — acquiring one removes the other  
**Duration:** Session

---

## Pending

4. Tyrant
3. Confirmed Submissive
4. Tyrant
5. Masculinity Lockout
6. Enduramax
7. Deep Cognition
8. Alpha Male
9. Amazon
10. Semen Demon
11. Crimson Absorber
12. Heat
13. Deluge
14. Fecund Pheromones
15. Sex Panther
16. Size Queen
17. Blowjob Princess
18. People Pleaser
19. Bubble Butt
20. Ultra Virile
21. Hung
22. Ribbed Throat
23. Ultra Tight
24. Thirsty Cervix
25. Stretchy Womb
26. Excitable Ovaries
27. Extra Fertile
28. Cow Tits
29. Broodmother
30. Super Steroids
31. Submissive Sissy
32. Paragon of Femininity
33–39. Escalation derivatives
40–45. PAP / denial debt mechanics
46–48. Feminization acceptance mechanics
