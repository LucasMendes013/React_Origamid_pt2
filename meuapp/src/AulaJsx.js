import React from 'react'

//O JSX é uma extensão para o Javascript que introduz o elemento XML(Adiciona elementos parecidos com HTML) que posteriormente são convertidos em funções de React pelo Babel.


//Funcionalidades: Escrever no HTML e CSS pelo Javascript, fica mais nítido as mudanças.
const Jsx = () => {

  return (
      <div>
      </div>
          )
}

//Casos especiais: Pelo fato do HTML reservar palavras, não podemos por exemplo usar class="", existe uma pequena mudança nessa propriedade para className="", assim como para outras propriedades:

const exemplo = () => {

  return (
    <>
      <div className='grid'>
        Origamid
      </div>
      <form>
       <label htmlFor='nome'></label>
       <input type='text' id='nome'></input>
      </form>
    </>
          )
}

//Expressões e Variáveis podem ser colocadas do Javascript para o React usando {}
const exempl2 = () => {
  let palavra = 'ola'
  let classe = 'classeDiv'

  return (
    <>
      <div className={classe}>{palavra}</div>
    </>
          )
}


//JSX Expressões
//Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.

const App = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};


//Style
//O style irá receber um objeto com as propriedades do elemento em camelCase.

const App = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  );
};


export default Jsx; //sempre exportaremos a função para fora

