import React from 'react'
import styled from 'styled-components'


const DevBy = styled.div`
  display: flex;
  margin: 0 auto;

`
const ExtLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: ${props => props.theme.paragraph};
  display: flex;
  align-items: center;
`
const LinkText = styled.span`
  margin-right: 1em;
`



export default function Lupa() {
  return (
    
      <DevBy>
        <ExtLink href="https://www.lupamarketing.ca">
          <LinkText>Desenvolvido por</LinkText>
        
        </ExtLink>
      </DevBy>
     
  )
}