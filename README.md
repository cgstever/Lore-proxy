# X-Change World — Lore Engine

The main lore and state engine for the X-Change World universe, designed to run inside SillyTavern via the [StatefullLore](https://github.com/cgstever/StatefullLore) extension.

X-Change World is a comprehensive stateful lore engine that tracks character transformation, arousal, clothing, effects, stats, and narrative state across an entire roleplay session. It detects in-story events (pill intake, encounters, transformations), builds dynamic context headers for the language model, and drives game mechanics — all without the model needing to remember world state.

## Features

- **Character state tracking** — stats (INT, WIS, DOM, SUB, CON, CHA), arousal, masculinity, clothing, active effects, and transformation progress
- **Event detection system** — automatically detects pill intake, transformation triggers, encounters, and other story events from the AI's responses
- **Dynamic context headers** — `buildHeader()` constructs a detailed system prompt injection every turn so the model always has current world state
- **Transformation guidance** — `buildTransformationGuidance()` provides stat-driven prose direction for transformation scenes
- **Fragment evaluation** — `evaluateFragments()` selects contextually appropriate lore entries based on current state
- **Identity tracking** — `getIdentityText()` generates identity-aware narrative framing based on transformation progress
- **Story Beat Tracker** — Phase 1 of the Scene Page architecture; `buildStorySummary()` maintains a running narrative summary
- **Stat-driven prose generation** via `_masculinityBand()` and transformation physical descriptions (125 prose blocks)
- **Statgen system** — deterministic stat generation from character card tags on session init
- **Structured lore data** — `LORE_DATA` contains all world entries, rules, and mechanical definitions

## How It Works

The engine implements the `processTurn()` and `handleResponse()` interface expected by StatefullLore:

1. **Each turn**, StatefullLore calls into the engine to build context headers
2. The engine reads current state from IndexedDB (via StatefullLore) and assembles a rich system prompt
3. After the AI responds, `detectEvents()` scans the response for game-relevant events
4. `processEvents()` applies state mutations (stat changes, effect applications, transformations)
5. Updated state is persisted back to IndexedDB for the next turn

### Key Functions

| Function | Purpose |
|----------|---------|
| `buildHeader()` | Main header builder — called every turn to inject current state |
| `buildTransformationGuidance()` | Builds prose guidance for transformation scenes |
| `processTurn()` | Entry point called by StatefullLore each turn |
| `detectEvents()` | Scans AI response for game events (pill intake, etc.) |
| `processEvents()` | Applies detected events to character state |
| `evaluateFragments()` | Selects relevant lore fragments based on current state |
| `getIdentityText()` | Generates identity-aware text based on transformation level |
| `buildStorySummary()` | Story Beat Tracker — maintains a narrative summary |
| `_masculinityBand()` | Maps masculinity 0–100 to a 0–10 band for prose selection |

## File Structure

```
overwrite-st/
├── x_change_world.js            ← Main lore/state engine (~7.5 MB, v6.5.28)
├── version.json                 ← Version string polled by StatefullLore on startup
├── transform_body_compact.js    ← Stat-driven flavor/prose tables (~14 MB, archived)
├── master_world.js              ← Supplementary world logic (~110 KB)
├── x_change_world_v5.0.7.json  ← Legacy backup (v5.0.7, ~104 KB)
├── Planing/                     ← Design documents and specifications
│   ├── X_CHANGE_WORLD_ARCHITECTURE.md
│   ├── d12_stat_weighting_spec.md
│   ├── effect_stacking_rules.md
│   ├── flavor_reference.md
│   ├── masculinity_text_architecture.md
│   ├── side_effects_*.md / .docx
│   └── tcg_card_catalog.md
└── README.md
```

## Relationship with StatefullLore

This repository contains only the **lore engine** (the game logic and data). To actually use it, you need the [StatefullLore](https://github.com/cgstever/StatefullLore) SillyTavern extension, which:

1. Loads `x_change_world.js` as a lore module
2. Provides the IndexedDB persistence layer for state
3. Intercepts SillyTavern's prompt pipeline to inject the engine's context headers
4. Handles auto-updating by polling `version.json` on startup

### Auto-Update Flow

```
StatefullLore startup
    → fetches version.json from this repo
    → compares with loaded version
    → if different, downloads fresh x_change_world.js
    → loads and activates the new engine
```

## Installation

1. Install [SillyTavern](https://github.com/SillyTavern/SillyTavern)
2. Install the [StatefullLore](https://github.com/cgstever/StatefullLore) extension
3. The extension auto-downloads `x_change_world.js` from this repo on first run

The raw URL used by the extension:

```
https://raw.githubusercontent.com/cgstever/overwrite-st/main/x_change_world.js
```

## Version

**v6.5.28**

## Related Projects

- [StatefullLore](https://github.com/cgstever/StatefullLore) — The SillyTavern extension that loads and runs this engine
- [simple-lore](https://github.com/cgstever/simple-lore) — A minimal D&D 5e RPG module for the same engine

## License

This project is provided as-is for use with SillyTavern.
