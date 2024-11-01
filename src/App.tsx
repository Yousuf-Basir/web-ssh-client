import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  const handleWasmAdd = () => {
    const result = window.add(count, 10)
    setResult(result);
  }

  useEffect(() => {
    handleWasmAdd();
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count} result is {result}
        </button>
    </div>
  )
}

export default App
