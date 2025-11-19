import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

    return (
      <div className="container">
        <h1>Contador Básico</h1>

        <div className="number" role="status" aria-live="polite">{count}</div>

        <div className="buttons">
          <button className="btn" onClick={() => setCount(count + 1)}>Incrementar</button>
          <button className="btn secondary" onClick={() => setCount(count - 1)}>Disminuir</button>
          <button className="btn danger" onClick={() => setCount(0)}>Reiniciar</button>
        </div>
      </div>
    )
}

export default App

