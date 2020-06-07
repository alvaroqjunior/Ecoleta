import React, { useState } from 'react';
import './App.css';
import Header from './Header';

//JSX : sintage xml dentro do javascript

function App() {
  const [counter, setCounter] = useState(0);//[valorDoEstado, funcao para atualizar o valor do estado] 

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="teste" />
      <Header title={`Contador: ${counter}`} />
      <h1>{counter} {counter * 2}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
