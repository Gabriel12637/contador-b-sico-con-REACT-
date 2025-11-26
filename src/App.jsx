import React from "react";
import Botom from "./Botom.jsx";
import "./App.css";

function App() {
  let saludo = "Hola Mundo";
  return (
    <div className="color-fondo">
      <h1>Holas</h1>
      <h2>{saludo}</h2>
      <Botom />
    </div>
  );
}
export default App;

