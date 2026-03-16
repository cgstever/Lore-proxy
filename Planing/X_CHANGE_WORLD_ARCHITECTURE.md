# X-Change World — Architecture

> **This file is a redirect.** The architecture docs now live closer to the code they describe.

## Current architecture docs

| Doc | Location | Covers |
|-----|----------|--------|
| **Engine architecture** | [`proxy/X_CHANGE_WORLD_ARCHITECTURE.md`](proxy/X_CHANGE_WORLD_ARCHITECTURE.md) | JS port status, function inventory, Python reference, data tables, build pipeline |
| **Extension architecture** | [`proxy/st-extension/ARCHITECTURE.md`](proxy/st-extension/ARCHITECTURE.md) | SillyTavern extension runner, lore module interface, state flow, injection system, migration status |

## Quick status

- **Runtime**: Pure JS in-browser via SillyTavern extension (no Python required)
- **Engine**: `proxy/st-extension/x_change_world.js` (~100+ functions, 6.89 MB with data tables)
- **Extension**: `proxy/st-extension/Extension-overwrite/index.js` (~810 lines)
- **Python**: `proxy/x_change_world.py` kept as reference only

The old v5.9.1 architecture snapshot that was here has been superseded by the proxy-level doc which tracks the JS port status.
