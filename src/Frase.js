import React from 'react';
import styled from '@emotion/styled';

//----------------------------------------------
const ContenedorFrase = styled.div`
  padding: .9 rem;
  border-radius: .72rem;
  /* background: -webkit-linear-gradient(top left, #154F3C 0%, 
  #007D35 40%, #0F574E 100%); */
  /* background-size: 100rem; */
  border: solid 1px #154F3C;

  @media (min-width: 45%){
    margin-top: .9rem;
    max-width: 90%;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    text-align: center;
    position: relative;
    padding: .9rem;
    color: #14463C;

    &::before {
      /* content: open-quote; */
      font-size: 3rem;
      color: #154F3C;
      position: absolute;
      left: -2rem;
      top: -9rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    color: #154f3C;
    margin-top: .3rem;
  }
`;

//----------------------------------------------
const Frase = ({ frase }) => {

  if(Object.keys(frase).length === 0) return null;

  return ( 
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </ContenedorFrase>
   );
}
export default Frase;