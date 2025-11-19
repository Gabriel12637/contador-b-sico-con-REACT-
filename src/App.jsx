import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador Básico</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <br /><br />
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
      <br /><br />
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  )
}

export default App

