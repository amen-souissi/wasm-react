function WasmArrayInput({ instance }) {
  let wasmTime = 0;

  if (instance) {
    // Wasm helpers see assembly/index.ts
    // Obtain the necessary runtime helpers
    const { createArray, helperInputArray } = instance.exports;

    // Create a new array in WebAssembly and get a reference to it.
    let arrayPtr = createArray(1000001);
    // let arrayPtr = Array(1000001);
    // Array - Input
    const start = Date.now();
    helperInputArray(arrayPtr);
    const end = Date.now();
    wasmTime = end - start;
  }

  return (
    <div className="indicator">
      <div>AS-WASM (ArgsArray)</div> <div>{wasmTime}</div>
    </div>
  );
}

export default WasmArrayInput;
