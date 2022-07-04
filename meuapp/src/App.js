import React from "react";

const App = () => {
  const nome = 'Lucas'
  const estilo = {
    color: 'blue',
    fontSize: '30px',
    fontFamily: 'Helvetica',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '2000px',
  }
  return  (
    <>
      <div className="divisoria" style={estilo}>Olá Mundo</div>
      <label htmlFor="nome">Nome {nome}</label>
      <input type="text" id="nome"></input>
    </>

          )
  
}

export default App