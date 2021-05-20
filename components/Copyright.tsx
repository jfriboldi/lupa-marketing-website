import React from 'react'
import styled from 'styled-components'

const Copy = styled.p`
  font-size: 1em;
  text-align: center;
  width: 100%;
  margin-top: 2em;
`

export default function Copyright() {
  return (
    <>
      <Copy>&copy; 2021 Instituto Oca - Todos os direitos Reservados</Copy>
    </>
  );
}
