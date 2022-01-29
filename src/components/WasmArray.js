function WasmArray({ instance }) {
  let wasmTime = 0;

  if (instance) {
    // Wasm helpers see assembly/index.ts
    // Obtain the necessary runtime helpers
    const { helperArray } = instance.exports;

    // Array
    const start = Date.now();
    helperArray();
    const end = Date.now();
    wasmTime = end - start;
  }

  return (
    <div className="indicator indicator-2">
      <div>AS-WASM</div> <div>{wasmTime}</div>
    </div>
  );
}

export default WasmArray;
