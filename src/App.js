import React, { useState } from 'react';
import styled from '@emotion/styled';
import Frase from './Frase';

//-------------------------------------------------------
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  scroll-padding-top: 5rem;
  flex-direction: column;
  margin: 1.2rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #154F3C 0%, 
  #007D35 40%, #0F574E 100%);
  background-size: 12rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  padding: .3rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  border: 1px solid black;
`;

//--------------------------------------------------------
function App() {

  //state de frases
  const [ frase, guardarFrase ] = useState({});
  
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    console.log('la frase es: ', frase[0]);

    guardarFrase(frase[0]);
  };

  return (
    
      <div className="App">
        <Contenedor>
          <Frase
            frase={frase}
          />
          <Boton
            onClick={consultarAPI}
          >
            Obtener frase
          </Boton>
        </Contenedor>
      </div>
    
  );
}

export default App;
