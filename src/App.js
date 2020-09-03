import React from 'react';
import styled from '@emotion/styled';

//-------------------------------------------------------
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  scroll-padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #154F3C 0%, 
  #007D35 40%, #0F574E 100%);
  background-size: 12rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  padding: .3rem;
  margin-top: 3rem;
  font-size: 1.8rem;
  border: 2px solid black;
`;

//--------------------------------------------------------
function App() {
  
  const consultarAPI = () => {
    console.log('Consultando API...')
  };

  return (
    <Contenedor>
      <div className="App">
        <Boton
          onClick={consultarAPI}
        >
          Obtener frase
        </Boton>
      </div>
    </Contenedor>
  );
}

export default App;
