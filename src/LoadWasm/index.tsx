import './wasm_exec.js';
import './wasmTypes.d.ts';

import React, { useEffect } from 'react';

export async function loadWasm(): Promise<void> {
    const go = new window.Go();
    const response = await fetch("/main.wasm");
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer, go.importObject);
    go.run(wasmModule.instance);
}

export const LoadWasm: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    loadWasm().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        loading WebAssembly...
      </div>
    );
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
};