//Map
//É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.

const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};
