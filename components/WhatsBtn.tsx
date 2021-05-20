import React from 'react'
import styled from 'styled-components'
import Whats from '../assets/whatsapp.svg'

const DevBy = styled.div`
  position: fixed;
  padding: 0.5em;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  background: ${props => props.theme.status.successColor};
  &:hover {
    background-color: ${props => props.theme.status.successColorHover};
  }

  @media (min-width: 769px) {
    padding: 1em;
    bottom: 50px;
    right: 50px;
  }

`
export default function WhatsBtn() {
  return (
    
      <DevBy>
        <a href="https://api.whatsapp.com/send?phone=5565996259726&text=Ol%C3%A1!%20Venho%20pelo%20site.">
          <Whats width={50} height={50} fill={"#fff"} />
        </a>
      </DevBy>
     
  )
}