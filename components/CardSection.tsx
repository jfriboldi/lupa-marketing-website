import React from 'react'
import styled from 'styled-components'

type Props = {
  title?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  text-align: center;
  line-height: 1.4rem;
  @media (min-width: 769px) {
    width: 50%;
    
  }
`;

const Title = styled.h3`
  margin: 0;
`


export default function CardSection( {title, children, icon} : Props ) {
  return (
    <Card>
      {icon}
      <Title>
        {title}
      </Title>
      <p>
        {children}
      </p>
    </Card>
  )
}