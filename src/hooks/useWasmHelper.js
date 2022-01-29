import { useEffect, useState } from 'react';
import * as AsBind from 'as-bind';

import createHelperModule from '../helpers/helperC.mjs';

// ################################ AssemblyScipt Helper ################################

const useWasmHelper = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchWasm = async () => {
      const wasm = await fetch('wasm-helper.wasm');
      const instance = await AsBind.instantiate(wasm);
      setState(instance);
    };
    fetchWasm();
  }, []);
  return state;
};

// ################################ C Helper with Emscripten ################################

// JS-friendly wrapper around the WASM call. Memory management.
function weapHelper(Module) {
  return function helper() {
    const length = 1000000;
    // allocate memory for the result array
    const resultBuffer = Module._malloc(
      length * Float32Array.BYTES_PER_ELEMENT
    );
    // make the call
    const resultPointer = Module.ccall('helper', 'number');
    // get the data from the returned pointer
    const pointerStart = resultPointer / Float32Array.BYTES_PER_ELEMENT;
    const result = Module.HEAPF32.slice(pointerStart, pointerStart + length);
    Module._free(resultBuffer);
    return result;
  };
}

export const useWasmCHelper = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    createHelperModule().then((Module) => {
      setState(() => weapHelper(Module));
    });
  }, []);
  return state;
};

export default useWasmHelper;
