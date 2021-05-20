import React, { FC } from 'react'
import styled from 'styled-components'

const Pane = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: calc(100vh - 120px);
  
  @media (min-width: 769px) {
    padding: 0 8rem;
  }
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: clamp(1rem, 4vw, 3rem);
  margin-bottom: 1rem;
  color: ${props => props.theme.secondaryColor};
  &:first-letter {
    color: ${props => props.theme.primaryColor};
  } 
`;

const Paragraph = styled.p`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  line-height: clamp(1.2rem, 4vw, 2rem);
  color: #4f5c6e;
`

const Hero: FC<{ content: { title1: string; body: string } }> = ({ content }) => {
  return (
    <Pane>
      <div>
        <Heading >
          {content.title}
        </Heading>
        <Paragraph>
          {content.body}
        </Paragraph>
      </div>
    </Pane>
  )
}

Hero.defaultProps = {
  content: {
      title: 'O pinto pia enquanto a pia pinga',
      body: 'Formação e Atendimento na Abordagem Sistêmica Fenomenológica',
    }
}
export default Hero
