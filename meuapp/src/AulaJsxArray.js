import React from "react";

//JSX Arrays
//O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado

const App22 = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  return <p>{produtos}</p>;
};


//Keys
//O JSX necessita de uma key única para cada elemento da Array. 
const App33 = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};


//Map
//É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
//Map pode ser usado como um laço de repetição para Arrays, faz determinada ação estipulada para cada um dos itens.

const App4 = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

//Array de Objetos
//O cenário mais comum é trabalhar com array's de objetos.
//O Método filter pode cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const App5 = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};

//Desestruturar:
//Tirar um valor primitivo ou uma estrutura de dados de dentro de outra estrutura
//Exemplo 1: Objeto

const pessoa = {
  idade: 20,
  nome: 'lucas'
}

let { idade } = pessoa
let { nome } = pessoa
console.log(idade) //20 
console.log(nome) //'lucas' 

//Podemos também retitular uma destruturação:

const pessoa2 = {
  idade: 20,
  nome: 'lucas mendes'
}

let { idade : age } = pessoa
console.log(age) //20
console.log(idade) //erro, não existe essa let


//Podemos desestruturar um array também:
const frutas = ['banana', 'acerola', 'figo']
const banana = fruits[0]
console.log(banana)//banana

//e até mesmo sem utilizar necessariamente o nome ja citado acima:
const fruits = ['banana', 'acerola', 'figo']
const [b, p] = fruits
console.log(b,p)//banana, acerola

//se quisermos pegar alguns menos outros, basta deixar o espaco vazio seguido de uma vírgula:
const fruits2 = ['banana', 'acerola', 'figo']
const [, a, f] = fruits
console.log(a,f) //acerola, figo

//usando o operador rest ... tem o significado de retornar o restante
const fruits3 = ['banana', 'acerola', 'figo']
const [ acc, ...rest] = fruits
console.log(acc,f) //banana, acerola figo





//Eventos
// Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

const App6 = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};



//Propriedades
//Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecimentos como propriedades ou props.
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

const App7 = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};

//Múltiplas Propriedades
//Podemos passar quantas propriedades quisermos

const Titulo33 = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App8 = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};


//Estado
//  O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

const Ap123p = () => {
  const ativo = true;

  return (
    <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
  );
};


//Hooks
//Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.
const App444 = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

//React.useState
//O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

//Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

const App666 = () => {
  const [ativo, setAtivo] = React.useState(true);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

//Múltiplos Estados
//Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.
const App5432 = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: '', idade: '' });

  return <div></div>;
};


//Props
//Podemos passar o estado e a função de modificação como propriedades para outros elementos.
// import React from 'react';
// import Modal from './Modal';
// import ButtonModal from './ButtonModal';

// const App999 = () => {
//   const [modal, setModal] = React.useState(false);

//   return (
//     <div>
//       <Modal modal={modal} setModal={setModal} />
//       <ButtonModal setModal={setModal} />
//     </div>
//   );
// };

// export default App;

//Reatividade
//Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

const App = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
};


//Callback
//Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.

const App3 = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};


//React.StrictMode
//O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas.
//Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.
const Contador = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      setItems((items) => [...items, 'Item ' + (contar + 1)]);
      return contar + 1;
    });
    // Tirar o efeito de dentro do setContar irá concertar o erro
    // setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

