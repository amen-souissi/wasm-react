import { useWasmCHelper } from '../hooks/useWasmHelper';

function WasmArrayC() {
  const helper = useWasmCHelper();
  // Wasm helper see assembly/index.ts
  let wasmTime = 0;
  if (helper) {
    const start = Date.now();
    const result = helper();
    const end = Date.now();
    wasmTime = end - start;
  }

  return (
    <div className="indicator">
      <div>C-WASM</div> <div>{wasmTime}</div>
    </div>
  );
}

export default WasmArrayC;
