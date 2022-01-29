function WasmFloatArray({ instance }) {
  let wasmTime = 0;

  if (instance) {
    // Wasm helpers see assembly/index.ts
    // Obtain the necessary runtime helpers
    const { helperFloatArray } = instance.exports;

    // FloatArray
    const start = Date.now();
    helperFloatArray();
    const end = Date.now();
    wasmTime = end - start;
  }

  return (
    <div className="indicator">
      <div>AS-WASM (FloatArray)</div> <div>{wasmTime}</div>
    </div>
  );
}

export default WasmFloatArray;
