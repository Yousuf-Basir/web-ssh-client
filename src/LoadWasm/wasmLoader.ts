export async function loadWasm(): Promise<void> {
    const go = new window.Go();
    const wasmModule = await WebAssembly.instantiateStreaming(fetch("/main.wasm"), go.importObject);
    go.run(wasmModule.instance);
}
