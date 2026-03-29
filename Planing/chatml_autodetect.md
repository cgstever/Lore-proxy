# Text Completion & ChatML Auto-Detection

## Background

The extension originally supported text completion mode at v1.37.3–1.37.8 by converting the assembled scene page messages array into a ChatML-formatted prompt string using `messagesToChatML()`. This was dropped during the fetch interceptor refactor around v1.39.x. The function still exists in the codebase but the text completion branch currently just passes through without calling it.

## The Problem

Some local models — particularly older GGUF models, KoboldCpp setups, and certain Ollama models — don't support the chat completion (`messages[]` array) format. They expect a single prompt string, often in ChatML or another instruct format. Right now those models get a passthrough with no lore injection at all.

## Proposed Solution: Auto-Detection (Option 1)

Detect which models need ChatML format from the payload and automatically convert, so it works without the user needing to configure anything.

### How Detection Would Work

The payload contains a `model` field with the model name string. The extension can read this and check it against a known list of ChatML-compatible models before deciding whether to convert.

```javascript
const CHATML_MODELS = [
    'mistral', 'mixtral', 'llama', 'phi', 'qwen', 
    'gemma', 'openchat', 'neural-chat', 'starling'
    // expand as needed
];

function needsChatML(modelName) {
    if (!modelName) return false;
    const lower = modelName.toLowerCase();
    return CHATML_MODELS.some(m => lower.includes(m));
}
```

### Implementation Plan

1. In the fetch interceptor text completion branch (`else if (typeof payload.prompt === 'string')`):
   - Read `payload.model`
   - Run the same `processTurn` → `buildScenePage` pipeline as chat completion
   - If model name matches known ChatML list, call `messagesToChatML()` and set `payload.prompt`
   - If unknown model, passthrough as now (no lore injection)

2. Add a manual override toggle in settings — "Force ChatML" — for models not in the known list

3. The `messagesToChatML()` function already exists and handles priority turns correctly — no changes needed there

### What the User Experiences

- Chat completion models: no change, works as always
- Known ChatML/text completion models: lore injection works automatically
- Unknown text completion models: passthrough (same as now), but user can enable Force ChatML toggle

## Open Questions

- How reliable is model name detection from the payload? Need to confirm `payload.model` is always present in text completion requests from ST
- Does ST ever send text completion format for chat-capable models, or is the payload format always consistent with the model type?
- Should the ChatML model list live in the extension or be configurable by the lore module?

## Related

- `messagesToChatML()` — already implemented in index.js, line ~307
- Text completion branch — index.js, currently passthrough only
- Was working at v1.37.8, removed during refactor at ~v1.39.x
