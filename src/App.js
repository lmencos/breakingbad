import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './Frase';

//-------------------------------------------------------
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  scroll-padding-top: 5rem;
  flex-direction: column;
  margin: .9rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #154F3C 0%, 
  #007D35 40%, #0F574E 100%);
  /* background-size: 12rem; */
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  padding: .3rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  border: 1px solid black;
  transition: background-size .6s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
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

  //Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, [] )

  return (
    
      <div className="App">
        <Contenedor>
          <Frase
            frase={frase}
          />
          <Boton
            onClick={consultarAPI}
          >
            Get another phrase
          </Boton>
        </Contenedor>
      </div>
    
  );
}

export default App;
