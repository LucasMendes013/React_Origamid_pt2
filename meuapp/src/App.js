import React from 'react';


const App = () => {
const [ativo, setAtivo] = React.useState(false)

function handleClick(){
  setAtivo(!ativo)
}

const resultadoAtivo = function ( ){
  const img = https://i.pinimg.com/originals/72/57/a2/7257a2f13713822b2ea934d4d7697c53.png
  if (ativo === true) {
    <img src={img} ></img>
  }
}

  return (

    <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>

  )
}



export default App;
