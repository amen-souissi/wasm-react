import { useEffect, useState } from 'react';
import * as AsBind from 'as-bind';

// Or use https://github.com/tylervipond/use-as-bind
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

export default useWasmHelper;
