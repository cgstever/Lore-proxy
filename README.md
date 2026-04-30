# X-Change World — Stateful Narrative Engine

A configurable stateful narrative engine for [SillyTavern](https://github.com/SillyTavern/SillyTavern), designed to run as the runtime for the [StatefulLore](https://github.com/cgstever/StatefulLore) extension.

The engine maintains rich session state — character traits, conditions, equipment, location, narrative variables — so the language model can focus on prose without having to track world data turn to turn. It detects in-story events, triggers configurable mechanics, and constructs dynamic context headers for the LLM.

## How it works

- **State container.** Persistent per-session store for everything the engine tracks.
- **Event detection.** Lightweight pattern matchers and rule hooks scan model output for in-story triggers and update state accordingly.
- **Context builder.** On each turn, assembles a compact summary of currently-relevant state and injects it into the model's context window.
- **Mechanics layer.** Declarative rules drive game-style mechanics (stats, equipment, conditions, etc.) without the model having to remember anything.

## Versioning

The engine ships a single `LORE_DATA.version` field. The companion StatefulLore extension reads `version.json` on startup and only re-downloads the engine when the version differs, keeping client traffic minimal.

## Files

- `x_change_world.js` — main engine.
- `version.json` — current version (consumed by the extension).
- `master_world.js`, `transform_body_compact.js` — supporting modules.
