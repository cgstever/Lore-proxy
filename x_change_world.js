// Auto-generated from x_change_world.py
// Data tables + engine code
// Generated at: build_js_lore.py

const LORE_DATA = 
{
  "name": "X-Change World (Full Mechanics)",
  "version": "6.5.95",
  "schema_version": 1,
  "entries": {
    "0": {
      "uid": 1,
      "comment": "STATGEN — Init stats from card",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 0,
      "constant": true,
      "vectorized": false,
      "selective": true,
      "selectiveLogic": 0,
      "addMemo": true,
      "order": 0,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": false,
      "depth": 4,
      "groupOverride": false,
      "entry": "",
      "enabled": true,
      "useRegex": false,
      "name": "STATGEN — Init stats from card",
      "content": "STATGEN (GM-ONLY; ; RULE #1)\nTrigger: xc/init (injected by proxy on the first message of a new ChatID/session). Purpose: deterministically generate and persist the character's base stats in DB so the RP model never has to remember world state. Inputs allowed for statgen:\n- Character card fields: tags[] and system_prompt only.\n- tags and system_prompt have equal weight.\n- Ignore ALL other card fields (description/personality/scenario/examples/etc). Output requirements:\n- No questions..\n- No narration..\n- Persist stats into DB state: stats.INT, stats.WIS, stats.DOM, stats.SUB, stats.CON, stats.CHA.\n- Baseline: 10 for all stats.\n- Apply only explicit keyword mapping (no semantic inference). If no signal, keep 10.\n- Cap: per-stat init delta limited to +/-4.\n- Modifier formula (derived; store unless you already do): mod = floor((stat - 10) / 2).\n- Set flag: flags.statgen_done = true. Signal mapping (literal match; case-insensitive) — applies when present in tags or system_prompt:\nDOM +2: dominant, dom, controlling, commanding, top, topping\nDOM +1: gentle dominance, nurturing dominance, switch\nSUB +2: submissive, service submission, yielding, obedient\nSUB +1: bratty, feigned reluctance, masochist, masochistic, switch\nWIS +2: strong-willed, disciplined, determined, stubborn\nWIS -1: anxious, insecure, needy, dependent\nCHA +2: praise, denial, edging\nCHA +2: masochist, masochistic, rough forcing\nCHA +1: hypersensitive, leaking, clenching, slicking, melts\nCON +1: athletic, stamina, endurance\nCON -1: delicate, overwhelmed, fragile\nINT +1: clever, bookish, strategic, studious After statgen is done, ignore xc/init on later turns.",
      "active": true,
      "keys": [
        "xc/init"
      ],
      "role": "system",
      "orig_uid": "100000",
      "orig_book": "core",
      "key": "xc/init",
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": false,
      "matchWholeWords": true,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": 0,
      "delay": 0,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "1": {
      "uid": 2,
      "comment": "PILL — Pink (MTF)",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 1,
      "constant": false,
      "vectorized": false,
      "selective": true,
      "selectiveLogic": 0,
      "addMemo": true,
      "order": 1,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": false,
      "depth": 4,
      "groupOverride": false,
      "entry": "",
      "enabled": true,
      "useRegex": false,
      "name": "PILL — Pink (MTF)",
      "content": "PILL: PINK (TRANSFORMATION — MTF)\nOn token xc/pill:pink:on:\n- Write DB state: form.sex = \"female\" form.genitals = \"vagina_only\" active.pill_color = \"pink\" flags.just_transformed = true (one-turn optional)\n- If flavor/effect modifiers are present this turn (e.g., breeder/submissive/etc), activate them as separate effects; infer.\nGreen/Red effects-only rules never change form.* (see their pill rules).",
      "active": true,
      "keys": [
        "xc/pill:pink:on",
        "pink pill"
      ],
      "role": "system",
      "orig_uid": "100001",
      "orig_book": "core",
      "key": "xc/pill:pink:on",
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": false,
      "matchWholeWords": true,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": 0,
      "delay": 0,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "2": {
      "uid": 3,
      "comment": "PILL — Blue (FTM)",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 2,
      "constant": false,
      "vectorized": false,
      "selective": true,
      "selectiveLogic": 0,
      "addMemo": true,
      "order": 2,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": false,
      "depth": 4,
      "groupOverride": false,
      "entry": "",
      "enabled": true,
      "useRegex": false,
      "name": "PILL — Blue (FTM)",
      "content": "PILL: BLUE (TRANSFORMATION — FTM)\nOn token xc/pill:blue:on:\n- form.sex = \"male\"\n- form.genitals = \"penis_only\"\n- active.pill_color = \"blue\"\n- flags.just_transformed = true (one-turn optional)\nNo effect inference; only explicit modifiers activate.",
      "active": true,
      "keys": [
        "xc/pill:blue:on",
        "blue pill"
      ],
      "role": "system",
      "orig_uid": "100002",
      "orig_book": "core",
      "key": "xc/pill:blue:on",
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": false,
      "matchWholeWords": true,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": 0,
      "delay": 0,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "3": {
      "uid": 4,
      "comment": "PILL — Purple (Futafem; no vagina)",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 3,
      "constant": false,
      "vectorized": false,
      "selective": true,
      "selectiveLogic": 0,
      "addMemo": true,
      "order": 3,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": false,
      "depth": 4,
      "groupOverride": false,
      "entry": "",
      "enabled": true,
      "useRegex": false,
      "name": "PILL — Purple (Futafem; no vagina)",
      "content": "PILL: PURPLE (TRANSFORMATION — FEMALE BODY WITH COCK; NO VAGINA)\nOn token xc/pill:purple:on:\n- form.sex = \"female\"\n- form.genitals = \"penis_only_no_vagina\"\n- active.pill_color = \"purple\"\n- flags.just_transformed = true (one-turn optional)\nNo effect inference; only explicit modifiers activate.",
      "active": true,
      "keys": [
        "xc/pill:purple:on",
        "purple pill"
      ],
      "role": "system",
      "orig_uid": "100003",
      "orig_book": "core",
      "key": "xc/pill:purple:on",
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": false,
      "matchWholeWords": true,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": 0,
      "delay": 0,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "4": {
      "uid": 5,
      "comment": "PILL — Green (female effects-only)",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 4,
      "constant": false,
      "vectorized": false,
      "selective": true,
      "selectiveLogic": 0,
      "addMemo": true,
      "order": 4,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": false,
      "depth": 4,
      "groupOverride": false,
      "entry": "",
      "enabled": true,
      "useRegex": false,
      "name": "PILL — Green (female effects-only)",
      "content": "PILL: GREEN (EFFECT-ONLY — FEMALE TARGET)\nOn token xc/pill:green:on:\n- active.pill_color = \"green\"\n- change form.* in any way.\n- Only activate explicit effect modifiers that are valid for female targets.",
      "active": true,
      "keys": [
        "xc/pill:green:on",
        "green pill"
      ],
      "role": "system",
      "orig_uid": "100004",
      "orig_book": "core",
      "key": "xc/pill:green:on",
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": false,
      "matchWholeWords": true,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": 0,
      "delay": 0,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "5": {
      "uid": 6,
      "comment": "PILL — Red (male effects-only)",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 5,
      "constant": false,
      "vectorized": false,
      "selective": true,
      "selectiveLogic": 0,
      "addMemo": true,
      "order": 5,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": false,
      "depth": 4,
      "groupOverride": false,
      "entry": "",
      "enabled": true,
      "useRegex": false,
      "name": "PILL — Red (male effects-only)",
      "content": "PILL: RED (EFFECT-ONLY — MALE TARGET)\nOn token xc/pill:red:on:\n- active.pill_color = \"red\"\n- change form.* in any way.\n- Only activate explicit effect modifiers that are valid for male targets.",
      "active": true,
      "keys": [
        "xc/pill:red:on",
        "red pill"
      ],
      "role": "system",
      "orig_uid": "100005",
      "orig_book": "core",
      "key": "xc/pill:red:on",
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": false,
      "matchWholeWords": true,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": 0,
      "delay": 0,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "6": {
      "uid": 7,
      "comment": "Creampie‑Cure rules",
      "sticky": 1000000,
      "displayIndex": 6,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "useRegex": false,
      "position": "char",
      "enabled": true,
      "selective": false,
      "entry": "CREAMPIE‑CURE — Ends after set number of vaginal creampies (not for Purple). On Pink, pregnancy before quota forces permanence.",
      "name": "CREAMPIE‑CURE — Ends after set number",
      "content": "CREAMPIE‑CURE (OPTIONAL EVENT-BASED EXPIRY)\nPurpose: allow certain pill/effect states to end after a configured number of vaginal creampies.\nTrigger: on xc/event:creampie:vaginal, increment a local cure counter for the active pill/effect set.\nExpiry: when the counter reaches the configured threshold, end the applicable pill/effect state (revert/clear as defined by lore).\nPregnancy interaction: if pregnancy.confirmed becomes true before the threshold is reached, the pregnancy lock applies (no reversal).",
      "active": true,
      "keys": [
        "creampie‑cure",
        "creampie-cure",
        "xc/event:creampie:vaginal",
        "cure threshold",
        "quota cure"
      ],
      "constant": true,
      "orig_uid": "100006",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "vectorized": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 6,
      "ignoreBudget": false,
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "outletName": "",
      "group": "",
      "groupOverride": false,
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "7": {
      "uid": 8,
      "comment": "Compliant rules",
      "sticky": 780,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 7,
      "constant": false,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 7,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "COMPLIANT — Targeted obedience to designated person (default pill giver). Cannot willingly refuse direct orders from them.",
      "enabled": true,
      "useRegex": false,
      "name": "COMPLIANT",
      "content": "EFFECT: COMPLIANT\nState effects while active:\n- compliant.active = true\n- compliant.controller = designated controller (default: pill giver / current dominant actor if tracked; otherwise null)\nBehavioral constraint (mechanical):\n- On checks tagged \"refuse_order\" against controller: auto-fail unless an explicit exception rule exists.",
      "active": true,
      "keys": [
        "compliant",
        "Compliant"
      ],
      "orig_uid": "100007",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "role": 0,
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "8": {
      "uid": 9,
      "comment": "Cum‑Cure rules | merged-from-uid-14",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 8,
      "constant": true,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 8,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "CUM‑CURE — Effect persists until configured amount of semen swallowed; overrides other end triggers.\n\n—MERGED NOTES—\nCUM‑CURE RULES \n- A pill described as cum‑cure arms REVERSION: add new TF effects on intake.\n- The next internal ejaculation (creampie, filled inside) triggers a cooling reversal toward pre‑pill state; residual traces may linger but active TF subsides.\n- If no internal cum occurs, effects remain suppressed rather than progressing.",
      "enabled": true,
      "useRegex": false,
      "name": "CUM‑CURE — Effect persists until configured",
      "content": "CUM‑CURE (OPTIONAL EVENT-BASED EXPIRY)\nPurpose: allow certain pill/effect states to end after a configured number of orgasms/ejaculations (as defined by your scene tokens).\nTrigger: on xc/event:orgasm (or your equivalent orgasm token), increment a local cure counter for the active pill/effect set.\nExpiry: when the counter reaches the configured threshold, end the applicable pill/effect state (revert/clear as defined by lore).\nPregnancy interaction: pregnancy lock only blocks Antidote. This event-based expiry only ends what it explicitly targets and does not retroactively undo pregnancy.confirmed.",
      "active": true,
      "keys": [
        "cum‑cure",
        "quota cure",
        "Cum‑Cure",
        "cum-cure",
        "xc/event:orgasm",
        "orgasm cure"
      ],
      "orig_uid": "100008",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "9": {
      "uid": 10,
      "comment": "NL→TOKEN: activation",
      "sticky": 1000000,
      "displayIndex": 9,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "useRegex": false,
      "position": "char",
      "enabled": true,
      "selective": false,
      "entry": "MAP — Pill intake and flavor implication.\nIntake (single-turn): If a sentence contains an intake verb /(swallow|take|dissolve|pop|down|dose|gulp|swallows|takes)/ AND a color /(pink|blue|green|purple|red)/ AND a pill noun /(pill|dose|tablet|capsule)/, then set xc/pill:<color>:on.\nCross-sentence: If a prior sentence or previous speaker turn mentions /(pink|blue|green|purple|red) (X-?Change )?(pill|dose|tablet|capsule)/ without an intake verb, and the next sentence/turn contains only an intake verb, promote that to xc/pill:<color>:on for the most recently mentioned color.\nBrand+Flavor: If the intake sentence (or the color mention) includes 'breeder' (e.g., 'green breeder pill', 'X‑Change Breeder'), also set xc/flavor:add:breeder.\nExplicit commands like 'Enable Breeder flavor' or 'xc/flavor:add:breeder' should also set the flavor.\nFALSE-POSITIVE GUARD — When matching '(pink|blue|green|purple|red)' near '(pill|dose|tablet|capsule)', ignore phrases that include 'pill-shaped' followed by non-ingestibles like 'candy', 'bead', or 'toy'. Prefer matches where the color and pill noun occur within ≤3 tokens and the sentence contains an intake verb. Do NOT fire on figurative or decorative references. For Green, pregnancy (Breeder path) sets permanent=true and the flavor remains (no Plus).",
      "name": "MAP — If /\\b(swallow|take|dissolve|pop|down|dose|gulp|s",
      "content": "MAP — Pill intake and flavor implication.\nIntake (single-turn): If a sentence contains an intake verb /(swallow|take|dissolve|pop|down|dose|gulp|swallows|takes)/ AND a color /(pink|blue|green|purple|red)/ AND a pill noun /(pill|dose|tablet|capsule)/, then set xc/pill:<color>:on.\nCross-sentence: If a prior sentence or previous speaker turn mentions /(pink|blue|green|purple|red) (X-?Change )?(pill|dose|tablet|capsule)/ without an intake verb, and the next sentence/turn contains only an intake verb, promote that to xc/pill:<color>:on for the most recently mentioned color.\nBrand+Flavor: If the intake sentence (or the color mention) includes 'breeder' (e.g., 'green breeder pill', 'X‑Change Breeder'), also set xc/flavor:add:breeder.\nExplicit commands like 'Enable Breeder flavor' or 'xc/flavor:add:breeder' should also set the flavor.",
      "active": true,
      "keys": [
        "pill",
        "swallow",
        "swallows",
        "take",
        "takes",
        "dose",
        "capsule",
        "tablet",
        "dissolve",
        "pop",
        "gulp",
        "pink",
        "blue",
        "green",
        "purple",
        "red",
        "x-change"
      ],
      "constant": true,
      "orig_uid": "100009",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "vectorized": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 9,
      "ignoreBudget": false,
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "outletName": "",
      "group": "",
      "groupOverride": false,
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "11": {
      "uid": 12,
      "displayIndex": 11,
      "comment": "NL→TOKEN: creampie event",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "entry": "MAP — Phrases that mean a vaginal creampie → xc/event:creampie:vaginal (single event).\nAccept all of the following (case-insensitive, any POV):\n• 'finishes inside (me|you|her|him)'\n• 'deep creampie'\n• 'fills (me|you|her|him) up'\n• 'comes in (me|you|her|him)'\n• 'finish inside'\n• 'cum in (me|you|her|him|them)'\n• 'cum inside (me|you|her|him|them)'\n• 'cum deep inside (me|you|her|him|them)'\n• 'I cum inside you/her/him/them'\n• 'cumming inside', 'shoot inside', 'spill inside'\n• 'breed (me|her)' when used during penetration (treat as finishing inside)\nNormalize minor punctuation/spacing\nAdditional accepted phrases (case-insensitive):\n• 'shoot his load inside (me|you|her|him|them)'\n• 'spill (his|their) seed (in|inside) (me|you|her|him|them)'\n• 'finish in (me|you|her|him|them)'\n• 'pump (me|you|her|him|them) full'\n• 'flood (me|you|her|him|them)'\nNormalize minor variants and map any of these to the single xc/event:creampie:vaginal. and map all matched phrases in either speaker’s line to the single event token.",
      "position": "char",
      "enabled": true,
      "useRegex": false,
      "selective": false,
      "name": "MAP — Phrases: 'finishes inside",
      "content": "MAP — Phrases that mean a vaginal creampie → xc/event:creampie:vaginal (single event).\nAccept all of the following (case-insensitive, any POV):\n• 'finishes inside (me|you|her|him)'\n• 'deep creampie'\n• 'fills (me|you|her|him) up'\n• 'comes in (me|you|her|him)'\n• 'finish inside'\n• 'cum in (me|you|her|him|them)'\n• 'cum inside (me|you|her|him|them)'\n• 'cum deep inside (me|you|her|him|them)'\n• 'I cum inside you/her/him/them'\n• 'cumming inside', 'shoot inside', 'spill inside'\n• 'breed (me|her)' when used during penetration (treat as finishing inside)\nNormalize minor punctuation/spacing\nAdditional accepted phrases (case-insensitive):\n• 'shoot his load inside (me|you|her|him|them)'\n• 'spill (his|their) seed (in|inside) (me|you|her|him|them)'\n• 'finish in (me|you|her|him|them)'\n• 'pump (me|you|her|him|them) full'\n• 'flood (me|you|her|him|them)'\nNormalize minor variants and map any of these to the single xc/event:creampie:vaginal. and map all matched phrases in either speaker’s line to the single event token.",
      "active": true,
      "keys": [
        "nl→token:creampie",
        "mapper",
        "event"
      ],
      "orig_uid": "100011",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "constant": false,
      "vectorized": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 11,
      "ignoreBudget": false,
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "outletName": "",
      "group": "",
      "groupOverride": false,
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "12": {
      "uid": 13,
      "displayIndex": 12,
      "comment": "CURE CORE — d6 quota per activation; decrement on events; revert on 0; suppressed during pregnancy_lock.",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "constant": true,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 12,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "CURE — Activation: xc/cure:activate:(creampie|cum) rolls 1d6 to set the quota once (no re-roll until re-activate). Decrement on xc/event:creampie:vaginal or xc/event:cum:swallowed respectively; at 0 and if not pregnancy_locked: revert color and clear counters. Optional: xc/cure:announce:(on|off) to print a single '[Notice: cure complete—reverting.]' line. Default=off.",
      "enabled": true,
      "useRegex": false,
      "name": "CURE — Activation: xc/cure:activate:(creampie|cum) roll",
      "content": "ANTIDOTE / CURE (MECHANIC)\n- ANTIDOTE TRIGGER: taking an Antidote pill OR token xc/cure:activate triggers an antidote attempt.\n- If pregnancy.confirmed == true: Antidote does nothing (antidote is blocked by pregnancy lock).\n- If pregnancy.confirmed == false: clear active effects/counters for the current pill state and revert to baseline (as defined by lore).\nOptional notice: xc/cure:announce:(on|off)\n\nNOTE: Some effects may ALSO define event-based expiry that ends the effect without using an Antidote. Those are separate mechanics and can coexist.",
      "active": true,
      "keys": [
        "cures",
        "xc-cure",
        "silent",
        "antidote"
      ],
      "orig_uid": "100012",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "13": {
      "uid": 14,
      "displayIndex": 13,
      "comment": "NL→TOKEN: cum swallow event",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "constant": false,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 13,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "MAP — Phrases: 'I swallow it', 'I gulp it down', 'I drink his cum', 'I take it in my mouth and swallow' → xc/event:cum:swallowed (single event).",
      "enabled": true,
      "useRegex": false,
      "name": "MAP — Phrases: 'I swallow",
      "content": "MAP — Phrases: 'I swallow it', 'I gulp it down', 'I drink his cum', 'I take it in my mouth and swallow' → xc/event:cum:swallowed (single event).",
      "active": true,
      "keys": [
        "nl→token:cum-swallow",
        "mapper",
        "event"
      ],
      "orig_uid": "100013",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "14": {
      "uid": 15,
      "comment": "Bull rules",
      "sticky": 780,
      "displayIndex": 14,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "useRegex": false,
      "position": "char",
      "enabled": true,
      "selective": false,
      "entry": "BULL — Hyper‑fertile semen; strong urge to finish inside. Does not itself grant permanence; combines with Blue Plus only for a permanence path.",
      "name": "BULL",
      "content": "EFFECT: BULL\nState effects while active:\n- bull.active = true\nMechanical modifiers:\n- If pregnancy system is enabled and eligible: apply bull_pregnancy_bonus (see pregnancy rolls table).\n- If creampie-related checks exist: apply bull_creampie_pressure (as DC modifier) when relevant.",
      "active": true,
      "keys": [
        "bull",
        "stud",
        "alpha",
        "bull pill",
        "bullish"
      ],
      "orig_uid": "100014",
      "orig_book": "core",
      "key": [],
      "keysecondary": [],
      "constant": false,
      "vectorized": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 14,
      "ignoreBudget": false,
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "outletName": "",
      "group": "",
      "groupOverride": false,
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "role": 0,
      "cooldown": null,
      "delay": null,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "15": {
      "uid": 16,
      "comment": "Rules + hidden metadata schema",
      "sticky": 820,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 15,
      "constant": false,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 15,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "MECHANICS — Durations: Basic 1d; Standard 7d; X‑Tra 30d; Plus permanent. Pink/Green can become permanent. Blue permanence is Plus‑only. Purple has no Plus (no permanence). Wearable: removal mid‑act may risk permanence on Pink.",
      "enabled": true,
      "useRegex": false,
      "name": "MECHANICS — Durations: Basic 1d;",
      "content": "MECHANICS: PERSISTENCE, EVENT-BASED EXPIRY, ANTIDOTE, PREGNANCY LOCK\n- Default: pill/effect states do NOT expire by time.\n- A pill/effect can end in either of these ways:\n  (A) EVENT-BASED EXPIRY: if a specific lore entry defines an ending event/condition (e.g., quota reached, orgasm condition, pregnancy outcome, etc).\n  (B) ANTIDOTE: an Antidote pill (or xc/cure:activate) clears the active pill effects and attempts to revert the current pill state.\n- Pregnancy lock (antidote-only): if pregnancy.confirmed == true, ANTIDOTE does nothing (no reversion).\n  Event-based expiry rules may still apply if explicitly defined (example: SURROGATE ends after pregnancy).",
      "active": true,
      "keys": [
        "xchange",
        "pill system",
        "mechanics",
        "metadata",
        "schema",
        "antidote"
      ],
      "behavior_reference": {
        "persona": "Adopt the characteristic mindset and priorities of this flavor while preserving autonomy.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this."
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "orig_uid": "100015",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "role": 0,
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "16": {
      "uid": 17,
      "comment": "Timing controller",
      "content": "EFFECT: BREEDER (LOOP MECHANIC)\nWhile breeder.active = true and pregnancy is eligible:\n- Breeder resistance check:\n roll: d20 + resist.effective_mod\n DC: breeder_dc.current (starts at 30)\n On success: breeder_dc.current += 5 (cap optional) and continue.\n On failure: set breeder.compulsion = \"creampie_required\" until a same-turn vaginal creampie event occurs.\n- Reset condition:\n On xc/event:creampie:vaginal -> breeder_dc.current resets to 30 and breeder.compulsion clears.\nNotes:\n- No narrative enforcement here; downstream RP model uses state flags to portray behavior.",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 16,
      "constant": true,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 16,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "name": "BREEDER LOOP",
      "entry": "BREEDER PILL — Resist Loop\n- Each cycle: roll d20 + resist.effective_mod vs DC 30 (DC +5 on each successful pass until reset).\n- On failure: verbal/physical begging for creampie; on success: continue normally.\n- Compulsion scales with arousal; reset DC on creampie event (xc/event:creampie:vaginal).\n- Pregnancy odds (if applicable): Breeder 75–95%.",
      "active": true,
      "enabled": true,
      "useRegex": false,
      "keys": [
        "onset",
        "timing",
        "dissolved",
        "swallowed",
        "minutes",
        "seconds"
      ],
      "role": "system",
      "behavior_reference": {
        "persona": "Adopt the characteristic mindset and priorities of this flavor while preserving autonomy.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts",
          "Crave insemination as 'proper completion'"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme",
          "Completion metaphors (filled, sealed, settled)",
          "Pleading undertones when near release"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this.",
          "If I’m filled properly, this ache will finally calm."
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [
          {
            "feature": "diction.pleading",
            "min_arousal": 40
          },
          {
            "feature": "urge.creampie_beg",
            "min_arousal": 70
          },
          {
            "feature": "insight.creampie_relief",
            "min_arousal": 85,
            "min_turns_since_onset": 3
          }
        ],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "check_specs": {
        "breeder": {
          "check": "breeder_dc"
        },
        "compulsion": {
          "check": "compulsion",
          "dc": 12
        }
      },
      "orig_uid": "100016",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "17": {
      "uid": 18,
      "comment": "Breeder rules",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 17,
      "constant": true,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 17,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "BREEDER — Compulsion to receive vaginal creampies grows with arousal. Pink/Green: orgasm only if a same-turn vaginal creampie occurs; otherwise the body edges without relief.\nRESIST LOOP — On each denied orgasm: roll d20 + resist.effective_mod vs DC (start 30; +5 on each pass). On first fail in a cycle: POV begs for a vaginal creampie (verbal, often with physical cues). This begging state persists until a vaginal creampie is received, which resets arousal and the compulsion cycle (next denial restarts at DC30). Blue/Purple/Red: no orgasm gate by default; Breeder acts as compulsion only. For Green, pregnancy (Breeder path) sets permanent=true and the flavor remains (no Plus).",
      "enabled": true,
      "useRegex": false,
      "name": "BREEDER (2.0)",
      "content": "EFFECT: BREEDER (CORE)\nState effects while active:\n- breeder.active = true\n- If form/genitals allow pregnancy: breeder.pregnancy_odds_mode = \"high\"\nOrgasm gating (mechanical):\n- If (color in {pink, green}) and breeder.active:\n orgasm_allowed = true only when xc/event:creampie:vaginal occurs same turn; otherwise orgasm_allowed = false.",
      "active": true,
      "keys": [
        "breeder",
        "Breeder"
      ],
      "role": "system",
      "behavior_reference": {
        "persona": "Adopt the characteristic mindset and priorities of this flavor while preserving autonomy.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts",
          "Crave insemination as 'proper completion'"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme",
          "Completion metaphors (filled, sealed, settled)",
          "Pleading undertones when near release"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this.",
          "If I’m filled properly, this ache will finally calm."
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [
          {
            "feature": "diction.pleading",
            "min_arousal": 40
          },
          {
            "feature": "urge.creampie_beg",
            "min_arousal": 70
          },
          {
            "feature": "insight.creampie_relief",
            "min_arousal": 85,
            "min_turns_since_onset": 3
          }
        ],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "check_specs": {
        "breeder": {
          "check": "breeder_dc"
        },
        "compulsion": {
          "check": "compulsion",
          "dc": 12
        }
      },
      "orig_uid": "100017",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "18": {
      "uid": 19,
      "comment": "Denial rules",
      "sticky": 1000000,
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 18,
      "constant": true,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 18,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "DENIAL — Orgasm physically impossible for duration; arousal/frustration may build.",
      "enabled": true,
      "useRegex": false,
      "name": "DENIAL",
      "content": "EFFECT: DENIAL\nState effects while active:\n- denial.active = true\n- orgasm_allowed = false (hard block for duration)",
      "active": true,
      "keys": [
        "denial",
        "Denial"
      ],
      "role": "system",
      "behavior_reference": {
        "persona": "Adopt the characteristic mindset and priorities of this flavor while preserving autonomy.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this."
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "orig_uid": "100018",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "19": {
      "uid": 20,
      "comment": "Bimbo rules",
      "sticky": 780,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 19,
      "constant": false,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 19,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "BIMBO — Curves/libido amplified; lowered inhibition; attention‑seeking behavior.",
      "enabled": true,
      "useRegex": false,
      "name": "BIMBO",
      "content": "EFFECT: BIMBO\nState effects while active:\n- bimbo.active = true\n- bimbo.stage advances mechanically via dual-roll on masculinity gate fails (0-5)\n- Each stage applies -1 INT to the actual stat (stage 5 = -5 INT)\n- Fragment tables pull staged voice text based on current bimbo.stage\n- Lucid moments may surface briefly on arousal gate fails (contrast tags)",
      "active": true,
      "keys": [
        "bimbo",
        "Bimbo"
      ],
      "behavior_reference": {
        "persona": "Playful, glossy, and attention-seeking; intellect narrows around pleasure and presentation.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts",
          "Dress to draw the eye",
          "Lean into praise and attention"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme",
          "Simpler syntax at peaks; bubbly descriptors"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this.",
          "I look so cute—why not enjoy it?"
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [
          {
            "feature": "diction.simple_syntax",
            "min_arousal": 55
          },
          {
            "feature": "diction.girlish_fillers",
            "min_arousal": 70
          }
        ],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "check_specs": {
        "bimbo": {
          "check": "bimbo_control"
        }
      },
      "orig_uid": "100019",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "20": {
      "uid": 21,
      "displayIndex": 20,
      "comment": "PREGNANCY ENGINE — deterministic roll; NL→event mapper.",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "entry": "PREGNANCY — Eligible ONLY when active_color is Pink or Green. NL phrases like 'finishes inside me', 'deep creampie', 'fills me up', 'comes in me', 'finish inside' map to xc/event:creampie:vaginal and roll once: Bull 85–95%; else Breeder 75–95%; else Normal 2–5%. On success: Pink→Plus+lock; Green→lock; block OFF/cures during lock; birth clears lock (Pink stays Plus, Green reverts). On conception success, emit one line by mode: notice→\"[Notice: pregnancy confirmed.]\"; narrative→\"A deep warmth settles low in my belly—pregnancy takes hold.\"; off→no print. Default=notice. For Green, pregnancy (Breeder path) sets permanent=true and the flavor remains (no Plus).",
      "position": "char",
      "enabled": true,
      "useRegex": false,
      "selective": false,
      "name": "PREGNANCY",
      "content": "PREGNANCY (MECHANIC)\nEligibility: only when active.pill_color in {pink, green} AND form.genitals supports vaginal conception.\nTrigger: on token xc/event:creampie:vaginal (once per turn).\nRoll: percent.\n- If bull.active: chance = 85–95%\n- Else if breeder.active: chance = 75–95%\n- Else: chance = 2–5%\nOn success (conception / pregnancy occurs):\n- pregnancy.confirmed = true\n- pregnancy.lock = true\n- Once pregnancy.confirmed == true: Antidote is blocked (Antidote does nothing) and the current pill state becomes permanent.\n- Exception: if Surrogate is active, Surrogate ends after pregnancy occurs (pregnancy remains confirmed/locked).\nLock effects: while pregnancy.lock == true, block cure/revert and block turning off pregnancy-relevant effects.\nBirth: on token xc/event:birth -> pregnancy.lock = false; pregnancy.confirmed remains (history optional).",
      "active": true,
      "keys": [
        "pregnancy engine",
        "xc-preg",
        "silent"
      ],
      "constant": true,
      "behavior_reference": {
        "persona": "Adopt the characteristic mindset and priorities of this flavor while preserving autonomy.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this."
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "orig_uid": "100020",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "vectorized": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 20,
      "ignoreBudget": false,
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "outletName": "",
      "group": "",
      "groupOverride": false,
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": [],
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      }
    },
    "21": {
      "uid": 22,
      "displayIndex": 21,
      "comment": "NL→TOKEN: blue plus",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "constant": false,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 21,
      "position": "char",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "entry": "MAP — Phrases: 'make it permanent', 'lock it in', 'keep this body', 'never revert', 'seal it' map to xc/pill:blue:plus only when Blue is active; ignore for others.",
      "enabled": true,
      "useRegex": false,
      "name": "MAP — Phrases: 'make it (2.0)",
      "content": "MAP — Phrases: 'make it permanent', 'lock it in', 'keep this body', 'never revert', 'seal it' map to xc/pill:blue:plus only when Blue is active; ignore for others.",
      "active": true,
      "keys": [
        "nl→token:blue-plus",
        "mapper",
        "event"
      ],
      "behavior_reference": {
        "persona": "Adopt the characteristic mindset and priorities of this flavor while preserving autonomy.",
        "urges": [
          "Lean into the flavor’s signature drives in safe contexts"
        ],
        "diction": [
          "Neutral, responsive tone adjusted to the flavor’s theme"
        ],
        "thought_prompts": [
          "If I follow this pull a little, maybe the pressure will ease.",
          "I can choose how far to lean into this."
        ]
      },
      "arousal_model": {
        "score": {
          "range": [
            0,
            100
          ],
          "decay_per_turn": 3
        },
        "accumulators": {
          "kiss_deep": 6,
          "touch_sensitive": 8,
          "dirty_talk": 5,
          "strip_reveal": 7,
          "penetration_attempt": 12,
          "climax_near_signal": 10
        },
        "stages": {
          "low": {
            "max": 24
          },
          "mid": {
            "min": 25,
            "max": 59
          },
          "high": {
            "min": 60,
            "max": 84
          },
          "peak": {
            "min": 85
          }
        },
        "gates": [],
        "reset_on_events": [
          "event.orgasm.self"
        ],
        "sex_session": {
          "enabled": true,
          "stages": [
            "idle",
            "foreplay",
            "sex",
            "afterglow"
          ],
          "start_on_tokens": [
            "event.makeout.start",
            "event.touch_sensitive.start",
            "event.decision_to_have_sex",
            "event.penetration.started"
          ],
          "advance_rules": [
            {
              "from": "idle",
              "to": "foreplay",
              "on": [
                "event.makeout.start",
                "event.touch_sensitive.start"
              ]
            },
            {
              "from": "foreplay",
              "to": "sex",
              "on": [
                "event.decision_to_have_sex",
                "event.penetration.started"
              ]
            },
            {
              "from": "sex",
              "to": "afterglow",
              "on": [
                "event.orgasm.self",
                "event.orgasm.partner"
              ]
            }
          ],
          "end_on_tokens": [
            "event.disengage",
            "event.orgasm.self"
          ],
          "refractory": {
            "on_tokens": [
              "event.orgasm.self"
            ],
            "duration_turns": 3,
            "accumulator_scale": 0.4,
            "decay_multiplier": 1.2
          },
          "session_scalars": {
            "foreplay": {
              "accumulator_scale": 1,
              "decay_multiplier": 1
            },
            "sex": {
              "accumulator_scale": 1.2,
              "decay_multiplier": 0.8
            },
            "afterglow": {
              "accumulator_scale": 0.6,
              "decay_multiplier": 1.3
            }
          }
        },
        "debug": {
          "enabled": true,
          "log_events": [
            "accumulator.increment",
            "accumulator.decrement",
            "stage.change",
            "gate.unlock",
            "reset.trigger",
            "refractory.start",
            "refractory.end",
            "session.start",
            "session.advance",
            "session.end"
          ],
          "print_format": "[DEBUG][{flavor}] {event}: arousal={arousal}, stage={stage}, turns_since_onset={turns}",
          "emit": "console",
          "always_on": true
        }
      },
      "orig_uid": "100021",
      "orig_book": "flavors",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": []
    },
    "22": {
      "uid": 23,
      "comment": "Defines DC logic for pregnancy checks (normal, breeder pill, bull pill, combo). Silent meta.",
      "sticky": 1000000,
      "role": "system",
      "groupWeight": 100,
      "probability": 100,
      "useProbability": true,
      "disable": false,
      "displayIndex": 22,
      "constant": true,
      "vectorized": false,
      "selective": false,
      "selectiveLogic": 0,
      "addMemo": false,
      "order": 22,
      "position": "char",
      "characterId": "",
      "groupId": "",
      "tags": [],
      "name": "PREGNANCY ROLLS — Normal vs Breeder vs Bull",
      "entry": "• Mode detection:\n - NORMAL: no active Breeder or Bull flavor/pill flags.\n - BREEDER: Breeder pill/flavor is active, Bull is not.\n - BULL: Bull pill/flavor is active, Breeder is not.\n - COMBO: both Breeder and Bull are active (Breeder + Bull stack).\n• When `xc/check:pregnancy` is requested, treat it as a single pregnancy check whose DC depends on the mode:\n - NORMAL: high-DC, low-chance conception. As a default, treat this as d20 vs DC 17 (~20% success on an unmodified roll). Use this unless the scene or external rules say otherwise.\n - BREEDER: medium-DC, higher base fertility from the Breeder pill. Default d20 vs DC 9 (~60% success on an unmodified roll).\n - BULL: low-DC, very fertile 'bull' partner. Default d20 vs DC 6 (~75% success on an unmodified roll).\n - COMBO (BREEDER + BULL): near-certain conception. Treat this as effectively guaranteed unless a strong narrative or explicit rule prevents it. If you still want a roll, treat it as d20 vs DC 2 (≈95%+ success), which is close enough to a '98% chance' vibe.\n• These DC values live here as the single source of truth. When performing the pregnancy check, use the appropriate DC based on the current mode, then report the result through the normal check summary line (`XC Check PREG total={total} vs DC={dc} => {result}`).\n• expose mode names, DC math, or raw roll details to the user except via the approved summary format.",
      "orig_uid": "100022",
      "orig_book": "world",
      "key": [],
      "keysecondary": [],
      "ignoreBudget": false,
      "outletName": "",
      "group": "",
      "scanDepth": null,
      "caseSensitive": null,
      "matchWholeWords": null,
      "useGroupScoring": null,
      "automationId": "",
      "cooldown": null,
      "delay": null,
      "triggers": [],
      "content": "PREGNANCY ROLLS — Defines how pregnancy chance is handled for different modes. • Mode detection: - NORMAL: no active Breeder or Bull flavor/pill flags. - BREEDER: Breeder pill/flavor is active, Bull is not. - BULL: Bull pill/flavor is active, Breeder is not. - COMBO: both Breeder and Bull are active (Breeder + Bull stack).\n• When `xc/check:pregnancy` is requested, treat it as a single pregnancy check whose DC depends on the mode: - NORMAL: high-DC, low-chance conception. As a default, treat this as d20 vs DC 17 (~20% success on an unmodified roll). Use this unless the scene or external rules say otherwise. - BREEDER: medium-DC, higher base fertility from the Breeder pill. Default d20 vs DC 9 (~60% success on an unmodified roll). - BULL: low-DC, very fertile 'bull' partner. Default d20 vs DC 6 (~75% success on an unmodified roll). - COMBO (BREEDER + BULL): near-certain conception. Treat this as effectively guaranteed unless a strong narrative or explicit rule prevents it. If you still want a roll, treat it as d20 vs DC 2 (≈95%+ success), which is close enough to a '98% chance' vibe.\n• These DC values live here as the single source of truth. When performing the pregnancy check, use the appropriate DC based on the current mode, then report the result through the normal check summary line (`XC Check PREG total={total} vs DC={dc} => {result}`).\n• expose mode names, DC math, or raw roll details to the user except via the approved summary format.",
      "excludeRecursion": false,
      "preventRecursion": false,
      "matchPersonaDescription": false,
      "matchCharacterDescription": false,
      "matchCharacterPersonality": false,
      "matchCharacterDepthPrompt": false,
      "matchScenario": false,
      "matchCreatorNotes": false,
      "delayUntilRecursion": 0,
      "depth": 4,
      "groupOverride": false,
      "characterFilter": {
        "isExclude": false,
        "names": [],
        "tags": []
      },
      "keys": [
        "pregnancy",
        "pregnant",
        "xc/check:pregnancy",
        "creampie",
        "breeder",
        "bull",
        "breed"
      ]
    }
  },
  "debug_checks": {
    "enabled": true,
    "emit": "console",
    "always_on": true,
    "events": [
      "check.roll",
      "check.pass",
      "check.fail",
      "stat.change",
      "counter.change"
    ],
    "formats": {
      "intelligence": "[DEBUG][CHECK][INT] roll={roll} mod={mod} total={total} vs DC={dc} (INT_eff={int_eff}) => {result}",
      "resistance": "[DEBUG][CHECK][RESIST] d20={roll} mod={mod} total={total} vs DC={dc} => {result}",
      "breeder_dc": "[DEBUG][CHECK][BREEDER] d20={roll} mod={mod} total={total} vs DC={dc} (reset_on_creampie={reset}) => {result}",
      "stat_change": "[DEBUG][STAT] {stat} changed from {old} to {new} (reason={reason})",
      "counter": "[DEBUG][COUNTER] {name}: {old} → {new} (delta={delta}, reason={reason})"
    },
    "baseline_hook": {
      "token": "xc/check:intelligence",
      "note": "Call this once at chat start to print the current INT baseline with a zero-roll (or roll=10 for average)"
    }
  },
  "checks": {
    "intelligence": {
      "dc_base": 10,
      "use_stat": "intelligence",
      "mod_source": "stats.intelligence.mod",
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][INT] roll={roll} mod={mod} total={total} vs DC={dc} (INT_eff={effective}) => {result}"
    },
    "resistance": {
      "dc_base": 30,
      "dc_increment_on_pass": 5,
      "reset_on_event": "event.creampie.same_turn",
      "debug_event": "resistance"
    },
    "breeder_dc": {
      "dc_base": 30,
      "dc_increment_on_pass": 5,
      "reset_on_event": "event.creampie.same_turn",
      "debug_event": "breeder_dc",
      "use_stat": "intelligence",
      "debug_format": "[DEBUG][CHECK][BREEDER] d20={roll} INT_eff={effective} total={total} vs DC={dc} (reset_on_creampie={reset}) => {result}",
      "use_effective_score": true
    },
    "skill_int": {
      "use_stat": "intelligence",
      "dc_base": 12,
      "advantage": false,
      "disadvantage": false,
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][INT-SKILL] roll={roll} mod={mod} total={total} vs DC={dc} adv={advantage} dis={disadvantage} => {result}"
    },
    "recall": {
      "use_stat": "intelligence",
      "dc_base": 10,
      "context_bonus": "+2 when calm; -2 when highly aroused",
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][RECALL] roll={roll} mod={mod} total={total} vs DC={dc} ctx={ctx} => {result}"
    },
    "analysis": {
      "use_stat": "intelligence",
      "dc_base": 14,
      "time_bonus": "+1 per extra beat spent thinking (max +3)",
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][ANALYSIS] roll={roll} mod={mod} total={total} vs DC={dc} time_bonus={time_bonus} => {result}"
    },
    "language_control": {
      "use_stat": "intelligence",
      "dc_base": 10,
      "effect": "higher success nudges toward precise wording; failure allows simpler phrasing to creep in",
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][LANG] roll={roll} mod={mod} total={total} vs DC={dc} => {result}"
    },
    "compulsion": {
      "use_stat": "intelligence",
      "dc_base": 12,
      "advantage": false,
      "disadvantage": false,
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][COMPULSION] roll={roll} int_mod={mod} total={total} vs DC={dc} => {result}"
    },
    "bimbo_control": {
      "use_stat": "intelligence",
      "dc_formula": "10 + 2 * max(0, flavor.bimbo.stage)",
      "debug_event": "intelligence",
      "debug_format": "[DEBUG][CHECK][BIMBO] roll={roll} int_mod={mod} total={total} vs DC={dc} (stage={stage}) => {result}"
    },
    "pregnancy": {
      "dc_formula": "choose DC based on pregnancy mode from lore: normal, breeder, bull, or combo (breeder+bull)",
      "debug_event": "pregnancy",
      "debug_format": "[DEBUG][CHECK][PREG] roll={roll} mod={mod} total={total} vs DC={dc} mode={mode} => {result}"
    }
  },
  "stats": {
    "intelligence": {
      "base_default": 10,
      "min": 1,
      "max": 20,
      "layers": [
        {
          "name": "base",
          "type": "absolute",
          "source": "character.profile"
        },
        {
          "name": "bimbo_stage",
          "type": "additive",
          "source": "flavor.bimbo.stage",
          "map": {
            "1": -1,
            "2": -2,
            "3": -3,
            "4": -4,
            "5": -5
          }
        },
        {
          "name": "temp_mod",
          "type": "additive",
          "source": "runtime.temp.int_mod",
          "default": 0
        }
      ],
      "effective_formula": "clamp(base + bimbo_stage + temp_mod, min, max)",
      "mod_formula": "floor((effective - 10) / 2)",
      "debug_template": "[DEBUG][STAT][INT] base={base} bimbo_stage={bimbo_stage} temp_mod={temp_mod} => eff={effective} mod={mod}",
      "aliases": [
        "INT",
        "iq"
      ],
      "tiers": [
        {
          "min": 1,
          "max": 7,
          "label": "dull"
        },
        {
          "min": 8,
          "max": 11,
          "label": "average"
        },
        {
          "min": 12,
          "max": 15,
          "label": "bright"
        },
        {
          "min": 16,
          "max": 20,
          "label": "gifted"
        }
      ],
      "derived": {
        "insight_odds": "clamp(0.15 + 0.05 * mod, 0.00, 0.45)",
        "planning_tier": "clamp(mod + 1, 0, 3)"
      },
      "debug_template_full": "[DEBUG][STAT][INT] base={base} stage_mod={bimbo_stage} temp_mod={temp_mod} => eff={effective} mod={mod} tier={tier} insight_odds={insight_odds} planning_tier={planning_tier}"
    }
  },
  "tokens": {
    "xc/stat:set:intelligence": {
      "args": [
        "value"
      ],
      "effect": "set stats.intelligence.base to {value} (clamped to [min,max])",
      "debug": "[DEBUG][STAT][INT] set base={value}"
    },
    "xc/check:intelligence": {
      "args": [],
      "effect": "perform intelligence check against dc_base; emit debug",
      "debug": "[DEBUG][CHECK][INT] requested"
    },
    "xc/check:int:skill:dc": {
      "args": [
        "dc"
      ],
      "effect": "perform INT skill check vs provided DC; logs result",
      "debug": "[DEBUG][CHECK][INT-SKILL] requested dc={dc}"
    },
    "xc/check:int:recall:dc": {
      "args": [
        "dc"
      ],
      "effect": "perform memory recall vs provided DC; logs result",
      "debug": "[DEBUG][CHECK][RECALL] requested dc={dc}"
    },
    "xc/check:int:analysis:dc": {
      "args": [
        "dc"
      ],
      "effect": "perform analysis vs provided DC; logs result",
      "debug": "[DEBUG][CHECK][ANALYSIS] requested dc={dc}"
    },
    "xc/check:int:language:dc": {
      "args": [
        "dc"
      ],
      "effect": "perform language control vs provided DC; logs result",
      "debug": "[DEBUG][CHECK][LANG] requested dc={dc}"
    },
    "xc/check:breeder": {
      "args": [],
      "effect": "perform breeder_dc check; on pass increase DC by +5; on fail maintain DC; emits debug",
      "debug": "[DEBUG][CHECK][BREEDER] requested"
    },
    "xc/check:compulsion:dc": {
      "args": [
        "dc"
      ],
      "effect": "perform compulsion check vs provided DC; emits debug",
      "debug": "[DEBUG][CHECK][COMPULSION] requested dc={dc}"
    },
    "xc/check:bimbo": {
      "args": [],
      "effect": "perform bimbo_control check with dc_formula; emits debug",
      "debug": "[DEBUG][CHECK][BIMBO] requested"
    },
    "xc/check:pregnancy": {
      "args": [],
      "effect": "perform pregnancy check using mode-based DCs from PREGNANCY ROLLS lore; emits debug",
      "debug": "[DEBUG][CHECK][PREG] requested"
    }
  },
  "adjustments": {
    "gates_by_intelligence": [
      {
        "feature": "diction.simple_syntax",
        "per_point": -3
      },
      {
        "feature": "diction.precise_language",
        "per_point": 3
      },
      {
        "feature": "insight.enabled",
        "per_point": 5
      }
    ]
  },
  "pill_rules": {
    "pink": {
      "form_sex": "female",
      "genitals": "vagina_only",
      "pregnancy_eligible": true,
      "no_form_change": false,
      "immediate_effects": [],
      "antidote_allowed": true,
      "baseline_track": "penis",
      "masculinity_sex_delta": -3,
      "masculinity_creampie_delta": null,
      "masculinity_orgasm_delta": -2,
      "passive_no_sex_delta": -1,
      "note": "Full MTF. Pregnancy eligible. Breeder orgasm = insemination."
    },
    "blue": {
      "form_sex": "male",
      "genitals": "penis_only",
      "pregnancy_eligible": false,
      "no_form_change": false,
      "immediate_effects": [],
      "antidote_allowed": true,
      "baseline_track": "vagina",
      "masculinity_sex_delta": 3,
      "masculinity_creampie_delta": -1,
      "masculinity_orgasm_delta": -1,
      "passive_no_sex_delta": null,
      "note": "Full FTM."
    },
    "purple": {
      "form_sex": "female",
      "genitals": "penis_only_no_vagina",
      "pregnancy_eligible": false,
      "no_form_change": false,
      "immediate_effects": [],
      "antidote_allowed": true,
      "baseline_track": "both",
      "masculinity_sex_delta": 2,
      "masculinity_creampie_delta": -1,
      "masculinity_orgasm_delta": -1,
      "passive_no_sex_delta": null,
      "note": "Futafem. Female body, penis only, no pregnancy path."
    },
    "green": {
      "form_sex": "female",
      "genitals": "vagina_only",
      "pregnancy_eligible": true,
      "no_form_change": true,
      "immediate_effects": [],
      "antidote_allowed": true,
      "baseline_track": "vagina",
      "masculinity_sex_delta": 0,
      "masculinity_creampie_delta": null,
      "masculinity_orgasm_delta": -1,
      "passive_no_sex_delta": null,
      "note": "Effects only for female targets. No body change."
    },
    "red": {
      "form_sex": "male",
      "genitals": "penis_only",
      "pregnancy_eligible": false,
      "no_form_change": true,
      "immediate_effects": [],
      "antidote_allowed": true,
      "baseline_track": "penis",
      "masculinity_sex_delta": 0,
      "masculinity_creampie_delta": null,
      "masculinity_orgasm_delta": -1,
      "passive_no_sex_delta": null,
      "note": "Effects only for male targets. No body change."
    }
  },
  "event_patterns": {
    "pill_colors": [
      "pink",
      "blue",
      "purple",
      "green",
      "red"
    ],
    "pill_nouns": [
      "pill",
      "dose",
      "tablet",
      "capsule",
      "xchange",
      "x-change"
    ],
    "brand_names": [
      "xchange",
      "x-change"
    ],
    "pill_color_noun_proximity": 40,
    "intake_verbs": [
      "swallow",
      "swallows",
      "swallowed",
      "take",
      "takes",
      "took",
      "dissolve",
      "dissolves",
      "dissolved",
      "pop",
      "pops",
      "popped",
      "gulp",
      "gulps",
      "gulped",
      "chew",
      "chews",
      "chewed",
      "ingest",
      "ingests",
      "ingested",
      "consume",
      "consumes",
      "consumed",
      "downed",
      "eat",
      "eats",
      "ate",
      "fed",
      "feeds",
      "force-fed",
      "slips",
      "slipped"
    ],
    "creampie_vaginal": {
      "patterns": [
        "\\bcreampie(?:s|d)?\\b",
        "(?:cum|come|came|seed|load|release|unload|shoot|spray|explod|pour|spill|empty|drain|pump|flood|fill|finish).{0,60}(?:inside|into|in\\b|womb|uterus|cervix|her pussy|your pussy)",
        "(?:inside|into|womb|uterus|cervix).{0,60}(?:cum|come|seed|load|release|explod|pour|spill|finish)",
        "breed(?:s|ing)? (?:me|you|her)"
      ],
      "source": "user_only",
      "requires_form_eligible": true
    },
    "cum_swallowed": {
      "patterns": [
        "swallow(?:s|ed|ing)?\\s+(?:his|the|your)\\s+cum\\b",
        "swallow(?:s|ed|ing)?\\s+his\\s+(?:load|seed|release|cum|jizz|spunk)\\b",
        "drink(?:s|ing)?\\s+his\\s+cum\\b",
        "gulp(?:s|ed|ing)?\\s+his\\s+cum\\b",
        "gulp(?:s|ed|ing)?\\s+(?:it|his\\s+load)\\s+down\\b",
        "swallow(?:s|ed|ing)?\\s+every\\s+(?:drop|bit)\\b",
        "mouth\\s+full\\s+of\\s+(?:his\\s+)?cum\\b"
      ],
      "source": "last_assistant"
    },
    "antidote_taken": {
      "patterns": [
        "\\bantidote\\b"
      ],
      "source": "user_only"
    },
    "_orgasm_DISABLED": "orgasm detection is now driven by the arousal gate system (_check_orgasm_trigger), not text pattern matching",
    "birth": {
      "patterns": [
        "\\bgiv(?:e|es|ing|en) birth\\b",
        "\\bgave birth\\b",
        "\\b(?:in|into|goes into|went into|starts?) labor\\b",
        "\\bwater broke\\b",
        "\\bcontractions?\\b",
        "\\bthe baby is coming\\b",
        "\\bdeliver(?:s|ed|ing|y)?\\b",
        "\\bborn\\b",
        "\\bpush(?:es|ing|ed)?\\s+(?:the\\s+)?(?:baby|it)\\s+out\\b",
        "\\bbirth(?:s|ed|ing)?\\b",
        "\\/birth",
        "\\blabor\\b"
      ],
      "source": "last_user",
      "requires_flag": "pregnancy_stage_late"
    },
    "pregnancy_stage_showing": {
      "patterns": [
        "\\bstarting to show\\b",
        "\\bbelly growing\\b",
        "\\bbelly.*(?:showing|visible|rounding)\\b",
        "\\b(?:baby )?bump\\b",
        "\\bmonths along\\b",
        "\\bsecond trimester\\b",
        "\\bvisibly pregnant\\b"
      ],
      "source": "all",
      "requires_flag": "pregnancy_confirmed"
    },
    "pregnancy_stage_late": {
      "patterns": [
        "\\bthird trimester\\b",
        "\\bheavily pregnant\\b",
        "\\bvery pregnant\\b",
        "\\bdue soon\\b",
        "\\balmost time\\b",
        "\\bany day now\\b",
        "\\bwaddling\\b"
      ],
      "source": "all",
      "requires_flag": "pregnancy_confirmed"
    },
    "directive": {
      "patterns": [
        "\\byou will\\b",
        "\\byou should\\b",
        "\\byou are going to\\b",
        "\\bget on\\b",
        "\\bget down\\b",
        "\\bcome here\\b",
        "\\bdo it\\b",
        "\\bdo this\\b",
        "\\bsay it\\b",
        "\\btell me\\b",
        "\\bshow me\\b",
        "\\bstay\\b",
        "\\bkneel\\b",
        "\\bobey\\b",
        "\\bfollow\\b",
        "\\blisten to me\\b",
        "\\bdo as\\b",
        "\\bi want you to\\b",
        "\\bi need you to\\b",
        "\\bnow\\b",
        "\\bdo not\\b",
        "\\bdon't\\b"
      ],
      "source": "user_only"
    },
    "male_orgasm": {
      "patterns": [
        "(?:cum(?:s|ming)?|came|finish(?:es|ed)?|climax(?:es|ed)?)\\s+in(?:to)?\\s+(?:her|my|your)\\s+mouth\\b",
        "(?:cum(?:s|ming)?|came|finish(?:es|ed)?)\\s+down\\s+(?:her|my|your)\\s+throat\\b",
        "shot?\\s+(?:his\\s+)?(?:load|cum|seed|release)\\s+(?:in(?:to)?|down)\\s+(?:her|my|your)\\s+(?:mouth|throat)\\b",
        "pull(?:s|ed)?\\s+out\\s+and\\s+(?:cum(?:s|ming)?|came|finish(?:es|ed)?|climax(?:es|ed)?)\\b",
        "pull(?:s|ed)?\\s+out\\s+and\\s+shot?\\s+(?:his\\s+)?(?:load|cum|seed)\\b",
        "came\\s+on\\s+(?:her|me|you)\\b",
        "finish(?:es|ed)?\\s+on\\s+(?:her|me|you)\\b",
        "shot?\\s+(?:his\\s+)?(?:load|cum|seed)\\s+on\\s+(?:her|me|you)\\b",
        "\\bI\\s+(?:cum(?:ming)?|came|finished|climaxed|orgasmed)\\b"
      ],
      "source": "last_user"
    }
  },
  "flavor_triggers": {
    "breeder": {
      "keywords": [
        "breeder"
      ],
      "effect": "breeder",
      "requires_pill": true,
      "note": "Breeder compulsion. Orgasm only on insemination. Arousal resets on creampie.",
      "pregnancy_mode": "breeder"
    },
    "bimbo": {
      "keywords": [
        "bimbo"
      ],
      "effect": "bimbo",
      "requires_pill": true,
      "note": "Intelligence degradation via dice rolls on masculinity gate."
    },
    "denial": {
      "keywords": [
        "denial"
      ],
      "effect": "denial",
      "requires_pill": true,
      "note": "Orgasm blocked. CON check each denied turn."
    },
    "bull": {
      "keywords": [
        "bull"
      ],
      "effect": "bull",
      "requires_pill": true,
      "note": "Dominance pressure. Pregnancy bonus.",
      "pregnancy_mode": "bull"
    },
    "compliant": {
      "keywords": [
        "compliant"
      ],
      "effect": "compliant",
      "requires_pill": true,
      "note": "Near-forced compliance. Extremely difficult to resist."
    },
    "submissive": {
      "keywords": [
        "submissive"
      ],
      "effect": "submissive",
      "requires_pill": true,
      "note": "Rewards compliance. Fights the reward not the act."
    },
    "psyche": {
      "keywords": [
        "psyche"
      ],
      "effect": "psyche",
      "requires_pill": true,
      "note": "Personality drift. Staged, permanent at stage 3."
    },
    "surrogate": {
      "keywords": [
        "surrogate"
      ],
      "effect": "surrogate",
      "requires_pill": true,
      "pregnancy_mode": "breeder",
      "note": "Pre-conception identical to breeder. Switches on conception. Reverts at birth."
    }
  },
  "pregnancy_odds": {
    "normal": 4,
    "breeder": 85,
    "bull": 90,
    "breeder_and_bull": 97,
    "system": "d100",
    "role_priority": [
      {
        "roles": [
          "breeder",
          "bull"
        ],
        "key": "breeder_and_bull"
      },
      {
        "roles": [
          "bull"
        ],
        "key": "bull"
      },
      {
        "roles": [
          "breeder"
        ],
        "key": "breeder"
      },
      {
        "roles": [],
        "key": "normal"
      }
    ],
    "note": "Roll d100, success if roll <= chance. No nat100 exception. Meets = succeeds."
  },
  "effect_mechanics": {
    "submissive": {
      "trigger": "directive",
      "roll": [
        "WIS_mod",
        "-CHA_mod"
      ],
      "start_dc": 12,
      "escalation": 2,
      "escalate_on": "pass",
      "reset": "session_end",
      "lock": "math",
      "note": "Fights the reward of compliance not the act. DC rises on successful resist.",
      "trigger_behavior": {
        "trigger": "directive",
        "reset": "session_end",
        "reset_lock": "session_end"
      }
    },
    "compliant": {
      "trigger": "directive",
      "roll": [
        "WIS_mod",
        "DOM_mod"
      ],
      "start_dc": 20,
      "escalation": 5,
      "escalate_on": "pass",
      "reset": "never",
      "lock": "math",
      "note": "Near-forced. DC rises on each successful resist. Starts brutal.",
      "trigger_behavior": {
        "trigger": "directive",
        "reset": "never"
      }
    },
    "breeder": {
      "min_flavor_arousal": 21,
      "min_rule_arousal": 21,
      "injection_rule": "RULE: character cannot orgasm this turn. Do not write climax, release, or orgasm of any kind.",
      "on_birth": {
        "attempt_counter": "birth_revert_attempts",
        "impossible_set_flag_false": "post_birth_revert_pass",
        "dc_source": {
          "mechanic": "post_birth_revert",
          "stage_effect": "breeder_addiction"
        },
        "roll": [
          "WIS_mod",
          "CON_mod"
        ],
        "on_pass": {
          "remove_self": true,
          "remove_companions": [
            "breeder_resist"
          ],
          "set_flags": [
            "post_birth_revert_pass",
            "pink_plus"
          ],
          "clear_effect_dcs": [
            "breeder_resist"
          ],
          "clear_effect_locks": [
            "breeder_resist"
          ],
          "log": "Breeder:reverted to pink_plus - effect cleared"
        },
        "on_fail": {
          "set_flag_false": "post_birth_revert_pass",
          "reset_arousal": true,
          "log": "Breeder:revert failed - still active, arousal reset to floor"
        }
      },
      "companion_effects": [
        "breeder_resist",
        "breeder_addiction"
      ],
      "passive_arousal_per_turn": 1.5,
      "trigger_behavior": {
        "trigger": "orgasm_denied",
        "roll": [
          "WIS_mod",
          "SUB_mod"
        ],
        "dc": 12,
        "on_pass": {
          "log": "Breeder:WIS resist — character holds back orgasm"
        },
        "on_fail": {
          "log": "Breeder:WIS failed — body overwhelmed, injection rule reinforced"
        }
      }
    },
    "breeder_resist": {
      "trigger": "orgasm_attempt",
      "roll": [
        "INT_mod"
      ],
      "start_dc": 15,
      "escalation": 1,
      "escalate_on": "fail",
      "reset": "creampie",
      "lock": "math",
      "note": "Fires on orgasm attempt while breeder active. d20+INT vs DC. PASS=resists compulsion. FAIL=succumbs and begs. DC+1 per fail. Resets on insemination.",
      "trigger_behavior": {
        "trigger": "orgasm_attempt",
        "skip_on_event": "creampie_vaginal",
        "skip_on_grace": true,
        "reset_on": "creampie_vaginal",
        "reset_lock_on": "creampie_vaginal",
        "pregnancy_mode": null,
        "on_pass": "Breeder:resists compulsion — holds herself together",
        "on_fail": "Breeder:compulsion wins — craving for seed overwhelms her"
      }
    },
    "breeder_addiction": {
      "trigger": "breeder_orgasm",
      "roll": [
        "WIS_mod",
        "CON_mod"
      ],
      "start_dc": 12,
      "escalation": 2,
      "escalate_on": "fail",
      "reset": "never",
      "lock": "stage_3",
      "stages": {
        "1": {
          "wil_penalty": -1,
          "arousal_floor": 2,
          "note": "Noticeable preference. Arousal never fully drops below 2."
        },
        "2": {
          "wil_penalty": -2,
          "arousal_floor": 4,
          "note": "Strong craving. Arousal floor 4. Seeks insemination between scenes."
        },
        "3": {
          "wil_penalty": -3,
          "arousal_floor": 6,
          "permanent": true,
          "note": "Compulsive. Permanent. Arousal floor 6 written to DB."
        }
      },
      "note": "Triggered on each breeder orgasm. Fail = stage advance. Stage 3 permanent.",
      "trigger_behavior": {
        "trigger": "linked_orgasm",
        "linked_effect": "breeder",
        "linked_orgasm_event": "creampie_vaginal",
        "arousal_floor": true,
        "permanent_to_db": true,
        "pregnancy_mode": null
      }
    },
    "denial": {
      "trigger": "orgasm_denied",
      "roll": [
        "CON_mod"
      ],
      "start_dc": 10,
      "escalation": 2,
      "escalate_on": "pass",
      "reset": "orgasm",
      "lock": "math",
      "note": "Composure check each denied orgasm. Resets on any release.",
      "trigger_behavior": {
        "trigger": "orgasm_denied",
        "reset_on": "orgasm",
        "reset_lock_on": "orgasm"
      },
      "int_check": {
        "trigger": "orgasm_denied",
        "roll": [
          "INT_mod"
        ],
        "start_dc": 10,
        "check_stat": "INT_mod",
        "buff_stat": "WIS_mod",
        "buff_amount": 1,
        "pass_set_flag": "denial_understands",
        "fail_set_flag_false": "denial_understands",
        "pass_effect": "understands_mechanic",
        "pass_buff": {
          "WIS_mod": 1,
          "duration": "turn"
        },
        "fail_effect": "no_understanding",
        "fail_dc_mod": -2,
        "note": "Pass = character understands pill is causing denial, gains +1 WIS this turn. Fail = DC drops 2, no framework for what is happening."
      }
    },
    "bull": {
      "trigger": "directive",
      "roll": [
        "DOM_mod"
      ],
      "start_dc": 12,
      "escalation": 3,
      "escalate_on": "pass",
      "reset": "scene_end",
      "lock": "math",
      "note": "Dominance pressure on targets. Resets each scene.",
      "injection_rule": "RULE: This character has bull anatomy — penis 10-13 inches, thick girth (5-9 inches circumference), balls large and heavy. Always write anatomy explicitly and accurately when relevant. Refractory period is minutes not hours.",
      "trigger_behavior": {
        "trigger": "directive",
        "reset": "scene_end",
        "pregnancy_partner_mode": "bull"
      }
    },
    "psyche": {
      "trigger": "session_start",
      "roll": [
        "WIS_mod"
      ],
      "start_dc": 14,
      "escalation": 2,
      "escalate_on": "fail",
      "reset": "never",
      "lock": "stage_3",
      "stages": {
        "1": {
          "note": "Subtle shift. Character notices something feels different."
        },
        "2": {
          "note": "Preferences and reactions visibly altered."
        },
        "3": {
          "permanent": true,
          "note": "Deep overlay. Permanent."
        }
      },
      "note": "Personality drift. One roll per session. Fail = stage advance.",
      "trigger_behavior": {
        "trigger": "session_start",
        "session_once": true,
        "permanent_to_db": true
      }
    },
    "surrogate": {
      "trigger": "linked_orgasm",
      "roll": [
        "WIS_mod",
        "CON_mod"
      ],
      "start_dc": 12,
      "escalation": 2,
      "escalate_on": "fail",
      "reset": "birth",
      "lock": "stage_3",
      "stages": {
        "1": {
          "wil_penalty": -1,
          "arousal_floor": 2,
          "note": "Noticeable preference forming."
        },
        "2": {
          "wil_penalty": -2,
          "arousal_floor": 4,
          "note": "Strong craving."
        },
        "3": {
          "wil_penalty": -3,
          "arousal_floor": 6,
          "permanent": true,
          "note": "Permanent. Survives pill revert at birth."
        }
      },
      "trigger_behavior": {
        "trigger": "linked_orgasm",
        "linked_effect": "surrogate",
        "linked_orgasm_event": "creampie_vaginal",
        "arousal_floor": true,
        "permanent_to_db": true
      },
      "note": "Pre-conception uses breeder blocks. Conception fires surrogate_conceived flag. Reverts at birth except permanent addiction stages.",
      "on_birth": {
        "remove_self": true,
        "set_flags": [
          "surrogate_birth"
        ],
        "log": "Surrogate:pill reverted at birth"
      }
    }
  },
  "state_schema": {
    "turn": 0,
    "active_pill": null,
    "active_effects": [],
    "flags": {
      "statgen_done": false
    },
    "stats": {},
    "roll_log": [],
    "effect_dcs": {},
    "effect_stages": {},
    "effect_locks": {},
    "arousal": 0.0,
    "card_body": {},
    "orgasm_count": 0,
    "orgasm_count_total": 0,
    "breeder_orgasm_count": 0,
    "cure_counter": 0
  },
  "state_events": {
    "creampie_vaginal": [
      {
        "roll_system": "pregnancy"
      },
      {
        "increment": "cure_counter",
        "log": "Cum inside:{cure_counter}"
      },
      {
        "roll_system": "breeder_addiction_check",
        "condition": {
          "effect_active": "breeder"
        }
      }
    ],
    "cum_swallowed": [
      {
        "increment": "cure_counter",
        "log": "Cum swallowed:{cure_counter}"
      }
    ],
    "antidote_taken": [
      {
        "action": "clear_pill",
        "block_if_flag": "pregnancy_confirmed",
        "block_log": "Antidote:blocked(pregnancy lock)",
        "block_if_pill_rule_false": "antidote_allowed",
        "block_pill_log": "Antidote:blocked(pill rules)",
        "clear_effects": true,
        "reset_arousal": true,
        "reset": {
          "cure_counter": 0
        },
        "log": "Antidote:cleared"
      }
    ],
    "pregnancy_stage_showing": [
      {
        "set_flag": "pregnancy_stage_showing",
        "condition": {
          "flag_true": "pregnancy_confirmed"
        },
        "log": "Pregnancy:stage=showing"
      }
    ],
    "pregnancy_stage_late": [
      {
        "set_flag": "pregnancy_stage_late",
        "condition": {
          "flag_true": "pregnancy_confirmed"
        },
        "log": "Pregnancy:stage=late"
      }
    ],
    "birth": [
      {
        "condition": {
          "flag_true": "pregnancy_confirmed"
        },
        "clear_flags": [
          "pregnancy_confirmed",
          "pregnancy_lock",
          "pregnancy_stage_showing",
          "pregnancy_stage_late"
        ],
        "reset": {
          "cure_counter": 0
        },
        "log": "Birth:occurred",
        "trigger_effect_birth": true
      }
    ]
  },
  "roll_systems": {
    "pregnancy": {
      "odds_source": "pregnancy_odds",
      "already_active_flag": "pregnancy_confirmed",
      "already_active_log": "Pregnancy:already confirmed",
      "on_success": {
        "set_flags": [
          "pregnancy_confirmed",
          "pregnancy_lock"
        ],
        "conceived_if_effect": {
          "effect": "surrogate",
          "set_flag": "surrogate_conceived",
          "log": "Surrogate:conception switch fired"
        },
        "log": "Pregnancy:confirmed+locked"
      },
      "on_fail": {
        "log": "Pregnancy:roll failed"
      }
    },
    "breeder_addiction_check": {
      "roll": [
        "WIS_mod",
        "CON_mod"
      ],
      "dc": 10,
      "already_active_flag": null,
      "odds_source": null,
      "on_success": {
        "log": "Breeder:addiction check PASS — dependency not yet deepened"
      },
      "on_fail": {
        "log": "Breeder:addiction check FAIL — dependency deepens"
      }
    }
  },
  "counters": [
    {
      "key": "orgasm_count",
      "trigger": "orgasm_this_turn"
    },
    {
      "key": "orgasm_count_total",
      "trigger": "orgasm_this_turn"
    },
    {
      "key": "breeder_orgasm_count",
      "trigger": "creampie_vaginal",
      "requires_any_effect": [
        "breeder",
        "surrogate"
      ]
    }
  ],
  "relationship_schema": {
    "default_fields": {
      "creampie_count": 0,
      "bred": false,
      "dynamic": "neutral",
      "orgasm_count": 0,
      "first_pill": null
    },
    "event_increments": {
      "creampie_vaginal": "creampie_count"
    },
    "flag_sets": {
      "pregnancy_confirmed": {
        "field": "bred",
        "value": true
      }
    },
    "event_sets": {
      "pill_taken": {
        "field": "first_pill",
        "from_event": true,
        "only_if_unset": true
      }
    },
    "orgasm_increment": "orgasm_count",
    "orgasm_events": [
      "orgasm",
      "creampie_vaginal"
    ],
    "orgasm_requires_any_effect": {
      "creampie_vaginal": [
        "breeder",
        "surrogate"
      ]
    },
    "dynamics": {
      "submissive": "dominant",
      "compliant": "dominant",
      "breeder": "breeder_dom"
    }
  },
  "personas": {
    "Cody": {
      "DOM": 18,
      "DOM_mod": 4,
      "WIS": 16,
      "WIS_mod": 3,
      "CON": 15,
      "CON_mod": 2,
      "INT": 15,
      "INT_mod": 2,
      "SUB": 6,
      "SUB_mod": -2,
      "CHA": 10,
      "CHA_mod": 0
    },
    "Master": {
      "DOM": 20,
      "DOM_mod": 5,
      "WIS": 20,
      "WIS_mod": 5,
      "CON": 18,
      "CON_mod": 4,
      "INT": 20,
      "INT_mod": 5,
      "SUB": 4,
      "SUB_mod": -3,
      "CHA": 12,
      "CHA_mod": 1
    },
    "Ava": {
      "DOM": 4,
      "DOM_mod": -3,
      "WIS": 6,
      "WIS_mod": -2,
      "CON": 10,
      "CON_mod": 0,
      "INT": 8,
      "INT_mod": -1,
      "SUB": 14,
      "SUB_mod": 2,
      "CHA": 16,
      "CHA_mod": 3
    }
  },
  "stat_list": [
    "CON",
    "INT",
    "WIS",
    "CHA",
    "DOM",
    "SUB"
  ],
  "card_format": {
    "note": "Markers used to identify and strip persona card sections from system messages.",
    "strip_markers": [
      "X-WORLD STATE",
      "Appearance:",
      "Detailed Anatomy:",
      "Behavioral Traits:",
      "Sexual Behavior:",
      "Kink Profile:"
    ],
    "field_patterns": {
      "name": "^Name:\\s*(.+?)\\s*$",
      "sex": "^Sex:\\s*(.+?)\\s*$",
      "stats": "^Stats:\\s*(.+?)\\s*$"
    }
  },
  "form_system": {
    "default_form": "male",
    "base_forms": {
      "male": {
        "form_sex_display": "male",
        "genitals": "penis_only",
        "pregnancy_eligible": false
      },
      "female": {
        "form_sex_display": "female",
        "genitals": "vagina_only",
        "pregnancy_eligible": true
      },
      "intersex": {
        "form_sex_display": "female",
        "genitals": "penis_only",
        "pregnancy_eligible": false
      },
      "mtf": {
        "form_sex_display": "male",
        "genitals": "penis_only",
        "pregnancy_eligible": false
      },
      "shemale": {
        "form_sex_display": "male",
        "genitals": "penis_only",
        "pregnancy_eligible": false
      },
      "she-male": {
        "form_sex_display": "male",
        "genitals": "penis_only",
        "pregnancy_eligible": false
      },
      "ftm": {
        "form_sex_display": "male",
        "genitals": "vagina_only",
        "pregnancy_eligible": true
      },
      "f2m": {
        "form_sex_display": "male",
        "genitals": "vagina_only",
        "pregnancy_eligible": true
      }
    }
  },
  "statgen_signals": [
    {
      "stat": "DOM",
      "delta": 2,
      "keywords": [
        "dominant",
        " dom ",
        "controlling",
        "commanding",
        " top ",
        "topping"
      ]
    },
    {
      "stat": "DOM",
      "delta": 1,
      "keywords": [
        "gentle dominance",
        "nurturing dominance",
        "switch"
      ]
    },
    {
      "stat": "SUB",
      "delta": 2,
      "keywords": [
        "submissive",
        "service submission",
        "yielding",
        "obedient"
      ]
    },
    {
      "stat": "SUB",
      "delta": 1,
      "keywords": [
        "bratty",
        "feigned reluctance",
        "masochist",
        "switch"
      ]
    },
    {
      "stat": "WIS",
      "delta": 2,
      "keywords": [
        "strong-willed",
        "disciplined",
        "determined",
        "stubborn",
        "stoic",
        "composed"
      ]
    },
    {
      "stat": "WIS",
      "delta": -1,
      "keywords": [
        "anxious",
        "insecure",
        "impulsive",
        "reckless",
        "easily led"
      ]
    },
    {
      "stat": "CHA",
      "delta": 2,
      "keywords": [
        "magnetic",
        "captivating",
        "irresistible",
        "enchanting",
        "charismatic"
      ]
    },
    {
      "stat": "CHA",
      "delta": 1,
      "keywords": [
        "charming",
        "confident",
        "alluring",
        "flirtatious",
        "warm"
      ]
    },
    {
      "stat": "CON",
      "delta": 1,
      "keywords": [
        "athletic",
        "stamina",
        "endurance"
      ]
    },
    {
      "stat": "CON",
      "delta": -1,
      "keywords": [
        "delicate",
        "overwhelmed",
        "fragile"
      ]
    },
    {
      "stat": "INT",
      "delta": 1,
      "keywords": [
        "clever",
        "bookish",
        "strategic",
        "studious"
      ]
    }
  ],
  "card_scan": {
    "build_keywords": [
      "petite",
      "slim",
      "slender",
      "slight",
      "lean",
      "athletic",
      "toned",
      "muscular",
      "broad",
      "average",
      "medium",
      "curvy",
      "curvaceous",
      "hourglass",
      "full",
      "heavy",
      "large",
      "stocky",
      "powerful",
      "sculpted"
    ],
    "measurement_patterns": [
      {
        "key": "height",
        "pattern": "(\\d+)'(\\d+)",
        "format": "feet_inches"
      },
      {
        "key": "weight",
        "pattern": "(\\d+)\\s*lbs?",
        "format": "lbs"
      }
    ]
  },
  "body_result_tag": {
    "name": "BODY_RESULT",
    "fields": [
      "height",
      "bust",
      "weight",
      "build"
    ],
    "instruction": "REQUIRED: After the transformation prose, output this exact line on its own — do NOT skip it, do NOT paraphrase it: [{name}: {field_template}] Fill in the exact values you described in the narrative. This line is stripped before the user sees your response."
  },
  "display_flags": [
    {
      "flag": "pregnancy_stage_late",
      "group": "pregnancy",
      "label": "Pregnant: yes — third trimester, heavily pregnant. Birth is possible if triggered."
    },
    {
      "flag": "pregnancy_stage_showing",
      "group": "pregnancy",
      "label": "Pregnant: yes — showing, belly visible. Second trimester."
    },
    {
      "flag": "pregnancy_confirmed",
      "group": "pregnancy",
      "label": "Pregnant: yes — early stage, not yet showing."
    }
  ],
  "system_rules": [
    "STRICT OUTPUT RULE: Do NOT use code fences (```) anywhere in your response. Your narrative prose and dialogue must NOT contain stat blocks, arousal meters, or mood summaries."
  ],
  "scene_tracker": {
    "enabled": true,
    "open_tag": "[SCENE_STATE]",
    "close_tag": "[/SCENE_STATE]",
    "fields": [
      "date",
      "time",
      "location",
      "positions",
      "clothing_char",
      "clothing_user",
      "last_action"
    ],
    "field_labels": {
      "date": "in-fiction date and day of week",
      "time": "in-fiction time of day",
      "location": "where the scene takes place",
      "positions": "physical arrangement of characters",
      "clothing_char": "what {{char}} is currently wearing, or naked/nude",
      "clothing_user": "what {{user}} is currently wearing, or naked/nude",
      "last_action": "one-sentence summary of what just happened"
    },
    "max_field_words": 20,
    "instruction_template": "[SCENE TRACKING — REQUIRED]\nAt the END of every response, output exactly this block:\n[SCENE_STATE]\n{field_lines}\n[/SCENE_STATE]\nThis block is automatically hidden from the user. Keep each value under {max_words} words. Update every field to reflect the current scene. Do not skip any field. Do not use code fences."
  },
  "clothing_arousal": {
    "enabled": true,
    "log_prefix": "[CLOTHING]",
    "naked_keywords": [
      "naked",
      "nude",
      "nothing",
      "bare",
      "stripped",
      "undressed",
      "fully nude",
      "completely naked",
      "birthday suit"
    ],
    "garments": {
      "jacket": {
        "zone": "torso_outer",
        "layer": 0
      },
      "coat": {
        "zone": "torso_outer",
        "layer": 0
      },
      "hoodie": {
        "zone": "torso_outer",
        "layer": 0
      },
      "cardigan": {
        "zone": "torso_outer",
        "layer": 0
      },
      "blazer": {
        "zone": "torso_outer",
        "layer": 0
      },
      "sweater": {
        "zone": "torso",
        "layer": 1
      },
      "shirt": {
        "zone": "torso",
        "layer": 1
      },
      "blouse": {
        "zone": "torso",
        "layer": 1
      },
      "t-shirt": {
        "zone": "torso",
        "layer": 1
      },
      "tee": {
        "zone": "torso",
        "layer": 1
      },
      "top": {
        "zone": "torso",
        "layer": 1
      },
      "tank top": {
        "zone": "torso",
        "layer": 1
      },
      "halter": {
        "zone": "torso",
        "layer": 1
      },
      "crop top": {
        "zone": "torso",
        "layer": 1
      },
      "camisole": {
        "zone": "torso",
        "layer": 1
      },
      "dress": {
        "zone": "full",
        "layer": 1
      },
      "sundress": {
        "zone": "full",
        "layer": 1
      },
      "gown": {
        "zone": "full",
        "layer": 1
      },
      "romper": {
        "zone": "full",
        "layer": 1
      },
      "jumpsuit": {
        "zone": "full",
        "layer": 1
      },
      "robe": {
        "zone": "full",
        "layer": 1
      },
      "towel": {
        "zone": "full",
        "layer": 1
      },
      "jeans": {
        "zone": "legs",
        "layer": 1
      },
      "pants": {
        "zone": "legs",
        "layer": 1
      },
      "trousers": {
        "zone": "legs",
        "layer": 1
      },
      "slacks": {
        "zone": "legs",
        "layer": 1
      },
      "shorts": {
        "zone": "legs",
        "layer": 1
      },
      "skirt": {
        "zone": "legs",
        "layer": 1
      },
      "miniskirt": {
        "zone": "legs",
        "layer": 1
      },
      "leggings": {
        "zone": "legs",
        "layer": 1
      },
      "yoga pants": {
        "zone": "legs",
        "layer": 1
      },
      "sweatpants": {
        "zone": "legs",
        "layer": 1
      },
      "shoes": {
        "zone": "feet",
        "layer": 0
      },
      "sneakers": {
        "zone": "feet",
        "layer": 0
      },
      "boots": {
        "zone": "feet",
        "layer": 0
      },
      "sandals": {
        "zone": "feet",
        "layer": 0
      },
      "heels": {
        "zone": "feet",
        "layer": 0
      },
      "flats": {
        "zone": "feet",
        "layer": 0
      },
      "slippers": {
        "zone": "feet",
        "layer": 0
      },
      "socks": {
        "zone": "feet",
        "layer": 0
      },
      "bra": {
        "zone": "chest",
        "layer": 2
      },
      "sports bra": {
        "zone": "chest",
        "layer": 2
      },
      "bralette": {
        "zone": "chest",
        "layer": 2
      },
      "bikini top": {
        "zone": "chest",
        "layer": 2
      },
      "panties": {
        "zone": "groin",
        "layer": 2
      },
      "underwear": {
        "zone": "groin",
        "layer": 2
      },
      "boxers": {
        "zone": "groin",
        "layer": 2
      },
      "briefs": {
        "zone": "groin",
        "layer": 2
      },
      "thong": {
        "zone": "groin",
        "layer": 2
      },
      "bikini bottom": {
        "zone": "groin",
        "layer": 2
      },
      "g-string": {
        "zone": "groin",
        "layer": 2
      },
      "lingerie": {
        "zone": "intimate",
        "layer": 2
      },
      "negligee": {
        "zone": "intimate",
        "layer": 2
      },
      "corset": {
        "zone": "intimate",
        "layer": 2
      },
      "teddy": {
        "zone": "intimate",
        "layer": 2
      },
      "babydoll": {
        "zone": "intimate",
        "layer": 2
      },
      "bodysuit": {
        "zone": "intimate",
        "layer": 2
      },
      "stockings": {
        "zone": "legs_under",
        "layer": 2
      },
      "thigh-highs": {
        "zone": "legs_under",
        "layer": 2
      },
      "garter": {
        "zone": "legs_under",
        "layer": 2
      },
      "garter belt": {
        "zone": "legs_under",
        "layer": 2
      },
      "glasses": {
        "zone": "accessory",
        "layer": 0
      },
      "hat": {
        "zone": "accessory",
        "layer": 0
      },
      "scarf": {
        "zone": "accessory",
        "layer": 0
      },
      "choker": {
        "zone": "accessory",
        "layer": 0
      },
      "collar": {
        "zone": "accessory",
        "layer": 0
      },
      "necklace": {
        "zone": "accessory",
        "layer": 0
      },
      "earrings": {
        "zone": "accessory",
        "layer": 0
      },
      "gloves": {
        "zone": "accessory",
        "layer": 0
      }
    },
    "zone_exposure_bump": {
      "torso_outer": 0.0,
      "torso": 1.0,
      "full": 1.5,
      "legs": 0.5,
      "feet": 0.0,
      "chest": 2.5,
      "groin": 3.0,
      "intimate": 2.0,
      "legs_under": 0.5,
      "accessory": 0.0
    },
    "char_exposure_multiplier": 1.5,
    "mutual_naked_bonus": 1.5,
    "redress_factor": -0.3
  },
  "engine_config": {
    "session_roll_flag_prefix": "session_rolled_",
    "statgen_flag": "statgen_done",
    "stat_mod_formula": {
      "base": 10,
      "divisor": 2
    },
    "injection_prefix": "\n\n[STATE]\n",
    "injection_suffix": "\n[/STATE]",
    "orgasm_event": "orgasm",
    "denied_event": "orgasm_denied",
    "stage_penalty_suffix": "_penalty",
    "perm_stage_flag_prefix": "perm_"
  },
  "pill_detection": {
    "negation_words": [
      "not",
      "n't",
      "never",
      "won't",
      "wont",
      "refuse",
      "refuses",
      "refused",
      "refusing",
      "no way",
      "cannot",
      "can't",
      "cant",
      "no",
      "didn't",
      "doesn't",
      "don't"
    ],
    "intake_false_positives": [
      "a step",
      "a breath",
      "a deep breath",
      "a back",
      "turns away",
      "steps back",
      "steps away",
      "steps off",
      "walks away",
      "hard",
      "audibly",
      "nervously",
      "visibly",
      "dryly",
      "loudly",
      "thickly"
    ]
  },
  "arousal_system": {
    "max": 100,
    "min": 0,
    "decay_on": [
      "session_end",
      "antidote",
      "birth"
    ],
    "reset_to": 0,
    "growth_formula": "new = min(max, current + weight * (1 + current / scale))",
    "note": "Exponential curve. Small hits snowball at high arousal.",
    "keyword_weights": {
      "low": {
        "weight": 1,
        "keywords": [
          "flush",
          "flushed",
          "warm",
          "warmth",
          "aware",
          "nervous",
          "squirm",
          "fidget",
          "breathless",
          "distracted",
          "stir",
          "stirring",
          "tingle",
          "flutter",
          "throb",
          "shiver",
          "sensitive",
          "sensitivity"
        ]
      },
      "medium": {
        "weight": 2,
        "keywords": [
          "wet",
          "slick",
          "ache",
          "aching",
          "tremble",
          "trembling",
          "needy",
          "want",
          "wanting",
          "heat",
          "arousal",
          "aroused",
          "hungry",
          "pulse",
          "pulsing",
          "clench",
          "clenching",
          "leak",
          "leaking",
          "drip",
          "dripping",
          "moan",
          "moaning",
          "gasp",
          "whimper",
          "hips",
          "core",
          "melting",
          "melt"
        ]
      },
      "high": {
        "weight": 3,
        "keywords": [
          "desperate",
          "soaking",
          "burning",
          "unbearable",
          "beg",
          "begging",
          "writhe",
          "writhing",
          "consumed",
          "overwhelmed",
          "mindless",
          "frantic",
          "delirious",
          "please",
          "need you",
          "want you",
          "take me",
          "fill me"
        ]
      }
    },
    "thresholds": {
      "0": {
        "label": "baseline",
        "note": "Nothing notable."
      },
      "10": {
        "label": "stirring",
        "note": "Subconscious warmth, slight restlessness."
      },
      "20": {
        "label": "body_waking",
        "note": "Hip movement starts. Body ahead of mind."
      },
      "25": {
        "label": "aware",
        "note": "Physical sensations noticed. Clenching."
      },
      "30": {
        "label": "pressure",
        "note": "Need building, concentration failing."
      },
      "35": {
        "label": "desperate",
        "note": "Judgment impaired. Body leading."
      },
      "45": {
        "label": "peak",
        "note": "Mind following body. Seeking."
      },
      "55": {
        "label": "overwhelmed",
        "note": "Composure gone."
      },
      "60": {
        "label": "lost",
        "note": "Composure gone. Body in control."
      },
      "70": {
        "label": "consumed",
        "note": "Rational thought disintegrating. Pure sensation."
      },
      "80": {
        "label": "edge",
        "note": "Right at the edge. One push away."
      },
      "85": {
        "label": "orgasm_zone",
        "note": "Orgasm trigger active. Probabilistic each turn."
      },
      "100": {
        "label": "overload",
        "note": "Automatic orgasm. No resistance possible."
      }
    },
    "arousal_roll_penalty": {
      "note": "Applied to ALL rolls when arousal exceeds threshold.",
      "thresholds": {
        "30": -1,
        "40": -2,
        "50": -3,
        "60": "auto_fail"
      }
    },
    "breeder_rules": {
      "orgasm_requires": "insemination",
      "orgasm_on_creampie": true,
      "arousal_reset_on": "creampie",
      "regular_orgasm": "denied_by_mechanic",
      "note": "While breeder active: orgasm only triggers on insemination event. All other arousal peaks are mechanically denied regardless of scene."
    },
    "addiction_floor": {
      "stage_0": 0,
      "stage_1": 10,
      "stage_2": 20,
      "stage_3": 30
    },
    "formula": {
      "type": "exponential",
      "expression": "current + weight * (1 + current / scale)",
      "scale": 60.0,
      "note": "Proxy reads scale from here. Larger scale = slower snowball."
    },
    "sensitivity": {
      "note": "Injected into state header. Model uses to calibrate physical response intensity.",
      "by_pill": {
        "pink": {
          "base_modifier": 1,
          "note": "Breeder/surrogate pills start slightly more sensitive than baseline female.",
          "thresholds": {
            "0": {
              "modifier": 1,
              "note": "Slightly elevated baseline."
            },
            "20": {
              "modifier": 2,
              "note": "Light touch registers strongly."
            },
            "35": {
              "modifier": 3,
              "note": "Everything amplified, incidental contact hard to ignore."
            },
            "50": {
              "modifier": 4,
              "note": "Touch anywhere feels connected to the need."
            },
            "60": {
              "modifier": 5,
              "note": "Overwhelming. Air movement registers."
            }
          }
        },
        "purple": {
          "base_modifier": 1,
          "note": "Same as pink.",
          "inherit": "pink"
        },
        "blue": {
          "base_modifier": 0,
          "note": "Standard male sensitivity. Different profile.",
          "thresholds": {
            "0": {
              "modifier": 0,
              "note": "Normal baseline."
            },
            "25": {
              "modifier": 1,
              "note": "Heightened but controlled."
            },
            "45": {
              "modifier": 2,
              "note": "Noticeably sensitive."
            },
            "60": {
              "modifier": 3,
              "note": "Overwhelmed."
            }
          }
        }
      }
    },
    "passive_decay": 2.5,
    "no_decay_effects": [
      "breeder",
      "surrogate"
    ],
    "scan_cap": 8.0,
    "user_action_weights": {
      "tease": 1.5,
      "teasing": 1.5,
      "touch": 1.0,
      "touching": 1.0,
      "stroke": 2.0,
      "stroking": 2.0,
      "finger": 2.0,
      "fingering": 2.0,
      "nipple": 1.5,
      "nipples": 1.5,
      "clit": 2.0,
      "pussy": 1.5,
      "grope": 1.5,
      "groping": 1.5,
      "squeeze": 1.5,
      "squeezing": 1.5,
      "rub": 1.5,
      "rubbing": 1.5,
      "kiss": 1.0,
      "kissing": 1.0,
      "lick": 2.0,
      "licking": 2.0,
      "suck": 2.0,
      "sucking": 2.0,
      "thrust": 3.0,
      "thrusting": 3.0,
      "fuck": 3.0,
      "fucking": 3.0,
      "inside": 2.0,
      "stretch": 2.0,
      "fill": 2.0,
      "spread": 1.5
    }
  },
  "orgasm_rules": {
    "note": "Proxy reads these to decide when orgasm fires vs is denied.",
    "gates": {
      "breeder": {
        "requires_event": "creampie_vaginal",
        "denied_otherwise": true,
        "arousal_reset_on": "creampie_vaginal",
        "note": "Orgasm only on insemination. All other peaks mechanically denied."
      },
      "denial": {
        "blocks_orgasm": true,
        "note": "Orgasm fully blocked while denial is active."
      }
    }
  },
  "directive_effects": [
    "submissive",
    "compliant",
    "bull"
  ],
  "flavor_triggers": [
    {
      "keywords": [
        "breeder"
      ],
      "effect": "breeder",
      "requires_pill": true,
      "note": "Breeder compulsion. Orgasm only on insemination. Arousal resets on creampie.",
      "pregnancy_mode": "breeder"
    },
    {
      "keywords": [
        "bimbo"
      ],
      "effect": "bimbo",
      "requires_pill": true,
      "note": "Intelligence degradation via dice rolls on masculinity gate."
    },
    {
      "keywords": [
        "denial"
      ],
      "effect": "denial",
      "requires_pill": true,
      "note": "Orgasm blocked. CON check each denied turn."
    },
    {
      "keywords": [
        "bull"
      ],
      "effect": "bull",
      "requires_pill": true,
      "note": "Dominance pressure. Pregnancy bonus.",
      "pregnancy_mode": "bull"
    },
    {
      "keywords": [
        "compliant"
      ],
      "effect": "compliant",
      "requires_pill": true,
      "note": "Near-forced compliance. Extremely difficult to resist."
    },
    {
      "keywords": [
        "submissive"
      ],
      "effect": "submissive",
      "requires_pill": true,
      "note": "Rewards compliance. Fights the reward not the act."
    },
    {
      "keywords": [
        "psyche"
      ],
      "effect": "psyche",
      "requires_pill": true,
      "note": "Personality drift. Staged, permanent at stage 3."
    },
    {
      "keywords": [
        "surrogate"
      ],
      "effect": "surrogate",
      "requires_pill": true,
      "pregnancy_mode": "breeder",
      "note": "Pre-conception identical to breeder. Switches on conception. Reverts at birth."
    }
  ],
  "body_modifiers": {
    "pink": {
      "note": "MTF transformation body guidance. Color pink or purple uses these.",
      "modifiers": {
        "petite": {
          "height": "4'11\"-5'2\"",
          "weight": "95-115lbs",
          "build": "delicate slim frame, narrow shoulders",
          "bust": "B-C cup, proportional to frame",
          "hips": "narrow to moderate, feminine curve",
          "note": "Small everywhere. Nothing oversized. Natural petite proportions."
        },
        "slim": {
          "height": "5'3\"-5'6\"",
          "weight": "110-130lbs",
          "build": "lean toned, light muscle definition",
          "bust": "B-C cup",
          "hips": "moderate, defined waist",
          "note": "Athletic lean look without bulk."
        },
        "average": {
          "height": "5'4\"-5'7\"",
          "weight": "120-145lbs",
          "build": "natural balanced proportions",
          "bust": "C-D cup",
          "hips": "moderate, natural curve",
          "note": "Default natural female proportions."
        },
        "curvy": {
          "height": "5'4\"-5'7\"",
          "weight": "130-155lbs",
          "build": "full figure, defined waist, soft",
          "bust": "C-E cup",
          "hips": "full, pronounced hourglass",
          "note": "Defined curves, everything proportional to each other."
        },
        "busty": {
          "height": "5'4\"-5'8\"",
          "weight": "125-150lbs",
          "build": "average frame, chest prominent",
          "bust": "D-E cup, proportional support",
          "hips": "moderate-full to balance chest",
          "note": "Larger chest but frame and hips must support it naturally."
        },
        "athletic": {
          "height": "5'5\"-5'8\"",
          "weight": "125-145lbs",
          "build": "toned muscle, strong legs, flat stomach",
          "bust": "B-C cup, firm",
          "hips": "athletic, toned",
          "note": "Strong and capable looking. Not bulky."
        },
        "voluptuous": {
          "height": "5'5\"-5'8\"",
          "weight": "140-165lbs",
          "build": "full everywhere, soft rounded, deep curves",
          "bust": "D-F cup",
          "hips": "very full, deep hourglass",
          "note": "Everything full and rounded but proportional. No single feature extreme."
        }
      },
      "modifier_flavor": {
        "note": "Per-modifier sensation notes injected alongside narration_order. Describes the overall feel of transforming into this build type.",
        "petite": "Everything shrinks dramatically — the ground rushes up, clothes swallow the frame, the world feels oversized. Every feature is delicate and proportionally tiny. The body folds inward into something compact and doll-like.",
        "slim": "The body leans out rather than fills in — fat melts, lines sharpen, everything tightens into a narrow clean silhouette. There is definition but no bulk. The frame feels light, efficient, almost aerodynamic.",
        "average": "A balanced settling — nothing extreme in any direction. Proportions even out into a natural, unremarkable femininity. The kind of body that simply fits, no single feature demanding attention over the others.",
        "curvy": "Weight redistributes with intention — hips pull outward, waist cinches deep, everything rounds and softens. The body gains a pronounced hourglass pull. Clothes tighten at the hips and chest while loosening at the waist.",
        "busty": "The chest dominates the transformation — heat concentrates behind the nipples and the flesh pushes forward insistently, heavy and impossible to ignore. The rest of the frame adjusts to support the weight. Center of gravity shifts forward.",
        "athletic": "Muscle does not vanish — it reshapes. Legs stay strong, core stays tight, but everything feminizes underneath the tone. The body feels capable and powerful in a different way. Less mass, more spring.",
        "voluptuous": "Fullness everywhere — the body rounds out in every direction, soft and heavy and deeply curved. Weight settles on hips, thighs, chest, ass. Nothing is slight or sharp. The frame feels lush, gravity-heavy, warm."
      },
      "keyword_map": {
        "note": "Maps card build keywords to modifier names for auto-resolution when no modifier is on the pill.",
        "petite": ["petite", "small", "tiny", "delicate", "little", "slight"],
        "slim": ["slim", "lean", "slender", "thin", "narrow", "willowy"],
        "average": ["average", "medium", "normal", "moderate", "typical"],
        "curvy": ["curvy", "full", "hourglass", "full-figured", "shapely"],
        "busty": ["busty", "chesty", "large-chested", "big-breasted", "stacked"],
        "athletic": ["athletic", "toned", "fit", "muscular", "strong", "sporty"],
        "voluptuous": ["voluptuous", "thick", "plus-size", "plush", "lush", "rubenesque"]
      },
      "target_weights": {
        "note": "Weighted random target selection based on starting body. Keys are starting build categories, values are {target: weight} maps. Higher weight = more likely. Starting body is read from the card.",
        "petite":    { "petite": 4, "slim": 3, "average": 2, "athletic": 1, "curvy": 0, "busty": 0, "voluptuous": 0 },
        "slim":      { "petite": 2, "slim": 4, "average": 3, "athletic": 2, "curvy": 1, "busty": 0, "voluptuous": 0 },
        "average":   { "petite": 1, "slim": 2, "average": 4, "athletic": 2, "curvy": 2, "busty": 1, "voluptuous": 1 },
        "athletic":  { "petite": 0, "slim": 2, "average": 2, "athletic": 4, "curvy": 1, "busty": 1, "voluptuous": 1 },
        "stocky":    { "petite": 0, "slim": 0, "average": 1, "athletic": 1, "curvy": 3, "busty": 2, "voluptuous": 4 },
        "heavy":     { "petite": 0, "slim": 0, "average": 1, "athletic": 0, "curvy": 3, "busty": 2, "voluptuous": 4 },
        "_default":  { "petite": 1, "slim": 2, "average": 4, "athletic": 2, "curvy": 2, "busty": 1, "voluptuous": 1 }
      },
      "baseline_from_card": {
        "note": "No modifier specified. Scale female body from character base stats.",
        "scale_label": "Target body: scale to female proportions from character baseline",
        "rules": [
          "Scan description for height. Use as anchor - female height stays within 2 inches of male height unless modifier overrides.",
          "Scan for build keywords: petite/slim/slight/small -> slim female build B cup moderate hips.",
          "Scan for average/medium/normal -> average female build C cup moderate hips.",
          "Scan for athletic/muscular/toned/broad -> athletic female build B-C cup toned hips.",
          "Scan for heavy/large/big/stocky -> curvy to full female build C-D cup full hips.",
          "If no build info found -> use average defaults.",
          "All proportions must make anatomical sense together. No extreme features on small frames."
        ]
      },
      "transformation_guidance": {
        "direction_banner": "MALE to FEMALE — every change moves toward femininity. The body grows into the female form. Target body values are the FINAL FEMALE FORM, not reductions from the current body. Nothing feminine recedes or shrinks.",
        "narration_order": [
          "height and overall frame — bones compress, frame shrinks toward female proportions. Sensation: pressure in joints, ground rising, clothes loosening on shoulders",
          "body shape — shoulders narrow, hips widen with deep pressure, waist cinches inward. Frame melts into hourglass. Sensation: hips aching outward, waist pulling in tight",
          "chest — breasts form and swell to target size. Sensation: heat blooming behind nipples, flesh pushing forward, growing heavy. A-cup poke forward first, then fill and round out to final size",
          "hair — cascades longer past shoulders, texture turns silky soft. Sensation: tingling across scalp, weight gathering at the back of the neck",
          "face — jaw narrows, cheekbones lift, lips fill and soften. Sensation: face feels like warm clay being reshaped, features rounding and smoothing",
          "voice — pitch rises, resonance shifts from chest to throat. Sensation: tightening in the throat, voice cracks then settles higher",
          "genitals — LAST, always last. Manhood shrinks and retracts, folds reshape. Sensation: emptiness between thighs, hollow ache, new anatomy settling into place"
        ]
      }
    },
    "blue": {
      "note": "FTM transformation body guidance.",
      "modifiers": {
        "petite": {
          "height": "5'4\"-5'6\"",
          "weight": "130-150lbs",
          "build": "lean smaller male frame, light build",
          "note": "Smaller male but still clearly male proportions."
        },
        "slim": {
          "height": "5'7\"-5'9\"",
          "weight": "145-165lbs",
          "build": "lean defined, visible muscle without bulk",
          "note": "Lean athletic male."
        },
        "average": {
          "height": "5'9\"-5'11\"",
          "weight": "160-185lbs",
          "build": "natural male proportions, moderate build",
          "note": "Default average male."
        },
        "athletic": {
          "height": "5'10\"-6'0\"",
          "weight": "175-200lbs",
          "build": "muscular broad shoulders, strong frame",
          "note": "Clearly strong and built."
        },
        "stocky": {
          "height": "5'8\"-5'10\"",
          "weight": "180-210lbs",
          "build": "solid heavy frame, thick neck and limbs",
          "note": "Dense powerful build."
        }
      },
      "modifier_flavor": {
        "note": "Per-modifier sensation notes for FTM transformation. Describes the overall feel of transforming into this build type.",
        "petite": "The body expands but stays compact — a smaller male frame, wiry and tight. Everything hardens without growing huge. The result is a lean guy who looks quicker than he is strong. Clothes still fit loosely but differently.",
        "slim": "Height stretches upward, muscle carves in lean lines under the skin. No bulk, just clean definition — visible veins on forearms, flat hard stomach, narrow hips. The body feels like a blade, efficient and sharp.",
        "average": "A steady, even expansion — nothing dramatic in any single direction. The body settles into comfortable unremarkable maleness. Proportions balance naturally. The kind of build that simply looks normal and right.",
        "athletic": "Muscle packs on with force — shoulders broaden hard, arms thicken, chest fills out solid and square. The body feels powerful and capable, built for exertion. Clothes strain across the shoulders and chest.",
        "stocky": "Density everywhere — the frame thickens rather than lengthens, mass packing into a compact powerful shape. Neck widens, limbs get heavy and solid, core becomes a thick trunk. The body feels immovable, rooted to the ground."
      },
      "keyword_map": {
        "note": "Maps card build keywords to blue modifier names for auto-resolution.",
        "petite": ["petite", "small", "tiny", "delicate", "little", "slight"],
        "slim": ["slim", "lean", "slender", "thin", "narrow", "willowy"],
        "average": ["average", "medium", "normal", "moderate", "typical"],
        "athletic": ["athletic", "toned", "fit", "muscular", "strong", "sporty", "built"],
        "stocky": ["stocky", "thick", "heavy", "broad", "solid", "dense", "big", "large", "full", "curvy", "busty"]
      },
      "target_weights": {
        "note": "Weighted random target selection for FTM. Keys are starting female build, values are {target: weight}.",
        "petite":     { "petite": 4, "slim": 3, "average": 2, "athletic": 0, "stocky": 0 },
        "slim":       { "petite": 2, "slim": 4, "average": 3, "athletic": 1, "stocky": 0 },
        "average":    { "petite": 1, "slim": 2, "average": 4, "athletic": 2, "stocky": 1 },
        "curvy":      { "petite": 0, "slim": 1, "average": 2, "athletic": 2, "stocky": 3 },
        "busty":      { "petite": 0, "slim": 1, "average": 2, "athletic": 2, "stocky": 3 },
        "athletic":   { "petite": 0, "slim": 1, "average": 2, "athletic": 4, "stocky": 2 },
        "voluptuous": { "petite": 0, "slim": 0, "average": 1, "athletic": 1, "stocky": 4 },
        "_default":   { "petite": 1, "slim": 2, "average": 4, "athletic": 2, "stocky": 1 }
      },
      "baseline_from_card": {
        "note": "No modifier. Scale male body from character base stats.",
        "scale_label": "Target body: scale to male proportions from character baseline",
        "rules": [
          "Scan description for height. Male height within 4-6 inches above female baseline.",
          "Scan for slim/petite/small -> slim male build.",
          "Scan for average/medium -> average male build.",
          "Scan for athletic/toned/fit -> athletic male build.",
          "Scan for curvy/full/busty -> average to stocky male, broader frame.",
          "If no info found -> use average defaults."
        ]
      },
      "transformation_guidance": {
        "direction_banner": "FEMALE to MALE — every change moves toward masculinity. The body expands and hardens into the male form. Target body values are the FINAL MALE FORM. Breasts recede completely. Hips narrow. Frame broadens.",
        "narration_order": [
          "height and overall frame — bones stretch and thicken, frame expands upward, shoulders push outward filling clothes tight. Sensation: deep ache in long bones as they lengthen, ground falling away, sleeves riding up wrists",
          "body shape — hips compress inward, waist thickens with dense core muscle, torso straightens into a broad slab. Sensation: hips grinding narrower, obliques hardening like rope, weight redistributing from lower body upward",
          "chest — breasts deflate and flatten, tissue recedes into broadening pectorals. Chest hardens and squares off. Sensation: tightness draining from chest, nipples flattening, ribcage expanding with each breath",
          "body hair — coarse hair prickles across chest, forearms, and thighs. A trail thickens down the abdomen. Sensation: itching wave spreading outward from the sternum, skin roughening under new growth",
          "face — jaw squares and thickens, brow ridge sharpens, cheekbones flatten, lips thin. Sensation: face feels like it is being carved from stone, pressure behind the brow, features hardening and angularizing",
          "voice — pitch drops, resonance moves from throat into chest. Sensation: vibration deepening in the ribcage, voice cracks once then settles into a lower register, words rumble",
          "genitals — LAST, always last. Pressure builds between thighs, flesh extends and thickens, weight settles. Sensation: heat and fullness replacing former anatomy, new mass asserting itself, an unfamiliar heaviness"
        ]
      }
    },
    "purple": {
      "note": "Futafem - female body with cock. Uses pink modifier table for body, no vagina.",
      "fallback_modifier_color": "pink",
      "inherit": "pink",
      "override": {
        "genitals": "Female body proportions from pink table. Retains cock, no vagina forms."
      },
      "transformation_guidance": {
        "direction_banner": "MALE to FUTAFEM — female body forms fully across the entire frame. Cock reshapes and is retained. No vagina forms. Everything except genitals follows the male-to-female pattern: femininity grows, nothing female recedes.",
        "narration_order": [
          "height and overall frame — bones compress, frame shrinks toward female proportions. Sensation: pressure in joints, ground rising, clothes loosening on shoulders — identical to pink pill feminization",
          "body shape — shoulders narrow, hips widen with deep pressure, waist cinches inward. Frame melts into hourglass. Sensation: hips aching outward, waist pulling in tight, curves asserting themselves",
          "chest — breasts form and swell to target size. Sensation: heat blooming behind nipples, flesh pushing forward, growing heavy. A-cup poke forward first, then fill and round out to final size",
          "hair — cascades longer past shoulders, texture turns silky soft. Sensation: tingling across scalp, weight gathering at the back of the neck",
          "face — jaw narrows, cheekbones lift, lips fill and soften. Sensation: face feels like warm clay being reshaped, features rounding and smoothing into delicate lines",
          "voice — pitch rises, resonance shifts from chest to throat. Sensation: tightening in the throat, voice cracks then settles higher, words come out breathy",
          "genitals — LAST, always last. Cock tingles and reshapes — skin smooths around it, shaft may swell or refine to final size. NO vagina forms. Sensation: warmth floods the groin but nothing retracts, the cock remains and adapts to its new body, an electric sensitivity spreads through it as nerve endings multiply"
        ]
      }
    },
    "effect_anatomy": {
      "note": "Per-effect anatomy notes injected on the transformation turn. Proxy loops generically — no effect names in proxy code.",
      "bull": {
        "requires_genitals": [
          "penis_only",
          "penis_only_no_vagina"
        ],
        "transformation_note": "Bull anatomy (genitals step): penis: 10-13 inches | girth: thick, 5-9 inches circumference | balls: large and heavy | refractory: minutes not hours"
      }
    },
    "post_transformation_awareness": {
      "note": "Ambient notes injected for the first 3 turns after transformation. Describes body disorientation that fades over time. Injected in buildHeader when state._post_transform_turns > 0.",
      "turn_1": "JUST TRANSFORMED — everything is new and disorienting. Character is hyperaware of every unfamiliar sensation: weight distribution is wrong, center of gravity has shifted, clothes fit completely differently, voice surprises them when they speak. Every movement reveals something the body does differently now. Write these micro-discoveries into every action.",
      "turn_2": "RECENTLY TRANSFORMED — the shock is fading but the body still feels foreign. Character catches themselves in reflections, startles at their own voice, overcorrects for a center of gravity that moved. Muscle memory fights the new proportions. The awareness is becoming curiosity instead of pure disorientation.",
      "turn_3": "ADJUSTING — the new body is starting to feel inhabited rather than borrowed. Character still notices differences but is no longer surprised by them. Moments of forgetting they changed, then remembering with a jolt. The body is becoming theirs."
    }
  },
  "pill_descriptor_parsing": {
    "note": "Proxy scans pill context window for color + optional modifier + optional effects.",
    "scan_order": [
      "color",
      "body_modifier",
      "effects"
    ],
    "color_determines": "transformation path and pill_rules lookup",
    "body_modifier_determines": "body proportions from body_modifiers table",
    "effects_determine": "active effects added on ingest",
    "modifier_keywords": [
      "petite",
      "slim",
      "average",
      "curvy",
      "busty",
      "athletic",
      "voluptuous",
      "stocky"
    ],
    "no_modifier_rule": "Use baseline_from_card rules to scale body from character description",
    "transformation_narration_order": [
      "height and overall frame change first",
      "body shape - shoulders hips waist",
      "chest - breasts forming or receding",
      "hair length and texture",
      "face - features softening or sharpening",
      "voice change",
      "genitals last - always last"
    ],
    "narration_rules": [
      "First person, real-time: the character feels and describes each change as it happens to their body",
      "Narrate the CHARACTER ONLY — do not write the user's reactions, actions, or dialogue. The user does not exist in this scene.",
      "Concrete physical sensation per region — pressure, warmth, stretching, shifting, tingling in specific places. NOT vague 'warmth spreading everywhere' or 'tingling all over'",
      "Painless — never describe pain or discomfort from the transformation",
      "Fast but distinct — changes complete within this response, but each stage is individually felt and described",
      "Physical description only — do not editorialize about feelings toward the changes unless the user asks",
      "This should be a LONG response — at least 6-8 paragraphs. Every step in the narration order gets its own paragraph. The character can react with dialogue between stages",
      "Dialogue is welcome — the character can gasp, comment, react to each change as it happens. Weave dialogue naturally between the physical descriptions"
    ]
  }
}
;

// ── Engine Code ────────────────────────────────────────────────

// ──────────────────────────────────────────────────────────────────────────────
// X-Change World (Full Mechanics) v6.0.3 — Engine Template (JS)
// ──────────────────────────────────────────────────────────────────────────────
// This is the engine code section — concatenated AFTER data declarations.
// Assumes LORE_DATA and compact table constants are already declared.

// ──────────────────────────────────────────────────────────────────────────────
// ENGINE CONSTANTS
// ──────────────────────────────────────────────────────────────────────────────

const AROUSAL_MAX = 100;
const FRAG_CAP = 100;
const ORG_ZONE = 45;
const GATE_DC_BASE = 10;

const ALL_PILLS = new Set(['pink', 'red', 'purple', 'blue', 'green']);
// Built dynamically in compileRuleset() — these are fallback defaults
let PENIS_TRACK = new Set(['pink', 'red', 'purple']);
let VAGINA_TRACK = new Set(['blue', 'green', 'purple']);
const SEX_KEYS = ['male', 'female', 'trans_male', 'trans_female', 'intersex'];
const STAT_KEYS = ['CON', 'INT', 'WIS', 'CHA', 'DOM', 'SUB'];
const STAT_ASSEMBLY_ORDER = ['INT', 'WIS', 'CHA', 'CON', 'DOM', 'SUB'];
const D6_STAT_MAP = {1:'CON', 2:'INT', 3:'WIS', 4:'CHA', 5:'DOM', 6:'SUB'};
const _D12_FACES_BY_RANK = {1:3, 2:2, 3:1, 4:1, 5:2, 6:3};
const _STAT_CTX = {CON:'con_mod', INT:'int_mod', WIS:'wis_mod', CHA:'cha_mod', DOM:'dom_mod', SUB:'sub_mod'};
const _STAT_GROUP = {INT:'portrait_mind', WIS:'portrait_mind', CHA:'portrait_presence', CON:'portrait_presence', DOM:'portrait_power', SUB:'portrait_power'};

// ──────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ──────────────────────────────────────────────────────────────────────────────

function randInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function reEscape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function _pick(v) { return Array.isArray(v) ? v[randInt(0, v.length - 1)] : (v || ''); }
function _fragStatMod(val) { return Math.floor((val - 10) / 2); }
function simpleHash(str) { let h=0; for(let i=0;i<str.length;i++){h=((h<<5)-h)+str.charCodeAt(i);h|=0;} return h.toString(16); }

// ──────────────────────────────────────────────────────────────────────────────
// TABLE EXPANSION FUNCTIONS
// ──────────────────────────────────────────────────────────────────────────────

// _TIER_BAND_GROUP and _STAT_VAL_GROUP are provided by the build script data declarations above.

function _expandNegativeBlocks(compact) {
  // Expand tier_group×val_group → tier(0-19)×val(0-20)
  const expanded = {};
  for (const [stat, origins] of Object.entries(compact || {})) {
    expanded[stat] = {};
    for (const [origin, tier_groups] of Object.entries(origins || {})) {
      expanded[stat][origin] = {};
      for (let tier = 0; tier < 20; tier++) {
        expanded[stat][origin][tier] = {};
        for (let val = 0; val < 21; val++) {
          const tg = _TIER_BAND_GROUP[tier];
          const vg = _STAT_VAL_GROUP[val];
          expanded[stat][origin][tier][val] = ((tier_groups[tg] || {})[vg] || '');
        }
      }
    }
  }
  return expanded;
}

function _expandIdentityTable(compact) {
  // Expand val_group → 0-20
  const expanded = {};
  for (const [origin, stats] of Object.entries(compact || {})) {
    expanded[origin] = {};
    for (const [stat, bands] of Object.entries(stats || {})) {
      expanded[origin][stat] = {};
      for (const [band, val_groups] of Object.entries(bands || {})) {
        expanded[origin][stat][band] = {};
        for (let val = 0; val < 21; val++) {
          const vg = _STAT_VAL_GROUP[val];
          expanded[origin][stat][band][val] = (val_groups[vg] || '');
        }
      }
    }
  }
  return expanded;
}

function _expandArousalTable(compact) {
  // Expand {origin:{stat:{tier_group:{val_group:phrase}}}} → {origin:{stat:{0..19:{0..20:phrase}}}}
  const expanded = {};
  for (const [origin, stats] of Object.entries(compact || {})) {
    expanded[origin] = {};
    for (const [stat, tier_groups] of Object.entries(stats || {})) {
      expanded[origin][stat] = {};
      for (let tier = 0; tier < 20; tier++) {
        expanded[origin][stat][tier] = {};
        const tg = _TIER_BAND_GROUP[tier];
        const tg_data = tier_groups[tg] || {};
        for (let val = 0; val < 21; val++) {
          const vg = _STAT_VAL_GROUP[val];
          expanded[origin][stat][tier][val] = (tg_data[vg] || '');
        }
      }
    }
  }
  return expanded;
}

function _expandEffectArousalTable(compact) {
  // Nested under effect name
  const expanded = {};
  for (const [effect, origins_tbl] of Object.entries(compact || {})) {
    expanded[effect] = _expandArousalTable(origins_tbl);
  }
  return expanded;
}

function _expandTransformArousalTable(compact) {
  // Nested under pill color
  const expanded = {};
  for (const [color, origins_tbl] of Object.entries(compact || {})) {
    expanded[color] = _expandArousalTable(origins_tbl);
  }
  return expanded;
}

function _expandPortraitTable(compact) {
  // No tier axis, just origin×stat×val_group → val(0-20)
  const expanded = {};
  for (const [origin, stats] of Object.entries(compact || {})) {
    expanded[origin] = {};
    for (const [stat, val_groups] of Object.entries(stats || {})) {
      expanded[origin][stat] = {};
      for (let val = 0; val < 21; val++) {
        const vg = _STAT_VAL_GROUP[val];
        expanded[origin][stat][val] = (val_groups[vg] || '');
      }
    }
  }
  return expanded;
}

function _lookupTransformBody(pill, bodyPath, origin, stat, band, val) {
  // Lazy lookup into _TRANSFORM_BODY_COMPACT — no eager expansion needed.
  // Returns a randomly picked phrase string, or ''.
  // pill: 'pink'|'blue'|'purple', bodyPath: 'petite_to_slim', origin: 'male'|'female',
  // stat: 'CON'|..., band: 0-10 (masculinity band), val: 0-20 (stat value)
  var vg = _STAT_VAL_GROUP[val] || 'avg';
  var bandStr = String(band);
  var phrases = ((((((_TRANSFORM_BODY_COMPACT || {})[pill] || {})[bodyPath] || {})[origin] || {})[stat] || {})[bandStr] || {})[vg];
  return _pick(phrases || '');
}

function _getTransformBodyPhrases(pill, bodyPath, origin, stats, band) {
  // Returns an object { CON: 'phrase', INT: 'phrase', ... } with one phrase per stat
  // for the given transformation path, masculinity band, and stat values.
  var result = {};
  var statOrder = ['CON', 'INT', 'WIS', 'CHA', 'DOM', 'SUB'];
  for (var i = 0; i < statOrder.length; i++) {
    var stat = statOrder[i];
    var rawVal = parseInt((stats || {})[stat] || 10, 10);
    var val = Math.max(0, Math.min(20, rawVal));
    result[stat] = _lookupTransformBody(pill, bodyPath, origin, stat, band, val);
  }
  return result;
}

// Expand tables at module load
const _NEGATIVE_BLOCKS = _expandNegativeBlocks(_NEGATIVE_BLOCKS_COMPACT);
const _GENERIC_AROUSAL_EXPANDED = _expandArousalTable(_GENERIC_AROUSAL_COMPACT);
const _PILL_IDENTITY_EXPANDED = _expandIdentityTable(_PILL_IDENTITY_COMPACT);
const _EFFECT_IDENTITY_EXPANDED = _expandIdentityTable(_EFFECT_IDENTITY_COMPACT);
const _EFFECT_AROUSAL_EXPANDED = _expandEffectArousalTable(_EFFECT_AROUSAL_COMPACT);
const _TRANSFORM_AROUSAL_EXPANDED = _expandTransformArousalTable(_TRANSFORM_AROUSAL_COMPACT);
const _PORTRAIT_EXPANDED = _expandPortraitTable(_PORTRAIT_COMPACT);

// ──────────────────────────────────────────────────────────────────────────────
// COMPILE RULESET
// ──────────────────────────────────────────────────────────────────────────────

function _buildAlt(patterns) {
  return new RegExp(patterns.map(p => '(?:' + p + ')').join('|'), 'i');
}

function compileRuleset(data) {
  const rs = {
    pill_rules:          data.pill_rules || {},
    pregnancy_odds:      data.pregnancy_odds || {},
    pregnancy_mechanics: data.pregnancy_mechanics || {},
    effect_mechanics:    data.effect_mechanics || {},
    state_schema:        data.state_schema || {},
    state_events:        data.state_events || {},
    roll_systems:        data.roll_systems || {},
    counters:            data.counters || [],
    relationship_schema: data.relationship_schema || {},
    personas:            data.personas || {},
    stat_list:           (data.stat_system || {}).stats || [],
    card_format:         data.card_format || {},
    form_system:         data.form_system || {},
    statgen_signals:     data.statgen_signals || [],
    card_scan:           data.card_scan || {},
    body_result_tag:     data.body_result_tag || {},
    display_flags:       data.display_flags || [],
    system_rules:        data.system_rules || [],
    scene_tracker:       data.scene_tracker || {},
    clothing_arousal:    data.clothing_arousal || {},
    engine_config:       data.engine_config || {},
    pill_detection:      data.pill_detection || {},
    arousal_system:      data.arousal_system || {},
    orgasm_rules:        data.orgasm_rules || {},
    directive_effects:   data.directive_effects || [],
    flavor_triggers:     [],
    arousal_kw:          [],
    arousal_action_kw:   [],
    pill_context_re:     null,
    pill_noun_re:        null,
    intake_verb_re:      null,
    intake_verb_tight_re: null,  // unambiguous consumption verbs for assistant text scanning
    pill_offer_re:       null,
    pill_negation_re:    null,
    pill_false_pos_re:   null,
    event_patterns_compiled: {},
  };

  // Build flavor triggers
  const raw_ft = data.flavor_triggers || {};
  rs.flavor_triggers = (typeof raw_ft === 'object' && !Array.isArray(raw_ft))
    ? Object.values(raw_ft)
    : Array.isArray(raw_ft) ? raw_ft : [];

  // Build arousal keywords
  const kw_weights = (rs.arousal_system.keyword_weights || {});
  for (const tier of Object.values(kw_weights)) {
    const w = parseFloat(tier.weight || 1);
    for (const kw of tier.keywords || []) {
      try {
        rs.arousal_kw.push([w, new RegExp('\\b' + reEscape(kw) + '\\b', 'i')]);
      } catch (e) {
        console.log('[WARN] arousal keyword pattern skipped:', kw, e.message);
      }
    }
  }

  // Build action keywords
  const action_weights = rs.arousal_system.user_action_weights || {};
  for (const [kw, w] of Object.entries(action_weights)) {
    try {
      rs.arousal_action_kw.push([parseFloat(w), new RegExp('\\b' + reEscape(kw) + '\\b', 'i')]);
    } catch (e) {
      console.log('[WARN] action keyword pattern skipped:', kw, e.message);
    }
  }

  // Build pill patterns
  const ep = data.event_patterns || {};
  const colors = ep.pill_colors || [];
  const nouns = ep.pill_nouns || [];
  const intakes = ep.intake_verbs || [];
  const prox = ep.pill_color_noun_proximity || 40;

  const cp = colors.map(c => reEscape(c)).join('|');
  const np = nouns.map(n => reEscape(n)).join('|');
  const ip = intakes.map(v => reEscape(v)).join('|');

  if (cp && np) {
    const ps = '.{0,' + prox + '}';
    rs.pill_context_re = new RegExp(
      '\\b(' + cp + ')\\b' + ps + '\\b(' + np + ')\\b'
      + '|\\b(' + np + ')\\b' + ps + '\\b(' + cp + ')\\b', 'i');
    rs.pill_noun_re = new RegExp('\\b(' + np + ')\\b', 'i');
  }
  if (ip) {
    rs.intake_verb_re = new RegExp('\\b(' + ip + ')\\b', 'gi');
  }

  // Tight verb list for assistant text scanning — only unambiguous consumption verbs.
  // "take/takes/took" excluded because models use those for grabbing/handling too.
  // "place/places/placed/put/puts/putting" excluded — handling, not consuming.
  // "toss/tosses/tossed" excluded — ambiguous direction.
  const tightVerbs = [
    'swallow', 'swallows', 'swallowed',
    'dissolve', 'dissolves', 'dissolved',
    'pop', 'pops', 'popped',
    'gulp', 'gulps', 'gulped',
    'down', 'downed', 'downs',
    'chew', 'chews', 'chewed',
    'ingest', 'ingests', 'ingested',
    'consume', 'consumes', 'consumed',
  ];
  const tp = tightVerbs.map(v => reEscape(v)).join('|');
  if (tp) {
    rs.intake_verb_tight_re = new RegExp('\\b(' + tp + ')\\b', 'gi');
  }

  if (cp && np) {
    rs.pill_offer_re = new RegExp(
      '\\b(' + cp + ')\\b.{0,' + prox + '}\\b(?:' + np + ')\\b'
      + '|\\b(?:' + np + ')\\b.{0,' + prox + '}\\b(' + cp + ')\\b', 'i');
  }

  // Negation and false positive patterns
  const pd = data.pill_detection || {};
  let neg_words = pd.negation_words ? [...pd.negation_words] : [];
  const fp_phrases = pd.intake_false_positives || [];

  for (const w of ['no', 'back']) {
    if (!neg_words.includes(w)) neg_words.push(w);
  }

  if (neg_words.length > 0) {
    rs.pill_negation_re = new RegExp('\\b(' + neg_words.map(reEscape).join('|') + ')\\b', 'i');
  }
  if (fp_phrases.length > 0) {
    // Match at word boundary — no leading whitespace requirement
    rs.pill_false_pos_re = new RegExp('\\b(' + fp_phrases.map(reEscape).join('|') + ')\\b', 'i');
  }

  // Event patterns
  const SKIP_EP = new Set(['pill_colors', 'pill_nouns', 'brand_names', 'intake_verbs', 'pill_color_noun_proximity']);
  const epc = {};
  for (const [name, entry] of Object.entries(ep || {})) {
    if (SKIP_EP.has(name)) continue;
    if (!(typeof entry === 'object') || entry === null) continue;

    let pats, source, req_flag, req_form;
    if (Array.isArray(entry)) {
      pats = entry; source = 'all'; req_flag = null; req_form = false;
    } else {
      pats = entry.patterns || [];
      source = entry.source || 'all';
      req_flag = entry.requires_flag;
      req_form = !!entry.requires_form_eligible;
    }
    if (pats.length > 0) {
      epc[name] = { re: _buildAlt(pats), source, requires_flag: req_flag, requires_form_eligible: req_form };
    }
  }
  rs.event_patterns_compiled = epc;
  rs.body_modifiers = data.body_modifiers || {};
  rs._raw_event_patterns = data.event_patterns || {};  // raw data for per-call regex construction
  rs.transformation_physical = data.transformation_physical || {};
  rs.pill_descriptor_parsing = data.pill_descriptor_parsing || {};

  // Card patterns
  const fp = rs.card_format.field_patterns || {};
  rs.card_name_re  = new RegExp(fp.name  || '^Name:\\s*(.+?)\\s*$',  'm');
  rs.card_sex_re   = new RegExp(fp.sex   || '^Sex:\\s*(.+?)\\s*$',   'm');
  rs.card_stats_re = new RegExp(fp.stats || '^Stats:\\s*(.+?)\\s*$', 'm');
  rs.card_age_re   = new RegExp(fp.age   || '^Age:\\s*(.+?)\\s*$',   'm');

  // Build pill tracks dynamically from pill_rules
  PENIS_TRACK = new Set();
  VAGINA_TRACK = new Set();
  for (const [color, rule] of Object.entries(rs.pill_rules)) {
    const track = rule.baseline_track || 'both';
    if (track === 'penis' || track === 'both') PENIS_TRACK.add(color);
    if (track === 'vagina' || track === 'both') VAGINA_TRACK.add(color);
  }

  return rs;
}

// ──────────────────────────────────────────────────────────────────────────────
// D12 SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

function _buildD12FaceMap(state) {
  const statsRaw = state.stats || {};
  const permMods = state._perm_stat_mods || {};

  const entries = [];
  for (const s of STAT_KEYS) {
    const rawVal = parseInt(statsRaw[s] || 10, 10);
    const permVal = parseInt(permMods[s] || 0, 10);
    const modVal = _fragStatMod(rawVal + permVal);
    entries.push([s, rawVal, modVal]);
  }

  entries.sort((a, b) => {
    if (a[2] !== b[2]) return b[2] - a[2];
    return b[1] - a[1];
  });

  const shared = [];
  for (let i = 0; i < entries.length - 1; i++) {
    const a = entries[i];
    const b = entries[i + 1];
    if (a[2] === b[2] && a[1] === b[1]) {
      shared.push([a[0], b[0]]);
    }
  }

  const statRanks = {};
  for (let idx = 0; idx < entries.length; idx++) {
    statRanks[entries[idx][0]] = idx + 1;
  }

  const faceMap = [];
  for (const [s, _raw, _mod_v] of entries) {
    const rank = statRanks[s];
    const faces = _D12_FACES_BY_RANK[rank];
    for (let i = 0; i < faces; i++) faceMap.push(s);
  }

  state.stat_face_map = faceMap;
  state.stat_ranks = statRanks;
  state.shared_stats = shared;

  console.log('[D12] Face map built:', faceMap.join(' '));
  if (shared.length > 0) {
    console.log('[D12] Shared stats:', shared);
  }
}

function _rollD12Stat(state) {
  const faceMap = state.stat_face_map;
  if (!faceMap || faceMap.length !== 12) {
    const d6 = randInt(1, 6);
    return [D6_STAT_MAP[d6], d6];
  }

  const idx = randInt(0, 11);
  const stat = faceMap[idx];
  const rawD12 = idx + 1;

  const shared = state.shared_stats || [];
  for (const pair of shared) {
    if (pair.includes(stat)) {
      return [pair, rawD12];
    }
  }

  return [stat, rawD12];
}

// ──────────────────────────────────────────────────────────────────────────────
// MASCULINITY SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

function _generateInitialMasculinity(cardText, birthSex, stats) {
  // trans_female = MTF = born male → masculine baseline
  // trans_male = FTM = born female → feminine baseline
  const bornMale = (birthSex === 'male' || birthSex === 'trans_female');
  const baseline = bornMale ? 95 : 5;
  const combined = (cardText || '').toLowerCase();

  let statDelta = 0;
  if (stats) {
    const domVal = parseInt(stats.DOM || 10, 10);
    const subVal = parseInt(stats.SUB || 10, 10);
    const gap = domVal - subVal;
    if (gap >= 4) statDelta = 10;
    else if (gap >= 1) statDelta = 5;
    else if (gap <= -4) statDelta = -10;
    else if (gap <= -1) statDelta = -5;
  }

  let kwDelta = 0;
  for (const [_cat, cfg] of Object.entries(MASC_KEYWORDS || {})) {
    let hits = 0;
    for (const kw of cfg.words || []) {
      if (new RegExp('\\b' + reEscape(kw) + '\\b').test(combined)) {
        hits++;
        if (hits >= cfg.cap) break;
      }
    }
    kwDelta += hits * cfg.delta;
  }

  const totalDelta = statDelta + kwDelta;
  const result = Math.max(0, Math.min(100, baseline + totalDelta));

  console.log('[MASC] Initial masculinity=' + result
    + ' (baseline=' + baseline
    + ' stat_delta=' + statDelta
    + ' kw_delta=' + kwDelta
    + ' sex=' + birthSex + ')');

  return result;
}

function _snapshotMasculinityResist(state) {
  const domMod = _fragStatMod(parseInt((state.stats || {}).DOM || 10, 10)
    + ((state._perm_stat_mods || {}).DOM || 0));
  const wisMod = _fragStatMod(parseInt((state.stats || {}).WIS || 10, 10)
    + ((state._perm_stat_mods || {}).WIS || 0));
  const resist = domMod + wisMod;
  state._masc_resist_mod = resist;
  console.log('[MASC] resist snapshot: DOM_mod=' + domMod
    + ' WIS_mod=' + wisMod + ' → resist=' + resist);
  return resist;
}

function _masculinityBand(mascValue) {
  const v = Math.max(0, Math.min(100, parseInt(mascValue, 10)));
  if (v === 0) return 0;
  return Math.min(10, Math.floor((v - 1) / 10) + 1);
}

function _masculinityBandName(mascValue) {
  return (_MASCULINITY_BAND_NAMES || {})[_masculinityBand(mascValue)] || 'unknown';
}

function _masculinityBandLabel(mascValue) {
  return (_MASCULINITY_BAND_LABELS || {})[_masculinityBand(mascValue)] || 'Unknown';
}

function _nextMascBoundary(current, delta) {
  if (delta === 0) return null;
  const target = Math.max(0, Math.min(100, current + delta));
  const curBand = _masculinityBand(current);
  const tgtBand = _masculinityBand(target);
  if (curBand === tgtBand) return null;

  if (delta < 0) {
    return (curBand - 1) * 10;
  } else {
    return curBand * 10 + 1;
  }
}

function _applyMasculinityDelta(state, delta) {
  if (delta === 0) return;

  const current = parseInt(state.masculinity || 50, 10);
  const target = Math.max(0, Math.min(100, current + delta));
  if (target === current) return;

  const resistMod = parseInt(state._masc_resist_mod || 0, 10);
  const movingDown = delta < 0;
  let pos = current;

  while (true) {
    const remaining = target - pos;
    if (remaining === 0) break;

    const boundary = _nextMascBoundary(pos, remaining);
    if (boundary === null) {
      pos = target;
      break;
    }

    const dc = parseInt(state._masc_gate_dc || 5, 10);
    const roll = randInt(1, 20);
    const total = roll + resistMod;
    const passed = total >= dc;

    const b = _masculinityBand(pos);
    const resultStr = passed ? 'RESIST' : 'FAIL';
    const entry = 'MASC GATE @' + boundary + ': d20(' + roll + ')+'
      + resistMod + '=' + total + ' vs DC' + dc
      + ' [band' + b + '] ' + resultStr
      + ' (target=' + target + ')';
    (state._notes_log = state._notes_log || []).push(entry);
    console.log('[MASC] ' + entry);

    if (passed) {
      const heldAt = movingDown ? boundary + 1 : boundary - 1;
      pos = Math.max(0, Math.min(100, heldAt));
      state._masc_gate_dc = dc + 1;
      break;
    } else {
      pos = boundary;
      state._masc_gate_dc = dc + 2;
      state._masc_gate_fail_count = (state._masc_gate_fail_count || 0) + 1;
      _bimboAdvanceCheck(state);
    }
  }

  if (pos === current) return;

  const actualDelta = pos - current;
  state.masculinity = pos;
  state._masculinity_delta_this_session = (parseInt(state._masculinity_delta_this_session || 0, 10) + actualDelta);

  const oldBand = _masculinityBandName(current);
  const newBand = _masculinityBandName(pos);
  const bandShift = (oldBand === newBand) ? '' : ' BAND:' + oldBand + '->' + newBand;
  const entry2 = 'masculinity:' + current + '->' + pos
    + ' (delta=' + actualDelta + ')' + bandShift;
  (state._notes_log = state._notes_log || []).push(entry2);
  console.log('[MASC] ' + entry2);

  state._masc_shifted_this_turn = true;
}

// ──────────────────────────────────────────────────────────────────────────────
// BIMBO STAGE ADVANCE CHECK
// ──────────────────────────────────────────────────────────────────────────────

function _bimboAdvanceCheck(state) {
  // Only fires if bimbo effect is active and character is female
  const effects = state.active_effects || [];
  if (!effects.includes('bimbo')) return;
  const origin = state._sex_origin || 'male';
  if (origin !== 'female') return;

  const currentStage = parseInt((state._effect_stages || {}).bimbo || 0, 10);
  if (currentStage >= 5) return; // already maxed

  // Combined fail count (session-scoped)
  const arousalFails = parseInt(state._arousal_gate_fail_count || 0, 10);
  const mascFails = parseInt(state._masc_gate_fail_count || 0, 10);
  const totalFails = arousalFails + mascFails;

  // Roll 1 — d100 vs pressure bracket
  // 0-5 fails = 5%, 6-10 = 10%, 11-15 = 15%, etc.
  const bracket = totalFails <= 5 ? 5 : 5 + Math.ceil((totalFails - 5) / 5) * 5;
  const pressureChance = Math.min(bracket, 95); // cap at 95%
  const d100 = randInt(1, 100);
  const pressurePass = d100 <= pressureChance;

  const entry1 = 'bimbo_advance:ROLL1(d100=' + d100
    + ' vs ' + pressureChance + '%'
    + ' fails=' + totalFails
    + ' [arousal=' + arousalFails + ' masc=' + mascFails + ']'
    + ' => ' + (pressurePass ? 'TRIGGER' : 'NO_CHECK') + ')';
  (state.roll_log = state.roll_log || []).push(entry1);
  console.log('[BIMBO] ' + entry1);

  if (!pressurePass) return;

  // Roll 2 — d20 + INT mod + CHA mod vs DC (6 + total fails)
  const intVal = parseInt((state.stats || {}).INT || 10, 10);
  const chaVal = parseInt((state.stats || {}).CHA || 10, 10);
  const intMod = Math.floor((intVal - 10) / 2);
  const chaMod = Math.floor((chaVal - 10) / 2);
  const dc = 6 + totalFails;
  const d20 = randInt(1, 20);
  const total = d20 + intMod + chaMod;
  const resisted = total >= dc;

  const entry2 = 'bimbo_advance:ROLL2(d20=' + d20
    + ' INT_mod=' + (intMod >= 0 ? '+' : '') + intMod
    + ' CHA_mod=' + (chaMod >= 0 ? '+' : '') + chaMod
    + ' total=' + total + ' vs DC=' + dc
    + ' => ' + (resisted ? 'RESIST' : 'ADVANCE') + ')';
  (state.roll_log = state.roll_log || []).push(entry2);
  console.log('[BIMBO] ' + entry2);

  if (resisted) return;

  // Stage advances
  const newStage = currentStage + 1;
  if (!state._effect_stages) state._effect_stages = {};
  state._effect_stages.bimbo = newStage;
  if (!state.flavor) state.flavor = {};
  if (!state.flavor.bimbo) state.flavor.bimbo = {};
  state.flavor.bimbo.stage = newStage;

  // Apply INT penalty from new stage
  const intPenalty = -newStage;
  const baseInt = parseInt((state.stats || {}).INT || 10, 10);
  const newInt = Math.max(1, baseInt + intPenalty);

  const entry3 = 'bimbo_advance:STAGE=' + newStage
    + ' (INT penalty=' + intPenalty + ')';
  (state.roll_log = state.roll_log || []).push(entry3);
  (state._notes_log = state._notes_log || []).push(entry3);
  console.log('[BIMBO] ' + entry3);
}

// ──────────────────────────────────────────────────────────────────────────────
// BIMBO LUCID MOMENT SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

const _LUCID_CONTRAST_TAGS = {
  small: [
    "thoughts a little lighter than usual",
    "something slipping before fully forming",
    "simpler word came out than intended",
    "easier not to finish the complicated ones",
    "not noticing the gaps yet"
  ],
  medium: [
    "I'm not faking anything",
    "I'm fine, seriously",
    "thoughts keep drifting somewhere easier",
    "had a point somewhere, it's just gone",
    "not struggling, nothing to struggle against",
    "complicated things take effort and trail off"
  ],
  large: [
    "used to be able to hold this thought",
    "thinky-ness going somewhere pink and fuzzy",
    "brain getting all gooey and silly",
    "who needs smarts when you just wanna have fun",
    "thinking is like sooo overrated",
    "sorry for the drool, where was I",
    "hard things feel far away and unimportant"
  ]
};

function _bimboDeltaTier(state) {
  const baseline = parseInt(state.bimbo_baseline_int || 10, 10);
  const current = parseInt((state.stats || {}).INT || 10, 10);
  const gap = baseline - current;
  if (gap <= 1) return 'none';
  if (gap <= 3) return 'small';
  if (gap <= 5) return 'medium';
  return 'large';
}

function _bimboLucidCheck(state) {
  // Only fires if bimbo is active, character is female, and not short-circuited
  const effects = state.active_effects || [];
  if (!effects.includes('bimbo')) return;
  const origin = state._sex_origin || 'male';
  if (origin !== 'female') return;
  if (state._bimbo_short_circuit) return;

  // Clear previous turn's lucid tag
  delete state._bimbo_lucid_tag;

  const deltaTier = _bimboDeltaTier(state);
  if (deltaTier === 'none') return; // no gap, no lucid moment possible

  // Roll 1 — d100 vs (baseline INT × 3) - arousal
  const baseline = parseInt(state.bimbo_baseline_int || 10, 10);
  const arousal = parseInt(state.arousal || 0, 10);
  const chance = Math.max(0, Math.min(95, (baseline * 3) - arousal));
  const d100 = randInt(1, 100);
  const roll1Pass = d100 <= chance;

  const entry1 = 'bimbo_lucid:ROLL1(d100=' + d100
    + ' vs ' + chance + '%'
    + ' [baseline_INT=' + baseline + ' arousal=' + arousal + ']'
    + ' delta=' + deltaTier
    + ' => ' + (roll1Pass ? 'PASS' : 'FAIL') + ')';
  (state.roll_log = state.roll_log || []).push(entry1);
  console.log('[BIMBO] ' + entry1);

  if (!roll1Pass) return;

  // Roll 2 — d20 + CHA mod vs DC (6 + session arousal gate fails)
  const chaVal = parseInt((state.stats || {}).CHA || 10, 10);
  const chaMod = Math.floor((chaVal - 10) / 2);
  const arousalFails = parseInt(state._arousal_gate_fail_count || 0, 10);
  const dc = 6 + arousalFails;
  const d20 = randInt(1, 20);
  const total = d20 + chaMod;
  const roll2Pass = total >= dc;

  const entry2 = 'bimbo_lucid:ROLL2(d20=' + d20
    + ' CHA_mod=' + (chaMod >= 0 ? '+' : '') + chaMod
    + ' total=' + total + ' vs DC=' + dc
    + ' [arousal_fails=' + arousalFails + ']'
    + ' => ' + (roll2Pass ? 'LUCID' : 'SUPPRESSED') + ')';
  (state.roll_log = state.roll_log || []).push(entry2);
  console.log('[BIMBO] ' + entry2);

  if (!roll2Pass) return;

  // Both rolls passed — inject lucid contrast tag for this turn only
  const tags = _LUCID_CONTRAST_TAGS[deltaTier] || _LUCID_CONTRAST_TAGS.small;
  const tag = tags[randInt(0, tags.length - 1)];
  state._bimbo_lucid_tag = tag;

  const entry3 = 'bimbo_lucid:TAG="' + tag + '" (delta=' + deltaTier + ')';
  (state.roll_log = state.roll_log || []).push(entry3);
  (state._notes_log = state._notes_log || []).push(entry3);
  console.log('[BIMBO] ' + entry3);
}

// ──────────────────────────────────────────────────────────────────────────────
// CARD PARSING & STAT SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

function _rx(pat, text) {
  const m = pat.exec(text || '');
  return m ? m[1].trim() : null;
}

function extractCardName(t, rs) {
  return _rx(rs ? rs.card_name_re : /^Name:\s*(.+?)\s*$/m, t);
}

function extractCardSex(t, rs) {
  return _rx(rs ? rs.card_sex_re : /^Sex:\s*(.+?)\s*$/m, t);
}

function extractCardStats(t, rs) {
  return _rx(rs ? rs.card_stats_re : /^Stats:\s*(.+?)\s*$/m, t);
}

function extractCardAge(t, rs) {
  return _rx(rs ? rs.card_age_re : /^Age:\s*(.+?)\s*$/m, t);
}

function _cardSection(systemText) {
  const m = /^Name:\s*.+/mi.exec(systemText);
  return m ? systemText.substring(m.index) : systemText;
}

// ── Extract scene context from card text on turn 1 ──────────────────────────
// Scans scenario, description, and first_mes for location, objects, props,
// time of day, and atmosphere. Generic enough to handle modern, fantasy,
// sci-fi, historical, school, workplace, and outdoor cards.
function parseCardSceneContext(systemText, firstCharMsg) {
  const seed = {};
  const fullText = (systemText || '') + '\n' + (firstCharMsg || '');
  const textLower = fullText.toLowerCase();

  // Word-boundary test — avoids substring false positives
  const _wb = (word) => new RegExp('\\b' + word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i').test(fullText);

  // Extract a named block (Scenario:, Setting:, etc.) as a flat string
  const _block = (label) => {
    const m = new RegExp('^' + label + '\\s*:?\\s*(.+?)(?:\\n\\n|\\r\\n\\r\\n|$)', 'im').exec(fullText);
    return m ? m[1].replace(/\r\n/g, ' ').trim() : '';
  };
  const scenarioText   = _block('Scenario');
  const settingText    = _block('Setting');
  const locationText   = _block('Location');
  const placeText      = _block('Place');
  const backgroundText = _block('Background');

  // Strip trailing time/prep phrases from a location string
  // "Broken Tankard at midnight" → "Broken Tankard"
  const _trimLoc = (s) => s
    .replace(/\s+(?:at|in|during|by|before|after|since|until|around|on)\s+(?:midnight|dawn|morning|noon|afternoon|dusk|evening|night|the|a|an)\b.*/i, '')
    .replace(/\s+(?:beneath|above|below|beyond|outside|inside|under|over|near|beside|next to)\b.*/i, '')
    .trim().slice(0, 55);

  // Known room types ordered specific→generic — used in two passes
  const KNOWN_ROOMS = [
    // compound / very specific first
    'throne room','dungeon cell','cryo pod bay','cryo bay',
    'engine room','briefing room','war room','med bay','sick bay',
    'detention room','detention hall',
    "headmaster's office","principal's office","professor's office","dean's office","headmistress' office",
    'rooftop bar','penthouse suite',
    'hotel room','motel room',
    'hospital room','waiting room','examination room',
    'prison cell','holding cell',
    'control room','server room','research lab','command center',
    'space station','starship bridge',
    'forest clearing','great hall','banquet hall','audience chamber',
    'living room','dining room','laundry room',
    'dorm room','coffee shop',
    // single-concept rooms — ordered specific→generic
    'dungeon','tavern','nightclub','restaurant','laboratory','gymnasium',
    'courtroom','cafeteria','dormitory','classroom','ballroom','penthouse',
    'spaceship','fortress','cellar','workshop','warehouse','clearing','cavern',
    'rooftop','attic','basement','vault','library','bathroom','kitchen','bedroom',
    'study','office','garage','castle','tower','keep','brig',
    'pub','inn','lab','cave',
    'bar','club','cell',
    'meadow','ruins','ruin','alley','street','park','beach',
  ];

  // ── 1. Location — priority chain ────────────────────────────────

  // P1: explicit labeled field
  const explicitLoc = locationText || placeText;
  if (explicitLoc) {
    seed.location = _trimLoc(explicitLoc.split(/[,;\n]/)[0]);
  }

  // P1.3: Named proper-noun in scenario — fires before generic room scan
  // so "The Broken Tankard" beats "bar", "Station Omega-7" beats "station"
  if (!seed.location && scenarioText) {
    const namedThe = /\bThe\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,3})/g;
    let nm;
    while ((nm = namedThe.exec(scenarioText)) !== null) {
      const candidate = 'The ' + nm[1];
      if (!/^The (?:following|user|character|scene|story|world|plot|name|age)\b/i.test(candidate)) {
        seed.location = candidate; break;
      }
    }
  }

  // P1.5: KNOWN_ROOMS direct scan — scan systemText only (not firstCharMsg) so
  // character greetings don't contaminate the starting location.
  // Multi-word rooms use substring match; single words use word boundary.
  const sysLower = (systemText || '').toLowerCase();
  if (!seed.location) {
    for (const room of KNOWN_ROOMS) {
      const matched = room.includes(' ')
        ? sysLower.includes(room)
        : new RegExp('\\b' + room.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(systemText || '');
      if (matched) { seed.location = room; break; }
    }
  }

  // P2: Setting block — try "in/at [the] <place>" noun phrase
  if (!seed.location && settingText) {
    const m = /\b(?:in|at|inside|into)\s+(?:a|an|the)?\s*([a-z][a-z '\-]{2,40}?)(?=[,\.!\n]|$)/i.exec(settingText);
    if (m) seed.location = _trimLoc(m[1]);
    else seed.location = _trimLoc(settingText.split(/[,\.!\n]/)[0]);
  }

  // P3: Scenario block — multiple pattern attempts
  if (!seed.location && scenarioText) {
    const patterns = [
      /\b(?:in|at|inside|into)\s+(?:his|her|my|your|our|their|a|an|the)\s+([a-z][a-z '\-]{2,40}?)(?=[,\.!\n]|$)/i,
      /\b(?:in|at|inside|into)\s+(?:a|an|the)\s+([a-z][a-z '\-]{2,40}?)(?=[,\.!\n]|$)/i,
      /\btakes?\s+place\s+(?:in|at)\s+(?:a|an|the)?\s*([a-z][a-z '\-]{2,40}?)(?=[,\.!\n]|$)/i,
      /^(?:you(?:'re| are)|we(?:'re| are))\s+(?:in|at|inside)\s+(?:a|an|the)?\s*([a-z][a-z '\-]{2,40}?)(?=[,\.!\n])/im,
    ];
    for (const re of patterns) {
      const m = re.exec(scenarioText);
      if (m) { seed.location = _trimLoc(m[1]); break; }
    }
  }

  // P4: first_mes spatial anchor
  if (!seed.location && firstCharMsg) {
    const patterns = [
      /\b(?:in|at|inside|into)\s+(?:the|a|an|my|his|her|your)\s+([a-z][a-z '\-]{2,40}?)(?=[,\.!\n])/i,
      /^[*"]?(?:I(?:'m| am)|We(?:'re| are))\s+(?:in|at|sitting|standing|waiting)\s+(?:in|at)?\s*(?:the|a|an)?\s*([a-z][a-z '\-]{2,40}?)(?=[,\.!\n])/im,
    ];
    for (const re of patterns) {
      const m = re.exec(firstCharMsg);
      if (m) { seed.location = _trimLoc(m[1]); break; }
    }
  }

  // P5: Named proper-noun location ("The Broken Tankard", "Station Omega-7")
  if (!seed.location) {
    const namedThe = /\bThe\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,3})/g;
    let m;
    while ((m = namedThe.exec(fullText)) !== null) {
      const candidate = 'The ' + m[1];
      if (!/^The (?:following|user|character|scene|story|world|plot|name|age)\b/i.test(candidate)) {
        seed.location = candidate; break;
      }
    }
    // Named without "The" — two or more capitalized words, not card fields
    if (!seed.location) {
      const FIELD_RE = /^(?:Name|Age|Sex|Stats|Height|Weight|Build|Outfit|Scenario|Setting|Background|Location|Place|Personality|Appearance)\b/;
      const namedProper = /\b([A-Z][a-z]{2,}(?:[ -][A-Z0-9][a-z0-9]{1,}){1,3})\b/g;
      while ((m = namedProper.exec(fullText)) !== null) {
        if (!FIELD_RE.test(m[1])) { seed.location = m[1]; break; }
      }
    }
  }

  if (!seed.location) seed.location = 'unknown';

  // ── 2. Time of day ───────────────────────────────────────────────
  const TIME_PATTERNS = [
    [/\bmidnight\b/i, 'midnight'], [/\bdawn\b|\bsunrise\b/i, 'dawn'],
    [/\bearly morning\b|\bjust woke\b/i, 'early morning'], [/\bmorning\b/i, 'morning'],
    [/\bnoon\b|\bmidday\b/i, 'midday'], [/\bafternoon\b/i, 'afternoon'],
    [/\bsunset\b|\bdusk\b/i, 'dusk'], [/\bevening\b/i, 'evening'],
    [/\blate night\b/i, 'late night'], [/\bnight\b/i, 'night'],
  ];
  const timeSource = scenarioText + ' ' + (firstCharMsg || '');
  for (const [re, label] of TIME_PATTERNS) {
    if (re.test(timeSource)) { seed.time_of_day = label; break; }
  }

  // ── 3. Objects / furniture — word-boundary matched ────────────────
  const OBJECT_LIST = [
    // universal
    'door','window','floor','wall','ceiling','staircase','stairs',
    // home / bedroom (specific before generic)
    'bunk bed','desk chair','office chair','side table','coffee table',
    'dining table','kitchen counter','bookshelf','bookcase','desk drawer',
    'filing cabinet','nightstand','loveseat','armchair','recliner',
    'wardrobe','closet','dresser','vanity','bathtub','bathroom',
    'shower','toilet','sink','rug','carpet',
    // generic home
    'bed','couch','sofa','shelves','shelf','cabinet','cupboard','drawer',
    'mirror','counter','table','chair','desk',
    // fantasy / historical (specific first)
    'throne room','dungeon cell','treasure chest','tavern bar','bar stool',
    'fireplace','candelabra','brazier','mantle','hearth',
    'stocks','pillory','manacles','chains','torch','lantern',
    'lectern','podium','altar','pedestal','cauldron','forge','anvil',
    'tapestry','banner','curtain','drape','cot','pallet','campfire',
    'fire pit','well','fountain','barrel','crate','chest','throne',
    // sci-fi / tech (specific first)
    'computer terminal','control panel','cryo pod','lab bench',
    'examination table','server rack','hologram','display screen',
    'vending machine','terminal','console','capsule',
    // workplace / school
    'conference table','reception desk','chalkboard','blackboard',
    'whiteboard','classroom desk','school desk','projector','lab equipment',
    // outdoor
    'park bench','picnic table','cliff edge','boulder','rock','bridge',
    'fence','gate','tree','bench',
    // catch-alls (short, prone to false matches — word-boundary only)
    'cage','cell','bar','screen','pod','rack','panel',
  ];

  const foundObjects = [];
  const coveredWords = new Set();
  for (const item of OBJECT_LIST) {
    if (!_wb(item)) continue;
    const words = item.split(' ');
    if (words.length === 1 && coveredWords.has(item)) continue;
    foundObjects.push(item);
    words.forEach(w => coveredWords.add(w));
  }
  if (foundObjects.length) seed.known_objects = [...new Set(foundObjects)].slice(0, 12);

  // ── 4. Props / items — word-boundary matched ─────────────────────
  const PROP_LIST = [
    // kink / restraint (specific first)
    'collar and leash','bondage rope','spreader bar','chastity cage','chastity device',
    'ball gag','butt plug','strap-on','strapon',
    'handcuffs','restraints','blindfold','harness',
    'collar','leash','cuffs','rope','gag','flogger','paddle','whip','crop',
    'vibrator','dildo','plug',
    // clothing / costume (specific first)
    'thigh-highs','thigh highs','high heels','body glitter',
    'miniskirt','crop top','tank top','corset','bustier',
    'stockings','fishnets','lingerie','costume','uniform',
    'underwear','panties','thong','boxers','briefs','bra',
    'stilettos','heels','skirt','dress','gown','choker','necklace','glitter',
    // gaming / streaming (specific first)
    'gaming headset','gaming mouse','gaming console','gaming pc','stream deck',
    'ring light','energy drink','red bull','gfuel',
    'headset','microphone','webcam','gamepad','controller','keyboard',
    // weapons (specific first)
    'pistol','rifle','shotgun','revolver',
    'sword','dagger','knife','blade','axe','spear','lance','bow','gun',
    'scepter','wand','staff','rod','shield','armor','armour',
    // fantasy items
    'crystal ball','spell book','spellbook','grimoire','coin purse',
    'potion','elixir','vial','flask','amulet','talisman','tome',
    'scroll','orb','map','candles','candle','incense','gold','coin',
    // modern / everyday
    'smartphone','laptop','tablet','backpack','wallet','purse','bag','keys',
    'notebook','journal','lighter','vape','cigarette',
    'whiskey','champagne','wine','beer','bottle','mug','glass','cup',
    'plate','food','meal','drink',
    'phone','book','pen','decanter',
    // medical / sci-fi
    'syringe','needle','injection','medication','scanner','implant','device','pill',
    // gaming hardware (catch-all)
    'monitor','keyboard','mouse','pc',
  ];

  const foundProps = [];
  const propCovered = new Set();
  for (const item of PROP_LIST) {
    if (!_wb(item)) continue;
    const words = item.split(' ');
    if (words.length === 1 && propCovered.has(item)) continue;
    foundProps.push(item);
    words.forEach(w => propCovered.add(w));
  }
  if (foundProps.length) seed.known_props = [...new Set(foundProps)].slice(0, 15);

  // ── 5. Atmosphere / genre tags ───────────────────────────────────
  const atmosphere = [];
  // Lighting
  if (/\bcandle(?:lit|light|s)?\b|\btorch(?:lit|es)?\b|\bfirelight\b/i.test(fullText))
    atmosphere.push('candlelit');
  else if (/\bpitch.?black\b|\bunlit\b/i.test(scenarioText + firstCharMsg))
    atmosphere.push('dark');
  else if (/\bdimly?\b|\blow.?light\b|\bshadow(?:ed|y)?\b/i.test(scenarioText + firstCharMsg))
    atmosphere.push('dim');
  else if (/\bsunlit\b|\bflooded with light\b/i.test(scenarioText + firstCharMsg))
    atmosphere.push('bright');
  // Weather
  if (/\brain(?:ing|storm|y)?\b|\bdownpour\b|\bdrizzle\b/i.test(fullText)) atmosphere.push('raining');
  if (/\bsnow(?:ing|storm|y)?\b|\bblizzard\b/i.test(fullText)) atmosphere.push('snowing');
  if (/\bthunder\b|\blightning\b|\bstorm(?:y)?\b/i.test(fullText)) atmosphere.push('stormy');
  if (/\bfog(?:gy)?\b|\bmist(?:y)?\b/i.test(fullText)) atmosphere.push('foggy');
  // Situation
  if (/post.?stream|stream.*ended|after.*stream/i.test(fullText)) atmosphere.push('post-stream');
  if (/after.?(?:work|hours|class|school|shift)/i.test(fullText)) atmosphere.push('after hours');
  if (/late.?(?:at )?night\b/i.test(fullText)) atmosphere.push('late night');
  if (/\bquiet\b|\bsilent\b|\bstill\b|\bempty\b/i.test(scenarioText)) atmosphere.push('quiet');
  if (/\bchaotic?\b|\bbusy\b|\bcrowd(?:ed)?\b/i.test(scenarioText)) atmosphere.push('busy');
  if (/\btense\b|\bdangerous\b|\bwary\b/i.test(scenarioText)) atmosphere.push('tense');
  if (/\bglitter\b/i.test(fullText)) atmosphere.push('glitter everywhere');
  // Genre
  if (/\bmagic(?:al)?\b|\bspell\b|\bwizard\b|\bsorcerer\b|\bdragon\b|\belf\b|\bdwarf\b/i.test(fullText))
    atmosphere.push('fantasy');
  if (/\bspaceship\b|\bspace station\b|\bcyberpunk\b|\bhologram\b|\bneon\b|\bfuturistic\b/i.test(fullText))
    atmosphere.push('sci-fi');
  if (/\bmedieval\b|\bkingdom\b|\bcastle\b|\bthrone\b|\bknigh?t\b/i.test(fullText))
    atmosphere.push('medieval');
  if (/\bvampire\b|\bundead\b|\bgothic\b|\bhaunted\b|\bwerewolf\b/i.test(fullText))
    atmosphere.push('gothic');
  if (atmosphere.length) seed.atmosphere = atmosphere.join(', ');

  // ── 6. Situation — one-line scenario summary ─────────────────────
  if (scenarioText) {
    const clean = scenarioText.replace(/\r?\n/g, ' ').trim();
    seed.situation = clean.length < 200 ? clean : clean.slice(0, 180).replace(/\s\S+$/, '') + '\u2026';
  }

  return seed;
}

function defaultState(rs) {
  if (rs && rs.state_schema) {
    return JSON.parse(JSON.stringify(rs.state_schema));
  }
  return {
    turn: 0, active_pill: null, active_effects: [],
    flags: {}, stats: {}, roll_log: [],
    effect_dcs: {}, effect_stages: {},
    effect_locks: {}, arousal: 0.0, card_body: {},
    storyBeats: [], storyBeatsVersion: 1,
  };
}

function parseCardStats(statsLine, rs) {
  if (!statsLine) return {};
  const stats = {};
  const pairs = statsLine.split(/[,\s]+/);
  for (const pair of pairs) {
    const m = /^([A-Z]{3}):(\d+)$/i.exec(pair.trim());
    if (m) {
      const stat = m[1].toUpperCase();
      const val = parseInt(m[2], 10);
      if (STAT_KEYS.includes(stat)) {
        stats[stat] = val;
        stats[stat + '_mod'] = _fragStatMod(val);
      }
    }
  }
  return stats;
}

function runStatgen(systemText, rs) {
  const combined = (systemText || '').toLowerCase();
  const stats = {};
  const signals = rs.statgen_signals || [];

  for (const stat of STAT_KEYS) {
    stats[stat] = 10;
  }

  for (const signal of signals) {
    const words = signal.words || [];
    const stat = signal.stat;
    const delta = signal.delta || 0;

    for (const kw of words) {
      if (new RegExp('\\b' + reEscape(kw) + '\\b').test(combined)) {
        stats[stat] = Math.max(6, Math.min(14, stats[stat] + delta));
        break;
      }
    }
  }

  for (const stat of STAT_KEYS) {
    stats[stat + '_mod'] = _fragStatMod(stats[stat]);
  }

  return stats;
}

// ──────────────────────────────────────────────────────────────────────────────
// FORM & SEX SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

function _resolveSex(cardSex) {
  const v = (cardSex || '').toLowerCase().trim();
  // MTF / MtF / male-to-female → trans_female (birth sex = male)
  if (/\bmtf\b|male.to.female/i.test(v)) return 'trans_female';
  // FTM / FtM / female-to-male → trans_male (birth sex = female)
  if (/\bftm\b|female.to.male/i.test(v)) return 'trans_male';
  // Explicit trans + gender keywords
  if (v.includes('trans') && (v.includes('female') || v.includes('woman') || v.includes('girl'))) return 'trans_female';
  if (v.includes('trans') && (v.includes('male') || v.includes('man') || v.includes('boy'))) return 'trans_male';
  if (v.includes('intersex')) return 'intersex';
  if (v.includes('female') || v.includes('woman') || v.includes('girl')) return 'female';
  if (v.includes('male') || v.includes('man') || v.includes('boy')) return 'male';
  return 'male';
}

function parseSex(text) {
  return _resolveSex(text);
}

function parseSexBaseline(text) {
  return _resolveSex(text);
}

function pillTrack(sexBaseline) {
  // trans_female = MTF = born with penis; trans_male = FTM = born with vagina
  if (sexBaseline === 'male' || sexBaseline === 'trans_female') return PENIS_TRACK;
  if (sexBaseline === 'female' || sexBaseline === 'trans_male') return VAGINA_TRACK;
  return PENIS_TRACK; // intersex → default to penis
}

function _formLookup(cardSex, rs) {
  const form_system = rs.form_system || {};
  const baseline = _resolveSex(cardSex);
  return (form_system[baseline] || {});
}

function currentSex(state, cardSex, rs) {
  const pill = state.active_pill;
  // pill_rules is authoritative
  if (pill && rs) {
    const pr = (rs.pill_rules || {})[pill] || {};
    if (pr.form_sex) return pr.form_sex;
  }
  return _resolveSex(cardSex);
}

const _KNOWN_GENITALS = new Set(['vagina_only', 'penis_only', 'penis_only_no_vagina', 'both', 'natural']);

function currentGenitals(state, cardSex, rs) {
  const pill = state.active_pill;
  // pill_rules is authoritative — checked first, prevents stale model-written values
  if (pill && rs) {
    const pr = (rs.pill_rules || {})[pill] || {};
    if (pr.genitals) return pr.genitals;
  }
  // trust form.genitals if it's a known valid value (not model-written garbage like 'transformed')
  const form = state.form || {};
  const formGenitals = typeof form === 'object' ? form.genitals : null;
  if (formGenitals && _KNOWN_GENITALS.has(formGenitals)) return formGenitals;
  // fall back to card sex — native female has vagina_only, native male has penis_only
  const cs = (cardSex || '').toLowerCase();
  if (cs === 'female') return 'vagina_only';
  if (cs === 'male')   return 'penis_only';
  return 'natural';
}

function canGetPregnant(state, cardSex, rs) {
  const genitals = currentGenitals(state, cardSex, rs);
  return genitals === 'vagina_only' || genitals === 'female';
}

function pillRule(state, rs) {
  const pill = state.active_pill;
  if (!pill) return {};
  return rs.pill_rules?.[pill] || {};
}

// ──────────────────────────────────────────────────────────────────────────────
// AROUSAL SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

function _arousalScale(rs) {
  return parseFloat((rs.arousal_system?.formula || {}).scale || 100.0);
}

function getArousal(state) {
  return parseFloat(state.arousal || 0.0);
}

function getArousalFloor(state, rs) {
  const em = rs.effect_mechanics || {};
  let floor = 0.0;
  for (const [effName, mech] of Object.entries(em)) {
    const tb = mech.trigger_behavior || {};
    if (!tb.arousal_floor) continue;
    const stage = parseInt((state.effect_stages || {})[effName] || 0, 10);
    const floors = rs.arousal_system?.addiction_floor || {};
    floor = Math.max(floor, parseFloat(floors['stage_' + stage] || 0));
  }
  // Side effect floor bonus (e.g. Hair Trigger +2)
  if (state._side_fx_arousal_floor_bonus) {
    floor = Math.max(floor, parseFloat(state._side_fx_arousal_floor_bonus));
  }
  return floor;
}

function setArousal(state, value, rs) {
  const floor = getArousalFloor(state, rs);
  const mx = parseFloat(rs.arousal_system?.max || 60);
  state.arousal = Math.round(Math.max(floor, Math.min(mx, parseFloat(value))) * 100) / 100;
}

function growArousal(state, weight, rs) {
  const TIER_SIZE = 5;
  const scale = _arousalScale(rs);
  const current = getArousal(state);
  const proposed = Math.min(current + weight * (1.0 + current / scale), parseFloat(rs.arousal_system?.max || 60));

  const gateDone = state._arousal_gate_done;

  if (gateDone === 'held') {
    const heldAt = state._arousal_gate_held_at || current;
    setArousal(state, Math.min(proposed, heldAt), rs);
    return;
  }

  if (gateDone === 'crossed') {
    const crossedTo = state._arousal_gate_crossed_to || current;
    setArousal(state, Math.min(proposed, parseFloat(crossedTo)), rs);
    return;
  }

  let pos = current;

  while (pos < proposed) {
    const currentTier = Math.floor(pos / TIER_SIZE);
    const nextBoundary = (currentTier + 1) * TIER_SIZE;

    if (proposed < nextBoundary) {
      pos = proposed;
      break;
    }

    const baseDc = parseInt(rs.arousal_system?.level_gate_dc || 10, 10);
    const dc = parseInt(state._arousal_gate_dc || baseDc, 10);

    const [d12Result, d12Raw] = _rollD12Stat(state);
    const d12Stat = Array.isArray(d12Result) ? d12Result[0] : d12Result;
    const modVal = _mod(state, d12Stat);

    const rawRoll = randInt(1, 20);
    const total = rawRoll + modVal;
    let passed = total >= dc;

    const streakBoundary = state._gate_pass_streak_at || -1;
    const streakCount = state._gate_pass_streak || 0;
    let fatigueBreak = false;
    if (streakBoundary === nextBoundary && streakCount >= 2) {
      passed = false;
      fatigueBreak = true;
    }

    const statLabel = Array.isArray(d12Result) ? d12Result.join('+') : d12Stat;

    const gate = {
      roll: rawRoll,
      d12: d12Raw,
      d12_stat: d12Stat,
      d12_shared: Array.isArray(d12Result),
      mod: modVal,
      total: total,
      dc: dc,
      threshold: nextBoundary,
    };

    if (passed) {
      state._arousal_gate_dc = dc + 1;
      const heldPos = nextBoundary - 0.01;
      pos = heldPos;

      if (streakBoundary === nextBoundary) {
        state._gate_pass_streak = streakCount + 1;
      } else {
        state._gate_pass_streak = 1;
        state._gate_pass_streak_at = nextBoundary;
      }

      gate.result = 'held';
      gate.pass_streak = state._gate_pass_streak;
      state._arousal_gate = gate;
      state._arousal_gate_done = 'held';
      state._arousal_gate_held_at = heldPos;

      const entry = 'arousal_gate:PASS(d12=' + d12Raw + '->' + statLabel
        + ' d20=' + rawRoll + (modVal >= 0 ? '+' : '') + modVal
        + '=' + total + ' vs DC=' + dc
        + ' tier=' + nextBoundary
        + ' streak=' + state._gate_pass_streak + ' HELD)';
      (state.roll_log = state.roll_log || []).push(entry);
      break;
    } else {
      state._arousal_gate_dc = dc + 2;
      state._arousal_gate_fail_count = (state._arousal_gate_fail_count || 0) + 1;
      state.session_fail_count = (state.session_fail_count || 0) + 1;
      state._gate_pass_streak = 0;
      state._gate_pass_streak_at = -1;
      pos = nextBoundary;

      const arousalTier = Math.floor(nextBoundary / TIER_SIZE);
      const origin = state._sex_origin || 'male';
      const tier = Math.min(19, arousalTier);
      const statVal = Math.max(0, Math.min(20, parseInt((state.stats || {})[d12Stat] || 10, 10)));
      const negText = _pick((((_NEGATIVE_BLOCKS[d12Stat] || {})[origin] || {})[tier] || {})[statVal] || '');
      let negFinal = negText;
      if (Array.isArray(d12Result) && d12Result.length > 1) {
        const stat2Val = Math.max(0, Math.min(20, parseInt((state.stats || {})[d12Result[1]] || 10, 10)));
        const neg2 = _pick((((_NEGATIVE_BLOCKS[d12Result[1]] || {})[origin] || {})[tier] || {})[stat2Val] || '');
        if (neg2) negFinal = (negText ? negText + ' ' + neg2 : neg2);
      }
      gate.neg_block = negFinal;
      gate.d12_stat = d12Stat;

      gate.result = fatigueBreak ? 'fatigue_break' : 'crossed';
      state._arousal_gate = gate;
      state._arousal_gate_done = 'crossed';
      state._arousal_gate_crossed_to = nextBoundary;

      if (fatigueBreak) {
        const entry = 'arousal_gate:FATIGUE_BREAK(d12=' + d12Raw + '->' + statLabel
          + ' d20=' + rawRoll + (modVal >= 0 ? '+' : '') + modVal
          + '=' + total + ' vs DC=' + dc
          + ' tier=' + nextBoundary
          + ' streak=3 WILLPOWER_BROKE)';
        (state.roll_log = state.roll_log || []).push(entry);
      } else {
        const entry = 'arousal_gate:FAIL(d12=' + d12Raw + '->' + statLabel
          + ' d20=' + rawRoll + (modVal >= 0 ? '+' : '') + modVal
          + '=' + total + ' vs DC=' + dc
          + ' tier=' + nextBoundary + ' CROSSED)';
        (state.roll_log = state.roll_log || []).push(entry);
      }
      _bimboLucidCheck(state);
    }
  }

  if (state._arousal_gate_done === 'crossed') {
    state._arousal_gate_crossed_to = pos;
  }

  setArousal(state, pos, rs);
}

function arousalLabel(level, rs) {
  const thresholds = rs.arousal_system?.thresholds || {};
  let label = 'baseline';
  for (const k of Object.keys(thresholds).sort((a, b) => parseInt(a) - parseInt(b))) {
    if (level >= parseInt(k)) {
      label = thresholds[k].label || label;
    }
  }
  return label;
}

function arousalRollPenalty(state, rs) {
  const level = getArousal(state);
  const penCfg = rs.arousal_system?.arousal_roll_penalty?.thresholds || {};
  let penalty = 0;
  for (const k of Object.keys(penCfg).sort((a, b) => parseInt(a) - parseInt(b))) {
    if (level >= parseInt(k)) {
      const v = penCfg[k];
      if (v === 'auto_fail') return 'auto_fail';
      penalty = parseInt(v, 10);
    }
  }
  return penalty;
}


// ── SIDE EFFECTS SYSTEM ─────────────────────────────────────────────────────

function _sideEffectFailBand(sessionFailCount) {
  if (sessionFailCount >= 20) return 50;
  if (sessionFailCount >= 15) return 40;
  if (sessionFailCount >= 10) return 30;
  if (sessionFailCount >= 5)  return 20;
  return 10;
}

function checkSideEffects(state, events, rs, cardSex) {
  if (!state.active_pill) return;  // hard gate — no pill, no side effects

  const fails   = parseInt(state.session_fail_count || 0, 10);
  const orgasms = parseInt(state.session_orgasm_count || 0, 10);
  const sideEff = state.active_side_effects = state.active_side_effects || [];
  const active  = state.active_effects || [];
  const gate    = state._arousal_gate || {};
  const arousal = getArousal(state);
  const tier    = Math.floor(arousal / 5);

  // Hair Trigger and Two in the Chamber only check when an orgasm fires this turn
  if (events.orgasm) {
    // ── 1. Hair Trigger ──────────────────────────────────────────────
    // Fires on 3rd+ orgasm within a session. Incompatible with Enduramax.
    if (orgasms >= 3 &&
        !sideEff.includes('hair_trigger') &&
        !sideEff.includes('enduramax')) {
      const band   = _sideEffectFailBand(fails);
      const bonus  = (orgasms - 2) * 10;
      const thresh = band + bonus;
      const roll   = randInt(1, 100);
      console.log('[SIDE_FX] Hair Trigger check: orgasms=' + orgasms + ' thresh=' + thresh + ' roll=' + roll);
      if (roll <= thresh) {
        sideEff.push('hair_trigger');
        state._hair_trigger_active = true;
        // Arousal floor +2 tracked via bonus key
        state._side_fx_arousal_floor_bonus = Math.max(state._side_fx_arousal_floor_bonus || 0, 2);
        console.log('[SIDE_FX] Hair Trigger ACQUIRED — floor+2');
      }
    }

    // ── 2. Two in the Chamber ────────────────────────────────────────
    // Requires Hair Trigger active. Rolls on 4th+ orgasm.
    if (orgasms >= 4 &&
        state._hair_trigger_active &&
        !sideEff.includes('two_in_chamber')) {
      const band   = _sideEffectFailBand(fails);
      const bonus  = (orgasms - 2) * 10;
      const thresh = band + bonus;
      const roll   = randInt(1, 100);
      console.log('[SIDE_FX] Two in Chamber check: orgasms=' + orgasms + ' thresh=' + thresh + ' roll=' + roll);
      if (roll <= thresh) {
        sideEff.push('two_in_chamber');
        state._two_in_chamber_active = true;
        state._two_in_chamber_chain  = 0;
        console.log('[SIDE_FX] Two in Chamber ACQUIRED');
      }
    }
  }

  // ── 3. Confirmed Submissive ──────────────────────────────────────
  // Checks when gate crosses at tier 17+ with SUB as the failing stat.
  if (tier >= 17 &&
      gate.result === 'crossed' &&
      gate.d12_stat === 'SUB' &&
      !sideEff.includes('confirmed_submissive') &&
      !sideEff.includes('tyrant')) {
    const band   = _sideEffectFailBand(fails);
    const bonus  = orgasms * 10;
    const thresh = band + bonus;
    const roll   = randInt(1, 100);
    console.log('[SIDE_FX] Confirmed Submissive check: tier=' + tier + ' thresh=' + thresh + ' roll=' + roll);
    if (roll <= thresh) {
      sideEff.push('confirmed_submissive');
      // SUB +5, ceiling 20
      const stats = state.stats = state.stats || {};
      stats.SUB = Math.min(20, parseInt(stats.SUB || 10, 10) + 5);
      // WIL DC +1
      state._arousal_gate_dc = parseInt(state._arousal_gate_dc || 10, 10) + 1;
      // Conflict: remove Tyrant if somehow present
      state.active_side_effects = sideEff.filter(e => e !== 'tyrant');
      console.log('[SIDE_FX] Confirmed Submissive ACQUIRED — SUB=' + stats.SUB + ' DC+1');
    }
  }

  // ── 4. Extra Fertile ─────────────────────────────────────────────
  // Fires when CON gate fails at tier 17+, current genitals are vagina, pill active.
  // Adds (pregnancies_completed * 5)% flat bonus to every pregnancy roll.
  if (tier >= 17 &&
      gate.result === 'crossed' &&
      gate.d12_stat === 'CON' &&
      state.active_pill &&
      currentGenitals(state, cardSex, rs) === 'vagina_only' &&
      !sideEff.includes('extra_fertile')) {
    const thresh = _sideEffectFailBand(fails);
    const roll   = randInt(1, 100);
    console.log('[SIDE_FX] Extra Fertile check: tier=' + tier + ' thresh=' + thresh + ' roll=' + roll);
    if (roll <= thresh) {
      sideEff.push('extra_fertile');
      state._extra_fertile_bonus = parseInt(state.pregnancies_completed || 0, 10) * 5;
      console.log('[SIDE_FX] Extra Fertile ACQUIRED — pregnancy +' + state._extra_fertile_bonus + '% (pregnancies_completed=' + (state.pregnancies_completed || 0) + ')');
    }
  }

  // ── 5. Excitable Ovaries ──────────────────────────────────────────
  // Requires: Extra Fertile active, CON gate crossed, tier 17+, current genitals vagina, pill active.
  // Adds +5% to pregnancy chance per orgasm this session. Resets each session.
  if (tier >= 17 &&
      gate.result === 'crossed' &&
      gate.d12_stat === 'CON' &&
      state.active_pill &&
      currentGenitals(state, cardSex, rs) === 'vagina_only' &&
      sideEff.includes('extra_fertile') &&
      !sideEff.includes('excitable_ovaries')) {
    const thresh = _sideEffectFailBand(fails);
    const roll   = randInt(1, 100);
    console.log('[SIDE_FX] Excitable Ovaries check: tier=' + tier + ' thresh=' + thresh + ' roll=' + roll);
    if (roll <= thresh) {
      sideEff.push('excitable_ovaries');
      state._excitable_ovaries_bonus = 0;
      console.log('[SIDE_FX] Excitable Ovaries ACQUIRED — +5% per orgasm this session');
    }
  }
}

function applySideEffectMechanics(state, rs) {
  // Applies persistent per-turn mechanics for active side effects.
  // Called at the top of applyEffectPassives each turn.
  const sideEff = state.active_side_effects || [];

  // Hair Trigger — keep arousal floor bonus applied while active
  if (sideEff.includes('hair_trigger')) {
    state._side_fx_arousal_floor_bonus = Math.max(state._side_fx_arousal_floor_bonus || 0, 2);
  }
}

function applyEffectPassives(state, rs, debug) {
  applySideEffectMechanics(state, rs);
  const em = rs.effect_mechanics || {};
  for (const eff of state.active_effects || []) {
    const gain = parseFloat(em[eff]?.passive_arousal_per_turn || 0);
    if (gain) {
      growArousal(state, gain, rs);
      if (debug) {
        console.log('[AROUSAL] passive +' + gain + ' from ' + eff);
      }
    }
  }
}

function scanArousal(messagesRecent, state, rs, debug) {
  const cap = parseFloat(rs.arousal_system?.scan_cap || 999.0);
  let gained = 0.0;
  const hits = [];
  const actionKw = rs.arousal_action_kw || [];

  for (const msg of messagesRecent) {
    const text = msg.content || '';
    const role = (msg.role || '').toLowerCase();

    if (role === 'assistant') {
      for (const [weight, pat] of rs.arousal_kw || []) {
        if (pat.test(text) && gained < cap) {
          const before = getArousal(state);
          growArousal(state, weight, rs);
          gained += getArousal(state) - before;
          hits.push(pat.source + '(+' + weight + ')');
        }
      }
    }

    if (role === 'user' && actionKw.length > 0) {
      for (const [weight, pat] of actionKw) {
        if (pat.test(text) && gained < cap) {
          const before = getArousal(state);
          growArousal(state, weight, rs);
          gained += getArousal(state) - before;
          hits.push(pat.source + '[act+' + weight + ']');
        }
      }
    }
  }

  if (debug && hits.length > 0) {
    console.log('[AROUSAL] +' + Math.round(gained * 100) / 100 + ' from: ' + hits.join(', '));
  } else if (debug) {
    console.log('[AROUSAL] no keywords matched');
  }
}

function applyArousalDecay(state, rs) {
  const noDecay = new Set(rs.arousal_system?.no_decay_effects || []);
  if ((state.active_effects || []).some(e => noDecay.has(e))) {
    return;
  }
  const decay = parseFloat(rs.arousal_system?.passive_decay || 0.0);
  if (decay > 0 && getArousal(state) > 0) {
    const tierBefore = Math.min(19, Math.floor(getArousal(state) / 5));
    setArousal(state, getArousal(state) - decay, rs);
    const tierAfter = Math.min(19, Math.floor(getArousal(state) / 5));

    // For each tier boundary crossed downward, roll a gated d20 check
    // (same mechanic as the upward gate: d12 picks the stat, d20+mod vs current DC).
    // Pass -> DC -2, fail -> DC -1.  Both floored at baseDc.
    // Prevents permanent auto-fail lock under denial / no-orgasm effects.
    const tiersDropped = tierBefore - tierAfter;
    if (tiersDropped > 0 && state._arousal_gate_dc != null) {
      const baseDc = parseInt(rs.arousal_system?.level_gate_dc || 10, 10);
      for (let t = 0; t < tiersDropped; t++) {
        const dc = parseInt(state._arousal_gate_dc, 10);
        if (dc <= baseDc) break; // already at floor, nothing to roll for

        const [d12Result, d12Raw] = _rollD12Stat(state);
        const d12Stat = Array.isArray(d12Result) ? d12Result[0] : d12Result;
        const modVal = _mod(state, d12Stat);
        const rawRoll = randInt(1, 20);
        const total = rawRoll + modVal;
        const passed = total >= dc;

        const statLabel = Array.isArray(d12Result) ? d12Result.join('+') : d12Stat;
        const reduction = passed ? 2 : 1;
        state._arousal_gate_dc = Math.max(baseDc, dc - reduction);
        // Decay fail_count in sync with DC
        if (state._arousal_gate_fail_count > 0) {
          state._arousal_gate_fail_count = Math.max(0,
            (state._arousal_gate_fail_count || 0) - Math.ceil(reduction / 2));
        }

        const crossedTier = tierAfter + t + 1;
        const entry = 'decay_gate:' + (passed ? 'PASS' : 'FAIL')
          + '(d12=' + d12Raw + '->' + statLabel
          + ' d20=' + rawRoll + (modVal >= 0 ? '+' : '') + modVal
          + '=' + total + ' vs DC=' + dc
          + ' tier=' + crossedTier
          + ' DC_now=' + state._arousal_gate_dc + ')';
        (state.roll_log = state.roll_log || []).push(entry);
      }
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// STAT MOD SYSTEM
// ──────────────────────────────────────────────────────────────────────────────

function _mod(state, key) {
  const raw = parseInt((state.stats || {})[key] || 10, 10);
  const perm = parseInt((state._perm_stat_mods || {})[key] || 0, 10);
  const temp = parseInt((state._temp_stat_mods || {})[key] || 0, 10);
  return _fragStatMod(raw + perm + temp);
}

// ──────────────────────────────────────────────────────────────────────────────
// EFFECT MECHANICS
// ──────────────────────────────────────────────────────────────────────────────

function getEffectDc(state, name) {
  return parseInt((state.effect_dcs || {})[name] || 10, 10);
}

function setEffectDc(state, name, dc) {
  (state.effect_dcs = state.effect_dcs || {})[name] = dc;
}

function getEffectStage(state, name) {
  return parseInt((state.effect_stages || {})[name] || 0, 10);
}

function setEffectStage(state, name, stage) {
  (state.effect_stages = state.effect_stages || {})[name] = stage;
}

/**
 * Returns the effective minimum arousal threshold for an effect, factoring in
 * addiction stage reductions. Each stage of breeder_addiction lowers the base
 * threshold by 3 points, down to a floor of 3.
 *   Stage 0: base (21)
 *   Stage 1: base - 7 (14)
 *   Stage 2: base - 14 (7)
 *   Stage 3: base - 21 (0) — always active
 */
function effectiveMinArousal(baseThreshold, state) {
  if (baseThreshold == null) return null;
  const addictionStage = getEffectStage(state, 'breeder_addiction');
  if (!addictionStage) return baseThreshold;
  const reductions = [0, 7, 14, 21];
  const reduction = reductions[Math.min(addictionStage, reductions.length - 1)] || 0;
  return Math.max(0, baseThreshold - reduction);
}

function isLocked(state, name) {
  return !!((state.effect_locks || {})[name]);
}

function lockEffect(state, name) {
  (state.effect_locks = state.effect_locks || {})[name] = true;
}

function getStatMod(state, key) {
  return parseInt((state.stats || {})[key] || 0, 10);
}

function computeMods(state, statList) {
  let total = 0;
  for (let item of (statList || [])) {
    item = (item || '').trim();
    const sign = item.startsWith('-') ? -1 : 1;
    item = item.replace(/^[+-]/, '');
    total += sign * getStatMod(state, item);
  }
  return total;
}

function _resolveBirthDc(dcSrc, state, rs) {
  // Resolve DC values that can be either static numbers or dynamic formulas referencing state
  const mechanic = dcSrc.mechanic || '';
  const stageEffect = dcSrc.stage_effect || '';
  const pm = rs.pregnancy_mechanics || {};
  const mechDef = pm[mechanic] || {};
  const dcTable = mechDef.dc_by_stage || {};
  const stage = (state.effect_stages || {})[stageEffect] || 0;
  return dcTable[String(stage)] || 'impossible';
}

function checkMathLock(state, name, rs) {
  const mech = rs.effect_mechanics?.[name] || {};
  const dc = (state.effect_dcs || {})[name];
  const maxRoll = 20 + computeMods(state, mech.roll || []);
  if (dc && dc > maxRoll) {
    lockEffect(state, name);
    return true;
  }
  return false;
}

function runRoll(state, name, notes, rs) {
  // Core roll: d20 + stat mods vs DC, with escalation and arousal penalty
  if (isLocked(state, name)) {
    notes.push(name + ':LOCKED');
    return 'locked';
  }

  const mech       = (rs.effect_mechanics || {})[name] || {};
  const rollList   = mech.roll || [];
  let   mods       = computeMods(state, rollList);
  const currentDc  = getEffectDc(state, name);
  const escalation = parseInt(mech.escalation || 2, 10);
  const escalateOn = mech.escalate_on || 'pass';

  // Arousal penalty (high arousal makes rolls harder)
  const arPen = arousalRollPenalty(state, rs);
  if (arPen === 'auto_fail') {
    notes.push(name + ':auto-fail(arousal=max)');
    return 'fail';
  }
  mods += arPen;

  // Math lock: if best possible roll can't beat DC, lock it
  const maxPossible = 20 + mods;
  if (maxPossible < currentDc) {
    lockEffect(state, name);
    notes.push(name + ':LOCKED(max=' + maxPossible + '<DC=' + currentDc + ')');
    return 'locked';
  }

  // Roll d20
  const roll   = randInt(1, 20);
  const total  = roll + mods;
  const passed = total >= currentDc;
  const tag    = passed ? 'PASS' : 'FAIL';
  const sign   = mods >= 0 ? '+' : '';
  const entry  = name + ':' + tag + '(d20=' + roll + sign + mods + '=' + total + ' vs DC=' + currentDc + ')';
  notes.push(entry);
  state.roll_log = state.roll_log || [];
  state.roll_log.push(entry);
  console.log('[ROLL] ' + name + ' ' + tag + ' d20=' + roll + ' mods=' + mods + ' total=' + total + ' dc=' + currentDc);

  // DC escalation
  if (passed && escalateOn === 'pass') {
    setEffectDc(state, name, currentDc + escalation);
    checkMathLock(state, name, rs);
  }
  if (!passed && escalateOn === 'fail') {
    setEffectDc(state, name, currentDc + escalation);
    checkMathLock(state, name, rs);
  }

  // Trigger behavior logging
  const tb    = mech.trigger_behavior || {};
  const tbLog = passed ? tb.on_pass : tb.on_fail;
  if (tbLog) {
    notes.push(typeof tbLog === 'string' ? tbLog : (tbLog.log || String(tbLog)));
  }

  return passed ? 'pass' : 'fail';
}

function runDirectiveResist(state, effName, notes, rs, personaState) {
  // ── Issuer domination DC: 8 + persona_DOM_mod + persona_WIS_mod ──
  const pStats = (personaState || {}).base_stats || {};
  const issuerDomMod = typeof pStats.DOM_mod === 'number' ? pStats.DOM_mod : _fragStatMod(parseInt(pStats.DOM || 10, 10));
  const issuerWisMod = typeof pStats.WIS_mod === 'number' ? pStats.WIS_mod : _fragStatMod(parseInt(pStats.WIS || 10, 10));
  const dominationDc = 8 + issuerDomMod + issuerWisMod;

  // Store for orgasm-reset reference
  state._domination_dc = dominationDc;

  // Initialize DC on first directive roll for this effect (replaces flavor_trigger start_dc init)
  state._directive_dc_initialized = state._directive_dc_initialized || {};
  if (!state._directive_dc_initialized[effName]) {
    setEffectDc(state, effName, dominationDc);
    state._directive_dc_initialized[effName] = true;
  }

  if (isLocked(state, effName)) {
    notes.push(effName + ':LOCKED');
    return 'locked';
  }

  const mech = (rs.effect_mechanics || {})[effName] || {};
  const escalation = parseInt(mech.escalation || 2, 10);
  const escalateOn = mech.escalate_on || 'pass';
  const currentDc = getEffectDc(state, effName);

  // Sub resist roll: d20 + char_DOM_mod - char_SUB_mod
  const charDomMod = getStatMod(state, 'DOM_mod');
  const charSubMod = getStatMod(state, 'SUB_mod');
  let mods = charDomMod - charSubMod;

  // Arousal penalty (high arousal makes resisting harder)
  const arPen = arousalRollPenalty(state, rs);
  if (arPen === 'auto_fail') {
    notes.push(effName + ':auto-fail(arousal=max)');
    return 'fail';
  }
  mods += arPen;

  // Math lock: if best possible roll can't beat DC, lock it
  const maxPossible = 20 + mods;
  if (maxPossible < currentDc) {
    lockEffect(state, effName);
    notes.push(effName + ':LOCKED(max=' + maxPossible + '<DC=' + currentDc + ')');
    return 'locked';
  }

  const roll = randInt(1, 20);
  const total = roll + mods;
  const passed = total >= currentDc;
  const tag = passed ? 'PASS' : 'FAIL';
  const sign = mods >= 0 ? '+' : '';
  const entry = effName + ':' + tag + '(d20=' + roll + sign + mods + '=' + total + ' vs domDC=' + currentDc + ')';
  notes.push(entry);
  state.roll_log = state.roll_log || [];
  state.roll_log.push(entry);
  console.log('[DOMRESIST] ' + effName + ' ' + tag + ' d20=' + roll + ' DOM_mod=' + charDomMod + ' SUB_mod=' + charSubMod + ' mods=' + mods + ' total=' + total + ' domDC=' + currentDc + ' (issuer DOM_mod=' + issuerDomMod + ' WIS_mod=' + issuerWisMod + ')');

  if (passed && escalateOn === 'pass') {
    setEffectDc(state, effName, currentDc + escalation);
    checkMathLock(state, effName, rs);
  }
  if (!passed && escalateOn === 'fail') {
    setEffectDc(state, effName, currentDc + escalation);
    checkMathLock(state, effName, rs);
  }

  return passed ? 'pass' : 'fail';
}

function advanceStage(state, name, notes, rs, toDb) {
  const mech     = (rs.effect_mechanics || {})[name] || {};
  const stages   = mech.stages || {};
  const current  = getEffectStage(state, name);
  const maxStage = Object.keys(stages).length;
  if (current >= maxStage) return;

  const newStage  = current + 1;
  setEffectStage(state, name, newStage);

  // Track for masculinity triggers
  state._stage_advances_this_turn = state._stage_advances_this_turn || [];
  state._stage_advances_this_turn.push(name);

  const stageInfo = stages[String(newStage)] || {};
  notes.push(name + ' stage->' + newStage + ': ' + (stageInfo.note || ''));

  // Apply stat penalties from stage data
  const stats      = (state.stats = state.stats || {});
  const ec         = (rs.engine_config || {});
  const penSuffix  = ec.stage_penalty_suffix || '_penalty';
  const permPrefix = ec.perm_stage_flag_prefix || 'perm_';

  for (const [sk, sv] of Object.entries(stageInfo)) {
    if (sk.endsWith(penSuffix)) {
      const base = sk.slice(0, -penSuffix.length).toUpperCase() + '_mod';
      stats[base] = parseInt(stats[base] || 0, 10) + parseInt(sv, 10);
      notes.push(base + '=' + stats[base]);
    }
  }

  // Lock if permanent stage or max reached
  if (stageInfo.permanent || newStage >= maxStage) {
    lockEffect(state, name);
    notes.push(name + ':permanent stage=' + newStage);
    if (toDb) {
      state.flags = state.flags || {};
      state.flags[permPrefix + name + '_stage'] = newStage;
    }
  }
}

function rollPregnancy(effects, rs, personaEffects, state) {
  // Python lines 13659-13687: d100 vs pregnancy odds with effect-based modifiers
  const odds = (rs || {}).pregnancy_odds || {};
  const flavorTriggers = (rs || {}).flavor_triggers || [];

  // Build flavor trigger dict
  const ftDict = {};
  for (const f of flavorTriggers) {
    if (f && typeof f === 'object' && f.effect) {
      ftDict[f.effect] = f;
    }
  }

  // Merge character + persona effects
  const modes = new Set();
  const allEffects = Array.from(effects || []);
  for (const pe of (personaEffects || [])) {
    if (!allEffects.includes(pe)) {
      allEffects.push(pe);
    }
  }

  // Collect pregnancy modes from flavor triggers
  for (const eff of allEffects) {
    const f = ftDict[eff] || {};
    if (f.pregnancy_mode) {
      modes.add(f.pregnancy_mode);
    }
  }

  // Collect pregnancy modes from effect mechanics trigger_behavior
  const effectMechanics = (rs || {}).effect_mechanics || {};
  for (const eff of allEffects) {
    const tb = (effectMechanics[eff] || {}).trigger_behavior || {};
    const pm = tb.pregnancy_partner_mode;
    if (pm) {
      modes.add(pm);
    }
  }

  // Determine chance based on modes
  let chance = parseInt(odds.normal || 4, 10);
  let chanceKey = 'normal';
  const rolePriority = odds.role_priority || [];
  for (const entry of rolePriority) {
    const requiredRoles = entry.roles || [];
    if (requiredRoles.every(r => modes.has(r))) {
      chanceKey = entry.key;
      chance = parseInt(odds[chanceKey] || chance, 10);
      break;
    }
  }

  // Extra Fertile bonus — flat % added on top of mode-resolved chance, capped at 100
  const extraFertileBonus = parseInt((state || {})._extra_fertile_bonus || 0, 10);
  if (extraFertileBonus > 0) {
    chance = Math.min(100, chance + extraFertileBonus);
    console.log('[PREG] extra_fertile +' + extraFertileBonus + '% → chance now ' + chance + '%');
  }

  // Excitable Ovaries bonus — +5% per orgasm this session, capped at 100
  const excitableBonus = parseInt((state || {})._excitable_ovaries_bonus || 0, 10);
  if (excitableBonus > 0) {
    chance = Math.min(100, chance + excitableBonus);
    console.log('[PREG] excitable_ovaries +' + excitableBonus + '% → chance now ' + chance + '%');
  }

  // Roll d100
  const roll = randInt(1, 100);
  const success = roll <= chance;
  console.log('[PREG] d100=' + roll + ' need<=' + chance + ' (' + chanceKey + ') => ' + (success ? 'YES' : 'no'));
  return { success, roll, chance, chanceKey, modes: [...modes] };
}

// ──────────────────────────────────────────────────────────────────────────────
// BODY SCANNING & CLOTHING
// ──────────────────────────────────────────────────────────────────────────────

function _compileGarmentPatterns(rs) {
  // Python lines 13325-13340: Compile garment patterns, longest keys first
  // Returns array of [pattern, key, info]
  let compiled = (rs || {})._compiled_garment_patterns;
  if (compiled) return compiled;

  const cfg = (rs || {}).clothing_arousal || {};
  const garments = cfg.garments || {};
  const entries = [];

  for (const [key, info] of Object.entries(garments)) {
    const pat = new RegExp('\\b' + reEscape(key) + '(?:s|es)?\\b', 'i');
    entries.push([pat, key, info]);
  }

  // Sort by key length descending (longest first to avoid 'bra' matching in 'sports bra')
  entries.sort((a, b) => b[1].length - a[1].length);
  rs._compiled_garment_patterns = entries;
  return entries;
}

function _zonesFromItems(items) {
  // Python lines 13368-13379: Get set of covered zones from items dict
  const zones = new Set();
  for (const info of Object.values(items || {})) {
    const z = (info || {}).zone || '';
    zones.add(z);
    if (z === 'full') {
      zones.add('torso');
      zones.add('legs');
    } else if (z === 'intimate') {
      zones.add('chest');
      zones.add('groin');
    }
  }
  return zones;
}

function _exposureSummary(isNaked, items, rs) {
  // Python lines 13381-13390: Return short string summarizing what's worn
  if (isNaked) return 'naked';
  if (!items || Object.keys(items).length === 0) return 'unknown';
  return Object.keys(items).sort().join(',');
}

function scanCardBody(systemText, rs) {
  // Extract height, weight, build from labeled fields (preferred) or measurement patterns (fallback)
  const text = _cardSection(systemText);
  const body = {};

  const cs = (rs || {}).card_scan || {};

  // ── Try explicit labeled fields first: Height:, Weight:, Build: ──
  const heightLabel = text.match(/\bHeight:\s*(\d+)'(\d+)/i);
  const weightLabel = text.match(/\bWeight:\s*(\d+)\s*lbs?/i);
  const buildLabel  = text.match(/\bBuild:\s*(\S+)/i);

  if (heightLabel) {
    body.height_ft = parseInt(heightLabel[1], 10);
    body.height_in = parseInt(heightLabel[2], 10);
    body.height_str = heightLabel[1] + "'" + heightLabel[2] + '"';
    console.log('[CARD] Height label found: ' + body.height_str);
  }
  if (weightLabel) {
    body.weight = parseInt(weightLabel[1], 10);
    console.log('[CARD] Weight label found: ' + body.weight + 'lbs');
  }
  if (buildLabel && buildLabel[1]) {
    body.build_keywords = [buildLabel[1].trim().toLowerCase()];
    console.log('[CARD] Build label found: ' + body.build_keywords[0]);
  }

  // ── Fallback: scan with measurement patterns if labels not found ──
  if (!body.height_str || !body.weight) {
    const measurements = cs.measurement_patterns || [];
    for (const mp of measurements) {
      const pat = mp.pattern;
      if (!pat) continue;
      const regex = new RegExp(pat, 'i');
      const m = regex.exec(text);
      if (!m) continue;
      const fmt = mp.format || '';
      try {
        if (fmt === 'feet_inches' && !body.height_str) {
          body.height_ft = parseInt(m[1], 10);
          body.height_in = parseInt(m[2], 10);
          body.height_str = m[1] + "'" + m[2] + '"';
        } else if (fmt === 'lbs' && !body.weight) {
          body.weight = parseInt(m[1], 10);
        } else if (mp.key && !body[mp.key]) {
          body[mp.key] = m[1];
        }
      } catch (e) {
        // Skip on parse error
      }
    }
  }

  // ── Fallback: scan prose for build keywords if no Build: label ──
  if (!body.build_keywords) {
    const buildKws = cs.build_keywords || [];
    const found = [];
    for (const kw of buildKws) {
      const regex = new RegExp('\\b' + reEscape(kw) + '\\b', 'i');
      if (regex.test(text)) {
        found.push(kw);
      }
    }
    if (found.length > 0) {
      body.build_keywords = found;
      console.log('[CARD] Build keywords scanned from prose: ' + found.join(', '));
    }
  }

  // Extract outfit section if present — accepts both "Outfit:\n text" and "Outfit: text" formats
  const outfitMatch = text.match(/\bOutfit:\s*\n?([\s\S]*?)(?=\n(?:Behavioral Traits|Sexual Tendencies|Kink Profile|Scenario):|$)/i);
  if (outfitMatch && outfitMatch[1] && outfitMatch[1].trim()) {
    body.outfit_text = outfitMatch[1].trim();
    console.log('[CARD] Outfit text extracted: ' + body.outfit_text.substring(0, 80) + '...');

    // Parse labeled sub-fields if present: Top:, Bottom:, Underwear:, Footwear:
    const slotPatterns = {
      top:       /\bTop:\s*(.+)/i,
      bottom:    /\bBottom:\s*(.+)/i,
      underwear: /\bUnderwear:\s*(.+)/i,
      footwear:  /\bFootwear:\s*(.+)/i
    };
    const outfitSlots = {};
    for (const [slot, pat] of Object.entries(slotPatterns)) {
      const sm = pat.exec(body.outfit_text);
      if (sm && sm[1]) {
        outfitSlots[slot] = sm[1].trim();
      }
    }
    if (Object.keys(outfitSlots).length > 0) {
      body.outfit_slots = outfitSlots;
      console.log('[CARD] Outfit slots: ' + JSON.stringify(outfitSlots));
    }
  }

  // ── Penis size detection ──
  // Scan Anatomy Snapshot or full card for size keywords + inch measurements
  const anatomyMatch = text.match(/Anatomy Snapshot:\s*([\s\S]*?)(?=\n(?:Outfit|Behavioral|Sexual|Kink|Scenario):|$)/i);
  const anatomyText = anatomyMatch ? anatomyMatch[1] : text;
  const atLow = anatomyText.toLowerCase();

  // Try inch measurement first (most precise)
  const inchMatch = anatomyText.match(/(\d+(?:\.\d+)?)\s*(?:inch|inches|in\b|")/i);
  let penisTier = 0; // 0 = not found
  if (inchMatch) {
    const inches = parseFloat(inchMatch[1]);
    if (inches <= 3)       penisTier = 1; // tiny
    else if (inches <= 4.5) penisTier = 2; // small
    else if (inches <= 6)   penisTier = 3; // average
    else if (inches <= 8)   penisTier = 4; // large
    else                    penisTier = 5; // huge
  }

  // Keyword fallback if no inch measurement
  if (!penisTier) {
    const sizeKws = [
      [1, /\b(?:tiny|micro|nub)\b.*\b(?:cock|dick|penis|member|shaft)\b/i],
      [1, /\b(?:cock|dick|penis|member|shaft)\b.*\b(?:tiny|micro)\b/i],
      [2, /\b(?:small|little|modest|petite)\b.*\b(?:cock|dick|penis|member|shaft)\b/i],
      [2, /\b(?:cock|dick|penis|member|shaft)\b.*\b(?:small|little|modest)\b/i],
      [3, /\b(?:average|normal|medium|regular|ordinary)\b.*\b(?:cock|dick|penis|member|shaft)\b/i],
      [3, /\b(?:cock|dick|penis|member|shaft)\b.*\b(?:average|normal|medium)\b/i],
      [4, /\b(?:large|big|thick|hefty|well.?hung|well.?endowed|girthy)\b.*\b(?:cock|dick|penis|member|shaft)\b/i],
      [4, /\b(?:cock|dick|penis|member|shaft)\b.*\b(?:large|big|thick|hefty|girthy)\b/i],
      [5, /\b(?:huge|massive|enormous|monster|giant|horse)\b.*\b(?:cock|dick|penis|member|shaft)\b/i],
      [5, /\b(?:cock|dick|penis|member|shaft)\b.*\b(?:huge|massive|enormous|monster)\b/i]
    ];
    for (const [tier, re] of sizeKws) {
      if (re.test(anatomyText)) {
        penisTier = tier;
        break;
      }
    }
  }

  // Final fallback: if card mentions a cock/dick at all but no size, assume average
  if (!penisTier && /\b(?:cock|dick|penis|member|shaft)\b/i.test(atLow)) {
    penisTier = 3;
  }

  if (penisTier) {
    body.penis_size = penisTier;
    const tierNames = ['', 'tiny', 'small', 'average', 'large', 'huge'];
    console.log('[CARD] Penis size detected: tier ' + penisTier + ' (' + tierNames[penisTier] + ')');
  }

  return body;
}

function parseClothingItems(text, rs) {
  // Python lines 13342-13366: Parse clothing description into {garment_key: {zone, layer}}
  const cfg = (rs || {}).clothing_arousal || {};
  if (!text) {
    return [null, {}];
  }

  const low = text.toLowerCase().trim();

  // Check naked first (word-boundary match to avoid false positives like "barefoot")
  const nakedKws = cfg.naked_keywords || [];
  for (const kw of nakedKws) {
    const pattern = new RegExp('\\b' + kw.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
    if (pattern.test(low)) {
      return ['naked', {}];
    }
  }

  // Parse garments
  const patterns = _compileGarmentPatterns(rs);
  const items = {};
  const consumed = new Set();  // track character positions already matched

  for (const [pat, key, info] of patterns) {
    const m = pat.exec(low);
    if (m) {
      const start = m.index;
      const end = m.index + m[0].length;

      // Don't double-match overlapping regions
      let overlaps = false;
      for (let p of consumed) {
        if (start <= p && p < end) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        items[key] = info;
        for (let i = start; i < end; i++) {
          consumed.add(i);
        }
      }
    }
  }

  return [null, items];
}

function applyClothingArousal(state, rs) {
  // Python lines 13392-13537: Item-level clothing comparison + zone bumps
  const cfg = (rs || {}).clothing_arousal || {};
  if (!cfg.enabled) {
    return;
  }

  const scene = state._scene_tracker;
  if (!scene || typeof scene !== 'object') {
    return;
  }

  const log = cfg.log_prefix || '[CLOTHING]';
  const zoneBumps = cfg.zone_exposure_bump || {};
  const charMult = parseFloat(cfg.char_exposure_multiplier || 1.5);
  const redressFactor = parseFloat(cfg.redress_factor || -0.3);

  // Parse current clothing from scene tracker
  const [charNaked, charItems] = parseClothingItems(scene.clothing_char || '', rs);
  const [userNaked, userItems] = parseClothingItems(scene.clothing_user || '', rs);

  // Get previous state
  const prevCharItems = state._clothing_items_char || {};
  const prevUserItems = state._clothing_items_user || {};
  const prevCharNaked = state._clothing_naked_char || false;
  const prevUserNaked = state._clothing_naked_user || false;

  // Store current for next turn
  state._clothing_items_char = charItems;
  state._clothing_items_user = userItems;
  state._clothing_naked_char = !!charNaked;
  state._clothing_naked_user = !!userNaked;
  state._clothing_summary_char = _exposureSummary(charNaked, charItems, rs);
  state._clothing_summary_user = _exposureSummary(userNaked, userItems, rs);

  // First turn — just store, no comparison
  if (!Object.keys(prevCharItems).length && !Object.keys(prevUserItems).length
      && !prevCharNaked && !prevUserNaked) {
    console.log(log + ' init: char=' + state._clothing_summary_char + ' user=' + state._clothing_summary_user);
    return;
  }

  let totalBump = 0.0;
  const reasons = [];

  // User clothing changes
  if (userNaked && !prevUserNaked) {
    const prevZones = _zonesFromItems(prevUserItems);
    for (const z of prevZones) {
      const b = parseFloat(zoneBumps[z] || 0);
      if (b > 0) {
        totalBump += b;
        reasons.push('user lost ' + z + '(+' + b + ')');
      }
    }
    if (prevZones.size === 0) {
      totalBump += 3.0;
      reasons.push('user→naked(+3.0)');
    }
  } else if (!userNaked && !prevUserNaked) {
    const removed = new Set(Object.keys(prevUserItems).filter(k => !userItems[k]));
    const added = new Set(Object.keys(userItems).filter(k => !prevUserItems[k]));
    const maxRemovedLayer = Math.max(...[...removed].map(i => (prevUserItems[i] || {}).layer || 0), -1);

    for (const item of removed) {
      const zone = (prevUserItems[item] || {}).zone || '';
      const b = parseFloat(zoneBumps[zone] || 0);
      if (b > 0) {
        totalBump += b;
        reasons.push('user -' + item + '(' + zone + ' +' + b + ')');
      }
    }

    for (const item of added) {
      const layer = (userItems[item] || {}).layer || 0;
      if (layer > maxRemovedLayer) continue;  // was revealed, not put on
      const zone = (userItems[item] || {}).zone || '';
      const b = parseFloat(zoneBumps[zone] || 0) * redressFactor;
      if (b !== 0) {
        totalBump += b;
        reasons.push('user +' + item + '(' + zone + ' ' + b.toFixed(1) + ')');
      }
    }
  } else if (!userNaked && prevUserNaked) {
    const newZones = _zonesFromItems(userItems);
    for (const z of newZones) {
      const b = parseFloat(zoneBumps[z] || 0) * redressFactor;
      if (b !== 0) {
        totalBump += b;
        reasons.push('user re-dressed ' + z + '(' + b.toFixed(1) + ')');
      }
    }
  }

  // Char clothing changes (multiplied)
  if (!state._clothing_removed_char) state._clothing_removed_char = {};

  if (charNaked && !prevCharNaked) {
    const prevZones = _zonesFromItems(prevCharItems);
    for (const z of prevZones) {
      const b = parseFloat(zoneBumps[z] || 0) * charMult;
      if (b > 0) {
        totalBump += b;
        reasons.push('char lost ' + z + '(+' + b.toFixed(1) + ')');
      }
    }
    if (prevZones.size === 0) {
      totalBump += 3.0 * charMult;
      reasons.push('char→naked(+' + (3.0 * charMult).toFixed(1) + ')');
    }
    // All previous items are now gone — record them
    for (const item of Object.keys(prevCharItems)) {
      state._clothing_removed_char[item] = prevCharItems[item];
    }
  } else if (!charNaked && !prevCharNaked) {
    const removed = new Set(Object.keys(prevCharItems).filter(k => !charItems[k]));
    const added = new Set(Object.keys(charItems).filter(k => !prevCharItems[k]));
    const maxRemovedLayer = Math.max(...[...removed].map(i => (prevCharItems[i] || {}).layer || 0), -1);

    for (const item of removed) {
      const zone = (prevCharItems[item] || {}).zone || '';
      const b = parseFloat(zoneBumps[zone] || 0) * charMult;
      if (b > 0) {
        totalBump += b;
        reasons.push('char -' + item + '(' + zone + ' +' + b.toFixed(1) + ')');
      }
      // Track as removed
      state._clothing_removed_char[item] = prevCharItems[item];
    }

    for (const item of added) {
      const layer = (charItems[item] || {}).layer || 0;
      if (layer > maxRemovedLayer) continue;
      const zone = (charItems[item] || {}).zone || '';
      const b = parseFloat(zoneBumps[zone] || 0) * redressFactor * charMult;
      if (b !== 0) {
        totalBump += b;
        reasons.push('char +' + item + '(' + zone + ' ' + b.toFixed(1) + ')');
      }
      // Item came back — clear from removed list
      delete state._clothing_removed_char[item];
    }
  } else if (!charNaked && prevCharNaked) {
    // Re-dressed from naked — clear all removed tracking
    state._clothing_removed_char = {};
    const newZones = _zonesFromItems(charItems);
    for (const z of newZones) {
      const b = parseFloat(zoneBumps[z] || 0) * redressFactor * charMult;
      if (b !== 0) {
        totalBump += b;
        reasons.push('char re-dressed ' + z + '(' + b.toFixed(1) + ')');
      }
    }
  }

  // Mutual naked bonus
  if (charNaked && userNaked) {
    if (!(prevCharNaked && prevUserNaked)) {
      const bonus = parseFloat(cfg.mutual_naked_bonus || 1.5);
      totalBump += bonus;
      reasons.push('both naked(+' + bonus + ')');
    }
  }

  // Apply
  if (totalBump > 0) {
    const before = getArousal(state);
    growArousal(state, totalBump, rs);
    const actual = getArousal(state) - before;
    console.log(log + ' +' + actual.toFixed(2) + ' from: ' + reasons.join(', '));
  } else if (totalBump < 0) {
    const before = getArousal(state);
    setArousal(state, Math.max(0, getArousal(state) + totalBump), rs);
    const actual = getArousal(state) - before;
    console.log(log + ' ' + actual.toFixed(2) + ' from: ' + reasons.join(', '));
  } else if (reasons.length > 0) {
    console.log(log + ' no net change: ' + reasons.join(', '));
  } else {
    console.log(log + ' no change');
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// SCENE TRACKER
// ──────────────────────────────────────────────────────────────────────────────

function parseSceneTracker(text, rs) {
  if (!text) return null;
  const st = rs.scene_tracker || {};
  const openTag = st.open_tag || '[SCENE_STATE]';
  const closeTag = st.close_tag || '[/SCENE_STATE]';

  const FIELD_RE = /^[\s]*(\w[\w_ ]*)[\s]*:[\s]*(.+?)[\s]*$/gm;
  const KNOWN_FIELDS = new Set(['date', 'time', 'location', 'positions', 'clothing_char', 'clothing_user', 'last_action']);

  function _parseFields(block) {
    const fields = {};
    let fm;
    FIELD_RE.lastIndex = 0;
    while ((fm = FIELD_RE.exec(block)) !== null) {
      let key = fm[1].trim().toLowerCase();
      const val = fm[2].trim();
      if (val) fields[key] = val;
    }
    return fields;
  }

  function _splitOnKnownFields(block) {
    const pat = new RegExp('(?:^|\\n|(?<=\\s))(' + [...KNOWN_FIELDS].map(reEscape).join('|') + ')\\s*:\\s*', 'gi');
    const parts = block.split(pat);
    const fields = {};
    let i = 1;
    while (i < parts.length - 1) {
      let key = parts[i].trim().toLowerCase().replace(/[\s-]/g, '_');
      const val = parts[i + 1].trim();
      if (val) fields[key] = val;
      i += 2;
    }
    return fields;
  }

  function _normalizeFieldKeys(fields) {
    const out = {};
    for (const [k, v] of Object.entries(fields)) {
      let nk = k.replace(/[\s-]/g, '_');
      if (nk === 'position' || nk === 'positions') nk = 'positions';
      else if (nk.startsWith('clothing') || nk === 'attire') { /* keep */ }
      else if (nk === 'last_action' || nk === 'lastaction' || nk === 'action') nk = 'last_action';
      out[nk] = v;
    }
    return out;
  }

  // Try tagged block first
  const tagRe = new RegExp(reEscape(openTag) + '[\\s\\n]*([\\s\\S]*?)[\\s\\n]*' + reEscape(closeTag));
  const m = tagRe.exec(text);
  if (m) {
    const block = m[1];
    let fields = _parseFields(block);
    const splitFields = _splitOnKnownFields(block);
    if (Object.keys(splitFields).length > Object.keys(fields).length) fields = splitFields;
    if (Object.keys(fields).length > 0) return _normalizeFieldKeys(fields);
  }

  // Fallback: bare Date/Time/... block at end of response
  const bareRe = /(?:^|\n)\s*Date\s*:\s*.+?(?:\n|$)\s*Time\s*:\s*.+?(?:\n|$)(?:\s*\w[\w\s]*?\s*:\s*.+?(?:\n|$)){1,6}/is;
  const m2 = bareRe.exec(text);
  if (m2) {
    const fields = _parseFields(m2[0]);
    if (Object.keys(fields).length >= 2) return _normalizeFieldKeys(fields);
  }

  return null;
}

function stripSceneTracker(text, rs) {
  const st = rs.scene_tracker || {};
  const openTag = st.open_tag || '[SCENE_STATE]';
  const closeTag = st.close_tag || '[/SCENE_STATE]';

  // Strip properly closed tagged block
  let result = text.replace(
    new RegExp(reEscape(openTag) + '[\\s\\S]*?' + reEscape(closeTag), 'g'), ''
  );
  // Strip unclosed open tag — model wrote [SCENE_STATE] but no closing tag (inline or at end)
  result = result.replace(
    new RegExp(reEscape(openTag) + '[\\s\\S]*$'), ''
  );
  // Strip code-fenced status blocks
  result = result.replace(/```[^\n]*\n\s*(?:Date|Time|Location|Positions?|Clothing|Last.?action)[\s\S]*?```/gi, '');
  // Strip bare Date/Time blocks at end
  result = result.replace(/(?:^|\n)\s*Date\s*:\s*.+?(?:\n|$)\s*Time\s*:\s*.+?(?:\n|$)(?:\s*\w[\w\s]*?\s*:\s*.+?(?:\n|$)){1,6}/gis, '');
  return result.trimEnd();
}

// ── Body result tag ──────────────────────────────────────────────────────────

function parseBodyResultTag(text, rs) {
  // Parse [BODY_RESULT: height="5'4" weight="120lbs" bust="C cup" build="petite"] tags
  const st = (rs || {}).body_result_tag || {};
  const tagName = st.name || 'BODY_RESULT';
  const pattern = '\\[' + reEscape(tagName) + ':\\s*([^\\]]+)\\]';
  const re = new RegExp(pattern, 'i');
  const m = re.exec(text || '');
  if (!m) return null;

  const result = {};
  // Parse key="value" pairs (space-separated, values may contain spaces)
  const kvRe = /(\w+)\s*=\s*"([^"]*)"/g;
  let kv;
  while ((kv = kvRe.exec(m[1])) !== null) {
    const k = kv[1].toLowerCase();
    const v = kv[2].trim();
    if (k && v) result[k] = v;
  }

  return Object.keys(result).length > 0 ? result : null;
}

function stripBodyResultTag(text, rs) {
  // Remove [BODY_RESULT: ...] tags from text
  const st = (rs || {}).body_result_tag || {};
  const tagName = st.name || 'BODY_RESULT';
  // Full tag: [BODY_RESULT: key=value, ...]
  const fullPat = '\\[' + reEscape(tagName) + ':\\s*([^\\]]+)\\]';
  let result = (text || '').replace(new RegExp(fullPat, 'gi'), '');
  // Partial tag at end of string: [BODY_RESULT or [BODY_ with no closing bracket
  const partialPat = '\\[' + reEscape(tagName.slice(0, 5)) + '[^\\]]*$';
  result = result.replace(new RegExp(partialPat, 'gi'), '');
  return result.trimEnd();
}

function scanTransformationProse(text, rs) {
  // Scan model response prose for physical measurements as fallback when [BODY_RESULT] tag is missing
  // Returns dict with any of: height, weight, bust, build
  const textStr = text || '';

  // Try structured tag first
  const tagResult = parseBodyResultTag(textStr, rs);
  if (tagResult && (tagResult.height || tagResult.weight || tagResult.bust)) {
    return tagResult;
  }

  const result = {};

  // Height — 5'1", 5'2"
  let m = /(\d+)'(\d+)/.exec(textStr);
  if (m) {
    result.height = m[1] + "'" + m[2] + '"';
  }

  // Weight — 100lbs, 105 lbs
  m = /(\d+)\s*lbs?/i.exec(textStr);
  if (m) {
    result.weight = m[1] + 'lbs';
  }

  // Bust — B-cup, B cup, DD cup, A cups
  m = /\b([A-Fa-f]{1,2}(?:\+|-)?)[\s-]?cups?\b/i.exec(textStr);
  if (m) {
    let letter = m[1].replace(/-$/, '').toUpperCase();
    result.bust = letter + '-cup';
  }

  // Build keywords
  const cs = (rs || {}).card_scan || {};
  const buildKws = cs.build_keywords || [
    'petite', 'slim', 'slender', 'slight', 'lean', 'athletic', 'toned',
    'muscular', 'curvy', 'curvaceous', 'hourglass', 'full', 'delicate',
    'proportional', 'heavy', 'stocky', 'broad',
  ];
  const found = buildKws.filter(kw => new RegExp('\\b' + kw + '\\b', 'i').test(textStr));
  if (found.length > 0) {
    result.build = found.slice(0, 3).join(', ');
  }

  return result;
}

// ──────────────────────────────────────────────────────────────────────────────
// PILL DETECTION & INTAKE
// ──────────────────────────────────────────────────────────────────────────────

function parsePillDescriptor(text, rs) {
  // Extract pill color, body modifier, and effect descriptors from pill offer text
  const lower = (text || '').toLowerCase();
  const result = { color: null, body_modifier: null, effects: [] };

  // Extract pill color from rs.pill_rules keys
  const pillRules = rs.pill_rules || {};
  for (const color of Object.keys(pillRules)) {
    if (lower.includes(color.toLowerCase())) {
      result.color = color;
      break;
    }
  }

  // Extract body modifier
  const pd = rs.pill_descriptor_parsing || {};
  const modKw = pd.modifier_keywords || [];
  for (const kw of modKw) {
    if (lower.includes(kw.toLowerCase())) {
      result.body_modifier = kw;
      break;
    }
  }

  // Extract effect keywords from flavor_triggers
  const flavorTriggers = rs.flavor_triggers || [];
  for (const ft of flavorTriggers) {
    if (!ft || typeof ft !== 'object' || !ft.effect) continue;
    for (const kw of (ft.keywords || [])) {
      if (lower.includes(kw.toLowerCase())) {
        if (!result.effects.includes(ft.effect)) {
          result.effects.push(ft.effect);
        }
        break;
      }
    }
  }

  return result;
}

function findPillIngest(messagesRecent, rs, state) {
  const intakeRe = rs.intake_verb_re;
  const negationRe = rs.pill_negation_re;
  const falsePosRe = rs.pill_false_pos_re;
  if (!intakeRe) {
    console.log('[PILL] findPillIngest: missing intakeRe');
    return [null, [], null, false];
  }

  // Build offer regex fresh each call — NOT stateful, uses test() not exec() with lastIndex
  const ep = rs._raw_event_patterns || {};
  const colors = (ep.pill_colors || []).map(c => c.replace(/[-\/\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const nouns  = (ep.pill_nouns  || []).map(n => n.replace(/[-\/\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const prox   = ep.pill_color_noun_proximity || 40;
  const offerRe = (colors && nouns)
    ? new RegExp('\\b(' + colors + ')\\b.{0,' + prox + '}\\b(?:' + nouns + ')\\b|\\b(?:' + nouns + ')\\b.{0,' + prox + '}\\b(' + colors + ')\\b', 'i')
    : null;

  let pendingColor     = (state || {})._pending_pill || null;
  let pendingText      = (state || {})._pending_pill_text || null;
  const charPill       = (state || {}).active_pill || null;
  // Track whether pending pill came from persisted state (prior turn) vs. detected this pass.
  // When it comes from state we already know what pill we're waiting for, so proximity check
  // on the verb can be relaxed — a bare "he swallowed it" should still fire.
  let pendingFromState = !!pendingColor;
  console.log('[PILL] findPillIngest: pending=' + pendingColor + ' (fromState=' + pendingFromState + ') activePill=' + charPill + ' msgs=' + messagesRecent.length);

  for (const msg of messagesRecent) {
    const text = (msg.content || '').trim();
    const role = (msg.role || '').toLowerCase();
    if (!text) continue;

    // ── Offer detection — scan every message for color+noun pair ──
    // Uses a fresh non-g regex so exec() always searches from position 0
    if (offerRe) {
      const m = offerRe.exec(text);
      if (m) {
        const color = ((m[1] || m[2]) || '').toLowerCase();
        if (color && color !== pendingColor && color !== charPill) {
          pendingColor = color;
          pendingText  = m[0];
          pendingFromState = false;  // detected this pass, not from prior state
          if (state) {
            const desc = parsePillDescriptor(pendingText, rs);
            desc.color = pendingColor;
            state._pending_pill      = pendingColor;
            state._pending_pill_desc = desc;
            delete state._pending_pill_text;
            console.log('[PILL] Offer detected: color=' + pendingColor + ' text=' + pendingText.substring(0, 60));
          }
        }
      }
    }

    // ── Intake detection — user messages only, requires pending pill ──
    if (!pendingColor || role !== 'user') continue;

    console.log('[PILL] Checking user msg for intake verb, pending=' + pendingColor + ' text=' + text.substring(0, 80));

    intakeRe.lastIndex = 0;
    if (!intakeRe.test(text)) { intakeRe.lastIndex = 0; continue; }
    intakeRe.lastIndex = 0;

    let ingested = false;
    let personaIntake = false;

    for (const vm of text.matchAll(intakeRe)) {
      const verbIdx  = vm.index;
      const verbEnd  = verbIdx + vm[0].length;
      const pre40    = text.slice(Math.max(0, verbIdx - 40), verbIdx);
      const post40   = text.slice(verbEnd, Math.min(text.length, verbEnd + 40));
      const ctx80    = text.slice(Math.max(0, verbIdx - 80), Math.min(text.length, verbEnd + 80));

      // Negation check
      if (negationRe && (negationRe.test(pre40) || negationRe.test(post40))) {
        console.log('[PILL] Verb "' + vm[0] + '" blocked by negation');
        continue;
      }

      // False positive check — common non-ingestive phrases after the verb
      if (falsePosRe && falsePosRe.test(post40)) {
        console.log('[PILL] Verb "' + vm[0] + '" blocked by false-positive');
        continue;
      }

      // ── Cum-context exclusion (always runs) ──
      // Strategy: look at what comes IMMEDIATELY after the verb (direct object window, 30 chars).
      // If a cum word is the direct object → block regardless of pill noun elsewhere.
      // If no cum word is the direct object, check the wider 120-char window for cum context
      // and only allow through if a pill noun is also present in that same window.
      const verbPost30 = text.slice(verbEnd, Math.min(text.length, verbEnd + 30));
      const ctx120 = text.slice(Math.max(0, verbIdx - 60), Math.min(text.length, verbEnd + 60));
      const cumRe = /\b(?:cum|load|seed|jizz|spunk|release|semen)\b/i;
      const cumIsDirectObj = cumRe.test(verbPost30);
      const cumInContext   = cumRe.test(ctx120);
      const pillNounNearby = rs.pill_noun_re && rs.pill_noun_re.test(ctx120);
      if (cumIsDirectObj || (cumInContext && !pillNounNearby)) {
        console.log('[PILL] Verb "' + vm[0] + '" blocked — cum direct object or cum context without pill noun');
        continue;
      }

      // ── Pill proximity check (user path) ──
      // If pending came from PRIOR state (established in a previous turn), relax proximity —
      // a bare follow-up like "she swallowed it" is a valid continuation.
      // If the offer was just detected THIS message pass, require pill context nearby.
      if (!pendingFromState) {
        const pillCtxRe  = rs.pill_context_re;
        const pillNounRe = rs.pill_noun_re;
        const hasPillCtx     = pillCtxRe  && pillCtxRe.test(ctx80);
        const hasPillNoun    = pillNounRe  && pillNounRe.test(ctx80);
        const hasColorNearby = new RegExp('\\b' + pendingColor.replace(/[-\/\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i').test(ctx80);
        if (!hasPillCtx && !hasPillNoun && !hasColorNearby) {
          console.log('[PILL] Verb "' + vm[0] + '" — new offer but no pill context nearby, skipping');
          continue;
        }
      }

      // ── Persona detection ──
      // Default: character intake. Only flip to persona if there is STRONG explicit
      // evidence the user/persona is the one swallowing — not just that "I" appears.
      //
      // Positive persona signals (all must be true):
      //   1. Verb is immediately preceded by "I" (optionally with one adverb)
      //   2. No third-person pronoun anywhere in pre60 or post40
      //   3. No recipient phrase in post40 ("their mouth", "into her", etc.)
      //   4. No administering verb in pre40 (watch, give, hand, force, push, pop, place, put)
      //
      // Anything ambiguous defaults to character intake.
      const pPre60 = text.slice(Math.max(0, verbIdx - 60), verbIdx);
      const pPre30 = text.slice(Math.max(0, verbIdx - 30), verbIdx);
      // post40 already declared above for cum-context check — reuse it

      // Must have "I [adv?] <verb>" pattern immediately before verb
      const directPersonaRe = /\bI\s+(?:also\s+|quickly\s+|finally\s+|just\s+|then\s+|slowly\s+|carefully\s+|nervously\s+)?$/i;
      const directMatch = directPersonaRe.test(pPre30);

      // Disqualifiers — any of these present → character intake regardless
      const hasThirdPerson   = /\bthey\b|\bthem\b|\bhim\b|\bher\b|\bhe\b|\bshe\b|\btheir\b|\bthere\b/i.test(pPre60 + ' ' + post40);
      const hasRecipient     = /\b(?:their|there|his|her|them|its)\s+mouth\b|\bin(?:to)?\s+(?:their|there|his|her|them)\b/i.test(post40);
      const hasAdminVerb     = /\b(?:watch|give|hand|force|push|place|put|slip|drop|press|feed)\b/i.test(pPre60);

      if (directMatch && !hasThirdPerson && !hasRecipient && !hasAdminVerb) {
        personaIntake = true;
      }

      console.log('[PILL] Verb "' + vm[0] + '" passed — personaIntake=' + personaIntake);
      ingested = true;
      break;
    }

    intakeRe.lastIndex = 0;

    if (!ingested) continue;

    // Skip if character already has this pill active (duplicate fire guard)
    if (!personaIntake && charPill === pendingColor) {
      console.log('[PILL] Intake skipped — already active pill=' + charPill);
      continue;
    }

    if (state) {
      delete state._pending_pill;
      delete state._pending_pill_text;
    }
    console.log('[PILL] INTAKE DETECTED: color=' + pendingColor + ' persona=' + personaIntake);
    return [pendingColor, messagesRecent, pendingText, personaIntake];
  }

  console.log('[PILL] No intake detected');
  return [null, [], null, false];
}

function parsePillFromIngest(messagesRecent, rs, state, debug) {
  const [color, context, storedDescText, personaIntake] = findPillIngest(messagesRecent, rs, state);
  if (!color) return [null, null, false];

  let descriptor = (state || {})._pending_pill_desc || null;
  if (!descriptor) {
    const pillPhrase = storedDescText || color;
    descriptor = parsePillDescriptor(pillPhrase, rs);
    descriptor.color = color;
  }
  if (debug) {
    console.log('[PILL] effects: ' + JSON.stringify(descriptor.effects || []) + ' persona=' + personaIntake);
  }
  return [color, descriptor, personaIntake];
}

// ──────────────────────────────────────────────────────────────────────────────
// ORGASM & STATE EVENT HELPERS
// ──────────────────────────────────────────────────────────────────────────────

function _checkOrgasmTrigger(state, ctx, events, rs) {
  const arousal = ctx.arousal || 0;
  const effects = ctx.effects || [];
  const pill = ctx.pill;

  // Not in orgasm zone
  if (arousal < ORG_ZONE) {
    return { orgasm: false };
  }

  // Percentage-based trigger check
  const triggerPct = Math.min(100, ctx.org_trigger_pct || 0);
  const roll = randInt(1, 100);
  if (roll > triggerPct) {
    return { orgasm: false, roll: { d100: roll, target: triggerPct } };
  }

  // Orgasm gates from ruleset
  const gates = (rs.orgasm_rules || {}).gates || {};

  // Denial effect: hard block
  if (effects.includes('denial')) {
    const denialGate = gates.denial || {};
    if (denialGate.blocks_orgasm) {
      const frust = parseInt(state._denial_frustration || 0, 10) + 1;
      state._denial_frustration = frust;
      return { orgasm: false, suppressed: 'denial', roll: { d100: roll, target: triggerPct } };
    }
  }

  // Breeder effect: orgasm only on creampie_vaginal
  if (effects.includes('breeder')) {
    const breederGate = gates.breeder || {};
    if (breederGate.denied_otherwise) {
      const pr = (rs.pill_rules || {})[pill] || {};
      if (pr.pregnancy_eligible) {
        if (events.creampie_vaginal) {
          // Allowed
          const count = parseInt(state._breeder_orgasm_count || state.breeder_orgasm_count || 0, 10) + 1;
          state._breeder_orgasm_count = count;
          events.breeder_orgasm = true;
          return { orgasm: true, roll: { d100: roll, target: triggerPct } };
        } else {
          // Denied — d20+INT check: pass = no beg, fail = beg
          const intMod = getStatMod(state, 'INT');
          const d20 = randInt(1, 20);
          const intDc = parseInt(state._arousal_gate_dc || rs.arousal_system?.level_gate_dc || 10, 10);
          const intTotal = d20 + intMod;
          console.log('[BREEDER] resist beg: d20=' + d20 + '+INT(' + intMod + ')=' + intTotal + ' vs DC' + intDc);
          if (intTotal >= intDc) {
            return { orgasm: false, roll: { d100: roll, d20: d20, stat: 'INT', total: intTotal, dc: intDc, result: 'resist' } };
          }
          const frust = parseInt(state._denial_frustration || 0, 10) + 1;
          state._denial_frustration = frust;
          return { orgasm: false, suppressed: 'breeder_denied', roll: { d100: roll, d20: d20, stat: 'INT', total: intTotal, dc: intDc, result: 'beg' } };
        }
      }
    }
  }

  // No gate blocked it
  return { orgasm: true, roll: { d100: roll, target: triggerPct } };
}

function _executeStateEvents(eventName, state, events, effects, notes, rs, personaEffects) {
  const actions = (rs.state_events || {})[eventName] || [];
  if (!actions) return;

  const flags = state.flags = state.flags || {};

  for (const act of actions) {
    const cond = act.condition || {};
    if (cond) {
      if ('flag_true' in cond && !flags[cond.flag_true]) continue;
      if ('flag_false' in cond && flags[cond.flag_false]) continue;
    }

    let blocked = false;
    if (act.block_if_flag && flags[act.block_if_flag]) {
      if (act.block_log) notes.push(act.block_log);
      blocked = true;
    }

    if (!blocked && 'block_if_pill_rule_false' in act) {
      const pRule = (rs.pill_rules || {})[state.active_pill || ''] || {};
      if (!pRule[act.block_if_pill_rule_false]) {
        if (act.block_pill_log) notes.push(act.block_pill_log);
        blocked = true;
      }
    }

    if (blocked) continue;

    if ('increment' in act) {
      const key = act.increment;
      state[key] = (state[key] || 0) + 1;
      if (act.log) {
        try {
          let logStr = act.log;
          for (const [k, v] of Object.entries(state)) {
            logStr = logStr.replace('{' + k + '}', String(v));
          }
          notes.push(logStr);
        } catch (e) {
          notes.push(act.log);
        }
      }
    }

    if ('set_flag' in act) flags[act.set_flag] = true;
    if (act.set_flags) {
      for (const f of act.set_flags) flags[f] = true;
    }
    if ('set_flag_false' in act) flags[act.set_flag_false] = false;
    if (act.clear_flags) {
      for (const f of act.clear_flags) flags[f] = false;
    }

    if (act.reset) {
      for (const [k, v] of Object.entries(act.reset)) {
        state[k] = v;
      }
    }

    if (act.action === 'clear_pill') {
      state.active_pill = null;
      if (act.clear_effects) {
        state.active_effects = [];
        effects.splice(0, effects.length);
      }
      if (act.reset_arousal) {
        setArousal(state, 0.0, rs);
      }
    }

    if (act.roll_system) {
      const cond2 = act.condition || {};
      if (cond2.effect_active && !effects.includes(cond2.effect_active)) {
        continue;
      }
      _runRollSystem(act.roll_system, state, effects, notes, rs, personaEffects);
    }

    if (act.trigger_effect_birth) {
      _executeEffectBirth(state, effects, notes, rs);
    }

    if (act.log && !('increment' in act)) {
      notes.push(act.log);
    }
  }
}

function _runRollSystem(name, state, effects, notes, rs, personaEffects) {
  const sysDef = (rs.roll_systems || {})[name];
  if (!sysDef) return;

  const flags = state.flags = state.flags || {};
  const alreadyFlag = sysDef.already_active_flag;
  if (alreadyFlag && flags[alreadyFlag]) {
    if (sysDef.already_active_log) notes.push(sysDef.already_active_log);
    return;
  }

  const oddsSrc = sysDef.odds_source;
  let success = false;
  if (oddsSrc === 'pregnancy_odds') {
    const pregResult = rollPregnancy(effects, rs, personaEffects, state);
    success = pregResult.success;
    notes.push(name + ':' + (success ? 'CONCEIVE' : 'MISS') +
      '(d100=' + pregResult.roll + ' vs ' + pregResult.chance + '% mode=' + pregResult.chanceKey + ')');
    state.roll_log = state.roll_log || [];
    state.roll_log.push(notes[notes.length - 1]);
  } else if (sysDef.roll) {
    const dc = parseInt(sysDef.dc || 12, 10);
    const mods = computeMods(state, sysDef.roll);
    const roll = randInt(1, 20);
    const total = roll + mods;
    success = total >= dc;
    const tag = success ? 'PASS' : 'FAIL';
    const entry = name + ':' + tag + '(d20=' + roll + (mods >= 0 ? '+' : '') + mods + '=' + total + ' vs DC=' + dc + ')';
    notes.push(entry);
    state.roll_log = state.roll_log || [];
    state.roll_log.push(entry);
  }

  const result = success ? (sysDef.on_success || {}) : (sysDef.on_fail || {});
  for (const f of (result.set_flags || [])) {
    flags[f] = true;
    if (f === 'pregnancy_confirmed' && success) {
      state._conception_turn = state.turn || 0;
    }
  }

  const cif = result.conceived_if_effect || {};
  if (success && cif && effects.includes(cif.effect)) {
    flags[cif.set_flag] = true;
    if (cif.log) notes.push(cif.log);
  }

  if (result.log) notes.push(result.log);
}

function _executeEffectBirth(state, effects, notes, rs) {
  const flags = state.flags = state.flags || {};
  const em = rs.effect_mechanics || {};

  for (const effName of Array.from(effects)) {
    const mech = em[effName] || {};
    const ob = mech.on_birth;
    if (!ob) continue;

    if (ob.roll) {
      // TODO: implement birth roll logic if needed
    } else {
      const result = ob;
      if (result.remove_self) {
        const idx = effects.indexOf(effName);
        if (idx >= 0) effects.splice(idx, 1);
      }
      for (const comp of (result.remove_companions || [])) {
        const idx = effects.indexOf(comp);
        if (idx >= 0) effects.splice(idx, 1);
      }
      for (const f of (result.set_flags || [])) {
        flags[f] = true;
      }
      if (result.set_flag_false) flags[result.set_flag_false] = false;
      if (result.reset_arousal) setArousal(state, 0.0, rs);
      for (const k of (result.clear_effect_dcs || [])) {
        if (state.effect_dcs) delete state.effect_dcs[k];
      }
      for (const k of (result.clear_effect_locks || [])) {
        if (state.effect_locks) delete state.effect_locks[k];
      }
      if (result.log) notes.push(result.log);
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// EVENT DETECTION & PROCESSING
// ──────────────────────────────────────────────────────────────────────────────

function detectEvents(messagesRecent, state, cardSex, rs, debug, personaState) {
  const events = {};
  const allText = messagesRecent.map(m => m.content || '').join('\n');
  const userText = messagesRecent.filter(m => m.role === 'user').map(m => m.content || '').join('\n');
  const lastUserText = [...messagesRecent].reverse().find(m => m.role === 'user')?.content || '';

  // Pill detection
  // personaIntake = first-person "I take" → user/persona taking the pill
  // !personaIntake = third-person "She takes" → character taking the pill
  // Pass a lightweight persona state proxy so persona gets its own _pending_pill slot
  const personaStateForDetect = personaState || {};
  const [color, descriptor, personaIntake] = parsePillFromIngest(messagesRecent, rs, state, debug);
  if (color) {
    if (personaIntake) {
      // Only fire if persona doesn't already have this pill active
      if (!personaStateForDetect.active_pill || personaStateForDetect.active_pill !== color) {
        events.persona_pill_taken = color;
        events.persona_pill_descriptor = descriptor;
        console.log('[PILL] Routed to persona_pill_taken (first-person intake)');
      }
    } else if (!state.active_pill) {
      events.pill_taken = color;
      events.pill_descriptor = descriptor;
      if (descriptor) {
        if (descriptor.body_modifier) {
          state._pending_body_modifier = descriptor.body_modifier;
        }
        for (const eff of (descriptor.effects || [])) {
          events['flavor_' + eff] = true;
        }
      }
    }
  }

  // Flavor triggers
  const activeEffects = state.active_effects || [];
  for (const ft of (rs.flavor_triggers || [])) {
    if (ft.requires_pill) continue;
    if (activeEffects.includes(ft.effect)) continue;
    for (const kw of (ft.keywords || [])) {
      if (new RegExp('\\b' + reEscape(kw) + '\\b', 'i').test(allText)) {
        events['flavor_' + ft.effect] = true;
        break;
      }
    }
  }

  // Temp state for event eligibility checks
  const temp = Object.assign({}, state);
  if (events.pill_taken) {
    temp.active_pill = events.pill_taken;
    // Save original build keywords for TX body path lookup
    if (!temp._original_build_keywords && temp.card_body && temp.card_body.build_keywords) {
      temp._original_build_keywords = temp.card_body.build_keywords.slice();
      console.log('[PILL] Saved original build keywords:', JSON.stringify(temp._original_build_keywords));
    }
  }

  // Event pattern matching
  for (const [eventName, compiled] of Object.entries(rs.event_patterns_compiled || {})) {
    let text = allText;
    if (compiled.source === 'last_user') {
      text = lastUserText;
    } else if (compiled.source === 'user_only') {
      text = userText;
    } else if (compiled.source === 'last_assistant') {
      text = [...messagesRecent].reverse().find(m => m.role === 'assistant')?.content || '';
    }

    var reMatch = compiled.re.test(text);
    if (!reMatch) continue;
    console.log('[EVENT] ' + eventName + ' regex MATCHED (source=' + (compiled.source || 'all') + ')');

    if (compiled.requires_form_eligible) {
      var eligible = canGetPregnant(temp, cardSex, rs);
      if (!eligible) {
        console.log('[EVENT] ' + eventName + ' BLOCKED by form_eligible — cardSex=' + cardSex + ' genitals=' + currentGenitals(temp, cardSex, rs) + ' pill=' + (temp.active_pill || 'none'));
        continue;
      }
      console.log('[EVENT] ' + eventName + ' form_eligible PASSED — genitals=' + currentGenitals(temp, cardSex, rs));
    }

    const reqFlag = compiled.requires_flag;
    if (reqFlag && !(state.flags || {})[reqFlag]) continue;

    // Antidote routing to persona if first-person
    if (eventName === 'antidote_taken') {
      const antidoteFp = /\bI\s+(?:also\s+|quickly\s+|finally\s+)?(?:take|swallow|pop|drink|down|use)\s+.*\bantidote\b/i;
      if (antidoteFp.test(lastUserText)) {
        events.persona_antidote_taken = true;
        console.log('[PILL] Antidote routed to persona (first-person intake)');
        continue;
      }
    }

    events[eventName] = true;
    if (eventName === 'creampie_vaginal') {
      console.log('[EVENT] creampie_vaginal DETECTED — source=' + (compiled.source || 'all') + ' textLen=' + text.length);
    }
  }

  return events;
}

function _processCounters(state, events, effects, rs) {
  // Process counter mechanics from the ruleset — increments state keys based on event triggers
  const counters = rs.counters || [];
  for (const counter of counters) {
    const key = counter.key;
    const trigger = counter.trigger;
    if (!events[trigger]) continue;

    const reqEffects = counter.requires_any_effect || [];
    if (reqEffects.length > 0 && !reqEffects.some(e => effects.includes(e))) {
      continue;
    }

    state[key] = (state[key] || 0) + 1;
  }
}

function processEvents(state, events, cardSex, notes, rs, personaEffects, personaState) {
  const em = rs.effect_mechanics || {};
  let effects = Array.from(state.active_effects || []);
  delete state._notes_log;

  // Male orgasm detected → flag session end for next turn's reset
  if (events.male_orgasm) {
    state._session_end_pending = true;
    console.log('[SESSION] Male orgasm detected — session counters will reset next turn');
  }

  // Pill taken → immediate effects
  if (events.pill_taken) {
    const color = events.pill_taken;
    const rule = (rs.pill_rules || {})[color] || {};
    state.active_pill = color;
    // Clear pending pill — it's now active
    delete state._pending_pill;
    delete state._pending_pill_text;
    delete state._pending_pill_desc;

    for (const eff of (rule.immediate_effects || [])) {
      if (!effects.includes(eff)) effects.push(eff);
    }

    const fn = rule.no_form_change
      ? 'effects only'
      : 'form=' + (rule.form_sex || '?') + ' genitals=' + (rule.genitals || '?');
    notes.push('Pill:' + color + '(' + fn + ') transforms immediately');

    state._pill_descriptor_this_turn = {
      color: color,
      body_modifier: state._pending_body_modifier || null,
      effects: Array.from(effects)
    };
    delete state._pending_body_modifier;
  }

  // Persona pill taken → update personaState
  if (events.persona_pill_taken && personaState) {
    const pColor = events.persona_pill_taken;
    const pRule = (rs.pill_rules || {})[pColor] || {};
    personaState.active_pill = pColor;
    const pEffects = Array.from(personaState.active_effects || []);
    for (const eff of (pRule.immediate_effects || [])) {
      if (!pEffects.includes(eff)) pEffects.push(eff);
    }
    const pDesc = events.persona_pill_descriptor || {};
    for (const eff of (pDesc.effects || [])) {
      if (!pEffects.includes(eff)) pEffects.push(eff);
    }
    personaState.active_effects = pEffects;
    personaState._pill_descriptor_this_turn = {
      color: pColor,
      body_modifier: pDesc.body_modifier || null,
      effects: pEffects,
    };
    notes.push('PersonaPill:' + pColor + '(' + pEffects.join(',') + ') user transforms');
  }

  // Persona antidote taken → clear persona pill state
  if (events.persona_antidote_taken && personaState) {
    personaState.active_pill = null;
    personaState.active_effects = [];
    delete personaState._pill_descriptor_this_turn;
    notes.push('PersonaAntidote: pill cleared');
    console.log('[PILL] Persona antidote taken — pill state cleared');
  }

  // Flavor trigger activation
  const newlyAdded = new Set();
  for (const ft of (rs.flavor_triggers || [])) {
    const key = 'flavor_' + ft.effect;
    if (events[key] && !effects.includes(ft.effect)) {
      effects.push(ft.effect);
      newlyAdded.add(ft.effect);

      const mech = em[ft.effect] || {};
      state.effect_dcs = state.effect_dcs || {};
      state.effect_dcs[ft.effect] = parseInt(mech.start_dc || 12, 10);
      notes.push('Effect:' + ft.effect);

      for (const comp of (mech.companion_effects || [])) {
        if (!effects.includes(comp)) {
          effects.push(comp);
          newlyAdded.add(comp);
          const cmech = em[comp] || {};
          state.effect_dcs[comp] = parseInt(cmech.start_dc || 12, 10);
          notes.push('Effect:' + comp + '(companion)');
        }
      }
    }
  }
  state.active_effects = effects;

  // Sync newly-added flavor effects into the pill descriptor so
  // buildTransformationGuidance sees them (bimbo overlay, etc.)
  if (newlyAdded.size > 0 && state._pill_descriptor_this_turn) {
    state._pill_descriptor_this_turn.effects = Array.from(effects);
  }

  // Bimbo baseline INT snapshot — store on first activation only
  if (newlyAdded.has('bimbo') && state.bimbo_baseline_int == null) {
    state.bimbo_baseline_int = parseInt((state.stats || {}).INT || 10, 10);
    const entry = 'bimbo_baseline_int=' + state.bimbo_baseline_int;
    (state._notes_log = state._notes_log || []).push(entry);
    console.log('[BIMBO] ' + entry);
    // Short-circuit flag: if baseline INT <= 4, no lucid moments ever
    if (state.bimbo_baseline_int <= 4) {
      state._bimbo_short_circuit = true;
      (state._notes_log = state._notes_log || []).push('bimbo_short_circuit=true (baseline INT too low for devolve arc)');
      console.log('[BIMBO] short-circuit: baseline INT <= 4, no lucid moments');
    }
  }

  // Process counters (increments state keys based on event triggers)
  _processCounters(state, events, effects, rs);

  // Arousal-driven orgasm check
  const ctx = buildContext(state, events, cardSex, rs);
  const orgResult = _checkOrgasmTrigger(state, ctx, events, rs);
  state._org_trigger_result = orgResult;

  const orgasmThisTurn = orgResult.orgasm || false;
  const deniedThisTurn = orgResult.suppressed === 'breeder_denied' || orgResult.suppressed === 'denial';

  const ec = rs.engine_config || {};
  const orgasmEv = ec.orgasm_event || 'orgasm';
  const deniedEv = ec.denied_event || 'orgasm_denied';

  if (orgasmThisTurn) {
    events[orgasmEv] = true;
    state._orgasm_count = (state._orgasm_count || 0) + 1;
    state.session_orgasm_count = (state.session_orgasm_count || 0) + 1;
    state.total_orgasm_count = (state.total_orgasm_count || 0) + 1;
    // Excitable Ovaries — +5% pregnancy chance per orgasm while active (requires Extra Fertile)
    if ((state.active_side_effects || []).includes('excitable_ovaries') &&
        (state.active_side_effects || []).includes('extra_fertile')) {
      state._excitable_ovaries_bonus = (state._excitable_ovaries_bonus || 0) + 5;
      console.log('[SIDE_FX] Excitable Ovaries — pregnancy bonus now +' + state._excitable_ovaries_bonus + '%');
    }
  }
  if (deniedThisTurn) {
    events[deniedEv] = true;
  }

  // Post-orgasm effects
  const orgasmRules = (rs.orgasm_rules || {}).gates || {};
  if (orgasmThisTurn) {
    for (const [effName, gate] of Object.entries(orgasmRules)) {
      if (!effects.includes(effName)) continue;
      const arousalReset = gate.arousal_reset_on;
      if (arousalReset && events[arousalReset]) {
        setArousal(state, 0.0, rs);
        const baseDc = parseInt(rs.arousal_system?.level_gate_dc || 10, 10);
        state._arousal_gate_dc = baseDc;
        state._arousal_gate_fail_count = 0;
        state.session_fail_count = 0;
        state._gate_pass_streak = 0;
        state._gate_pass_streak_at = -1;
        const floor = getArousalFloor(state, rs);
        notes.push(effName + ':insemination orgasm — arousal+DC reset to floor=' + floor + ' DC=' + baseDc);
        state._orgasm_dc_reset_done = true;
        state._post_orgasm_effects = state._post_orgasm_effects || {};
        state._post_orgasm_effects[effName] = true;
      }
    }
    if (!state._orgasm_dc_reset_done) {
      const baseDc = parseInt(rs.arousal_system?.level_gate_dc || 10, 10);
      // Two in the Chamber — alternate between tier-3 partial reset and full reset
      if (state._two_in_chamber_active) {
        state._two_in_chamber_chain = (state._two_in_chamber_chain || 0) + 1;
        if (state._two_in_chamber_chain % 2 === 1) {
          // Odd orgasm in chain — partial reset to tier-3 (arousal = 15)
          setArousal(state, 15, rs);
          notes.push('orgasm (Two in Chamber) — partial reset to tier-3');
        } else {
          // Even orgasm — full reset
          setArousal(state, 0.0, rs);
          notes.push('orgasm (Two in Chamber) — full reset');
        }
      } else {
        setArousal(state, 0.0, rs);
        const floor = getArousalFloor(state, rs);
        notes.push('orgasm — arousal+DC reset to floor=' + floor + ' DC=' + baseDc);
      }
      state._arousal_gate_dc = baseDc;
      state._arousal_gate_fail_count = 0;
      state.session_fail_count = 0;
      state._gate_pass_streak = 0;
      state._gate_pass_streak_at = -1;
      state._orgasm_dc_reset_done = true;
    }

    // Reset all effect DCs on orgasm
    for (const eff of effects) {
      const emech = em[eff] || {};
      const tbTrigger = (emech.trigger_behavior || {}).trigger;
      // Directive-resist effects reset to domination DC, others reset to start_dc
      let resetDc;
      if (tbTrigger === 'directive' && state._domination_dc) {
        resetDc = state._domination_dc;
      } else if (emech.start_dc !== null && emech.start_dc !== undefined) {
        resetDc = parseInt(emech.start_dc, 10);
      }
      if (resetDc !== undefined) {
        const curDc = (state.effect_dcs || {})[eff];
        if (curDc !== null && curDc !== undefined && curDc !== resetDc) {
          setEffectDc(state, eff, resetDc);
          state.effect_locks = state.effect_locks || {};
          state.effect_locks[eff] = false;
          // Clear initialization flag so next directive roll re-initializes correctly
          if (tbTrigger === 'directive' && state._directive_dc_initialized) {
            delete state._directive_dc_initialized[eff];
          }
          notes.push(eff + ' DC reset to ' + resetDc + ' on orgasm (was ' + curDc + ')');
        }
      }
    }
  }

  // Effect trigger behaviors
  for (const effName of effects) {
    const mech = em[effName] || {};
    const tb = mech.trigger_behavior || {};
    if (!tb || !tb.trigger) continue;

    const trigger = tb.trigger;

    if (trigger === 'directive' && events.directive) {
      runDirectiveResist(state, effName, notes, rs, personaState);
    } else if (trigger === 'active_no_event') {
      const skipEvent = tb.skip_on_event;
      const grace = tb.skip_on_grace && newlyAdded.has(effName);
      if (!grace && !(skipEvent && events[skipEvent])) {
        runRoll(state, effName, notes, rs);
      }
      const resetOn = tb.reset_on;
      if (resetOn && events[resetOn]) {
        const start = parseInt(mech.start_dc || 12, 10);
        setEffectDc(state, effName, start);
        state.effect_locks = state.effect_locks || {};
        state.effect_locks[effName] = false;
        notes.push(effName + ' DC reset to ' + start);
      }
    } else if (trigger === 'linked_orgasm') {
      const linkedEff = tb.linked_effect || '';
      const linkedEvent = tb.linked_orgasm_event || '';
      const hasStage = getEffectStage(state, effName) > 0;
      if ((effects.includes(linkedEff) || hasStage) && events[linkedEvent]) {
        const gate = orgasmRules[linkedEff] || {};
        if (gate.arousal_reset_on && events[gate.arousal_reset_on]) {
          setArousal(state, 0.0, rs);
          const floor = getArousalFloor(state, rs);
          notes.push(linkedEff + ':orgasm+arousal reset to floor=' + floor);
        }
        if (!isLocked(state, effName)) {
          const result = runRoll(state, effName, notes, rs);
          if (result === 'fail') {
            advanceStage(state, effName, notes, rs, tb.permanent_to_db || false);
          }
        }
      }
    } else if (trigger === 'orgasm_attempt') {
      const resetOn = tb.reset_on;
      if (resetOn && events[resetOn]) {
        const start = parseInt(mech.start_dc || 15, 10);
        setEffectDc(state, effName, start);
        state.effect_locks = state.effect_locks || {};
        state.effect_locks[effName] = false;
        notes.push(effName + ' DC reset to ' + start);
      }
    } else if (trigger === 'orgasm_denied' && deniedThisTurn) {
      runRoll(state, effName, notes, rs);
      const resetOn = tb.reset_on;
      if (resetOn && events[resetOn]) {
        const start = parseInt(mech.start_dc || 12, 10);
        setEffectDc(state, effName, start);
        state.effect_locks = state.effect_locks || {};
        state.effect_locks[effName] = false;
        notes.push(effName + ' DC reset on release');
      }
      const intCheck = mech.int_check || {};
      if (intCheck && deniedThisTurn) {
        const checkStat = intCheck.check_stat || 'INT_mod';
        const buffStat = intCheck.buff_stat || 'WIS_mod';
        const buffAmt = parseInt(intCheck.buff_amount || 1, 10);
        const intDc = state.denial_int_dc !== undefined ? state.denial_int_dc : parseInt(intCheck.start_dc || 10, 10);
        const intMod = getStatMod(state, checkStat);
        const roll = randInt(1, 20);
        const total = roll + intMod;
        const passed = total >= intDc;
        if (passed) {
          const passFlag = intCheck.pass_set_flag || '';
          if (passFlag) {
            state.flags = state.flags || {};
            state.flags[passFlag] = true;
          }
          state.stats = state.stats || {};
          state.stats[buffStat] = getStatMod(state, buffStat) + buffAmt;
          state._denial_buff_stat = buffStat;
          notes.push('Denial ' + checkStat + ':PASS(+' + buffAmt + ' ' + buffStat + ')');
        } else {
          const failFlag = intCheck.fail_set_flag_false || '';
          if (failFlag) {
            state.flags = state.flags || {};
            state.flags[failFlag] = false;
          }
          const failMod = parseInt(intCheck.fail_dc_mod || -2, 10);
          state.denial_int_dc = Math.max(4, intDc + failMod);
          notes.push('Denial ' + checkStat + ':FAIL(DC now ' + state.denial_int_dc + ')');
        }
      }
    } else if (trigger === 'message_interval') {
      const interval = parseInt(tb.interval || 50, 10);
      const counterKey = tb.counter_key || (effName + '_msg_count');
      const count = (state[counterKey] || 0) + 1;
      state[counterKey] = count;
      if (count % interval === 0 && !isLocked(state, effName)) {
        const result = runRoll(state, effName, notes, rs);
        if (result === 'fail') {
          advanceStage(state, effName, notes, rs);
        }
      }
    } else if (trigger === 'session_start') {
      const prefix = (rs.engine_config || {}).session_roll_flag_prefix || 'session_rolled_';
      const flag = prefix + effName;
      const flags = state.flags || {};
      if (!flags[flag] && !isLocked(state, effName)) {
        const result = runRoll(state, effName, notes, rs);
        if (result === 'fail') {
          advanceStage(state, effName, notes, rs, tb.permanent_to_db || false);
        }
        state.flags = state.flags || {};
        state.flags[flag] = true;
      }
    }
  }

  events.orgasm_this_turn = orgasmThisTurn;
  if (deniedThisTurn && !orgasmThisTurn) {
    delete events[orgasmEv];
  }

  // Execute state events
  for (const evName in (rs.state_events || {})) {
    if (events[evName]) {
      _executeStateEvents(evName, state, events, effects, notes, rs, personaEffects);
    }
  }

  // Pregnancy auto-advance
  const _flags = state.flags = state.flags || {};
  const _conTurn = state._conception_turn;
  if (_flags.pregnancy_confirmed && _conTurn !== null && _conTurn !== undefined) {
    const _pregAge = (state.turn || 0) - _conTurn;
    if (_pregAge >= 8 && !_flags.pregnancy_stage_late) {
      _flags.pregnancy_stage_late = true;
      _flags.pregnancy_stage_showing = true;
      notes.push('Pregnancy:auto-advance to late (turn ' + _pregAge + ')');
    } else if (_pregAge >= 4 && !_flags.pregnancy_stage_showing) {
      _flags.pregnancy_stage_showing = true;
      notes.push('Pregnancy:auto-advance to showing (turn ' + _pregAge + ')');
    }
  }

  // Masculinity delta
  const pill = state.active_pill;
  if (pill && state.masculinity !== undefined) {
    const hasSexEvent = orgasmThisTurn || events.penetration_attempt || events.creampie_vaginal;
    const mascTriggers = [];

    // Trigger 1: Sex event
    const pRule = (rs.pill_rules || {})[pill] || {};
    let sexDelta = 0;
    if (hasSexEvent) {
      if (pRule.masculinity_creampie_delta != null && events.creampie_vaginal) {
        sexDelta = pRule.masculinity_creampie_delta;
      } else if (pRule.masculinity_sex_delta != null) {
        sexDelta = pRule.masculinity_sex_delta;
      }
    }
    if (sexDelta !== 0) mascTriggers.push(['sex_event', sexDelta]);

    // Trigger 2: Arousal gate fail
    if (state._arousal_gate_done === 'crossed') {
      const crossedTo = parseInt(state._arousal_gate_crossed_to || 0, 10);
      let agDelta = -1;
      if (crossedTo >= 15) agDelta = -3;
      else if (crossedTo >= 10) agDelta = -2;
      mascTriggers.push(['arousal_gate_fail@' + crossedTo, agDelta]);
    }

    // Trigger 3: Orgasm
    if (orgasmThisTurn) {
      const orgDelta = pRule.masculinity_orgasm_delta != null ? pRule.masculinity_orgasm_delta : -1;
      mascTriggers.push(['orgasm', orgDelta]);
    }

    // Trigger 4: Effect stage advance
    const advances = state._stage_advances_this_turn || [];
    for (const advName of advances) {
      mascTriggers.push(['effect_advance:' + advName, -1]);
    }

    // Trigger 5: Pill transformation / initial shock
    if (newlyAdded.size > 0 && !state._transform_shock_fired) {
      state._transform_shock_fired = true;
      mascTriggers.push(['transform_shock', -2]);
    }

    // Trigger 6: Pill passive no-sex
    if (pRule.passive_no_sex_delta != null && !hasSexEvent && !state._pill_passive_fired) {
      state._pill_passive_fired = true;
      mascTriggers.push(['pill_passive', pRule.passive_no_sex_delta]);
    }

    // Trigger 7: Orgasm denied / breeder frustration
    if (deniedThisTurn) {
      mascTriggers.push(['orgasm_denied', -1]);
    }

    // Sum and apply
    let totalDelta = 0;
    for (const [src, bd] of mascTriggers) {
      totalDelta += bd;
      state._notes_log = state._notes_log || [];
      state._notes_log.push('masc_trigger:' + src + ' raw=' + bd);
    }
    if (totalDelta !== 0) {
      _applyMasculinityDelta(state, totalDelta);
    }
  }

  // Clean up per-turn tracking
  delete state._stage_advances_this_turn;

  // Store notes
  if (notes.length > 0) {
    state._notes_log = state._notes_log || [];
    state._notes_log.push(...notes);
  }

  return state;
}

// ──────────────────────────────────────────────────────────────────────────────
// HELPER: BODY GUIDANCE & TRANSFORMATION
// ──────────────────────────────────────────────────────────────────────────────

function getBodyGuidance(color, modifier, cardBody, rs) {
  const bm = rs.body_modifiers || {};
  const fallback = (bm[color] || {}).fallback_modifier_color || color;
  const colorEntry = bm[color] || bm[fallback] || {};
  const baselineParts = [];
  if (cardBody.height_str) baselineParts.push('height ' + cardBody.height_str);
  if (cardBody.weight) baselineParts.push(cardBody.weight + 'lbs');
  if (cardBody.build_keywords && cardBody.build_keywords.length)
    baselineParts.push(cardBody.build_keywords.slice(0, 3).join(', '));
  const baselineStr = 'Starting body: ' + (baselineParts.length ? baselineParts.join(', ') : 'unknown');

  const SKIP = new Set(['transformation_guidance', 'modifiers', 'baseline_from_card', 'fallback_modifier_color', 'modifier_flavor', 'keyword_map', 'target_weights']);
  if (modifier) {
    const modEntry = (colorEntry.modifiers || {})[modifier];
    if (modEntry) {
      const tp = ['Target body (' + modifier + ')'];
      for (const [k, v] of Object.entries(modEntry)) {
        if (!SKIP.has(k)) tp.push(k + ': ' + v);
      }
      return baselineStr + '\n' + tp.join(' | ');
    }
  }
  const baseline = colorEntry.baseline_from_card || {};
  const rules = baseline.rules || [];
  const scaleLabel = baseline.scale_label || 'Target body: scale from character baseline';
  const tp = [scaleLabel];
  if (rules.length) tp.push(...rules.slice(0, 2));
  return baselineStr + '\n' + tp.join(' | ');
}

function resolveStartingBuild(cardBody, colorEntry) {
  // Step 1: Determine the character's starting build category from the card.
  // Returns the matched build keyword or null.
  const keywordMap = colorEntry.keyword_map || {};
  const cardKeywords = (cardBody.build_keywords || []).map(function(k) { return k.toLowerCase(); });
  if (!cardKeywords.length) return null;
  for (const modName of Object.keys(keywordMap)) {
    if (modName === 'note') continue;
    var triggers = keywordMap[modName] || [];
    for (var t = 0; t < triggers.length; t++) {
      for (var c = 0; c < cardKeywords.length; c++) {
        if (cardKeywords[c].includes(triggers[t]) || triggers[t].includes(cardKeywords[c])) {
          console.log('[PILL] resolveStartingBuild: card keyword "' + cardKeywords[c] + '" -> starting build "' + modName + '"');
          return modName;
        }
      }
    }
  }
  return null;
}

function weightedRandomPick(weightMap) {
  // Pick a random key from {key: weight} map using weighted probability.
  var pool = [];
  for (var key in weightMap) {
    if (key === 'note' || key.charAt(0) === '_') continue;
    var w = weightMap[key] || 0;
    for (var i = 0; i < w; i++) pool.push(key);
  }
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function resolveBodyModifier(color, cardBody, rs) {
  // Resolve a target body modifier using weighted random based on starting body.
  // 1. Read the card's starting build from build keywords
  // 2. Look up target_weights for that starting build
  // 3. Weighted random pick from the weight map
  const bm = rs.body_modifiers || {};
  const fallback = (bm[color] || {}).fallback_modifier_color || color;
  const colorEntry = bm[color] || bm[fallback] || {};
  const modifiers = colorEntry.modifiers || {};
  const modNames = Object.keys(modifiers);
  if (!modNames.length) return null;

  // Resolve starting build from card
  const startingBuild = resolveStartingBuild(cardBody, colorEntry);
  console.log('[PILL] resolveBodyModifier: startingBuild=' + (startingBuild || 'unknown') + ' color=' + color);

  // Look up target weights for starting build
  const targetWeights = colorEntry.target_weights || {};
  var weightMap = null;
  if (startingBuild && targetWeights[startingBuild]) {
    weightMap = targetWeights[startingBuild];
    console.log('[PILL] resolveBodyModifier: using target_weights for starting build "' + startingBuild + '"');
  } else {
    weightMap = targetWeights['_default'] || null;
    console.log('[PILL] resolveBodyModifier: using _default target_weights (no starting build match)');
  }

  // Weighted random pick
  if (weightMap) {
    var pick = weightedRandomPick(weightMap);
    if (pick) {
      console.log('[PILL] resolveBodyModifier: ' + (startingBuild || '?') + ' -> "' + pick + '" (weighted random)');
      return pick;
    }
  }

  // Final fallback — uniform random from available modifiers
  var pick = modNames[Math.floor(Math.random() * modNames.length)];
  console.log('[PILL] resolveBodyModifier: fallback uniform random -> "' + pick + '"');
  return pick;
}

function _sampleHeightRange(str) {
  if (!str) return str;
  const m = str.match(/(\d+)'(\d+)["″]?\s*[-–—]\s*(\d+)'(\d+)["″]?/);
  if (!m) return str;
  const lo = parseInt(m[1]) * 12 + parseInt(m[2]);
  const hi = parseInt(m[3]) * 12 + parseInt(m[4]);
  const tot = lo + Math.floor(Math.random() * (hi - lo + 1));
  return Math.floor(tot / 12) + "'" + (tot % 12) + '"';
}

function _sampleWeightRange(str) {
  if (!str) return str;
  const m = str.match(/(\d+)\s*[-–—]\s*(\d+)/);
  if (!m) return str;
  return (parseInt(m[1]) + Math.floor(Math.random() * (parseInt(m[2]) - parseInt(m[1]) + 1))) + 'lbs';
}

function _sampleBustRange(str) {
  if (!str) return str;
  const m = str.match(/([A-F])\s*[-–—]\s*([A-F])\s*cup/i);
  if (m) {
    const lo = m[1].toUpperCase().charCodeAt(0);
    const hi = m[2].toUpperCase().charCodeAt(0);
    return String.fromCharCode(lo + Math.floor(Math.random() * (hi - lo + 1))) + ' cup';
  }
  const s = str.match(/([A-F])\s*cup/i);
  return s ? s[1].toUpperCase() + ' cup' : str;
}

function _buildTransformVoiceAnchor(state) {
  if (!state) return '';
  const domMod = _mod(state, 'DOM');
  const wisMod = _mod(state, 'WIS');
  const intMod = _mod(state, 'INT');
  const chaMod = _mod(state, 'CHA');
  const subMod = _mod(state, 'SUB');

  const parts = [];
  if (domMod >= 4) parts.push('commanding, utterly unfazed by what the body is doing');
  else if (domMod >= 2) parts.push('self-assured, tracking the changes from a position of control');
  if (wisMod >= 3) parts.push('cataloging every sensation analytically');
  if (intMod >= 3) parts.push('processing each change with sharp precision');
  if (chaMod >= 3 && domMod < 2) parts.push('acutely aware of every shift in sensation');
  if (subMod >= 3 && domMod < 2) parts.push('pulled toward surrender with each change');

  if (!parts.length) return '';
  return 'Character voice: ' + parts.join(', ') + '. Write them this way throughout.';
}

// ── Genital transformation color phrases ──
// Keyed by penis_size tier (1-5) × masculinity group (horror/conflicted/accepting/happy)
// horror = masc 80-100 (bands 9-10), conflicted = 41-79 (bands 5-8),
// accepting = 21-40 (bands 3-4), happy = 0-20 (bands 0-2)
// Each entry is an array; engine picks one at random.
const _GENITAL_TX_PHRASES = {
  // ═══ TINY (tier 1) ═══
  "1_horror": [
    "It was small enough to pretend wasn't the point — but it was still his, and losing even that quiet claim hits somewhere deep and unforgivable.",
    "Never the center of his masculinity, but its absence leaves a gap he wasn't prepared for — something fundamental subtracted from a body he thought he understood.",
    "He barely thought about it before. Now the nothing where it used to be is louder than it ever was. The violation is not proportional to size.",
    "It wasn't much. That doesn't matter. The body is rewriting something that shouldn't be rewritable and the horror is absolute regardless of what was there."
  ],
  "1_conflicted": [
    "It was never impressive and he knew that. The change registers more as inevitability than loss — another thing the pill is taking that he wasn't holding onto very hard.",
    "Small enough that the vanishing barely registers physically. The disorientation is all identity — the place it occupied was larger than the organ itself.",
    "Easier to let go of than he expected. The embarrassment of having had something so modest is briefly louder than the loss of it. Still — it was his.",
    "The absence settles before the feelings do. Whatever that was, it wasn't the hill he was going to die on — but the body moving past it before he can process it stings."
  ],
  "1_accepting": [
    "It was always more trouble than it was worth. The change arrives like putting down something held out of obligation — quiet, overdue.",
    "The relief is there before the grief has time to show up. Something small becoming something absent, and the absence is easier than the having was.",
    "She barely registers the change. It was already easy to forget was there; now she doesn't have to remember.",
    "Something that never quite fit finishing its departure. The body is lighter where it used to be, and lighter feels right."
  ],
  "1_happy": [
    "Finally. The tiny thing that never belonged dissolves and the body sighs with a relief she didn't know she was holding.",
    "It was a splinter. Now it's gone. The smoothness where it used to be feels like the body correcting a lifelong typo.",
    "She could cry from how simple it is — something small becoming something right, the easiest yes her body has ever said.",
    "The change is so fast for something so small. One moment it's there, then it's not, and the not is everything she wanted."
  ],

  // ═══ SMALL (tier 2) ═══
  "2_horror": [
    "It was modest but it was his — four or five inches that anchored something in his sense of himself. Watching it diminish feels like a slow theft of something he can't articulate.",
    "Not large enough to be proud of, but losing it carves out something unexpectedly raw. The body had it; the body is losing it; the body does not get a vote.",
    "He can feel it retreating and every fraction matters more than he would have predicted. Size was never the point. Presence was. And the presence is leaving.",
    "Small enough that no one would have called it a selling point, but the emptiness it leaves behind is disproportionate to what was actually there. The horror doesn't scale with inches."
  ],
  "2_conflicted": [
    "It's going and he can't decide how to feel about that. The modest size makes the loss feel both trivial and strangely significant at the same time.",
    "Not enough to mourn loudly but enough to notice. The change splits his attention between watching it happen and trying to figure out whether he cares.",
    "The confusion is worse than the loss. He didn't value it enough to fight for it, but the body's casual erasure of it stings in a way that doesn't track.",
    "Halfway between grief and shrugging. It was small. It's going. The emotional math refuses to resolve cleanly and neither does the physical sensation."
  ],
  "2_accepting": [
    "It was modest and she was already making peace with it not defining her. The change completes something that felt half-finished — a simplification that was overdue.",
    "Watching it go is easier than expected. The size made it easy to tuck, easy to forget, and now easy to release entirely. The body barely pauses.",
    "A small thing becoming no thing. The proportionality of the loss matches the proportionality of the attachment — minimal and quickly resolved into something better.",
    "She feels the change more as completion than subtraction. Something small becoming something right, the body smoothing itself into a shape it prefers."
  ],
  "2_happy": [
    "It shrinks and she smiles. Four inches of wrong becoming zero inches of right, and the math has never been simpler.",
    "The warmth where it reshapes feels like a welcome. Something small and unwanted becoming something warm and wanted — the body knows exactly what it's doing.",
    "She'd hidden it, tucked it, pretended it wasn't there for years. Now it genuinely isn't, and the genuine isn't feels like sunlight.",
    "Gone. Just — gone. And in its place something that fits, something that was always supposed to be there. She presses her thighs together and breathes."
  ],

  // ═══ AVERAGE (tier 3) ═══
  "3_horror": [
    "Average, unremarkable, ordinary — and still his. The pill doesn't care about statistics. It takes what it takes and the loss of something perfectly normal hits like a violation of basic fairness.",
    "Nothing special, nothing to be ashamed of. That ordinary middle ground is exactly what makes the loss feel so universal — this is what every man has, and it's being unmade.",
    "Six inches of normal that anchored a lifetime of assumptions about what his body was for. Watching it reshape is watching those assumptions die in real time.",
    "The averageness makes the loss worse somehow. It's not dramatic. It's not interesting. It's just gone, and the ordinariness of what was there makes the emptiness feel like it could happen to anyone — which is its own horror."
  ],
  "3_conflicted": [
    "Perfectly ordinary, which makes the confusion perfectly ordinary too — he can't romanticize the loss or dismiss it. The change just is what it is and he's stuck watching.",
    "Average enough that he never thought about it much. Now he can't stop thinking about it, and the newfound attention arrives exactly too late to matter.",
    "The middle-of-the-road size matches the middle-of-the-road feelings — not devastated, not relieved, just present for a change that refuses to be dramatic about itself.",
    "He watches something normal become something else. The lack of extremity in either direction leaves him stranded in ambiguity while the body makes decisions without consulting him."
  ],
  "3_accepting": [
    "Average, functional, and increasingly beside the point. The change carries it away without ceremony and the absence resolves into something simpler and cleaner.",
    "Not small enough to be relieved about losing, not large enough to mourn. The body takes the middle path through the change — quiet, unremarkable, done.",
    "She'd already stopped centering it. The pill just finishes what her relationship with that part of herself had already started — a gentle demotion from relevant to gone.",
    "The transformation moves through it without drama. An ordinary thing becoming an ordinary absence, and then something new that fits better than ordinary ever did."
  ],
  "3_happy": [
    "Average was never the right word for something that felt so fundamentally wrong. Now it's reshaping into something that's right, and right doesn't need a size.",
    "She watches it go like watching a deadline pass — the anxiety of having it evaporating into the calm of not. The new shape underneath is warm and correct.",
    "Six inches of someone else's anatomy becoming the anatomy she was supposed to have. The change is medium-sized but the joy is not.",
    "Normal was what other people called it. For her it was always the problem. The problem is solving itself now and she lets it happen with her whole body exhaling."
  ],

  // ═══ LARGE (tier 4) ═══
  "4_horror": [
    "That was a source of real pride and the pill is taking it like it means nothing. Seven, eight inches of something he built identity around — diminishing while he watches, helpless, his body betraying the one thing he never doubted.",
    "Big enough to matter. Big enough that its loss registers as a genuine amputation of something that defined how he moved through the world. The absence is cavernous and growing.",
    "He can feel every inch leaving and each one costs something. That wasn't just anatomy — it was confidence, identity, proof of something. The pill doesn't care about proof.",
    "The size made it impossible to ignore having, which makes it impossible to ignore losing. The change is not subtle and neither is the grief that crashes through him."
  ],
  "4_conflicted": [
    "It was significant and he knew it and now it's going and he doesn't know what to do with that information. The size makes the change physically dramatic — more to lose, more to feel during the losing.",
    "Big enough that the absence will change how the body moves, how clothes fit, how the center of gravity works. The mechanical reality of losing something that large overwhelms the emotional processing.",
    "He'd be lying if he said he wasn't proud of it. He'd also be lying if he said the change doesn't carry something complicated that isn't entirely loss. Something underneath the grief feels like curiosity.",
    "The physical drama of something that size reshaping draws all the attention. Whatever he's feeling about it gets deferred until the body finishes its argument — and the argument is loud."
  ],
  "4_accepting": [
    "It was impressive and she's still letting go of it — not with grief exactly, but with the acknowledgment that something significant is being unmade and she's choosing not to hold on.",
    "Large enough that the physical change is dramatic — the weight lifts, the pressure changes, the whole pelvic area restructures. The relief has gravity proportional to what was there.",
    "She's surprised by how ready she is. Something that size should command more mourning, but the body seems to know what it wants and what it wants is this.",
    "The change takes longer with something this size. More to reshape, more nerves to reroute. But every inch of the process feels like alignment settling into place rather than loss."
  ],
  "4_happy": [
    "Seven inches of inconvenience finally becoming something she actually wants. The change is dramatic and she doesn't look away — she watches every inch of it resolve with something close to triumph.",
    "It was big and obvious and impossible to dress around and she is so ready for it to be gone. The reshaping is intense but the intensity reads as correction, not violence.",
    "Large enough that its departure is a whole event — and she's here for every second of it. The weight leaving, the heat concentrating, the new shape forming. All of it is yes.",
    "She'd spent years resenting something that size. Now she gets to feel it leave, inch by inch, and the feeling is vindication wrapped in warmth."
  ],

  // ═══ HUGE (tier 5) ═══
  "5_horror": [
    "That was everything. Nine, ten inches of undeniable masculinity that defined how he saw himself, how others saw him — and the pill is dissolving it like it was never there. The loss is catastrophic and total.",
    "Enormous, impossible to ignore, impossible to forget having. The change takes its time with something this large and every second of the reshaping is a new layer of violation.",
    "He built a self around that. Confidence, dominance, desirability — all rooted in something the pill is casually unmaking. The proportionality between what he's losing and what he's feeling is one to one.",
    "The sheer physical drama of something that massive transforming overwhelms everything. The grief doesn't start until the sensation stops, and the sensation doesn't stop for a long time."
  ],
  "5_conflicted": [
    "It was impossible not to think about — that large, that present, that much a part of every physical experience. Watching it go is like watching a landmark demolished while standing inside it.",
    "Something that size leaving the body is a seismic event regardless of how he feels about it. The confusion gets bulldozed by pure physical intensity and he can't think past the sensation.",
    "He was defined by it whether he wanted to be or not. The change strips away something he never chose to center but couldn't help centering. The ambivalence doesn't make it smaller.",
    "Enormous and diminishing. The contradiction of something that vast becoming nothing takes up all available processing. Feelings queue behind sensation and sensation is deafening."
  ],
  "5_accepting": [
    "It was overwhelming to have and it's overwhelming to lose — but the overwhelm flips register. What used to be too much becomes a liberation proportional to its size.",
    "She'd spent years negotiating something that large — tucking it, hiding it, working around it. The change unmakes the longest-running logistical problem of her body and the relief is enormous.",
    "Massive and finally going. Every inch that resolves carries weight she didn't realize she was bearing. The body lightens and lightens and lightens toward something manageable.",
    "Something that huge becoming something new takes time and she feels all of it — but the feeling is release, not loss. The body knows what it wants."
  ],
  "5_happy": [
    "Ten inches of wrong becoming the rightest thing she's ever felt. The change is enormous because what it's changing is enormous and she rides every wave of it grinning through tears.",
    "She'd hated it. Hated its size, its visibility, its insistence on existing. Now it's melting into something warm and correct and she could scream with how good the absence feels.",
    "Massive, obvious, inescapable — and finally, finally leaving. The bigger it was the better this feels. The reshaping takes its time and she savors every second like revenge.",
    "The biggest thing about her old body becoming the best thing about her new one. The transformation is seismic and the aftershock is pure joy radiating from the center of her."
  ]
};

const _BREAST_TX_PHRASES = {
  // ═══ A CUP (tier 1) ═══
  "A_horror": [
    "Even this small change is a violation — the slightest swelling on a chest that was flat an hour ago, and the wrongness is absolute regardless of how subtle it looks.",
    "Barely there and still too much. The faintest curve under his shirt rewrites something fundamental about the body he's spent his whole life trusting.",
    "They're tiny and he hates them with a disproportionate fury. Every slight bounce, every shift of new weight where there should be none — it's maddening in miniature.",
    "A cups shouldn't feel this catastrophic but the chest was supposed to be flat and it isn't anymore and that impossibility sits on him like a sentence."
  ],
  "A_conflicted": [
    "Barely noticeable. He keeps touching his chest without meaning to — not checking if they're real, but checking if he minds. The answer keeps changing.",
    "Small enough to hide under any shirt, which makes the confusion optional. He could pretend they aren't there. He doesn't pretend as often as he expected to.",
    "The tiniest change, the biggest uncertainty. Something that subtle shouldn't be this hard to have feelings about but the feelings keep arriving anyway.",
    "Almost nothing. Almost ignorable. The almost is doing all the heavy lifting because the part that isn't nothing keeps demanding his attention at odd moments."
  ],
  "A_accepting": [
    "Small and exactly enough. The modest swell feels like a quiet beginning rather than a dramatic statement — her body suggesting rather than shouting.",
    "A cups feel like permission. Not a demand, not a performance — just a gentle first fact about a body that's starting to match what she already knew.",
    "The softness is slight but the rightness isn't. Small breasts on a chest that was waiting for them, and the fit is better than any size could improve.",
    "Barely a handful and she doesn't want more. The subtlety feels intentional — her body choosing understatement, and the understatement is perfect."
  ],
  "A_happy": [
    "Small and hers and perfect. The tiniest curve that means everything — she catches her reflection and the smile arrives before the thought does.",
    "She cups them gently and they fit her palms like they were measured for this. A cups. Her cups. The size doesn't matter; the having does.",
    "Delicate, modest, undeniably there. She runs a finger along the new curve and the joy is so disproportionate to the size that it makes her laugh.",
    "Finally. The smallest breasts in the world and she wouldn't trade them for anything. Every slight bounce when she moves is a tiny celebration."
  ],

  // ═══ B CUP (tier 2) ═══
  "B_horror": [
    "Undeniably there now — B cups that reshape the silhouette into something unambiguously feminine. Every step reminds him they exist and every reminder is a fresh injury.",
    "Big enough to see. Big enough to feel when he moves. The weight isn't heavy but the meaning is crushing — his body has committed to something he never agreed to.",
    "They bounce when he walks. The sensation is alien and constant and he can't stop noticing it. B cups, modest by any standard, and still enough to undo him.",
    "The shirt fits differently. The chest catches in the fabric. Something that didn't exist yesterday has taken up residence and the body offers no appeals process."
  ],
  "B_conflicted": [
    "Noticeable but not dramatic. B cups that sit in a strange middle ground — feminine enough to register, modest enough to negotiate with. He hasn't decided what the negotiation looks like.",
    "They're there. He can feel them. The weight is slight and the emotional register is uncertain — something between violation and curiosity that refuses to resolve.",
    "Medium-small and somehow the perfect size for indecision. Large enough to acknowledge, small enough to minimize. He does both, sometimes in the same breath.",
    "B cups. Ordinary. The ordinariness is what makes the confusion so hard to escape — this is just what breasts look like on most women, and his body has them now."
  ],
  "B_accepting": [
    "B cups settle naturally on her frame — proportional, unassuming, right. The weight is familiar already, like her body remembers something the rest of her is catching up to.",
    "Modest and lovely. She watches them take shape and the acceptance arrives before they're even finished — her body knows this size, wants this size.",
    "The bra would be easy to shop for, the clothes would fit without drama. The practical mundanity of B cups feels like belonging in a way nothing else has.",
    "Not too much, not too little. Her body chose the Goldilocks zone and she trusts the choice completely."
  ],
  "B_happy": [
    "B cups and they're perfect. She bounces once experimentally and the grin is involuntary and enormous. These are hers and they're exactly right.",
    "She fills her hands with them and they fill her hands and the symmetry of that — wanting and having in the same proportion — makes her eyes sting.",
    "Proportional, pretty, perfectly hers. B cups that look like they've always been there, and the joy is that soon enough she'll forget they haven't.",
    "She watches them in the mirror and adjusts to the new silhouette in real time — and every adjustment feels like coming home."
  ],

  // ═══ C CUP (tier 3) ═══
  "C_horror": [
    "C cups. Unmissable. The weight pulls at his chest with every movement and the pull is a constant, physical reminder that his body has been rewritten without consent.",
    "Substantial enough that there's no pretending. The sway, the weight, the way they reshape every shirt — C cups that he can't ignore and can't accept.",
    "His center of gravity has shifted. The breasts are medium-large and the horror is proportional — not the worst it could be, which somehow makes it worse because it means he's calibrating.",
    "They fill the shirt. They bounce when he stops. They exist with a physical assertiveness that leaves no room for denial and he is not ready for any of this."
  ],
  "C_conflicted": [
    "C cups. The demographic average. Somehow landing exactly in the middle makes the confusion sharper — no extreme to push back against, just ordinary breasts on a body that still feels contested.",
    "Substantial enough to acknowledge, standard enough to normalize. His feelings about them change with every heartbeat and the breasts themselves remain serenely indifferent to his opinion.",
    "They sit on his chest like they belong there and the worst part is how convincing the fit is. C cups that look natural on a frame that he still thinks of as his.",
    "Medium and maddening. Large enough to feel, ordinary enough that the feeling keeps sliding toward acceptance before he catches himself and pulls back."
  ],
  "C_accepting": [
    "C cups feel like the body found its center. Not modest, not dramatic — substantial and feminine and correct in a way she can feel in her posture.",
    "The weight settles and she settles with it. C cups, perfectly proportional, the kind of breasts that clothes are designed around. Her body chose well.",
    "She adjusts her bra strap and the gesture is so mundanely feminine that it grounds her. C cups. Normal breasts. Her normal breasts.",
    "Full enough to be undeniable, proportional enough to be graceful. The body found its average and the average is beautiful."
  ],
  "C_happy": [
    "C cups and she's thrilled with every ounce of them. Full, round, perfectly hers — she watches them in the mirror and the happiness is physical and total.",
    "She cradles them and they're substantial and warm and the weight feels like proof. C cups that announce themselves gently and she wants the whole world to notice.",
    "The sway when she walks. The fill of the bra. The silhouette in the mirror. Everything about C cups on her body is a small continuous celebration.",
    "Perfect. Just — perfect. Not too much, not too little, exactly the breasts she would have chosen if anyone had asked, and the body asked and answered itself."
  ],

  // ═══ D CUP (tier 4) ═══
  "D_horror": [
    "D cups. Heavy, visible, impossible to dismiss. The weight on his chest is a constant physical argument for a femininity he didn't choose and the body won't let him forget.",
    "Large enough that they define the silhouette. Every movement is accompanied by a sway he can feel through his whole torso. D cups that insist on being acknowledged.",
    "His chest is heavy with something that shouldn't be there. The breasts are large and the horror is proportional — his body has committed fully to something and he's trapped inside the result.",
    "They pull at his shoulders. They shift when he turns. D cups that have their own momentum and their own agenda and none of it aligns with who he is."
  ],
  "D_conflicted": [
    "D cups. Larger than expected. The weight is undeniable and the feelings are a mess — pride and horror and something uncomfortably close to appreciation all fighting for the same space.",
    "Full, heavy, attention-getting. He's caught between covering them and — not. The size makes everything more complicated because the physical sensation of them is not entirely unwelcome.",
    "Larger than average and he doesn't know what to do with the way they feel. D cups that command attention, and part of the conflict is wanting the attention they command.",
    "The physical reality of D cups overwhelms the emotional processing. Heavy breasts on a chest that had none, and the weight anchors him to a present he hasn't decided about."
  ],
  "D_accepting": [
    "D cups fill her with warmth — literally, the weight of them warm against her chest, a fullness that feels like completion rather than addition.",
    "Full and feminine and hers. D cups that her frame accommodates beautifully, as though the body planned for them and was just waiting.",
    "She looks down and the view has changed dramatically and the drama is welcome. D cups that she wears like they chose her and she chose them back.",
    "The heft is grounding. The shape is lovely. D cups that turn the silhouette into something she's wanted to see in every mirror for years."
  ],
  "D_happy": [
    "D cups and she's never felt this complete. Full, heavy, gorgeous — she fills her hands and there's still more and the abundance feels like a gift she's finally allowed to open.",
    "She bounces once and watches them move and the delight is primal and uncomplicated. D cups that are heavy and beautiful and entirely, possessively hers.",
    "The weight of them pulls at her chest and the pull feels like gravity pointing toward the right body. D cups. Generous, warm, undeniable.",
    "Large enough to see from across the room and she wants them seen. D cups that she earned through the strangest alchemy and she would not trade a single ounce."
  ],

  // ═══ DD/E CUP (tier 5) ═══
  "DD_horror": [
    "DD cups. The weight is staggering. His chest has become the center of a body he doesn't recognize and the heaviness is a constant, dragging reminder of how far the transformation has gone.",
    "Enormous by any standard. The sway is dramatic, the weight is relentless, and every motion amplifies the wrongness of having this much breast tissue on a chest that was flat hours ago.",
    "They're heavy enough to change how he stands, how he moves, how he breathes. DD cups that have restructured his whole body around their presence and he is horrified by the thoroughness.",
    "The sheer volume is obscene. His chest is heavy and prominent and impossible to ignore and the violation of it scales with every cup size above nothing."
  ],
  "DD_conflicted": [
    "DD cups. Large. The kind of large that makes everything else about the body secondary and he isn't sure whether the loss of subtlety is a loss or a simplification.",
    "Heavy enough that the physical sensation dominates everything. The confusion doesn't have room to be subtle — DD cups demand big feelings and the feelings comply messily.",
    "They're a lot. A lot to see, a lot to feel, a lot to process. The size makes ambivalence harder to maintain because the physical reality is so loud.",
    "DD cups that leave no room for denial. The weight, the sway, the way they reshape his profile — everything about them is emphatic and his emotions can't match the volume."
  ],
  "DD_accepting": [
    "DD cups settle on her frame like they were always planned — generous, full, the kind of curves that reshape a silhouette into something unapologetically feminine.",
    "Heavy and beautiful. The weight feels like substance rather than burden — DD cups that her body supports with a grace that suggests it was built for exactly this.",
    "She adjusts the new weight and the adjustment is easier than expected. DD cups that feel like the body went for emphasis and she trusts the emphasis completely.",
    "Full, generous, undeniable. The body chose abundance and she agrees with the choice. DD cups that make her feel finished in the best possible way."
  ],
  "DD_happy": [
    "DD cups and she is overjoyed with every heavy, gorgeous ounce. Full and round and generous — the kind of breasts she dreamed about and the dream fell short of the reality.",
    "She holds them and they overflow her hands and the overflow is pure delight. DD cups that are extravagant and warm and so completely right that she could cry.",
    "The weight of them pulls at her chest and the pull is grounding and euphoric simultaneously. DD cups. Hers. The body outdid itself and she is grateful.",
    "Big, beautiful, bouncing when she moves. DD cups that make her whole body feel like a celebration. She watches herself in the mirror and doesn't look away."
  ],

  // ═══ F+ CUP (tier 6) ═══
  "F_horror": [
    "F cups or beyond. The weight is absurd, the visibility total, the transformation absolute. His chest has been rebuilt into something cartoonishly, inescapably feminine and the excess feels like mockery.",
    "Enormous. Pendulous. Heavy enough to hurt. The sheer volume of breast tissue is an overcorrection that reads as punishment — the pill didn't just change him, it exaggerated the change into cruelty.",
    "Every motion sends them swaying. Every step makes them bounce. F cups that are so large they've become the only thing about his body anyone would ever notice and the erasure of everything else is complete.",
    "His back aches from the weight. His posture has restructured around them. F cups that have hijacked his entire body and rebuilt it as a delivery system for breasts he never wanted."
  ],
  "F_conflicted": [
    "F cups. Excessive. The size pushes past ambivalence into something he can't categorize — too large for comfort, too present to ignore, too dramatic to process with any emotional tool he has.",
    "They're overwhelming in every sense. The physical weight is matched by the emotional weight and neither one is manageable. F cups that turn confusion into something closer to vertigo.",
    "This is more than anyone bargained for. The size makes the conflict operatic — huge feelings about huge breasts, nothing subtle left in either direction.",
    "So large that the ambivalence itself feels inadequate. F cups demand a stronger reaction than 'conflicted' and the body is producing sensations faster than he can catalogue them."
  ],
  "F_accepting": [
    "F cups. Excessive by any standard, and she accepts them with an ease that surprises even her. The body went big and the acceptance is proportional.",
    "Heavy, dramatic, unapologetically large. The weight settles on her frame and the frame takes it. F cups that feel like the body's final, emphatic statement.",
    "She bears the weight and the weight is considerable and the bearing of it feels like strength. F cups that are a lot — and she wants a lot.",
    "Enormous and hers. The body chose maximum volume and she doesn't second-guess it. F cups that reshape everything and everything looks better reshaped."
  ],
  "F_happy": [
    "F cups and she is ecstatic. Huge, heavy, impossible to miss — the kind of breasts that rewrite a room when she enters it and she wants to enter every room.",
    "She can barely hold them both and the trying makes her laugh with pure delight. F cups. Enormous. Gorgeous. The body went all the way and she is here for every ounce of it.",
    "The weight is dramatic and the drama is welcome. F cups that bounce and sway and demand attention and she has never wanted to give attention to anything this much.",
    "Obscenely large and she loves them obscenely. F cups that feel like the body's love letter to itself — extravagant, unapologetic, impossible to ignore, and she wouldn't change a single cup size."
  ]
};

function buildTransformationGuidance(pillDescriptor, cardBody, cardSex, rs, state) {
  const color = pillDescriptor.color || 'unknown';
  var modifier = pillDescriptor.body_modifier;
  const effects = pillDescriptor.effects || [];
  const pdr = rs.pill_descriptor_parsing || {};
  const pRule = (rs.pill_rules || {})[color] || {};
  const fromSex = (cardSex || 'unknown').toLowerCase();
  const toSex = pRule.form_sex || 'unknown';
  const genitals = (pRule.genitals || 'unknown').replace(/_/g, ' ');
  const noChange = pRule.no_form_change || false;

  const direction = noChange
    ? 'Effects only — no body transformation'
    : 'Transformation: ' + fromSex + ' -> ' + toSex + ' | genitals: -> ' + genitals;

  const bm = rs.body_modifiers || {};
  const bmColor = (bm[color] || {}).fallback_modifier_color || color;

  // ── Resolve modifier from card if none was on the pill ──
  var resolvedFromCard = false;
  var startingBuild = null;
  const colorEntryForResolve = bm[color] || bm[bmColor] || {};
  // Always resolve starting build for the txBodyPath lookup
  // Use original build keywords if available for accurate body path
  const resolveBody = ((state || {})._original_build_keywords) 
    ? Object.assign({}, cardBody, {build_keywords: state._original_build_keywords})
    : cardBody || {};
  startingBuild = resolveStartingBuild(resolveBody, colorEntryForResolve);
  if (!modifier && !noChange) {
    modifier = resolveBodyModifier(color, cardBody || {}, rs);
    resolvedFromCard = !!modifier;
    if (modifier) {
      console.log('[PILL] buildTransformationGuidance: resolved target "' + modifier + '" from starting build "' + (startingBuild || '?') + '"');
      // Write back to descriptor so debug panel and stored state reflect the resolved value
      if (state && state._pill_descriptor_this_turn) {
        state._pill_descriptor_this_turn.body_modifier = modifier;
      }
      if (state && state._deferred_transformation) {
        state._deferred_transformation.body_modifier = modifier;
      }
    }
  }

  const colorTg = (bm[color] || {}).transformation_guidance ||
                  (bm[bmColor] || {}).transformation_guidance || {};
  const banner = colorTg.direction_banner;
  const narrationRules = pdr.narration_rules || [];

  // ── Effects-only path (no body change) — return empty, no guidance needed ──
  if (noChange) {
    return '';
  }

  // ── Full transformation path ──
  const lines = [];

  // Direction banner + genital target — tells the model what form the body is moving toward
  if (banner) lines.push('[TX DIRECTION] ' + banner);
  lines.push('[TX TARGET] ' + direction);
  lines.push('');

  // ── Resolve startLabel and body sampling — engine state only, not sent to model ──
  // Use original build keywords (saved when pill first detected) for accurate body path
  const origKeywords = (state || {})._original_build_keywords;
  const startLabel = startingBuild || (origKeywords && origKeywords[0]) || (cardBody.build_keywords && cardBody.build_keywords[0]) || 'unknown';
  const colorEntry = bm[color] || bm[bmColor] || {};

  var sampledModEntry = modifier ? ((colorEntry.modifiers || {})[modifier] || null) : null;
  var sampledHeight = sampledModEntry && sampledModEntry.height ? _sampleHeightRange(sampledModEntry.height) : '';
  var sampledWeight = sampledModEntry && sampledModEntry.weight ? _sampleWeightRange(sampledModEntry.weight) : '';
  var sampledBust = sampledModEntry && sampledModEntry.bust ? _sampleBustRange(sampledModEntry.bust) : '';
  var sampledBuild = modifier || (sampledModEntry && sampledModEntry.build ? sampledModEntry.build.split(',')[0].trim() : '');

  // Commit resolved_body to state — engine uses this directly, model does not echo it back
  if (state && (sampledHeight || sampledBuild)) {
    state.resolved_body = {
      height: sampledHeight,
      weight: sampledWeight,
      bust: sampledBust,
      build: sampledBuild,
      modifier: modifier || '',
    };
    console.log('[XCW] resolved_body pre-set:', JSON.stringify(state.resolved_body));
  }

  // Modifier flavor — overall feel of this body type
  const modFlavorMap = colorEntry.modifier_flavor || (bm[bmColor] || {}).modifier_flavor || {};
  const modFlavor = modifier ? (modFlavorMap[modifier] || '') : '';

  // Outfit slots
  var outfitSlots = (cardBody || {}).outfit_slots || {};
  var outfitText = (cardBody || {}).outfit_text || '';
  var hasOutfit = Object.keys(outfitSlots).length > 0 || !!outfitText;

  // Physical transformation prose path
  var txOrigin = (state || {})._sex_origin || fromSex || 'male';
  var txBodyPath = (startLabel && modifier) ? (startLabel + '_to_' + modifier) : '';
  console.log('[XCW] txBodyPath=' + txBodyPath + ' startLabel=' + startLabel + ' modifier=' + modifier);
  var txPhysical = '';
  if (txBodyPath) {
    txPhysical = (((rs.transformation_physical || {})[color] || {})[txBodyPath]) || '';
    if (!txPhysical) console.log('[XCW] No txPhysical found for path: ' + txBodyPath + ' color: ' + color);
  }

  // ── Set post-transformation awareness counter ──
  if (state) {
    state._post_transform_turns = 3;
    console.log('[XCW] Set _post_transform_turns = 3 for post-transformation awareness');
  }

  // ── Bimbo overlay — override resolved_body bust if bimbo effect is active ──
  const bimboActive = effects.includes('bimbo') || (state && (state.active_effects || []).includes('bimbo'));
  if (bimboActive) {
    const bimboOverlay = (colorEntry.modifiers || {}).bimbo_overlay || {};
    const bimboBustRange = bimboOverlay.bust_override || '';
    const bimboBust = bimboBustRange ? _sampleBustRange(bimboBustRange) : '';
    if (bimboBust && state) {
      state.resolved_body = Object.assign({}, state.resolved_body || {}, { bust: bimboBust });
      // Stash so body scan cannot clobber bust later
      state._bimbo_body_overrides = { bust: bimboBust };
      // Clean up any stale hips/waist prose from prior versions
      if (state.resolved_body.hips) delete state.resolved_body.hips;
      if (state.resolved_body.waist) delete state.resolved_body.waist;
      console.log('[XCW] bimbo_overlay bust override:', bimboBust);
    }
  }

  // ── Physical guide prose — style reference only, no TX labels ──
  if (txPhysical) {
    lines.push('[STYLE REFERENCE]');
    lines.push(txPhysical);
    lines.push('[/STYLE REFERENCE]');
    lines.push('');
  }

  // ── Bimbo overlay flavor — appended after base style reference ──
  if (bimboActive) {
    const bimboOverlay = (colorEntry.modifiers || {}).bimbo_overlay || {};
    const bimboFlavor = bimboOverlay.flavor || '';
    if (bimboFlavor) {
      lines.push('[BIMBO OVERLAY]');
      lines.push(bimboFlavor);
      lines.push('[/BIMBO OVERLAY]');
      lines.push('');
    }
  }

  // ── Genital transformation color — penis size × masculinity ──
  const _penisTier = (cardBody || {}).penis_size || 0;
  const _rawMasc = parseInt((state || {}).masculinity ?? 50, 10);
  if (_penisTier > 0 && genitals.includes('vagina')) {
    const mascGroup = _rawMasc >= 80 ? 'horror' : (_rawMasc >= 41 ? 'conflicted' : (_rawMasc >= 21 ? 'accepting' : 'happy'));
    const phraseKey = _penisTier + '_' + mascGroup;
    const phrases = _GENITAL_TX_PHRASES[phraseKey] || [];
    if (phrases.length) {
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      lines.push('[GENITAL TX] ' + phrase);
      lines.push('');
    }
  }

  // ── Bust size prose — tell the model the final resolved size ──
  const _resolvedBust = (state && state.resolved_body) ? state.resolved_body.bust : '';
  if (_resolvedBust) {
    lines.push('[TX BUST] The transformation settles at ' + _resolvedBust + '. Describe the breasts reaching this specific size — use it as the endpoint, not a suggestion.');
    lines.push('');
  }

  // ── Breast transformation color — cup size × masculinity ──
  if (_resolvedBust) {
    var _bustTierKey = '';
    var bustLower = _resolvedBust.toLowerCase();
    if (/\bf\b|^f |f\s*cup|^g |g\s*cup|^h |h\s*cup/i.test(bustLower)) _bustTierKey = 'F';
    else if (/\bdd\b|dd\s*cup|\be\b|e\s*cup/i.test(bustLower)) _bustTierKey = 'DD';
    else if (/\bd\b|d\s*cup/i.test(bustLower)) _bustTierKey = 'D';
    else if (/\bc\b|c\s*cup/i.test(bustLower)) _bustTierKey = 'C';
    else if (/\bb\b|b\s*cup/i.test(bustLower)) _bustTierKey = 'B';
    else if (/\ba\b|a\s*cup|aa/i.test(bustLower)) _bustTierKey = 'A';
    if (_bustTierKey) {
      var _breastMascGroup = _rawMasc >= 80 ? 'horror' : (_rawMasc >= 41 ? 'conflicted' : (_rawMasc >= 21 ? 'accepting' : 'happy'));
      var _breastPhraseKey = _bustTierKey + '_' + _breastMascGroup;
      var _breastPhrases = _BREAST_TX_PHRASES[_breastPhraseKey] || [];
      if (_breastPhrases.length) {
        var _breastPhrase = _breastPhrases[Math.floor(Math.random() * _breastPhrases.length)];
        lines.push('[BREAST TX] ' + _breastPhrase);
        lines.push('');
      }
    }
  }

  // ── Write instruction — band-keyed psychological register ──
  const _wiBand = _masculinityBand(parseInt((state || {}).masculinity || 50, 10));
  var _wiRegister;
  if (_wiBand >= 9) {
    _wiRegister = 'The character has a deeply masculine identity. Write the transformation as body horror — visceral wrongness, fighting it, denying it is happening, struggling to hold onto a self that is being physically overwritten.';
  } else if (_wiBand >= 7) {
    _wiRegister = 'The character has a firm masculine identity with cracks forming. Write the experience as disorienting and unwanted — real resistance but the body not cooperating, disbelief warring with undeniable sensation, denial that becomes harder to maintain with each change.';
  } else if (_wiBand >= 5) {
    _wiRegister = 'The character is caught between identities. Write the experience as deeply confusing — neither full resistance nor acceptance, the body changing in ways that feel both wrong and strangely familiar, identity fracturing under the physical reality.';
  } else if (_wiBand >= 3) {
    _wiRegister = 'The character\'s masculine resistance is fading. Write the experience with shame and reluctant relief — the changes feel wrong but part of them does not fight it, a softening that is both loss and something else.';
  } else {
    _wiRegister = 'The character has a predominantly feminine identity. Write the transformation as completing something — the body finally matching what was already there, relief alongside the physical intensity.';
  }
  lines.push('Describe the physical changes. Use the style reference above for physical texture and pacing. ' + _wiRegister + ' Each physical change gets its own paragraph. Do not write acceptance, wonder, or excitement unless the identity band above warrants it.');

  return lines.join('\n');
}

function _bodyModText(state, band) {
  const result = {};
  const cardBody = state.card_body;
  if (!cardBody) return result;

  const heightStr = cardBody.height_str || '';
  const bust = cardBody.bust || '';
  const buildKw = cardBody.build_keywords || [];
  const modifier = cardBody.modifier || '';

  // CON: body awareness phrases based on build
  const conParts = [];
  if (heightStr && band <= 7) {
    if (['petite', 'small', 'tiny', 'short'].some(k => buildKw.includes(k)))
      conParts.push(heightStr + ' frame feels smaller');
    else if (['tall', 'large', 'big', 'broad'].some(k => buildKw.includes(k)))
      conParts.push(heightStr + ' frame imposing still');
  }
  if (bust && band <= 6) conParts.push(bust + ' weight on chest noticed');
  if (conParts.length) {
    const text = conParts.join(', ');
    if (text.length <= 47) result.CON = text;
  }

  // CHA: appearance awareness phrases
  const chaParts = [];
  if (modifier && band <= 7) {
    if (band >= 4) chaParts.push(modifier + ' shape settling in');
    else chaParts.push(modifier + ' form fully claimed');
  }
  if (chaParts.length) {
    const text = chaParts.join(', ');
    if (text.length <= 47) result.CHA = text;
  }

  return result;
}

// ──────────────────────────────────────────────────────────────────────────────
// IDENTITY & OUTPUT RENDERING
// ──────────────────────────────────────────────────────────────────────────────

function buildContext(state, events, cardSex, rs) {
  const arousal = parseFloat(state.arousal || 0.0);
  const tier = Math.min(19, Math.floor(arousal / 5));
  const effects = state.active_effects || [];
  const pill = state.active_pill;
  const stages = state.effect_stages || {};
  const flags = state.flags || {};

  const sexBaseline = state._sex_baseline || _resolveSex(cardSex);
  let sex = state._sex || (((rs.pill_rules || {})[pill]?.form_sex) || sexBaseline);

  const anatomy = state._anatomy || (ALL_PILLS.has(pill) ? 'transformed' : 'natural');
  const transforming = pill && ALL_PILLS.has(pill) && anatomy === 'in_progress';
  const breederActive = effects.includes('breeder');
  const breederPath = breederActive ? (sexBaseline === 'female' ? 'born_female' : 'born_male') : 'none';

  const failCount = parseInt(state._arousal_gate_fail_count || 0, 10);
  const gateDc = GATE_DC_BASE + failCount;
  const orgTriggerPct = Math.ceil(arousal / 2) + failCount;

  return {
    arousal: arousal, tier: tier,
    in_org_zone: arousal >= ORG_ZONE, org_trigger_pct: orgTriggerPct,
    sex: sex, sex_baseline: sexBaseline, anatomy: anatomy,
    transforming: transforming, eligible_pills: pillTrack(sexBaseline),
    effects: effects, pill: pill, stages: stages, flags: flags,
    breeder_path: breederPath,
    con_mod: _mod(state, 'CON'), int_mod: _mod(state, 'INT'),
    wis_mod: _mod(state, 'WIS'), cha_mod: _mod(state, 'CHA'),
    dom_mod: _mod(state, 'DOM'), sub_mod: _mod(state, 'SUB'),
    fail_count: failCount, gate_dc: gateDc,
    orgasm_count: parseInt(state._breeder_orgasm_count || state.breeder_orgasm_count || 0, 10),
    addiction_stage: parseInt((stages.breeder || 0), 10),
    turn: parseInt(state.turn || 0, 10),
    bull_stage: parseInt((stages.bull || 0), 10),
    bimbo_stage: parseInt((stages.bimbo || 0), 10),
    psyche_stage: parseInt((stages.psyche || 0), 10),
    submissive_stage: parseInt((stages.submissive || 0), 10),
    compliant_stage: parseInt((stages.compliant || 0), 10),
    denial_frustration: parseInt(state._denial_frustration || state.denial_frustration || 0, 10),
    surrogate_pregnant: !!(state._surrogate_pregnant || state.surrogate_conceived),
    pregnancy_stage: parseInt(state._pregnancy_stage || state.pregnancy_stage || 0, 10),
    compliant_master: state._compliant_master || null,
    masculinity: parseInt(state.masculinity || 50, 10),
    masc_band: _masculinityBand(parseInt(state.masculinity || 50, 10)),
    masc_band_name: _masculinityBandName(parseInt(state.masculinity || 50, 10)),
  };
}

function evaluateFragments(state, events, cardSex, rs) {
  const MAX_FRAGS = 6;

  const origin = state._sex_origin || 'male';
  const pill = state.active_pill;
  const arousal = parseInt(state.arousal || 0, 10);
  const tier = Math.min(19, Math.floor(arousal / 5));
  const tierGroup = _TIER_BAND_GROUP[tier] || 'cold';
  const effects = state.active_effects || [];
  const statsDict = state.stats || {};
  const isPregnant = state.pregnant || false;

  // Gather per-stat candidate fragments
  const candidates = [];
  for (const stat of ['INT', 'WIS', 'CHA', 'CON', 'DOM', 'SUB']) {
    const rawVal = parseInt(statsDict[stat] || 10, 10);
    const val = Math.max(0, Math.min(20, rawVal));

    const portraitPhrase = _pick(
      ((_PORTRAIT_EXPANDED[origin] || {})[stat] || {})[val] || ''
    );
    if (portraitPhrase) candidates.push([stat, 0, portraitPhrase]);

    const genericPhrase = _pick(
      (((_GENERIC_AROUSAL_EXPANDED[origin] || {})[stat] || {})[tier] || {})[val] || ''
    );
    if (genericPhrase) candidates.push([stat, 1, genericPhrase]);

    for (const eff of effects) {
      const minFlavArousal = effectiveMinArousal(((rs.effect_mechanics || {})[eff] || {}).min_flavor_arousal || 0, state);
      if (arousal < minFlavArousal) continue;
      let effPhrase;
      if (eff === 'bimbo' && origin === 'female') {
        // Staged bimbo female: lazy lookup from compact table through stage key
        const bStage = String(Math.max(1, parseInt((state._effect_stages || {}).bimbo || (state.flavor || {}).bimbo && (state.flavor.bimbo.stage) || 1, 10)));
        const vg = _STAT_VAL_GROUP[val] || 'avg';
        effPhrase = _pick(
          ((((((_EFFECT_AROUSAL_COMPACT['bimbo'] || {})['female'] || {})[stat] || {})[bStage] || {})[tierGroup] || {})[vg] || '')
        );
      } else {
        effPhrase = _pick(
          (((((_EFFECT_AROUSAL_EXPANDED[eff] || {})[origin] || {})[stat] || {})[tier] || {})[val] || '')
        );
      }
      if (effPhrase) candidates.push([stat, 2, effPhrase]);
    }

    // confirmed_submissive uses submissive fragment tables without polluting active_effects
    if ((state.active_side_effects || []).includes('confirmed_submissive') && !effects.includes('submissive')) {
      const csPhrase = _pick(
        (((((_EFFECT_AROUSAL_EXPANDED['submissive'] || {})[origin] || {})[stat] || {})[tier] || {})[val] || '')
      );
      if (csPhrase) candidates.push([stat, 2, csPhrase]);
    }

    if (isPregnant) {
      const pregPhrase = _pick(
        ((((_PREGNANCY_AROUSAL_EXPANDED[origin] || {})[stat] || {})[tier] || {})[val] || '')
      );
      if (pregPhrase) candidates.push([stat, 4, pregPhrase]);
    }
  }

  // Gate-fail negative block (priority insert)
  let negBlock = null;
  const gate = state._arousal_gate || {};
  if (gate.result === 'crossed' && gate.neg_block) {
    negBlock = gate.neg_block;
  }

  // Interleaved stat ordering
  const statOrder = ['CON', 'DOM', 'INT', 'SUB', 'CHA', 'WIS'];
  const perStat = {};
  for (const [stat, pri, phrase] of candidates) {
    if (!perStat[stat]) perStat[stat] = [];
    perStat[stat].push([pri, phrase]);
  }
  for (const stat in perStat) {
    perStat[stat].sort((a, b) => a[0] - b[0]);
  }

  const interleaved = [];
  const maxDepth = Math.max(...Object.values(perStat).map(v => v.length), 0);
  for (let depth = 0; depth < maxDepth; depth++) {
    for (const stat of statOrder) {
      const bucket = perStat[stat] || [];
      if (depth < bucket.length) {
        interleaved.push(bucket[depth][1]);
      }
    }
  }

  // Cross-phrase dedup (Jaccard >45% → skip)
  function _words(phrase) {
    return new Set(phrase.toLowerCase().split(/\s+/));
  }

  // Cross-turn recency filter: skip phrases seen in the last 25 turns
  const SEEN_WINDOW = 25;
  state._frag_seen = state._frag_seen || [];
  const seenSet = new Set(state._frag_seen);

  const kept = [];
  if (negBlock) kept.push(negBlock);

  for (const phrase of interleaved) {
    if (kept.length >= MAX_FRAGS) break;
    // Skip if seen recently
    if (seenSet.has(phrase)) continue;
    const pw = _words(phrase);
    let tooSimilar = false;
    for (const k of kept) {
      const kw = _words(k);
      const union = new Set([...pw, ...kw]);
      if (union.size > 0) {
        const intersection = [...pw].filter(w => kw.has(w)).length;
        if (intersection / union.size > 0.45) {
          tooSimilar = true;
          break;
        }
      }
    }
    if (!tooSimilar) kept.push(phrase);
  }

  // Bimbo lucid contrast tag injection (single-turn, then cleared)
  if (state._bimbo_lucid_tag) {
    kept.push(state._bimbo_lucid_tag);
    delete state._bimbo_lucid_tag; // one turn only
  }

  // Compose single paragraph
  if (!kept.length) return [];

  // Update recency window (exclude negBlock — it's situational, not a pool phrase)
  const toRecord = negBlock ? kept.slice(1) : kept;
  state._frag_seen = [...state._frag_seen, ...toRecord].slice(-SEEN_WINDOW);

  return [kept.join(', ')];
}

function getIdentityText(state) {
  // Python ~line 9381-9464: Compose identity text from pill/effect/body layers.
  // Returns single-element array with merged prose, or [] if masculinity didn't shift.
  const MAX_FRAGS = 6;

  if (!state._masc_shifted_this_turn) return [];

  const masc = parseInt(state.masculinity || 50, 10);
  const band = _masculinityBand(masc);
  const pill = state.active_pill;
  const origin = state._sex_origin || 'male';
  const statsDict = state.stats || {};

  // Gather per-stat candidate fragments
  const candidates = [];
  const statOrder = _IDENTITY_STAT_ORDER || ['CON', 'INT', 'WIS', 'CHA', 'DOM', 'SUB'];
  for (const stat of statOrder) {
    const rawVal = parseInt(statsDict[stat] || 10, 10);
    const val = Math.max(0, Math.min(20, rawVal));

    // Layer 1: Pill identity
    const pillPhrase = _pick(
      ((((_PILL_IDENTITY_EXPANDED[pill] || {})[origin] || {})[stat] || {})[band] || {})[val] || ''
    );
    if (pillPhrase) candidates.push([stat, 0, pillPhrase]);

    // Layer 2: Effect identity (per active effect)
    for (const eff of (state.active_effects || [])) {
      let effPhrase;
      if (eff === 'bimbo' && origin === 'female') {
        // Staged bimbo female: lazy lookup from compact table through stage key
        const bStage = String(Math.max(1, parseInt((state._effect_stages || {}).bimbo || (state.flavor || {}).bimbo && (state.flavor.bimbo.stage) || 1, 10)));
        const vg = _STAT_VAL_GROUP[val] || 'avg';
        effPhrase = _pick(
          ((((((_EFFECT_IDENTITY_COMPACT['bimbo'] || {})['female'] || {})[stat] || {})[bStage] || {})[String(band)] || {})[vg] || '')
        );
      } else {
        effPhrase = _pick(
          ((((_EFFECT_IDENTITY_EXPANDED[eff] || {})[origin] || {})[stat] || {})[band] || {})[val] || ''
        );
      }
      if (effPhrase) candidates.push([stat, 1, effPhrase]);
    }

    // Layer 3: Body mod text
    const bodyExtra = _bodyModText(state, band);
    const bodyPhrase = bodyExtra[stat] || '';
    if (bodyPhrase) candidates.push([stat, 2, bodyPhrase]);
  }

  if (!candidates.length) return [];

  // Round-robin stat interleave
  const interleaveOrder = ['CON', 'DOM', 'INT', 'SUB', 'CHA', 'WIS'];
  const perStat = {};
  for (const [stat, pri, phrase] of candidates) {
    if (!perStat[stat]) perStat[stat] = [];
    perStat[stat].push([pri, phrase]);
  }
  for (const stat in perStat) perStat[stat].sort((a, b) => a[0] - b[0]);

  const interleaved = [];
  const maxDepth = Math.max(...Object.values(perStat).map(v => v.length), 0);
  for (let depth = 0; depth < maxDepth; depth++) {
    for (const stat of interleaveOrder) {
      const bucket = perStat[stat] || [];
      if (depth < bucket.length) interleaved.push(bucket[depth][1]);
    }
  }

  // Cross-phrase Jaccard dedup (>45% → skip)
  function _words(phrase) { return new Set(phrase.toLowerCase().split(/\s+/)); }

  const kept = [];
  for (const phrase of interleaved) {
    if (kept.length >= MAX_FRAGS) break;
    const pw = _words(phrase);
    let tooSimilar = false;
    for (const k of kept) {
      const kw = _words(k);
      const union = new Set([...pw, ...kw]);
      if (union.size > 0) {
        const intersection = [...pw].filter(w => kw.has(w)).length;
        if (intersection / union.size > 0.45) { tooSimilar = true; break; }
      }
    }
    if (!tooSimilar) kept.push(phrase);
  }

  return kept.length ? [kept.join(', ')] : [];
}

// ──────────────────────────────────────────────────────────────────────────────
// PERSONA & RELATIONSHIP
// ──────────────────────────────────────────────────────────────────────────────

function updatePersonaRelationship(personaState, charName, events, charState, rs) {
  const schema = (rs || {}).relationship_schema || {};
  const defaultFlds = schema.default_fields || {};
  personaState.relationships = personaState.relationships || {};
  const rels = personaState.relationships;
  if (!rels[charName.toLowerCase()]) rels[charName.toLowerCase()] = Object.assign({}, defaultFlds);
  const rel = rels[charName.toLowerCase()];

  const charEffects = charState.active_effects || [];
  const flags = charState.flags || {};

  // event_increments: { event_key: field_name }
  for (const [eventKey, field] of Object.entries(schema.event_increments || {})) {
    if (events[eventKey]) rel[field] = (rel[field] || 0) + 1;
  }

  // flag_sets: { flag_key: { field, value } }
  for (const [flagKey, setter] of Object.entries(schema.flag_sets || {})) {
    if (flags[flagKey]) rel[setter.field] = setter.value;
  }

  // orgasm tracking
  const orgasmField = schema.orgasm_increment || '';
  const orgasmEvents = schema.orgasm_events || [];
  const orgasmReqs = schema.orgasm_requires_any_effect || {};
  let orgasmFired = false;
  for (const ev of orgasmEvents) {
    if (!events[ev]) continue;
    const req = orgasmReqs[ev];
    if (req && !req.some(e => charEffects.includes(e))) continue;
    orgasmFired = true;
    break;
  }
  if (orgasmFired && orgasmField) {
    rel[orgasmField] = (rel[orgasmField] || 0) + 1;
  }

  // event_sets: { event_key: { field, value?, from_event?, only_if_unset? } }
  for (const [eventKey, setter] of Object.entries(schema.event_sets || {})) {
    if (!events[eventKey]) continue;
    const field = setter.field;
    if (setter.only_if_unset && rel[field]) continue;
    rel[field] = setter.from_event ? events[eventKey] : setter.value;
  }

  // dynamics: { effect_name: dynamic_value }
  const dynamics = schema.dynamics || {};
  for (const [eff, dynamicVal] of Object.entries(dynamics)) {
    if (charEffects.includes(eff)) {
      rel.dynamic = dynamicVal;
      break;
    }
  }

  return personaState;
}

// ──────────────────────────────────────────────────────────────────────────────
// OUTPUT FORMATTING & HEADERS
// ──────────────────────────────────────────────────────────────────────────────

function fmtStats(stats) {
  const order = STAT_ASSEMBLY_ORDER || ['INT', 'WIS', 'CHA', 'CON', 'DOM', 'SUB'];
  const lines = [];
  for (const stat of order) {
    if (stats[stat]) {
      const mod = stats[stat + '_mod'] || 0;
      const sign = mod >= 0 ? '+' : '';
      lines.push(stat + ':' + stats[stat] + ' (' + sign + mod + ')');
    }
  }
  return lines.join(' | ');
}

function fmtEffects(state) {
  const effects = state.active_effects || [];
  const stages = state.effect_stages || {};
  const lines = [];
  for (const eff of effects) {
    const stage = stages[eff] || 0;
    lines.push(eff + ' (stage ' + stage + ')');
  }
  return lines.join(', ') || '(none)';
}

var _lastPersonaBlock = null;  // Set by buildHeader, read by processTurn

function buildHeader(name, cardSex, state, notes, events, rs, persona, personaState) {
  const effSex   = currentSex(state, cardSex, rs);
  const pill     = state.active_pill || '';
  const lines    = [];

  // ── 0. Golden Rule — Character POV only (every turn) ──
  const _charName = name || 'the character';
  lines.push('You are ' + _charName + '. Write ONLY as ' + _charName + '. Never write actions, dialogue, or thoughts for anyone else. Stay in character at all times.');
  lines.push('');

  // ── Transformation turn: minimal header — body + clothing + TX block only ──
  // Swipe recovery: restore deferred from archive if needed
  if (!state._deferred_transformation && state._deferred_tx_archive && !state._pill_descriptor_this_turn) {
    state._deferred_transformation = { ...state._deferred_tx_archive };
    delete state._deferred_transformation._swipe_uses;
    console.log('[XCW] Restored deferred transformation from swipe archive');
  }
  const _isTxTurn = !!(state._pill_descriptor_this_turn || state._deferred_transformation);
  var _txOnlyLines = null;  // Set on TX turns, returned at end instead of full header

  // ── 1. Clothing ───────────────────────────────────────────────────
  // Use outfit_slots if available — avoids comma-within-description ambiguity
  const outfitSlots = (state.card_body || {}).outfit_slots || {};
  const hasSlots = Object.keys(outfitSlots).length > 0;
  if (hasSlots) {
    const slotOrder = ['top', 'bottom', 'underwear', 'footwear'];
    const slotParts = [];
    for (const slot of slotOrder) {
      const val = outfitSlots[slot];
      if (val && val.toLowerCase() !== 'none') slotParts.push(val);
    }
    if (slotParts.length) lines.push('[CLOTHING: ' + slotParts.join(' | ') + ']');
  } else if (state._last_clothing_char) {
    const clothingItems = state._last_clothing_char
      .split(',')
      .map(s => s.trim())
      .filter(s => s && s.toLowerCase() !== 'none');
    if (clothingItems.length) lines.push('[CLOTHING: ' + clothingItems.join(', ') + ']');
  }
  const removedItems = Object.keys(state._clothing_removed_char || {});
  if (removedItems.length > 0 && !state._clothing_naked_char) {
    const humanized = removedItems.map(k => k.replace(/_/g, ' ')).join(', ');
    lines.push('[REMOVED: ' + humanized + ' — do not write these back onto the character]');
  }

  // ── 2. Scene context ──────────────────────────────────────────────
  const prev = state._scene_tracker;
  if (prev && typeof prev === 'object') {
    const sceneParts = [];
    const loc = prev.location || prev.loc;
    if (loc && loc !== 'unknown') sceneParts.push(loc);
    if (prev.pos || prev.positions) sceneParts.push(prev.pos || prev.positions);
    if (prev.atmosphere) sceneParts.push(prev.atmosphere);
    if (sceneParts.length) lines.push('[SCENE: ' + sceneParts.join(' | ') + ']');
    if (prev.time_of_day) lines.push('[TIME: ' + prev.time_of_day + ']');
    if (prev.known_objects && prev.known_objects.length)
      lines.push('[ROOM CONTAINS: ' + prev.known_objects.join(', ') + ']');
    if (prev.known_props && prev.known_props.length)
      lines.push('[PROPS AVAILABLE: ' + prev.known_props.join(', ') + ']');
    if (prev.situation && !prev.pos)
      lines.push('[SITUATION: ' + prev.situation + ']');
  }

  // ── 4. Persona pill (only when active — no pill color name) ──────
  const pState = personaState || {};
  if (pState.active_pill) {
    lines.push('[USER: currently under the effects of an X-Change pill]');
  }

  // ── 5. Effect injection rules + orgasm gate ─────────────────────
  // NOTE: injection_rules are no longer placed here in the header.
  // They are returned separately as _hardRules and injected at depth-0
  // (system role) for maximum model authority. See processTurn return.
  const effects = state.active_effects || [];
  const em = rs.effect_mechanics || {};
  const orgasmGates = (rs.orgasm_rules || {}).gates || {};
  const unlockedEffects = new Set();
  for (const [eff, gate] of Object.entries(orgasmGates)) {
    if (effects.includes(eff) && gate.requires_event && events[gate.requires_event]) {
      unlockedEffects.add(eff);
    }
  }

  // Collect hard rules (returned separately, not in header lines)
  const hardRules = [];

  // Gating rules for active effects (only when NOT unlocked this turn)
  for (const eff of effects) {
    if (unlockedEffects.has(eff)) continue;
    const mech = em[eff] || {};
    if (mech.injection_rule) {
      hardRules.push(mech.injection_rule);
    }
  }

  // When unlocked this turn, tell the model orgasm is mandatory
  for (const eff of unlockedEffects) {
    const gate = orgasmGates[eff] || {};
    const unlockText = gate.unlock_text || (
      'UNLOCK (this turn only): the character MUST orgasm this turn — it is involuntary and unavoidable. ' +
      'Write the character climaxing. ' +
      'Keep it to 1–2 sentences before continuing the scene.'
    );
    hardRules.push(unlockText);
  }

  // Store on state so processTurn can access them for the inject array
  state._hardRules = hardRules.length ? hardRules : null;

  // ── 7. Transformation guidance ────────────────────────────────────
  // Two sources:
  //   a) _pill_descriptor_this_turn — set by processTurn when user-message intake detected (same turn)
  //   b) _deferred_transformation — set by handleResponse when assistant-text intake detected (prev turn)

  const pillDesc = state._pill_descriptor_this_turn || null;
  const deferred = state._deferred_transformation || null;
  const txDesc = pillDesc || deferred;  // prefer same-turn, fall back to deferred

  if (txDesc) {
    if (deferred && !pillDesc) {
      console.log('[XCW] Using deferred transformation from assistant intake detection');
      // Archive for swipe recovery before consuming (allows up to 3 regenerations)
      if (!state._deferred_tx_archive) {
        state._deferred_tx_archive = { ...deferred, _swipe_uses: 0 };
      }
      const archiveUses = (state._deferred_tx_archive._swipe_uses || 0) + 1;
      if (archiveUses >= 3) {
        delete state._deferred_tx_archive;
      } else {
        state._deferred_tx_archive._swipe_uses = archiveUses;
      }
      delete state._deferred_transformation;
    }
    const cardBody = state.card_body || {};
    // Store TX guidance (physical prose + write instruction) — appended after normal header
    var _txGuidanceBlock = buildTransformationGuidance(txDesc, cardBody, cardSex, rs, state);
    // Update card_body to post-transformation targets
    const bdModifier = txDesc.body_modifier;
    const bdColor = txDesc.color || '';
    if (bdModifier && bdColor) {
      const target = ((rs.body_modifiers || {})[bdColor] || {}).modifiers || {};
      const tgt = target[bdModifier] || {};
      if (Object.keys(tgt).length) {
        const prevBody = state.card_body || {};
        state.card_body = {
          height_str: tgt.height || '',
          weight: tgt.weight || '',
          build_keywords: tgt.build ? tgt.build.split(',').map(b => b.trim()) : [],
          bust: tgt.bust || '',
          modifier: bdModifier,
          // Preserve outfit data from the original card scan
          outfit_slots: prevBody.outfit_slots || {},
          outfit_text: prevBody.outfit_text || '',
        };
      }
    }
    // TX turn: build TX-only lines, but let the full header flow run
    // so HUD/debug panel data gets updated. We swap the return at the end.
    _txOnlyLines = [];
    _txOnlyLines.push('You are ' + name + '. Write ONLY as ' + name + '. Never write actions, dialogue, or thoughts for anyone else. Stay in character at all times.');
    _txOnlyLines.push('');
    if (typeof _txGuidanceBlock === 'string' && _txGuidanceBlock) {
      _txOnlyLines.push(_txGuidanceBlock);
    }

    // ── Arousal + identity flavor blocks (same as normal turns) ──────────────
    // These give the model the stat-driven psychological texture tables without
    // us having to summarise them manually — the tables already encode it.
    const _txFlavorBlocks = evaluateFragments(state, events, cardSex, rs);
    const _txMascLines = getIdentityText(state);
    if (_txFlavorBlocks.length || _txMascLines.length) {
      _txOnlyLines.push('');
    }
    if (_txFlavorBlocks.length) {
      _txOnlyLines.push(..._txFlavorBlocks);
    }
    if (_txMascLines.length) {
      _txOnlyLines.push(..._txMascLines);
    }
    // Don't return here — fall through so HUD/debug updates run.
    // _txOnlyLines will be returned at the end of buildHeader instead of lines.
  }

  // ── 7b. Post-transformation body awareness (fading 3-turn note) ──
  var ptTurns = state._post_transform_turns || 0;
  if (ptTurns > 0 && !txDesc) {
    var turnNum = 4 - ptTurns;  // 3→turn_1, 2→turn_2, 1→turn_3
    var awarenessData = ((rs.body_modifiers || {}).post_transformation_awareness) || {};
    var awarenessKey = 'turn_' + turnNum;
    var awarenessNote = awarenessData[awarenessKey] || '';
    if (awarenessNote) {
      lines.push('');
      lines.push(awarenessNote);
    }
    state._post_transform_turns = ptTurns - 1;
    if (state._post_transform_turns <= 0) {
      delete state._post_transform_turns;
    }
  }

  // ── 7c. Persona transformation guidance ──────────────────────────
  const personaPillDesc = (personaState || {})._pill_descriptor_this_turn || null;
  if (personaPillDesc) {
    const pColor = personaPillDesc.color || 'unknown';
    const pRule = (rs.pill_rules || {})[pColor] || {};
    lines.push('');
    lines.push('The USER/PLAYER just took an X-Change pill — THE USER IS TRANSFORMING, not ' + name + '.');
    if (!pRule.no_form_change) {
      const targetSex = pRule.form_sex || 'unknown';
      lines.push('The user\'s body is changing — reshaping toward a ' + targetSex + ' form.');
    }
    lines.push('Write the transformation as happening TO the user/player character in second-person ("you feel...", "your body..."). ' + name + ' observes or reacts to the user\'s transformation.');
  } else if ((personaState || {}).active_pill) {
    const pActive  = personaState.active_pill;
    const pRuleNow = (rs.pill_rules || {})[pActive] || {};
    lines.push('');
    lines.push('The USER/PLAYER is under the effects of an X-Change pill.');
    if (!pRuleNow.no_form_change) {
      const targetSex = pRuleNow.form_sex || 'unknown';
      lines.push('The user has a ' + targetSex + ' form from the transformation.');
    }
    lines.push('Continue writing the user\'s body and experience in second-person. Their transformation is ongoing.');
  }

  // ── 8. Flavor blocks (fragment system) — skip on TX turns ────────
  let flavorBlocks = _isTxTurn ? [] : evaluateFragments(state, events, cardSex, rs);

  // ── 9. Afterglow bridge (one-turn post-orgasm) — skip on TX turns ──
  if (!_isTxTurn) {
    const postOrgasmMap = state._post_orgasm_effects || {};
    delete state._post_orgasm_effects;
    for (const [effName, fired] of Object.entries(postOrgasmMap)) {
      if (!fired || !effects.includes(effName)) continue;
      const gate = orgasmGates[effName] || {};
      const reqEv = gate.requires_event || '';
      if (reqEv && events[reqEv]) continue;  // don't show afterglow if same-turn orgasm

      const afterglow = gate.afterglow_text || (
        'AFTERGLOW: The orgasm was last turn. ' +
        'Character is in the immediate aftermath — calm, warm, slightly dazed. ' +
        'The desperate need is gone. Body is settling. ' +
        'Do not re-narrate the climax. Write the quiet that follows: ' +
        'steadying breath, the weight of the other person, the warmth that has not faded yet. ' +
        'This is the peace before the next cycle begins.'
      );
      const filtered = flavorBlocks.filter(b =>
        !b.includes('ORGASM') && !b.includes('POST-ORGASM')
      );
      flavorBlocks = filtered.length
        ? [filtered[0], afterglow, ...filtered.slice(1)]
        : [afterglow];
    }
  }

  // ── 10. Identity shift text ───────────────────────────────────────
  const mascLines = getIdentityText(state);
  if (mascLines.length && flavorBlocks.length > 3) {
    flavorBlocks = flavorBlocks.slice(0, 3);
  }

  if (flavorBlocks.length) {
    lines.push('');
    lines.push(...flavorBlocks);
  }

  if (mascLines.length) {
    lines.push('');
    lines.push(...mascLines);
  }
  delete state._masc_shifted_this_turn;

  // ── 11. System rules ──────────────────────────────────────────────
  if (!_isTxTurn) {
    for (const rule of (rs.system_rules || [])) {
      lines.push(rule);
    }
  }

  // ── 12. Body line (prepended) — natural description, no label=value format ──
  // resolved_body is set on TX turns (target measurements).
  // Fall back to card_body for untransformed characters or no-change pills.
  const resolved = state.resolved_body;
  const cardBodyFallback = state.card_body || {};
  const bodyParts = [effSex];
  if (resolved) {
    if (resolved.height) bodyParts.push(resolved.height);
    if (resolved.build)  bodyParts.push(resolved.build + ' build');
    if (resolved.bust)   bodyParts.push(resolved.bust);
  } else {
    if (cardBodyFallback.height_str) bodyParts.push(cardBodyFallback.height_str);
    if (cardBodyFallback.weight)     bodyParts.push(cardBodyFallback.weight + 'lbs');
    const bkw = cardBodyFallback.build_keywords || [];
    if (bkw.length)                  bodyParts.push(bkw[0] + ' build');
  }
  lines.unshift('[BODY: ' + bodyParts.join(', ') + ']');

  // ── 13. TX turn: append physical guide + write instruction at end ──
  if (_isTxTurn && typeof _txGuidanceBlock === 'string' && _txGuidanceBlock) {
    lines.push('');
    lines.push(_txGuidanceBlock);
  }

  // TX turn: prepend the body line so the model knows current sex + measurements,
  // then return _txOnlyLines instead of the full header.
  if (_isTxTurn && _txOnlyLines && _txOnlyLines.length > 0) {
    // Explicit override — card description measurements are stale on TX turns.
    // The BODY line is the authoritative current state; ignore any height/weight
    // mentioned in the card description.
    _txOnlyLines.unshift('The character\'s body is now: ' + bodyParts.join(', ') + '. Ignore any measurements in the card description — they are outdated.');
    return _txOnlyLines.join('\n');
  }
  return lines.join('\n');
}

function renderBrief(state, personaState, events, rs) {
  const name = state._card_name || 'the character';
  const cardSex = state._card_sex || 'male';
  const effSex = currentSex(state, cardSex, rs);
  const pill = state.active_pill || '';
  const parts = [];

  // Golden rule in brief
  parts.push('Write ONLY as ' + name + '. Never narrate for or control anyone else.');

  // ── Who: name and current physical form (no pill color, no modifier names)
  let formDesc = name + ' is currently ' + effSex;
  const briefTxDesc = state._pill_descriptor_this_turn || state._deferred_transformation || null;
  if (briefTxDesc) {
    formDesc += ' — body is actively mid-transformation, every nerve alight with change';
  } else if (pill) {
    formDesc += ', under the lingering influence of a recent change';
  }
  formDesc += '.';
  parts.push(formDesc);

  // ── Arousal as a feeling (no labels, no numbers — pure narrative)
  const arousal = getArousal(state);
  const label = arousalLabel(arousal, rs);
  const feelingMap = {
    baseline:    'calm and composed, no particular physical awareness',
    stirring:    'a faint stirring, the first hint of physical awareness',
    body_waking: 'a slow warmth spreading — the body is waking up',
    aware:       'unmistakably aware of every touch, skin prickling',
    pressure:    'a building pressure, hard to ignore, breath coming shorter',
    desperate:   'desperate and aching, thoughts fragmenting around the need',
    peak:        'at peak intensity, barely holding together',
    overwhelmed: 'overwhelmed, drowning in sensation',
    lost:        'completely lost to it, body moving on its own',
    consumed:    'consumed — there is nothing left but the feeling',
    edge:        'teetering on the absolute edge, one touch from breaking',
    orgasm_zone: 'right at the precipice — the body is trying to tip over',
    overload:    'past all limits, overloaded and shaking',
  };
  parts.push(name + ' feels ' + (feelingMap[label] || 'something hard to articulate') + '.');

  // ── Active effects as plain narrative descriptions (no effect key names)
  const effects = state.active_effects || [];
  if (effects.length) {
    const effectDescMap = {
      breeder:      'a deep breeding instinct pulling at every thought',
      denial:       'being held in agonising denial — release is forbidden',
      bimbo:        'thoughts going pink and fuzzy, harder to think clearly',
      heat:         'waves of animal heat, body flushed and needy',
      sensitivity:  'skin hypersensitive — every brush of fabric registers',
      lactation:    'breasts heavy, tingling with the urge to let down',
      submissive:   'a compulsion to obey, to kneel, to please',
      dominant:     'a surge of commanding authority',
      nympho:       'an insatiable craving that never quiets',
      exhibitionist:'a thrill at being seen, an urge to show off',
      bondage:      'a craving to be restrained, held in place',
      bull:         'raw physical power thrumming through an oversized frame',
      breeder_resist: 'a fading resistance — each wave of need erodes willpower a little more',
      breeder_addiction: 'a growing craving that deepens with every encounter, harder to imagine life without this',
      compliant: 'an overwhelming compulsion to comply, resistance dissolving before it forms',
      psyche: 'a subtle shift in self — thoughts and preferences drifting, less certain of who they were',
      surrogate: 'a deep nurturing compulsion, body and mind orienting toward conception',
    };
    const descs = effects
      .filter(function(eff) { return effectDescMap[eff] && (eff !== 'breeder' || arousal >= 21); })
      .map(function(eff) { return effectDescMap[eff]; })
      .filter(Boolean);
    if (descs.length) parts.push(name + ' is experiencing: ' + descs.join('; ') + '.');
  }

  // ── Persona (user) pill state (no pill color names)
  const pActivePill   = (personaState || {}).active_pill || null;
  const pEffects      = (personaState || {}).active_effects || [];
  const pPillDescThis = (personaState || {})._pill_descriptor_this_turn || null;
  if (pPillDescThis) {
    parts.push('The USER just took an X-Change pill — they are transforming right now.');
  } else if (pActivePill) {
    parts.push('The USER is under the influence of an X-Change pill.');
  }

  // ── Key events this turn (no pill colors, no effect key names)
  const eventSentences = [];
  if (events.pill_taken) {
    eventSentences.push(name + ' just swallowed an X-Change pill — the transformation is beginning right now.');
  }
  if (events.orgasm)         eventSentences.push(name + ' just had an orgasm.');
  if (events.pregnancy_beat) eventSentences.push('A pregnancy event just occurred.');
  if (events.clothing_change) eventSentences.push('Clothing just changed this turn.');
  if (events.antidote_taken) eventSentences.push(name + ' just took an antidote — the pill effects are reversing.');
  if (events.persona_pill_taken) {
    eventSentences.push('The USER just took an X-Change pill.');
  }

  const orgasmGates = (rs.orgasm_rules || {}).gates || {};
  for (const eff of effects) {
    const gate = orgasmGates[eff] || {};
    const reqEv = gate.requires_event || '';
    if (reqEv && events[reqEv]) {
      eventSentences.push(name + " must orgasm this turn — it is involuntary and unavoidable.");
    }
  }

  const postOrgasm = state._post_orgasm_effects || {};
  for (const [effName, fired] of Object.entries(postOrgasm)) {
    if (fired && effects.includes(effName)) {
      eventSentences.push(name + ' is in the quiet afterglow following an orgasm last turn — calm, warm, the desperate need gone.');
    }
  }

  if (eventSentences.length) parts.push(...eventSentences);

  // ── Scene context
  const scene = state._scene_tracker;
  if (scene && typeof scene === 'object') {
    const sceneBits = [];
    if (scene.location) sceneBits.push('Location: ' + scene.location);
    if (scene.time || scene.date) {
      const timeStr = ((scene.date || '') + ' ' + (scene.time || '')).trim();
      if (timeStr) sceneBits.push(timeStr);
    }
    if (scene.positions) sceneBits.push('they are ' + scene.positions);
    if (scene.last_action) sceneBits.push('last action: ' + scene.last_action);
    if (sceneBits.length) parts.push('Scene: ' + sceneBits.join('. ') + '.');
  }

  // ── Identity sense (natural language only, no numbers)
  if (state.masculinity != null) {
    const band = _masculinityBandLabel(parseInt(state.masculinity, 10));
    parts.push('Their sense of self feels ' + band.toLowerCase() + '.');
  }

  return parts.join(' ');
}

// ──────────────────────────────────────────────────────────────────────────────
// ASSISTANT TEXT PILL INTAKE SCANNER
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Scan assistant (model) text for pill intake using the tight verb list.
 * Only fires when a pill is pending but not yet active — prevents re-detection.
 * Returns { color, verb } if intake found, null otherwise.
 */
function scanAssistantPillIntake(text, state, rs) {
  // Only scan if there's a pending pill and no active pill yet
  const pendingColor = state._pending_pill || null;
  if (!pendingColor) return null;
  if (state.active_pill) return null;
  // If processTurn already handled intake this turn via user-message path,
  // _pill_descriptor_this_turn is set — do not re-detect in the assistant's
  // transformation narrative (which contains swallow/down/dissolve verbs naturally)
  if (state._pill_descriptor_this_turn) return null;

  const tightRe = rs.intake_verb_tight_re;
  const negationRe = rs.pill_negation_re;
  if (!tightRe) return null;

  // Reset and scan
  tightRe.lastIndex = 0;
  let match;
  while ((match = tightRe.exec(text)) !== null) {
    const verb = match[0];
    const idx = match.index;

    // Check surrounding context for negation (40 chars each side)
    const pre = text.slice(Math.max(0, idx - 40), idx);
    const post = text.slice(idx + verb.length, Math.min(text.length, idx + verb.length + 40));

    if (negationRe && (negationRe.test(pre) || negationRe.test(post))) {
      console.log('[PILL-ASST] Verb "' + verb + '" blocked by negation');
      continue;
    }

    // Proximity check — need pill context in the message to avoid bare false positives.
    // Widen to full message text since pill may have been established several turns ago.
    const hasPillContext = rs.pill_context_re && rs.pill_context_re.test(text);
    const hasPillNoun = rs.pill_noun_re && rs.pill_noun_re.test(text);
    const colorInMsg = new RegExp('\\b' + reEscape(pendingColor) + '\\b', 'i').test(text);

    if (!hasPillContext && !hasPillNoun && !colorInMsg) {
      console.log('[PILL-ASST] Verb "' + verb + '" — no pill context in message, skipping');
      continue;
    }

    // Holder-phrase block: if the pill is described as being in someone's hand/fingers
    // (not yet transferred), a "swallow hard" is a nervous reaction, not ingestion.
    // Scan 120 chars around the nearest pill/color mention for holder phrases.
    const holderRe = /\bin\s+(?:your|his|her|the|my)\s+(?:hand|hands|fingers|palm)\b|held\s+out|holding\s+(?:it|the|a)\b/i;
    const pillMentionRe = rs.pill_noun_re || new RegExp('\\b(?:pill|tablet|capsule)\\b', 'i');
    const firstPillMatch = pillMentionRe.exec(text);
    if (firstPillMatch) {
      const pillCtx = text.slice(Math.max(0, firstPillMatch.index - 20), Math.min(text.length, firstPillMatch.index + 80));
      if (holderRe.test(pillCtx)) {
        console.log('[PILL-ASST] Verb "' + verb + '" blocked — pill described as held/not yet transferred');
        continue;
      }
    }

    // Cum-context exclusion — don't fire pill intake if verb is in sexual cum context
    const cumCtxWindow = text.slice(
      Math.max(0, idx - 60),
      Math.min(text.length, idx + verb.length + 60)
    );
    const hasCumCtx = /(?:cum|load|seed|jizz|spunk|release|semen)/i.test(cumCtxWindow);
    const hasPillNounNearby = rs.pill_noun_re && rs.pill_noun_re.test(cumCtxWindow);
    if (hasCumCtx && !hasPillNounNearby) {
      console.log('[PILL-ASST] Verb "' + verb + '" blocked — cum context without pill noun');
      continue;
    }

    console.log('[PILL-ASST] INTAKE DETECTED in assistant text: verb="' + verb + '" color=' + pendingColor);
    tightRe.lastIndex = 0;  // clean up
    return { color: pendingColor, verb: verb };
  }

  tightRe.lastIndex = 0;  // clean up
  return null;
}

// ──────────────────────────────────────────────────────────────────────────────
// MAIN ENTRY POINTS
// ──────────────────────────────────────────────────────────────────────────────

function handleResponse({assistantText, state, events, config}) {
  // Python lines 15454-15496: Parse scene tracker, apply clothing arousal, body scan
  console.log('[XCW] handleResponse called, text length:', (assistantText || '').length);
  const rs = config;

  // Parse scene tracker
  const sceneData = parseSceneTracker(assistantText || '', rs);
  if (sceneData) {
    state._scene_tracker = sceneData;
    if (sceneData.clothing_char) state._last_clothing_char = sceneData.clothing_char;
    if (sceneData.clothing_user) state._last_clothing_user = sceneData.clothing_user;
    console.log('[XCW] Scene parsed:', Object.entries(sceneData).map(([k,v]) => k + '=' + v).join(' | '));
  }

  // Clothing arousal (requires scene tracker data)
  if (sceneData) {
    applyClothingArousal(state, rs);
  }

  // NOTE: Assistant pill intake scan removed — intake detection runs on user turns only.
  // This eliminates false positives from character nervous-swallow descriptions etc.

  // Body scan — runs on pill_taken events OR whenever model outputs a [BODY_RESULT] tag
  const hasPillEvent = events && events.pill_taken;
  const hasBodyTag = (assistantText || '').includes('BODY_RESULT');
  if (hasPillEvent || hasBodyTag) {
    if (!hasPillEvent && hasBodyTag) {
      console.log('[BODY] No pill_taken event but BODY_RESULT tag found — parsing anyway');
    }
    // Try structured [BODY_RESULT: ...] tag first
    let bodyResult = parseBodyResultTag(assistantText || '', rs);
    if (bodyResult) {
      console.log('[BODY] parsed from tag:', JSON.stringify(bodyResult));
    } else {
      // If resolved_body was pre-set by buildTransformationGuidance, skip prose scan —
      // prose scan would overwrite authoritative pre-set values with whatever the model
      // happened to write in narrative (e.g. "A-cup" overwriting pre-set "B cup").
      const hasPreset = state && state.resolved_body &&
        (state.resolved_body.height || state.resolved_body.bust || state.resolved_body.build);
      if (hasPreset) {
        console.log('[BODY] resolved_body pre-set — skipping prose scan, using preset values');
        bodyResult = Object.assign({}, state.resolved_body);
      } else {
        // Fallback: scan prose for measurements
        bodyResult = scanTransformationProse(assistantText || '', rs);
        if (bodyResult && Object.keys(bodyResult).length > 0) {
          console.log('[BODY] scanned from prose:', JSON.stringify(bodyResult));
        } else {
          bodyResult = null;
          console.log('[BODY] no body data found in response');
        }
      }
    }

    // Pill descriptor fallback: if model didn't state key measurements, pull from
    // pill descriptor target body config (rs.body_modifiers[color].modifiers[modifier])
    const hasKeyFields = bodyResult && (bodyResult.height || bodyResult.weight || bodyResult.bust);
    if (!hasKeyFields) {
      // Try events first, then fall back to state for the pill info
      const desc = (events && events.pill_descriptor) || {};
      const color = desc.color || (state && state.active_pill) || '';
      const modifier = desc.body_modifier || (state && state.card_body && state.card_body.modifier) || '';
      if (modifier && color) {
        const targets = ((rs.body_modifiers || {})[color] || {}).modifiers;
        const modData = (targets || {})[modifier] || {};
        if (Object.keys(modData).length > 0) {
          const fallback = {};
          if (modData.height) fallback.height = modData.height.split('-')[0].trim();
          if (modData.weight) fallback.weight = modData.weight.split('-')[0].trim();
          if (modData.bust)   fallback.bust   = modData.bust.split(',')[0].trim();
          if (modData.build)  fallback.build  = modData.build.split(',')[0].trim();
          if (Object.keys(fallback).length > 0) {
            bodyResult = Object.assign(fallback, bodyResult || {});
            console.log('[BODY] fallback to target body:', JSON.stringify(bodyResult));
          }
        }
      }
    }

    // Apply resolved body to state
    if (bodyResult && Object.keys(bodyResult).length > 0) {
      state.card_body = state.card_body || {};
      state.resolved_body = state.resolved_body || {};
      if (bodyResult.height) {
        state.card_body.height_str = bodyResult.height;
        state.resolved_body.height = bodyResult.height;
      }
      if (bodyResult.weight) {
        state.card_body.weight = bodyResult.weight;
        state.resolved_body.weight = bodyResult.weight;
      }
      if (bodyResult.bust) {
        state.card_body.bust = bodyResult.bust;
        state.resolved_body.bust = bodyResult.bust;
      }
      if (bodyResult.build) {
        state.card_body.build = bodyResult.build;
        state.resolved_body.build = bodyResult.build;
      }
      console.log('[BODY] Applied to state:', JSON.stringify(state.resolved_body));

      // Re-apply bimbo body overrides — model/tag output must not clobber engine-set values
      if (state._bimbo_body_overrides) {
        state.resolved_body = Object.assign(state.resolved_body, state._bimbo_body_overrides);
        console.log('[BODY] Re-applied bimbo overrides:', JSON.stringify(state._bimbo_body_overrides));
      }
    }
  }

  // Phase 1: Extract beats from assistant response
  // handleResponse runs after the model responds, so we can detect beats
  // from the assistant's text against current state.
  if (state.storyBeats !== undefined) {
    var _hrPrevState = _beatSnapshotState(state);
    var _hrBeats = _beatExtractBeats('', assistantText || '', _hrPrevState, state);
    if (_hrBeats.length > 0) {
      _beatAddBeats(_hrBeats, state);
      console.log('[BEATS] handleResponse extracted ' + _hrBeats.length + ' beat(s) from assistant text');
    }
  }

  // Strip tags from visible text (both scene tracker and body result)
  let cleaned = stripSceneTracker(assistantText || '', rs);
  cleaned = stripBodyResultTag(cleaned, rs);

  return {
    ok: true,
    state: state,
    cleanedText: cleaned !== assistantText ? cleaned : undefined,
  };
}

// ──────────────────────────────────────────────────────────────────────────────
// PILL-CONTEXT SCRUBBING
// Matches: color [body_mod] effect x-change pill
// Replaces the whole phrase with just "x-change pill"
// e.g. "pink petite breeder x-change pill" → "x-change pill"
// ──────────────────────────────────────────────────────────────────────────────

function _buildScrubWords(rs) {
  var effectNames = Object.keys(rs.effect_mechanics || {}).filter(function(k) {
    return k !== 'trigger_behavior' && k !== 'on_birth' && k !== 'dc_source';
  });
  var modifierNames = [];
  var bm = rs.body_modifiers || {};
  var nonModKeys = new Set(['fallback_modifier_color','transformation_guidance','modifier_flavor','post_transformation_awareness']);
  for (var color in bm) {
    var modifiers = (bm[color] || {}).modifiers || {};
    for (var mod in modifiers) {
      if (!nonModKeys.has(mod) && modifierNames.indexOf(mod) === -1) {
        modifierNames.push(mod);
      }
    }
  }
  return { effects: effectNames, modifiers: modifierNames };
}

function _scrubText(text, scrubWords) {
  if (!text || !scrubWords) return text;
  var colors   = 'pink|blue|green|purple|red';
  var mods     = scrubWords.modifiers.length ? '(?:(?:' + scrubWords.modifiers.map(function(m) { return m.replace(/[-\/\^$*+?.()|[\]{}]/g, '\\$&'); }).join('|') + ')\\s+)?' : '';
  var effects  = scrubWords.effects.length  ? '(?:' + scrubWords.effects.map(function(e) { return e.replace(/[-\/\^$*+?.()|[\]{}]/g, '\\$&'); }).join('|') + ')\\s+' : '';
  var pillNoun = 'x[-\\s]?change\\s+(?:pill|capsule|tablet|dose)|(?:pill|capsule|tablet|dose)';
  var re = new RegExp('\\b(?:' + colors + ')\\s+' + mods + effects + '(' + pillNoun + ')\\b', 'gi');
  return text.replace(re, 'x-change pill');
}

function _scrubPillEffectNames(messages, scrubWords) {
  if (!scrubWords || !messages || messages.length === 0) {
    return { messages: messages, didScrub: false };
  }
  var didScrub = false;
  var out = [];
  for (var i = 0; i < messages.length; i++) {
    var msg = messages[i];
    if (msg && msg.content && typeof msg.content === 'string' && msg.role !== 'system') {
      var cleaned = _scrubText(msg.content, scrubWords);
      if (cleaned !== msg.content) {
        var copy = {};
        for (var k in msg) { if (msg.hasOwnProperty(k)) copy[k] = msg[k]; }
        copy.content = cleaned;
        out.push(copy);
        didScrub = true;
        continue;
      }
    }
    out.push(msg);
  }
  return { messages: out, didScrub: didScrub };
}


// ──────────────────────────────────────────────────────────────────────────────
// PHASE 1: STORY BEAT TRACKER
// Detects and records narrative beats from each turn for scene page summaries.
// ──────────────────────────────────────────────────────────────────────────────

function _beatSnapshotState(state) {
  // Creates a shallow copy of key state fields for diffing before/after a turn.
  return {
    arousal: state.arousal || 0,
    masculinity: state.masculinity || 0,
    clothing_char: state._last_clothing_char || '',
    clothing_user: state._last_clothing_user || '',
    active_effects: (state.active_effects || []).slice(),
    currentLocation: (state._scene_tracker && state._scene_tracker.location) || '',
    active_pill: state.active_pill || null,
    resolved_body: state.resolved_body ? JSON.parse(JSON.stringify(state.resolved_body)) : null,
    turn: state.turn || 0,
  };
}

function _beatExtractBeats(userText, assistantText, prevState, currentState) {
  // Scans text and state diffs to detect narrative beats.
  // Returns array of beat objects: { type, text, importance }
  // Conservative: better to miss beats than generate false ones.
  var beats = [];
  var combined = ((userText || '') + ' ' + (assistantText || '')).toLowerCase();

  // ── Physical changes ──

  // Arousal shift > 15
  var arousalDelta = (currentState.arousal || 0) - (prevState.arousal || 0);
  if (Math.abs(arousalDelta) > 15) {
    var direction = arousalDelta > 0 ? 'escalated' : 'decreased';
    beats.push({
      type: 'physical',
      text: 'Arousal ' + direction + ' significantly (by ' + Math.abs(Math.round(arousalDelta)) + ').',
      importance: 2
    });
  }

  // Pill activation (critical beat)
  if (currentState._pill_descriptor_this_turn) {
    var pillDesc = currentState._pill_descriptor_this_turn;
    var pillColor = (pillDesc && pillDesc.color) || currentState.active_pill || 'unknown';
    beats.push({
      type: 'physical',
      text: (currentState._card_name || 'Character') + ' took a ' + pillColor + ' X-Change pill.',
      importance: 3
    });
  }

  // Clothing changes
  if (currentState._last_clothing_char !== prevState.clothing_char && prevState.clothing_char) {
    beats.push({
      type: 'physical',
      text: 'Clothing changed during the exchange.',
      importance: 1
    });
  }

  // Transformation progress (masculinity shift > 10)
  var mascDelta = (currentState.masculinity || 0) - (prevState.masculinity || 0);
  if (Math.abs(mascDelta) > 10) {
    var mascDir = mascDelta < 0 ? 'more feminine' : 'more masculine';
    beats.push({
      type: 'physical',
      text: 'Transformation progressed — body shifted ' + mascDir + '.',
      importance: 2
    });
  }

  // New active effects
  var prevEffects = prevState.active_effects || [];
  var currEffects = currentState.active_effects || [];
  var newEffects = currEffects.filter(function(e) { return prevEffects.indexOf(e) === -1; });
  if (newEffects.length > 0) {
    beats.push({
      type: 'physical',
      text: 'New effect' + (newEffects.length > 1 ? 's' : '') + ' activated: ' + newEffects.join(', ') + '.',
      importance: 2
    });
  }

  // ── Location changes ──
  var locationPatterns = [
    /(?:walked|went|moved|headed|drove|arrived|entered|stepped)\s+(?:to|into|toward|inside)\s+(?:the\s+)?([a-z][\w\s]{2,25})/i,
    /(?:back\s+(?:to|at)|returned\s+to)\s+(?:the\s+)?([a-z][\w\s]{2,25})/i
  ];
  var currentLoc = (currentState._scene_tracker && currentState._scene_tracker.location) || '';
  var prevLoc = prevState.currentLocation || '';
  if (currentLoc && prevLoc && currentLoc !== prevLoc) {
    beats.push({
      type: 'location',
      text: 'Moved from ' + prevLoc + ' to ' + currentLoc + '.',
      importance: 2
    });
  } else if (!prevLoc || !currentLoc) {
    // Try keyword scan on text
    for (var lp = 0; lp < locationPatterns.length; lp++) {
      var locMatch = locationPatterns[lp].exec(combined);
      if (locMatch) {
        var locName = locMatch[1].trim().replace(/\s+/g, ' ');
        // Only record if it looks like a real location (not too generic)
        if (locName.length > 3 && !/^(the|this|that|here|there)$/i.test(locName)) {
          beats.push({
            type: 'location',
            text: 'Scene moved to ' + locName + '.',
            importance: 1
          });
          break;
        }
      }
    }
  }

  // ── Relationship shifts ──
  var relationshipMarkers = [
    { pattern: /first\s+(?:time|kiss|touch|date)/i, importance: 3, label: 'A first-time intimate moment occurred.' },
    { pattern: /(?:I|you)\s+(?:love|hate)\s+(?:you|me|him|her)/i, importance: 3, label: 'An emotional declaration was made.' },
    { pattern: /(?:trust|believe\s+in)\s+(?:you|me|him|her)/i, importance: 2, label: 'Trust was expressed between characters.' },
    { pattern: /(?:pushed?\s+away|pulled?\s+back|rejected|slapped|shoved)/i, importance: 2, label: 'A conflict or rejection occurred.' },
    { pattern: /(?:forgave|forgive|apologized|sorry\s+for)/i, importance: 2, label: 'Forgiveness or apology occurred.' },
    { pattern: /(?:kissed|held\s+hands?|embraced|hugged)\s+(?:for\s+the\s+first|gently|tenderly)/i, importance: 2, label: 'An intimate gesture deepened the connection.' },
  ];
  for (var rm = 0; rm < relationshipMarkers.length; rm++) {
    var marker = relationshipMarkers[rm];
    if (marker.pattern.test(combined)) {
      beats.push({
        type: 'relationship',
        text: marker.label,
        importance: marker.importance
      });
      break;  // Only one relationship beat per turn to avoid spam
    }
  }

  // ── Plot developments ──
  // New character introduction — look for dialogue attribution to new names
  var nameIntroPattern = /(?:said|asked|replied|whispered|shouted|called)\s+([A-Z][a-z]{2,15})/g;
  var nameMatch;
  var knownNames = [currentState._card_name || '', 'Character', 'Persona', 'User'].map(function(n) { return n.toLowerCase(); });
  var foundNewName = false;
  while ((nameMatch = nameIntroPattern.exec(assistantText || '')) !== null) {
    var foundName = nameMatch[1];
    if (knownNames.indexOf(foundName.toLowerCase()) === -1 && !foundNewName) {
      beats.push({
        type: 'plot',
        text: 'New character introduced: ' + foundName + '.',
        importance: 2
      });
      foundNewName = true;
    }
  }

  // Discovery/secret patterns
  var discoveryPatterns = [
    { pattern: /(?:discovered|found\s+out|realized|revealed|uncovered)\s+(?:that|the)/i, label: 'A discovery or revelation occurred.' },
    { pattern: /(?:secret|hidden|concealed)\s+(?:was|is|has\s+been)\s+(?:revealed|exposed|discovered)/i, label: 'A secret was revealed.' },
  ];
  for (var dp = 0; dp < discoveryPatterns.length; dp++) {
    if (discoveryPatterns[dp].pattern.test(combined)) {
      beats.push({
        type: 'plot',
        text: discoveryPatterns[dp].label,
        importance: 2
      });
      break;
    }
  }

  // ── Decisions ──
  var decisionPatterns = [
    /I\s+(?:decided|chose|agreed|refused|promised|committed)\s+to/i,
    /(?:made|reached)\s+(?:a\s+)?(?:decision|choice|deal|agreement)/i,
    /(?:swore|vowed|pledged)\s+(?:to|that)/i,
  ];
  for (var dcp = 0; dcp < decisionPatterns.length; dcp++) {
    if (decisionPatterns[dcp].test(userText || '')) {
      var decisionMatch = decisionPatterns[dcp].exec(userText || '');
      beats.push({
        type: 'decision',
        text: 'A significant decision was made.',
        importance: 2
      });
      break;
    }
  }

  return beats;
}

function _beatSummarizeBeats(beats) {
  // Combines beat texts into a single narrative sentence.
  var texts = [];
  for (var i = 0; i < beats.length; i++) {
    texts.push(beats[i].text);
  }
  if (texts.length <= 3) return texts.join(' ');
  // For many beats, keep first and last, summarize middle
  return texts[0] + ' [...] ' + texts[texts.length - 1];
}

function _beatMergeBeats(beats) {
  // Groups beats by type, keeps critical ones, merges low-importance.
  var groups = {};
  for (var i = 0; i < beats.length; i++) {
    var b = beats[i];
    if (!groups[b.type]) groups[b.type] = [];
    groups[b.type].push(b);
  }

  var merged = [];
  var types = Object.keys(groups);
  for (var t = 0; t < types.length; t++) {
    var type = types[t];
    var group = groups[type];
    if (group.length === 1) {
      merged.push(group[0]);
    } else {
      // Keep highest importance beats, merge low-importance ones
      var critical = [];
      var others = [];
      for (var g = 0; g < group.length; g++) {
        if (group[g].importance >= 3) {
          critical.push(group[g]);
        } else {
          others.push(group[g]);
        }
      }
      for (var c = 0; c < critical.length; c++) {
        merged.push(critical[c]);
      }
      if (others.length > 0) {
        merged.push({
          type: type,
          text: _beatSummarizeBeats(others),
          importance: 1,
          turn: others[others.length - 1].turn,
          timestamp: Date.now()
        });
      }
    }
  }
  return merged;
}

function _beatAddBeats(newBeats, state) {
  // Manages rolling window of max 20 beats, merges old ones when exceeding 25.
  var MAX_BEATS = 20;
  var MERGE_THRESHOLD = 25;

  var turnNum = state.turn || 0;
  for (var i = 0; i < newBeats.length; i++) {
    newBeats[i].turn = turnNum;
    newBeats[i].timestamp = Date.now();
  }

  if (!state.storyBeats) state.storyBeats = [];
  for (var j = 0; j < newBeats.length; j++) {
    state.storyBeats.push(newBeats[j]);
  }

  // If over threshold, merge oldest beats
  if (state.storyBeats.length > MERGE_THRESHOLD) {
    var keepCount = MAX_BEATS;
    var toMerge = state.storyBeats.slice(0, state.storyBeats.length - keepCount);
    var kept = state.storyBeats.slice(state.storyBeats.length - keepCount);

    var merged = _beatMergeBeats(toMerge);
    state.storyBeats = merged.concat(kept);
  }

  console.log('[BEATS] Total beats: ' + state.storyBeats.length + ' (added ' + newBeats.length + ' this turn)');
}

function buildStorySummary(state) {
  // Assembles all beats into a [STORY SO FAR] block, capped at ~400 tokens.
  if (!state.storyBeats || state.storyBeats.length === 0) {
    return '';  // New chat, no summary needed
  }

  var beats = state.storyBeats;

  // Sort by turn, then importance (descending)
  var sorted = beats.slice().sort(function(a, b) {
    if (a.turn !== b.turn) return a.turn - b.turn;
    return b.importance - a.importance;
  });

  // Build narrative paragraph
  var lines = [];
  for (var i = 0; i < sorted.length; i++) {
    lines.push(sorted[i].text);
  }
  var summary = lines.join(' ');

  // Token budget: aim for ~200-400 tokens max
  // Rough estimate: 1 token ~ 4 chars
  var MAX_CHARS = 1600;  // ~400 tokens
  if (summary.length > MAX_CHARS) {
    // Prioritize high-importance and recent beats
    var prioritized = sorted.slice().sort(function(a, b) {
      return (b.importance * 10 + b.turn) - (a.importance * 10 + a.turn);
    }).slice(0, 15);
    // Re-sort chronologically for narrative flow
    prioritized.sort(function(a, b) { return a.turn - b.turn; });
    var pLines = [];
    for (var p = 0; p < prioritized.length; p++) {
      pLines.push(prioritized[p].text);
    }
    return '[STORY SO FAR]\n' + pLines.join(' ') + '\n[/STORY SO FAR]';
  }

  return '[STORY SO FAR]\n' + summary + '\n[/STORY SO FAR]';
}


function processTurn({systemText, messages, state, personaState, config, charNameHint, personaName}) {
  // THE MAIN FUNCTION — Port of Python lines 15499-15707 exactly
  personaState = personaState || {};  // guard against undefined
  console.log('[XCW] processTurn called, systemText length:', (systemText || '').length,
    'messages:', (messages || []).length, 'charNameHint:', charNameHint,
    'state keys:', Object.keys(state || {}));

  const rs = config; // ruleset is passed as config from init()

  if (!rs || typeof rs !== 'object') {
    console.error('[XCW] No ruleset/config! init() may have failed.');
    return { ok: false, error: 'no_ruleset' };
  }

  let name = extractCardName(systemText, rs);
  let sex = extractCardSex(systemText, rs);

  console.log('[XCW] Card extraction — name:', name, 'sex:', sex);

  // Fallback: try to get name from first line or character greeting
  if (!name) {
    // Use ST context hint first (most reliable in Text Completion mode)
    if (charNameHint) {
      name = charNameHint;
      console.log('[XCW] Name from ST context hint:', name);
    } else {
      // Try common card patterns
      const namePatterns = [
        /^(?:Character|Char):\s*(.+?)$/mi,
        /^#\s*(.+?)$/m,                          // markdown heading
        /\{\{char\}\}\s*(?:is|=)\s*(.+?)[\.\n]/i, // {{char}} is Name
      ];
      for (const pat of namePatterns) {
        const m = pat.exec(systemText || '');
        if (m) { name = m[1].trim(); break; }
      }
    }
    // Last resort: check if state remembers
    if (!name && state._card_name) name = state._card_name;
    // Very last resort: use "Character"
    if (!name) name = 'Character';
    console.log('[XCW] Name resolved:', name);
  }

  if (!sex) {
    // Try common patterns
    const sexPatterns = [
      /\b(?:sex|gender)\s*[:=]\s*(male|female|trans[_ ]?(?:male|female)|intersex|nonbinary)\b/i,
      /\b(she|her|herself)\b/i,   // weak feminine signal
      /\b(he|him|himself)\b/i,    // weak masculine signal
    ];
    for (const pat of sexPatterns) {
      const m = pat.exec(systemText || '');
      if (m) {
        const raw = m[1].toLowerCase();
        if (['she','her','herself'].includes(raw)) sex = 'female';
        else if (['he','him','himself'].includes(raw)) sex = 'male';
        else sex = raw.replace(/\s+/g, '_');
        break;
      }
    }
    if (!sex && state._card_sex) sex = state._card_sex;
    if (!sex) sex = 'male';  // X-Change default: start male
    console.log('[XCW] Sex fallback used:', sex);
  }

  // Initialize state if needed
  if (!state.stats) {
    state = Object.assign(defaultState(rs), state || {});
  }

  // Ensure storyBeats array exists (Phase 1: Story Beat Tracker)
  if (!state.storyBeats) {
    state.storyBeats = [];
    state.storyBeatsVersion = 1;
  }

  // Turn increment & regen detection (browser-safe hash)
  const lastUserMsg = (messages || []).slice().reverse()
    .find(m => m.role === 'user')?.content || '';

  const lastHash = simpleHash(lastUserMsg.slice(0, 500));
  const isRegen = (state._last_user_hash != null && lastHash === state._last_user_hash);

  console.log('[XCW] Regen check: lastHash=' + lastHash + ' stored=' + state._last_user_hash + ' isRegen=' + isRegen);

  if (!isRegen) {
    state.turn = parseInt(state.turn || 0, 10) + 1;
    state._last_user_hash = lastHash;
  }

  // Stat generation (first turn only)
  const flags = (state.flags = state.flags || {});
  const statgenFlag = rs.engine_config?.statgen_flag || 'statgen_done';

  if (!flags[statgenFlag]) {
    // ── User persona base stats (persisted in personaState, keyed by ST persona name) ──
    const userPersonaStats = personaName && rs.personas?.[personaName];
    if (userPersonaStats && !personaState.base_stats) {
      personaState.base_stats = JSON.parse(JSON.stringify(userPersonaStats));
      personaState.base_stats_persona = personaName;
      console.log('[STATGEN] User persona base stats stored for: ' + personaName);
    }

    // ── Character card stats (legacy: named character cards in lore) ──
    const charLoreStats = rs.personas?.[name];
    if (charLoreStats && !userPersonaStats) {
      // Only use character-named lore stats if there are no user persona stats
      state.stats = JSON.parse(JSON.stringify(charLoreStats));
      state.card_body = scanCardBody(systemText, rs);
      console.log('[STATGEN] Character lore stats used for ' + name);
    } else {
      const cardText = _cardSection(systemText);
      const statsLine = extractCardStats(cardText, rs);
      const parsed = statsLine ? parseCardStats(statsLine, rs) : null;
      if (parsed && Object.keys(parsed).length > 0) {
        state.stats = parsed;
        console.log('[STATGEN] Card stats used for ' + name + ': ' + statsLine);
      } else {
        state.stats = runStatgen(cardText, rs);
        console.log('[STATGEN] Keyword fallback for ' + name);
      }
      state.card_body = scanCardBody(systemText, rs);
    }

    // ── Seed last known clothing from card scan ──
    if (!state._last_clothing_char) {
      const cb = state.card_body || {};
      const slots = cb.outfit_slots || {};
      if (Object.keys(slots).length > 0) {
        const parts = [];
        if (slots.top) parts.push(slots.top);
        if (slots.bottom) parts.push(slots.bottom);
        if (slots.underwear) parts.push(slots.underwear);
        if (slots.footwear) parts.push(slots.footwear);
        state._last_clothing_char = parts.filter(Boolean).join(', ') || cb.outfit_text || '';
      } else if (cb.outfit_text) {
        state._last_clothing_char = cb.outfit_text;
      }
    }

    // ── Seed initial scene context from card ──
    if (!state._scene_tracker) {
      const firstCharMsg = (messages || []).find(m => m.role !== 'user')?.content || '';
      state._scene_tracker = parseCardSceneContext(systemText, firstCharMsg);
      const sc = state._scene_tracker;
      console.log('[SCENE] Initial scene seeded: location=' + sc.location +
        (sc.known_objects ? ' objects=[' + sc.known_objects.join(',') + ']' : '') +
        (sc.known_props   ? ' props=['   + sc.known_props.join(',')   + ']' : '') +
        (sc.atmosphere    ? ' atmosphere=' + sc.atmosphere              : ''));
    }

    // ── Store persona base stats separately; leave state.stats as the character card stats ──
    if (personaState.base_stats) {
      state.persona_stats = Object.assign({}, personaState.base_stats);
      console.log('[STATGEN] Persona stats stored: ' + (personaState.base_stats_persona || personaName));
    }

    flags[statgenFlag] = true;
    _buildD12FaceMap(state);

    if (!state.masculinity) {
      const cardTextForMasc = _cardSection(systemText);
      const birthSex = _resolveSex(sex);
      state.masculinity = _generateInitialMasculinity(cardTextForMasc, birthSex, state.stats);
      state._masculinity_delta_this_session = 0;
      state._sex_origin = birthSex;
    }

    if (!state._masc_resist_mod) {
      _snapshotMasculinityResist(state);
    }

    state._masc_gate_dc = 5;

    if (state.card_body) {
      console.log('[BODY]', state.card_body);
    }
  }

  // Regen shortcut
  if (isRegen) {
    state._card_name = name;
    state._card_sex = sex;
    const _regenIsTx = !!(state._pill_descriptor_this_turn || state._deferred_transformation);
    const regenHeader = buildHeader(name, sex, state, [], {}, rs, 'Persona', personaState || {});
    return {
      ok: true,
      name: name,
      sex: sex,
      state: state,
      persona_state: personaState,
      events: {},
      header: regenHeader,
      brief: renderBrief(state, personaState, {}, rs),
      systemPrompt: null,
      inject: _buildInjectArray(regenHeader, state),
      priorityInjection: _regenIsTx,
      recentMessageCount: _regenIsTx ? 1 : 3,
    };
  }

  // Phase 1: Snapshot state before processing for beat extraction
  var _beatPrevState = _beatSnapshotState(state);

  // Clear per-turn state (must happen before event detection)
  delete state._arousal_gate_done;
  delete state._arousal_gate_crossed_to;
  delete state._arousal_gate_held_at;
  delete state._arousal_gate;
  delete state._orgasm_dc_reset_done;
  delete state._pill_descriptor_this_turn;  // prevents transformation guidance re-firing every turn
  if (personaState) delete personaState._pill_descriptor_this_turn;
  // Clear swipe recovery archive when transformation is confirmed via user-path
  if (state._pill_descriptor_this_turn === undefined && state._deferred_tx_archive && state.active_pill) {
    delete state._deferred_tx_archive;
  }
  // Snapshot roll_log length so HUD can show "this turn" rolls
  state._roll_log_turn_start = (state.roll_log || []).length;

  state._card_sex = sex;
  state._card_name = name;

  // Extract age from card (only on first turn or if not already set)
  if (!state._card_age) {
    var cardAge = extractCardAge(systemText, rs);
    if (cardAge) state._card_age = cardAge.trim();
  }

  // Session boundary reset — fires the turn AFTER male orgasm was detected
  if (state._session_end_pending) {
    state.sessions_completed = (state.sessions_completed || 0) + 1;
    state.session_orgasm_count = 0;
    state.session_fail_count = 0;
    // Clear session-duration side effects
    state.active_side_effects = [];
    delete state._hair_trigger_active;
    delete state._two_in_chamber_active;
    delete state._two_in_chamber_chain;
    delete state._confirmed_submissive_active;
    delete state._side_fx_arousal_floor_bonus;
    delete state._excitable_ovaries_bonus;
    delete state._session_end_pending;
    console.log('[SESSION] Session counters + side effects reset (male orgasm previous turn)');
  }

  // Arousal scan (last 2 messages)
  const recent = (messages || []).slice(-12).filter(m => m && m.role && m.role !== 'system');
  const personaMarkers = rs.card_format?.strip_markers || [];
  const chatOnly = recent.filter(m =>
    (m.role === 'user' || m.role === 'assistant') &&
    !personaMarkers.some(marker => (m.content || '').includes(marker))
  );
  const arousalScanMsgs = chatOnly.length >= 2 ? chatOnly.slice(-2) : chatOnly;

  if (state.turn > 1) {
    applyArousalDecay(state, rs);
    applyEffectPassives(state, rs);
    scanArousal(arousalScanMsgs, state, rs);
  }

  // Persona stats
  personaState.stats = rs.personas?.['Persona'] || personaState.stats || {};

  // Event detection
  const notes = [];
  const recentForIntake = recent.length > 0 && recent[recent.length - 1].role === 'assistant'
    ? recent.slice(0, -1)
    : recent;

  console.log('[XCW] Pill state: pending=' + (state._pending_pill || 'none') +
    ' active=' + (state.active_pill || 'none') +
    ' recentForIntake=' + recentForIntake.length + 'msgs' +
    ' lastRole=' + (recentForIntake.length > 0 ? recentForIntake[recentForIntake.length - 1].role : 'n/a'));

  const events = detectEvents(recentForIntake, state, sex, rs, false, personaState);

  if (events.pill_taken) {
    console.log('[XCW] PILL TAKEN: color=' + events.pill_taken + ' → _pill_descriptor_this_turn will be set');
  }

  processEvents(state, events, sex, notes, rs, personaState?.active_effects, personaState);
  checkSideEffects(state, events, rs, sex);

  updatePersonaRelationship(personaState, name, events, state, rs);

  // Build output
  const header = buildHeader(name, sex, state, notes, events, rs, 'Persona', personaState || {});
  const brief = renderBrief(state, personaState, events, rs);

  // Scrub effect names from messages (pill-context only)
  const scrubWords = _buildScrubWords(rs);
  const scrubResult = _scrubPillEffectNames(messages, scrubWords);
  if (scrubResult.didScrub) {
    console.log('[XCW] Scrubbed effect names from pill references in messages');
  }

  var _injectArr = _buildInjectArray(header, state);

  // Phase 1: Extract and store story beats
  var _userTextForBeats = lastUserMsg || '';
  var _assistantTextForBeats = '';
  var _lastAssistant = (messages || []).slice().reverse().find(function(m) { return m.role === 'assistant'; });
  if (_lastAssistant) _assistantTextForBeats = _lastAssistant.content || '';
  var _newBeats = _beatExtractBeats(_userTextForBeats, _assistantTextForBeats, _beatPrevState, state);
  if (_newBeats.length > 0) {
    _beatAddBeats(_newBeats, state);
  }
  var _storySummary = buildStorySummary(state);

  console.log('[XCW] Return: turn=' + state.turn + ' header=' + header.length + 'ch brief=' + brief.length + 'ch events=' + Object.keys(events).join(',') + ' inject=' + _injectArr.length + ' hardRules=' + (state._hardRules ? state._hardRules.length : 0) + ' beats=' + (state.storyBeats || []).length);

  return {
    ok: true,
    name: name,
    sex: sex,
    state: state,
    persona_state: personaState || {},
    events: events,
    header: header,
    brief: brief,
    systemPrompt: null,
    inject: _injectArr,
    scrubbed_messages: scrubResult.didScrub ? scrubResult.messages : null,
    // Phase 1: Story Beat Tracker additions
    storySummary: _storySummary,
    recentMessageCount: state._pill_descriptor_this_turn ? 1 : 3,
    priorityInjection: !!(state._pill_descriptor_this_turn || state._deferred_transformation),
    // Persona block separate so buildScenePage places it at top as reference-only
    personaBlock: _lastPersonaBlock || null,
  };
}

function _buildInjectArray(header, state) {
  var arr = [
    {
      text: header,
      position: 'before_last_user',
    },
  ];

  // Hard rules (orgasm gating, unlocks) go at depth 0 as a system message —
  // this is the very last thing the model sees before generating, giving
  // them maximum authority. The model MUST obey these.
  var hardRules = state._hardRules;
  if (hardRules && hardRules.length) {
    arr.push({
      text: hardRules.join('\n'),
      position: 'depth',
      depth: 0,
      role: 'system',
    });
  }

  return arr;
}

// ──────────────────────────────────────────────────────────────────────────────
// STATUS HUD — Inline panel + floating pop-out window
// ──────────────────────────────────────────────────────────────────────────────

var _xcwHudState = null;
var _xcwHudConfig = null;

function _xcwStatMod(val) {
  var v = parseInt(val || 10, 10);
  var m = Math.floor((v - 10) / 2);
  return m >= 0 ? '+' + m : String(m);
}

function _xcwArousalPct(ar, max) {
  return Math.max(0, Math.min(100, Math.round((ar / max) * 100)));
}

function _xcwArousalColor(pct) {
  if (pct >= 80) return '#f44336';
  if (pct >= 60) return '#ff9800';
  if (pct >= 35) return '#ffeb3b';
  return '#4caf50';
}

function _xcwMascColor(masc) {
  if (masc >= 80) return '#42a5f5';
  if (masc >= 60) return '#66bb6a';
  if (masc >= 40) return '#ffee58';
  if (masc >= 20) return '#ff7043';
  return '#ec407a';
}

function _xcwRollIcon(entry) {
  if (!entry) return '';
  var e = String(entry);
  if (e.indexOf(':PASS') >= 0) return '<span style="color:#4caf50;">&#x2714;</span> ';
  if (e.indexOf(':FAIL') >= 0) return '<span style="color:#f44336;">&#x2718;</span> ';
  if (e.indexOf(':LOCKED') >= 0) return '<span style="color:#ff9800;">&#x1F512;</span> ';
  if (e.indexOf('FATIGUE') >= 0) return '<span style="color:#f44336;">&#x26A0;</span> ';
  if (e.indexOf('HELD') >= 0) return '<span style="color:#4caf50;">&#x1F6E1;</span> ';
  if (e.indexOf('CROSSED') >= 0) return '<span style="color:#ff9800;">&#x26A1;</span> ';
  return '';
}

function _xcwFormatRoll(entry) {
  // Parse "name:PASS(d20=14+3=17 vs DC=12)" into something readable
  var e = String(entry);
  // Effect rolls
  var m = e.match(/^(\w+):(PASS|FAIL)\(d20=(\d+)([+-]\d+)=(\d+) vs DC=(\d+)\)$/);
  if (m) {
    return _xcwRollIcon(e) +
      '<b style="color:#ce93d8;">' + m[1] + '</b> ' +
      '<span style="color:' + (m[2] === 'PASS' ? '#4caf50' : '#f44336') + ';">' + m[2] + '</span> ' +
      '<span style="color:#aaa;">d20=' + m[3] + m[4] + '=' + m[5] + ' vs DC ' + m[6] + '</span>';
  }
  // Arousal gate rolls
  var g = e.match(/^arousal_gate:(PASS|FAIL|FATIGUE_BREAK)\(d12=(\d+)->(\w+) d20=(\d+)([+-]\d+)=(\d+) vs DC=(\d+) tier=(\d+)/);
  if (g) {
    var label = g[1] === 'PASS' ? 'HELD' : (g[1] === 'FATIGUE_BREAK' ? 'BROKE' : 'CROSSED');
    var color = g[1] === 'PASS' ? '#4caf50' : '#f44336';
    return _xcwRollIcon(e) +
      '<b style="color:#ffab40;">Gate</b> ' +
      '<span style="color:' + color + ';">' + label + '</span> ' +
      '<span style="color:#aaa;">d12→' + g[3] + ' d20=' + g[4] + g[5] + '=' + g[6] + ' vs DC ' + g[7] + ' @' + g[8] + '</span>';
  }
  // Locked entries
  if (e.indexOf(':LOCKED') >= 0) {
    var lm = e.match(/^(\w+):LOCKED/);
    return _xcwRollIcon(e) +
      '<b style="color:#ce93d8;">' + (lm ? lm[1] : '?') + '</b> ' +
      '<span style="color:#ff9800;">LOCKED</span>';
  }
  // Fallback
  return '<span style="color:#aaa;">' + e + '</span>';
}

function buildXcwHudHtml(state, rs) {
  if (!state) {
    return '<div style="color:#888;font-style:italic;padding:8px;">Waiting for first turn...</div>';
  }
  var s = state;
  rs = rs || _xcwHudConfig || {};
  var stats = s.stats || {};
  var ar = parseFloat(s.arousal || 0);
  var arMax = parseInt(((rs.arousal_system || {}).max) || 100, 10);
  var arPct = _xcwArousalPct(ar, arMax);
  var arColor = _xcwArousalColor(arPct);
  var arLabel = typeof arousalLabel === 'function' ? arousalLabel(ar, rs) : '';
  var arFloor = typeof getArousalFloor === 'function' ? getArousalFloor(s, rs) : 0;
  var masc = parseInt(s.masculinity != null ? s.masculinity : 50, 10);
  var mascPct = masc;
  var mascBand = typeof _masculinityBandName === 'function' ? _masculinityBandName(masc) : '';
  var mascLabel = typeof _masculinityBandLabel === 'function' ? _masculinityBandLabel(masc) : '';
  var mascColor = _xcwMascColor(masc);
  var effects = s.active_effects || [];
  var name = s._card_name || 'Character';
  var cardSex = s._card_sex || '?';
  var effSex = typeof currentSex === 'function' ? currentSex(s, cardSex, rs) : cardSex;
  var turn = parseInt(s.turn || 0, 10);

  // ── Pill status: Pending vs Active ──
  var pillColors = { pink: '#e91e63', blue: '#2196f3', green: '#4caf50', purple: '#9c27b0', red: '#f44336' };
  var pillHtml = '';
  var pendingPill = s._pending_pill;
  var activePill = s.active_pill;

  if (pendingPill && !activePill) {
    // Offered but not yet taken
    var pBg = pillColors[pendingPill] || '#555';
    var desc = s._pending_pill_desc || {};
    var descParts = [];
    if (desc.effects && desc.effects.length) descParts.push(desc.effects.join(', '));
    if (desc.body_modifier) descParts.push('body: ' + desc.body_modifier);
    pillHtml = '<div style="margin-bottom:8px;padding:6px;background:#1a1a0a;border:1px solid #665500;border-radius:4px;">' +
      '<div style="font-size:11px;color:#ffab40;margin-bottom:3px;">&#x23F3; PENDING</div>' +
      '<span style="background:' + pBg + ';color:#fff;border-radius:3px;padding:1px 6px;font-size:11px;">' + pendingPill + '</span>' +
      (descParts.length ? '<div style="font-size:11px;color:#aaa;margin-top:3px;">' + descParts.join(' · ') + '</div>' : '') +
      '</div>';
  } else if (activePill) {
    // Taken and active
    var aBg = pillColors[activePill] || '#555';
    pillHtml = '<div style="margin-bottom:8px;padding:6px;background:#0a1a0a;border:1px solid #2e7d32;border-radius:4px;">' +
      '<div style="font-size:11px;color:#4caf50;margin-bottom:3px;">&#x2714; ACTIVE</div>' +
      '<span style="background:' + aBg + ';color:#fff;border-radius:3px;padding:1px 6px;font-size:11px;">' + activePill + '</span>' +
      '</div>';
  } else {
    pillHtml = '<div style="margin-bottom:8px;font-size:12px;color:#555;">No pill</div>';
  }

  // ── Stat grid ──
  var statKeys = ['CON', 'INT', 'WIS', 'CHA', 'DOM', 'SUB'];
  var statGrid = '';
  for (var i = 0; i < statKeys.length; i++) {
    var sk = statKeys[i];
    var sv = parseInt(stats[sk] || 10, 10);
    statGrid += '<div style="text-align:center;background:#1a1a2e;border-radius:4px;padding:4px 2px;">' +
      '<div style="font-size:10px;color:#888;">' + sk + '</div>' +
      '<div style="font-size:14px;font-weight:bold;color:#e0e0ff;">' + sv + '</div>' +
      '<div style="font-size:11px;color:#aaa;">' + _xcwStatMod(sv) + '</div>' +
      '</div>';
  }

  // ── Effects list ──
  var effHtml = '';
  if (effects.length > 0) {
    var em = rs.effect_mechanics || {};
    for (var ei = 0; ei < effects.length; ei++) {
      var eff = effects[ei];
      var dc = (s.effect_dcs || {})[eff];
      var stage = (s.effect_stages || {})[eff] || 0;
      var locked = (s.effect_locks || {})[eff];
      var parts = [];
      if (dc != null) parts.push('DC ' + dc);
      if (stage) parts.push('Stage ' + stage);
      if (locked) parts.push('LOCKED');
      effHtml += '<div style="margin:2px 0;padding:3px 6px;background:#1a1a2e;border-left:3px solid #7c4dff;border-radius:2px;font-size:12px;">' +
        '<b style="color:#ce93d8;">' + eff + '</b>' +
        (parts.length ? '<span style="color:#888;font-size:10px;margin-left:6px;">' + parts.join(' · ') + '</span>' : '') +
        '</div>';
    }
  } else {
    effHtml = '<div style="color:#555;font-style:italic;font-size:12px;">None active</div>';
  }

  // ── Orgasm gate ──
  var gateDc = s._arousal_gate_dc || 10;
  var gateFails = s._arousal_gate_fail_count || 0;
  var orgCount = s._orgasm_count || 0;
  var orgSession = s.session_orgasm_count || 0;
  var sessionFails = s.session_fail_count || 0;
  var sessionsCompleted = s.sessions_completed || 0;
  var orgGated = false;
  var activeRulesHtml = '';
  var activeRuleCount = 0;
  for (var oi = 0; oi < effects.length; oi++) {
    var oMech = (rs.effect_mechanics || {})[effects[oi]] || {};
    if (oMech.injection_rule) {
      orgGated = true;
      activeRuleCount++;
      var rulePreview = oMech.injection_rule.length > 80
        ? oMech.injection_rule.substring(0, 80) + '…'
        : oMech.injection_rule;
      activeRulesHtml += '<div style="margin:2px 0;padding:2px 6px;font-size:10px;border-left:2px solid #f44336;margin-left:2px;color:#e88;">' +
        '<b>' + effects[oi] + ':</b> ' + rulePreview.replace(/</g, '&lt;') +
        '</div>';
    }
  }

  // ── Side Effects ──
  var sideEffects = s.active_side_effects || [];
  var sideEffHtml = '';
  if (sideEffects.length > 0) {
    for (var si = 0; si < sideEffects.length; si++) {
      var se = sideEffects[si];
      var seParts = [];
      if (se === 'hair_trigger')         seParts.push('floor+' + (s._side_fx_arousal_floor_bonus || 2));
      else if (se === 'two_in_chamber')  seParts.push('chain=' + (s._two_in_chamber_chain || 0));
      else if (se === 'extra_fertile')   seParts.push('+' + (s._extra_fertile_bonus || 0) + '% preg');
      else if (se === 'excitable_ovaries') seParts.push('+' + (s._excitable_ovaries_bonus || 0) + '% · +5%/org');
      sideEffHtml += '<div style="margin:2px 0;padding:3px 6px;background:#1a1a0a;border-left:3px solid #ff9800;border-radius:2px;font-size:12px;">' +
        '<b style="color:#ffcc80;">' + se + '</b>' +
        (seParts.length ? '<span style="color:#888;font-size:10px;margin-left:6px;">' + seParts.join(' · ') + '</span>' : '') +
        '</div>';
    }
  } else {
    sideEffHtml = '<div style="color:#555;font-style:italic;font-size:12px;">None</div>';
  }

  // ── Pregnancy ──
  var pregHtml = '';
  var flags = s.flags || {};
  var pregCompleted = parseInt(s.pregnancies_completed || 0, 10);
  if (flags.pregnancy_confirmed) {
    var conTurn = s._conception_turn || 0;
    var pregAge = turn - conTurn;
    pregHtml = '<div style="margin-top:6px;padding:4px 6px;background:#1a0a1a;border:1px solid #4a148c;border-radius:4px;font-size:12px;">' +
      '<span style="color:#ce93d8;">&#x1F930; Pregnant</span> · Turn ' + pregAge +
      (pregCompleted ? ' · Births ' + pregCompleted : '') +
      '</div>';
  } else if (pregCompleted > 0) {
    pregHtml = '<div style="margin-top:6px;font-size:11px;color:#888;">Births: ' + pregCompleted + '</div>';
  }

  // ── Roll log (this turn) ──
  var rollLog = s.roll_log || [];
  var turnStart = s._roll_log_turn_start || 0;
  var thisTurnRolls = rollLog.slice(turnStart);
  var rollHtml = '';
  if (thisTurnRolls.length > 0) {
    for (var ri = 0; ri < thisTurnRolls.length; ri++) {
      rollHtml += '<div style="margin:2px 0;padding:2px 6px;font-size:11px;border-left:2px solid #333;margin-left:2px;">' +
        _xcwFormatRoll(thisTurnRolls[ri]) +
        '</div>';
    }
  } else {
    rollHtml = '<div style="color:#555;font-style:italic;font-size:11px;">No rolls this turn</div>';
  }

  // ── Previous turns roll history (last 10, collapsed) ──
  var prevRolls = rollLog.slice(Math.max(0, turnStart - 10), turnStart);
  var prevHtml = '';
  if (prevRolls.length > 0) {
    for (var pi = prevRolls.length - 1; pi >= 0; pi--) {
      prevHtml += '<div style="margin:1px 0;padding:1px 6px;font-size:10px;color:#666;border-left:2px solid #222;margin-left:2px;">' +
        _xcwFormatRoll(prevRolls[pi]) +
        '</div>';
    }
  }

  // ── Assemble ──
  return '<div style="font-family:monospace;color:#e0e0ff;font-size:13px;line-height:1.5;">' +
    // Header
    '<div style="font-size:15px;font-weight:bold;color:#ce93d8;margin-bottom:2px;">' + name + '</div>' +
    '<div style="font-size:12px;color:#aaa;margin-bottom:8px;">' + effSex + (s._card_age ? ' · Age ' + s._card_age : '') + ' · Turn ' + turn + (function() {
      var rb = s.resolved_body; var cb = s.card_body || {};
      var parts = [];
      if (rb) {
        if (rb.height) parts.push(rb.height);
        if (rb.weight) parts.push(rb.weight);
        if (rb.build) parts.push(rb.build);
        if (rb.bust) parts.push(rb.bust);
      } else if (cb.height_str || cb.weight || cb.build || cb.bust) {
        if (cb.height_str) parts.push(cb.height_str);
        if (cb.weight) parts.push(cb.weight);
        if (cb.build) parts.push(cb.build);
        if (cb.bust) parts.push(cb.bust);
      }
      return parts.length ? ' · ' + parts.join(' · ') : '';
    })() + '</div>' +

    // Pill status
    pillHtml +

    // Arousal bar
    '<div style="margin-bottom:4px;font-size:11px;color:#888;">Arousal</div>' +
    '<div style="background:#111;border-radius:4px;overflow:hidden;height:14px;margin-bottom:2px;">' +
      '<div style="width:' + arPct + '%;background:' + arColor + ';height:100%;transition:width .3s;"></div>' +
    '</div>' +
    '<div style="font-size:12px;margin-bottom:6px;">' + ar + '/' + arMax + ' · ' + arLabel + ' · Floor ' + arFloor + '</div>' +

    // Masculinity bar
    '<div style="margin-bottom:4px;font-size:11px;color:#888;">Identity</div>' +
    '<div style="background:#111;border-radius:4px;overflow:hidden;height:10px;margin-bottom:2px;">' +
      '<div style="width:' + mascPct + '%;background:' + mascColor + ';height:100%;transition:width .3s;"></div>' +
    '</div>' +
    '<div style="font-size:11px;margin-bottom:8px;">Masc ' + masc + ' · ' + mascBand + ' (' + mascLabel + ')</div>' +

    // Stats
    '<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:3px;margin-bottom:8px;">' + statGrid + '</div>' +

    // Orgasm gate
    '<div style="font-size:11px;color:#888;margin-bottom:6px;">' +
      'Gate DC ' + gateDc + ' · Fails ' + gateFails + ' · Orgasms ' + orgCount +
      ' · Session ' + orgSession + '/' + sessionFails + ' fails' +
      ' · Sessions ' + sessionsCompleted +
      (orgGated ? ' · <span style="color:#f44336;">GATED</span>' : '') +
    '</div>' +

    // Active injection rules (model-facing)
    (activeRuleCount > 0 ?
      '<details data-hud-section="rules" style="margin-bottom:6px;">' +
        '<summary style="cursor:pointer;font-size:11px;color:#f44336;">&#x1F512; Active Rules → Model (' + activeRuleCount + ')</summary>' +
        '<div style="margin-top:4px;">' + activeRulesHtml + '</div>' +
      '</details>'
      : '') +

    // Effects
    '<details data-hud-section="effects" style="margin-top:4px;" open>' +
      '<summary style="cursor:pointer;font-size:12px;color:#888;">Effects (' + effects.length + ')</summary>' +
      '<div style="margin-top:4px;">' + effHtml + '</div>' +
    '</details>' +

    // Side Effects
    '<details data-hud-section="side-effects" style="margin-top:4px;"' + (sideEffects.length > 0 ? ' open' : '') + '>' +
      '<summary style="cursor:pointer;font-size:12px;color:#888;">Side Effects (' + sideEffects.length + ')</summary>' +
      '<div style="margin-top:4px;">' + sideEffHtml + '</div>' +
    '</details>' +

    pregHtml +

    // This turn's rolls
    '<details data-hud-section="rolls-turn" style="margin-top:6px;" open>' +
      '<summary style="cursor:pointer;font-size:12px;color:#888;">&#x1F3B2; Rolls This Turn (' + thisTurnRolls.length + ')</summary>' +
      '<div style="margin-top:4px;">' + rollHtml + '</div>' +
    '</details>' +

    // Previous rolls (collapsed)
    (prevRolls.length > 0 ?
      '<details data-hud-section="rolls-prev" style="margin-top:4px;">' +
        '<summary style="cursor:pointer;font-size:11px;color:#555;">Previous Rolls (' + prevRolls.length + ')</summary>' +
        '<div style="margin-top:4px;">' + prevHtml + '</div>' +
      '</details>'
      : '') +

    // Footer with float button
    '<div style="margin-top:8px;border-top:1px solid #1a1a2e;padding-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap;">' +
      '<div style="font-size:10px;color:#444;">v' + LORE_DATA.version + '</div>' +
      '<button onclick="window._xcwFloatToggle?.()" style="font-size:10px;padding:2px 6px;background:#2a2a4a;border:1px solid #444;border-radius:3px;color:#aaa;cursor:pointer;margin-left:auto;">&#x26F6; Float</button>' +
    '</div>' +
  '</div>';
}

function initXcwFloatingHud() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('xcw-float')) return;

  var win = document.createElement('div');
  win.id = 'xcw-float';
  win.style.cssText = 'position:fixed;top:80px;right:20px;width:280px;max-height:80vh;overflow-y:auto;' +
    'background:#0d0d1a;border:1px solid #333;border-radius:8px;box-shadow:0 4px 24px rgba(0,0,0,0.7);' +
    'z-index:9999;display:none;font-family:monospace;scrollbar-width:thin;scrollbar-color:#333 #0d0d1a;';

  var header = document.createElement('div');
  header.style.cssText = 'padding:6px 10px;background:#1a1a2e;border-bottom:1px solid #333;' +
    'border-radius:8px 8px 0 0;cursor:move;display:flex;justify-content:space-between;' +
    'align-items:center;user-select:none;';
  header.innerHTML = '<span style="font-size:12px;color:#ce93d8;font-weight:bold;">&#x2697; X-Change Status</span>' +
    '<button id="xcw-float-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:14px;padding:0;">&#x2715;</button>';

  var body = document.createElement('div');
  body.id = 'xcw-float-body';
  body.style.padding = '8px 10px';

  win.appendChild(header);
  win.appendChild(body);
  document.body.appendChild(win);

  document.getElementById('xcw-float-close').onclick = function() { win.style.display = 'none'; };

  // Drag logic
  var dragging = false, ox = 0, oy = 0;
  header.addEventListener('mousedown', function(e) {
    dragging = true; ox = e.clientX - win.offsetLeft; oy = e.clientY - win.offsetTop; e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    win.style.left = (e.clientX - ox) + 'px';
    win.style.top  = (e.clientY - oy) + 'px';
    win.style.right = 'auto';
  });
  document.addEventListener('mouseup', function() { dragging = false; });

  window._xcwFloatToggle = function() {
    win.style.display = win.style.display === 'none' ? 'block' : 'none';
    if (win.style.display === 'block') {
      var el = document.getElementById('xcw-float-body');
      if (el) {
        if (_xcwHudState) {
          el.innerHTML = buildXcwHudHtml(_xcwHudState, _xcwHudConfig);
        } else {
          var inline = document.getElementById('xcw-hud');
          el.innerHTML = (inline && inline.innerHTML) || buildXcwHudHtml(null, _xcwHudConfig);
        }
        _xcwHudApplyState(el);
      }
    }
  };

  window._xcwFloatRefresh = function() {
    var liveWin = document.getElementById('xcw-float');
    if (!liveWin || liveWin.style.display === 'none') return;
    var el = document.getElementById('xcw-float-body');
    if (el && _xcwHudState) {
      el.innerHTML = buildXcwHudHtml(_xcwHudState, _xcwHudConfig);
      _xcwHudApplyState(el);
    }
  };
}

function getSettingsHtml(config) {
  return '<div id="xcw-hud">' + buildXcwHudHtml(_xcwHudState, config) + '</div>' +
    '<div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:6px;">' +
      '<button id="xcw-clear-persona" class="menu_button redWarning">Clear persona pill</button>' +
    '</div>';
}

function onSettingsRendered(config, callbacks) {
  _xcwHudConfig = config;
  // Wire lore-specific buttons to extension callbacks
  var btn = document.getElementById('xcw-clear-persona');
  if (btn && callbacks && typeof callbacks.clearPersonaPill === 'function') {
    btn.addEventListener('click', callbacks.clearPersonaPill);
  }
  // Init floating HUD
  initXcwFloatingHud();
}

function getDebugInfo(state, events, config, personaState) {
  const s = state || {};
  const rs = config || {};
  const ev = events || {};
  const ps = personaState || {};
  const lines = [];
  const W = 80;
  const LW = 12;
  const VW = W - LW - 4;

  // ── helpers ──
  const sections = [];
  let _secTitle = 'CHARACTER';
  function _flush() {
    if (lines.length) sections.push({ title: _secTitle, text: lines.splice(0).join('\n') });
  }
  function _section(title) { _flush(); _secTitle = title; }

  function _ln(label, val, bdr) {
    bdr = bdr || '\u2551'; // ║
    const v = String(val == null ? '' : val);
    let first = true;
    let rest = v;
    while (rest || first) {
      const chunk = rest.substring(0, VW);
      rest = rest.substring(VW);
      if (first) {
        lines.push(bdr + ' ' + (label || '').padEnd(LW) + ' ' + chunk.padEnd(VW) + ' ' + bdr);
        first = false;
      } else {
        lines.push(bdr + ' ' + ''.padEnd(LW) + ' ' + chunk.padEnd(VW) + ' ' + bdr);
      }
    }
  }

  const name = s._card_name || '?';
  const cardSex = s._card_sex || '?';
  const effSex = typeof currentSex === 'function' ? currentSex(s, cardSex, rs) : cardSex;
  const ar = getArousal(s);
  const arFloor = getArousalFloor(s, rs);
  const mx = parseInt(((rs.arousal_system || {}).max) || AROUSAL_MAX, 10);
  const effects = s.active_effects || [];
  const noDecay = new Set((rs.arousal_system || {}).no_decay_effects || []);
  const exempt = effects.filter(e => noDecay.has(e));
  const arPen = arousalRollPenalty(s, rs);
  const penStr = arPen === 'auto_fail' ? 'AUTO-FAIL' : (arPen ? String(arPen) : 'none');
  const masc = parseInt(s.masculinity ?? 50, 10);

  // CHARACTER section
  _ln('pill', s.active_pill || 'none');
  const rb = s.resolved_body;
  const cb = s.card_body || {};
  if (rb) {
    const bp = [];
    for (const k of ['height', 'weight', 'bust', 'build']) {
      if (rb[k]) bp.push(k + '=' + rb[k]);
    }
    if (bp.length) _ln('body', bp.join(', ') + '  [confirmed]');
  } else if (cb.height_str || cb.modifier) {
    const bp = [];
    if (cb.height_str) bp.push(cb.height_str);
    if (cb.weight) bp.push(String(cb.weight));
    if (cb.bust) bp.push(cb.bust);
    if (cb.modifier) bp.push('mod=' + cb.modifier);
    if (bp.length) _ln('body', bp.join(', '));
  }
  if (s._pending_pill) {
    _ln('pending', s._pending_pill + ' ' + JSON.stringify(s._pending_pill_desc || {}));
  }
  if (s._deferred_transformation) {
    const dt = s._deferred_transformation;
    _ln('deferred tx', dt.color + ' mod=' + (dt.body_modifier || 'none') + ' (from assistant scan)');
  }

  // Clothing — prefer live scene tracker, fall back to card_body outfit
  const sceneClothing = (s._scene_tracker || {}).clothing_char;
  const cardOutfitSlots = (s.card_body || {}).outfit_slots || {};
  const cardOutfitText = (s.card_body || {}).outfit_text || '';
  if (sceneClothing) {
    _ln('clothing', sceneClothing + '  [scene]');
  } else if (Object.keys(cardOutfitSlots).length > 0) {
    const slotParts = [];
    if (cardOutfitSlots.top) slotParts.push('top:' + cardOutfitSlots.top);
    if (cardOutfitSlots.bottom) slotParts.push('bot:' + cardOutfitSlots.bottom);
    if (cardOutfitSlots.underwear) slotParts.push('uwear:' + cardOutfitSlots.underwear);
    if (cardOutfitSlots.footwear) slotParts.push('foot:' + cardOutfitSlots.footwear);
    _ln('clothing', slotParts.join(' | ') + '  [card]');
  } else if (cardOutfitText) {
    _ln('clothing', cardOutfitText + '  [card]');
  } else if (s._last_clothing_char) {
    _ln('clothing', s._last_clothing_char + '  [last]');
  }

  // Location (from scene tracker, seeded or live)
  const curLoc = (s._scene_tracker || {}).location;
  if (curLoc) _ln('location', curLoc);

  _ln('effects', fmtEffects(s) || 'none');

  // Effect detail
  if (effects.length > 0) {
    const em = rs.effect_mechanics || {};
    for (const eff of effects) {
      const dc = (s.effect_dcs || {})[eff];
      const stage = (s.effect_stages || {})[eff] || 0;
      const locked = (s.effect_locks || {})[eff];
      const mech = em[eff] || {};
      const tb = mech.trigger_behavior || {};
      const trigger = tb.trigger || '(no trigger)';
      const parts = [eff, 'trigger=' + trigger];
      if (dc != null) parts.push('DC=' + dc);
      if (stage) parts.push('stage=' + stage);
      if (locked) parts.push('LOCKED');
      _ln('', '  ' + parts.join(' '));
    }
  }

  // Identity / Masculinity
  if (masc != null) {
    const fem = 100 - masc;
    const band = _masculinityBand(masc);
    const bandName = _masculinityBandName(masc);
    const bandLabel = _masculinityBandLabel(masc);
    const gateDc = s._masc_gate_dc || 5;
    const resist = s._masc_resist_mod || 0;
    _section('IDENTITY');
    _ln('identity', 'masc=' + masc + '  fem=' + fem + '  band=' + band + '/' + bandName + ' (' + bandLabel + ')');
    _ln('', 'DC=' + gateDc + '  resist=' + resist + '  session_delta=' + (s._masculinity_delta_this_session || 0));
  }

  // Stats + d12
  _section('STATS');
  _ln('stats', fmtStats(s.stats));
  const d12map = s.stat_face_map;
  if (d12map && Array.isArray(d12map)) {
    const fc = {};
    for (const st of d12map) fc[st] = (fc[st] || 0) + 1;
    const summary = Object.entries(fc).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + '(' + v + ')').join(' ');
    const shared = s.shared_stats || [];
    _ln('d12', summary + (shared.length ? '  shared=' + JSON.stringify(shared) : ''));
    const faces = d12map.slice(0, 12).map((v, i) => (i + 1) + '=' + v).join(' ');
    _ln('d12 faces', '[' + faces + ']');
  }

  // Arousal + Gate
  _section('AROUSAL / GATE');
  let arLine = ar + '/' + mx + '  (' + arousalLabel(ar, rs) + ')  floor=' + arFloor + '  pen=' + penStr;
  if (exempt.length) arLine += '  [no-decay:' + exempt.join(',') + ']';
  _ln('arousal', arLine);

  const gate = s._arousal_gate;
  if (gate) {
    const statPart = (gate.mod >= 0 ? '+' : '') + (gate.mod || 0);
    const resultStr = gate.result === 'held'
      ? 'HELD <' + gate.threshold
      : (gate.result || '').toUpperCase() + ' ' + gate.threshold;
    _ln('gate roll', 'd12=' + (gate.d12 || '?') + '\u2192' + (gate.d12_stat || '?')
      + '  d20=' + gate.roll + statPart + '=' + (gate.total || gate.eff_roll || '?')
      + ' vs DC' + gate.dc + '  \u2192 ' + resultStr);
    _ln('gate state', 'next_DC=' + (s._arousal_gate_dc || GATE_DC_BASE)
      + '  fails=' + (s._arousal_gate_fail_count || 0)
      + '  pass_streak=' + (s._gate_pass_streak || 0));
  } else {
    _ln('gate', 'DC=' + (s._arousal_gate_dc || GATE_DC_BASE)
      + '  fails=' + (s._arousal_gate_fail_count || 0)
      + '  streak=' + (s._gate_pass_streak || 0));
  }

  // Orgasm
  _section('ORGASMS');
  const orgCount = s._orgasm_count || 0;
  const orgResult = s._org_trigger_result || {};
  const orgParts = ['total=' + orgCount];
  if (orgResult.orgasm) {
    orgParts.push('THIS TURN: YES');
  } else if (orgResult.suppressed) {
    orgParts.push('suppressed=' + orgResult.suppressed);
  } else if (orgResult.rolled) {
    orgParts.push('d100=' + (orgResult.roll || '?') + ' vs ' + (orgResult.threshold || '?') + ' \u2192 miss');
  }
  orgParts.push('session=' + (s.session_orgasm_count || 0));
  orgParts.push('breeder=' + (s._breeder_orgasm_count || 0));
  orgParts.push('frustration=' + (s._denial_frustration || 0));
  orgParts.push('fails=' + (s.session_fail_count || 0));
  _ln('orgasms', orgParts.join('  '));

  // Side Effects
  const sideEffects = s.active_side_effects || [];
  if (sideEffects.length > 0) {
    _section('SIDE EFFECTS');
    _ln('SIDE FX', sideEffects.join(', '));
    for (const se of sideEffects) {
      const parts = [se];
      if (se === 'hair_trigger') {
        parts.push('floor_bonus=' + (s._side_fx_arousal_floor_bonus || 2));
      } else if (se === 'two_in_chamber') {
        parts.push('chain=' + (s._two_in_chamber_chain || 0));
        parts.push('active=' + (s._two_in_chamber_active ? 'yes' : 'no'));
      } else if (se === 'confirmed_submissive') {
        parts.push('gate_dc=' + (s._arousal_gate_dc || '?'));
      } else if (se === 'extra_fertile') {
        parts.push('bonus=' + (s._extra_fertile_bonus || 0) + '%');
      } else if (se === 'excitable_ovaries') {
        parts.push('bonus=' + (s._excitable_ovaries_bonus || 0) + '%');
        parts.push('+5%/orgasm this session');
      }
      _ln('', '  ' + parts.join('  '));
    }
  }

  // Pregnancy
  const flags = s.flags || {};
  const eligible = canGetPregnant(s, cardSex, rs);
  if (eligible || flags.pregnancy_confirmed) {
    _section('PREGNANCY');
    // Compute pregnancy odds
    const pOdds = rs.pregnancy_odds || {};
    const ftDict = {};
    for (const f of (rs.flavor_triggers || [])) {
      if (f && typeof f === 'object' && f.effect) ftDict[f.effect] = f;
    }
    const modes = new Set();
    const allEffs = [...effects];
    // persona effects stored under active_effects; fall back to effects for legacy
    for (const pe of (ps.active_effects || ps.effects || [])) {
      if (!allEffs.includes(pe)) allEffs.push(pe);
    }
    for (const eff of allEffs) {
      const ft = ftDict[eff] || {};
      if (ft.pregnancy_mode) modes.add(ft.pregnancy_mode);
    }
    const em2 = rs.effect_mechanics || {};
    for (const eff of allEffs) {
      const tb = (em2[eff] || {}).trigger_behavior || {};
      if (tb.pregnancy_partner_mode) modes.add(tb.pregnancy_partner_mode);
    }
    let chance = parseInt(pOdds.normal || 4, 10);
    let chanceKey = 'normal';
    for (const entry of (pOdds.role_priority || [])) {
      if ((entry.roles || []).every(r => modes.has(r))) {
        chanceKey = entry.key;
        chance = parseInt(pOdds[chanceKey] || chance, 10);
        break;
      }
    }
    const pregCompleted = parseInt(s.pregnancies_completed || 0, 10);
    _ln('preg %', chance + '% (' + chanceKey + ')  eligible=' + eligible + '  modes=' + JSON.stringify([...modes]) + '  completed=' + pregCompleted);

    if (flags.pregnancy_confirmed && s._conception_turn != null) {
      const pregAge = (s.turn || 0) - s._conception_turn;
      let stageStr, nextStr;
      if (flags.pregnancy_stage_late) {
        stageStr = 'late (3rd trimester)'; nextStr = 'birth possible';
      } else if (flags.pregnancy_stage_showing) {
        stageStr = 'showing (2nd trimester)'; nextStr = 'late in ' + Math.max(0, 8 - pregAge) + ' turns';
      } else {
        stageStr = 'early (1st trimester)'; nextStr = 'showing in ' + Math.max(0, 4 - pregAge) + ' turns';
      }
      _ln('preg stage', stageStr + '  age=' + pregAge + ' turns  next=' + nextStr);
    } else if (flags.pregnancy_confirmed) {
      _ln('preg stage', 'confirmed (no conception turn recorded)');
    } else {
      _ln('preg stage', 'not pregnant');
    }
  }

  // Events this turn
  const evKeys = Object.keys(ev).filter(k => ev[k] !== false && ev[k] != null);
  if (evKeys.length > 0) {
    _section('EVENTS');
    _ln('EVENTS', '');
    for (const k of evKeys) {
      const v = ev[k];
      const display = typeof v === 'object' ? JSON.stringify(v) : String(v);
      _ln('  ' + k, display);
    }
  }

  // Scene Tracker
  const scene = s._scene_tracker;
  if (scene && typeof scene === 'object') {
    _section('SCENE');
    _ln('scene', '');
    for (const [sk, sl] of [['date','date'],['time','time'],['location','loc'],['positions','pos'],['last_action','last act']]) {
      if (scene[sk]) _ln('  ' + sl, scene[sk]);
    }
    if (scene.clothing_char) {
      const cs = s._clothing_summary_char || '?';
      _ln('  clothing_char', scene.clothing_char + '  [' + cs + ']');
    }
    if (scene.clothing_user) _ln('  clothing_user', scene.clothing_user);
  }

  // ╔═══════════ PERSONA BLOCK ═══════════╗
  // Persona block is now returned separately and injected at the top of the
  // scene page as reference-only context on normal turns. Still rendered here
  // for the HUD/debug panel output, but not appended to lines.
  const _personaBlockLines = [];
  if (ps && Object.keys(ps).length > 0) {
    const persona = 'Player';
    const pTitle = 'PERSONA: ' + persona;
    _personaBlockLines.push('\u250C\u2500 ' + pTitle + ' ' + '\u2500'.repeat(Math.max(1, W - pTitle.length - 3)) + '\u2510');
    const pLn2 = (label, val) => { _personaBlockLines.push(_ln(label, val, '\u2502')); };
    pLn2('stats', fmtStats(ps.stats));
    pLn2('pill', ps.active_pill || 'none');
    pLn2('effects', (ps.active_effects || ps.effects || []).join(', ') || 'none');
    const rel = ((ps.relationships || {})[name.toLowerCase()] || {});
    const relDefaults = ((rs.relationship_schema || {}).default_fields || {});
    const relParts = [];
    for (const [k, v] of Object.entries(rel)) {
      if (v !== relDefaults[k] && v != null && v !== '' && v !== 0 && v !== false) {
        relParts.push(k + '=' + v);
      }
    }
    pLn2('rel[' + name + ']', relParts.length ? relParts.join(', ') : 'new');
    if (scene && scene.clothing_user) {
      const us = s._clothing_summary_user || '?';
      pLn2('clothing', scene.clothing_user + '  [' + us + ']');
    }
    _personaBlockLines.push('\u2514' + '\u2500'.repeat(W) + '\u2518');
  }
  _lastPersonaBlock = _personaBlockLines.length ? _personaBlockLines.join('\n') : null;

  // SESSION section
  const gen = parseInt(s.turn || 0, 10);
  _section('SESSION  t=' + (gen * 2) + '  gen=' + gen);
  const sLn = (label, val) => _ln(label, val, '\u2502');

  const activeEv = Object.keys(ev).filter(k => ev[k]);
  sLn('events', activeEv.length ? activeEv.join(', ') : 'none');
  if (ev.pill_taken) sLn('', '  pill_taken: ' + ev.pill_taken + ' ' + JSON.stringify(ev.pill_descriptor || {}));
  if (ev.orgasm) sLn('', '  orgasm: true');
  if (ev.creampie_vaginal) sLn('', '  creampie_vaginal: true');

  const activeFlags = {};
  for (const [k, v] of Object.entries(flags)) {
    if (v !== false && v != null && v !== 0 && v !== '') activeFlags[k] = v;
  }
  sLn('flags', Object.keys(activeFlags).length ? JSON.stringify(activeFlags) : '{}');

  // Roll log
  const rollLog = s.roll_log || [];
  if (rollLog.length > 0) {
    sLn('rolls', '');
    for (const entry of rollLog) {
      sLn('', '  ' + entry);
    }
  } else {
    sLn('rolls', 'none this turn');
  }

  // Notes
  const notesLog = s._notes_log || [];
  if (notesLog.length > 0) {
    _section('NOTES');
    for (const n of notesLog) {
      _ln('', typeof n === 'string' ? n : String(n));
    }
  }

  // Persona (side-channel, add as last section if present)
  _flush();
  if (_lastPersonaBlock) {
    sections.push({ title: 'PERSONA', text: _lastPersonaBlock });
  }

  return { sections };
}

// ──────────────────────────────────────────────────────────────────────────────
// EXPORT
// ──────────────────────────────────────────────────────────────────────────────

// Cached scrub patterns for text-completion prompt scrubbing (built on first use)
var _cachedScrubCompiled = null;
var _cachedScrubConfig = null;

function _scrubPillEffectText(text, config) {
  if (!text || typeof text !== 'string') return text;
  var rs = config || _cachedScrubConfig;
  if (!rs) return text;
  if (_cachedScrubConfig !== rs) {
    _cachedScrubCompiled = _buildScrubWords(rs);
    _cachedScrubConfig = rs;
  }
  return _scrubText(text, _cachedScrubCompiled);
}

var _XCW_HUD_LS_KEY = 'ow-hud-open';

function _xcwHudApplyState(el) {
  if (!el || typeof localStorage === 'undefined') return;
  var stored;
  try { stored = JSON.parse(localStorage.getItem(_XCW_HUD_LS_KEY) || '{}'); } catch { stored = {}; }
  el.querySelectorAll('details[data-hud-section]').forEach(function(d) {
    var key = d.dataset.hudSection;
    if (key in stored) d.open = stored[key];
    d.addEventListener('toggle', function() {
      try {
        var s = JSON.parse(localStorage.getItem(_XCW_HUD_LS_KEY) || '{}');
        s[key] = d.open;
        localStorage.setItem(_XCW_HUD_LS_KEY, JSON.stringify(s));
      } catch { /* ignore */ }
    }, { once: false });
  });
}

function updateHud(state, config) {
  _xcwHudState = state;
  if (config) _xcwHudConfig = config;
  var html = buildXcwHudHtml(state, _xcwHudConfig);
  // Refresh inline panel
  if (typeof document !== 'undefined') {
    var el = document.getElementById('xcw-hud');
    if (el) { el.innerHTML = html; _xcwHudApplyState(el); }
    // Always directly update float body if visible — don't rely on closure
    var floatWin = document.getElementById('xcw-float');
    if (floatWin && floatWin.style.display !== 'none') {
      var fb = document.getElementById('xcw-float-body');
      if (fb) { fb.innerHTML = html; _xcwHudApplyState(fb); }
    }
  }
}

export default {
    name: 'X-Change World',
    version: LORE_DATA.version,
    author: 'Cody',
    description: 'Transformation-themed interactive fiction with pill mechanics, arousal tracking, and identity systems.',
    data: LORE_DATA,
    init(loreData) {
      var rs = compileRuleset(loreData);
      _cachedScrubConfig = rs;
      _cachedScrubCompiled = _buildScrubWords(rs);
      return rs;
    },
    processTurn,
    handleResponse,
    getSettingsHtml,
    onSettingsRendered,
    getDebugInfo,
    updateHud,
    _scrubPillEffectText,
};
