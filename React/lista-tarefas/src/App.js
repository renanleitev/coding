import React from "react";
import Main from "./components/Main";
import './App.css';
// Componentes sem estado = Não é possível modificar atributos
function App(){
  // Cada função/componente só retorna um elemento
  return (
    // Usando <> fragrments para envolver os outros elementos
    <>
      <Main/>
    </>
  )  ;
}

export default App;