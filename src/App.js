import WasmArray from './components/WasmArray';
import WasmArrayInput from './components/WasmArrayInput';
import WasmArrayC from './components/WasmArrayC';
import WasmFloatArray from './components/WasmFloatArray';
import JSArray from './components/JSArray';
import useWasmHelper from './hooks/useWasmHelper';

function App() {
  const instance = useWasmHelper();
  return (
    <div className="App">
      <header className="App-header">
        <WasmArray instance={instance} />
        <JSArray />
        <WasmArrayC />
        <WasmFloatArray instance={instance} />
        <WasmArrayInput instance={instance} />
      </header>
    </div>
  );
}

export default App;
