import React from 'react'
import styled from 'styled-components'
import { typeScale, primaryFont } from "../utils";

const Pane = styled.div`
  min-height: 70vh;
  background: #ffebdb;
  padding: 2em 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;

  const Heading = styled.h2`
    font-size: ${typeScale.header2};
    margin-bottom: 2rem;
    font-family: ${primaryFont};
    color: ${props => props.theme.primaryColor};
    text-align: center;
  `;

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    width: 90%;
    gap: 20px;
    

    @media (min-width: 769px) {
      flex-direction: row;
      
    }
  `;

  const Card = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    box-shadow: 0px 0px 5px rgba(67, 90, 111, 0.47);
    border-radius: 10px;
    @media (min-width: 769px) {
      width: clamp(20%, 400px, 30%);
    }
    `;

const FeatureCards = () => {
  return (
    <Pane>
      <Heading>Conheça o Instituto OCA</Heading>
      <CardWrapper> 
        <Card>
          
          <h3>
            Missão
          </h3>
          <p>
            Ampliar o desenvolvimento individual e social se apropriando da Abordagem Sistêmica Fenomenológica, utilizando práticas inovadoras que trazem significado e soluções para as pessoas, empresas, instituições públicas, famílias e escolas.
          </p>
        </Card>
        <Card>
         
          <h3>
            Visão
          </h3>
          <p>
             Ser reconhecida como agente catalisador em capacitações e desenvolvimento sistêmico organizacional e pessoal.
          </p>
        </Card>
        <Card>
          
          <h3>
            Valores
          </h3>
          <p>
            Ética: atuar de forma respeitosa e responsável.

Qualidade: primazia em inovação e coerência nos conteúdos e práticas

Desenvolvimento Sustentável: ações para o coletivo e o ser humano como agente transformador.
          </p>
        
          </Card>
        </CardWrapper>
    </Pane>
  )
}

export default FeatureCards