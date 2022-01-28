import useWasmHelper from './useWasmHelper';
import { helperArray } from './helper';

function App() {
  const instance = useWasmHelper();
  // Wasm helper see assembly/index.ts
  let wasmTime = 0;
  let wasmFATime = 0;

  if (instance) {
    // Array
    const wasmHelper = instance.exports.helperArray;
    const start = Date.now();
    wasmHelper();
    const end = Date.now();
    wasmTime = end - start;

    // FloatArray
    const wasmFAHelper = instance.exports.helperFloatArray;
    const startFA = Date.now();
    wasmFAHelper();
    const endFA = Date.now();
    wasmFATime = endFA - startFA;
  }

  // JS helper
  const start = Date.now();
  helperArray();
  const end = Date.now();
  const jsTime = end - start;

  return (
    <div className="App">
      <header className="App-header">
        <div className="indicator">
          <div>WASM-FA</div> <div>{wasmFATime}</div>
        </div>
        <div className="indicator indicator-1">
          <div>JS</div> <div>{jsTime}</div>
        </div>
        <div className="indicator indicator-2">
          <div>WASM-A</div> <div>{wasmTime}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
