import React from 'react'
import styled from 'styled-components'
import {useTranslations} from 'next-intl';

const Pane = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: calc(100vh - 120px);
  background-color: ${props => props.theme.lupaBlue};
  @media (min-width: 769px) {
    padding: 0 8rem;
  }
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: clamp(1rem, 4vw, 3rem);
  font-weight: 300;
  margin-bottom: 1rem;
  color: white;
  
`;

const Paragraph = styled.p`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  line-height: clamp(1.2rem, 4vw, 2rem);
  color: white;
`

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <Pane>
      <div>
        <Heading >
          {t('title')}
        </Heading>
        <Paragraph>
          {t('body')}
        </Paragraph>
      </div>
    </Pane>
  )
}

Hero.defaultProps = {
  content: {
      title: 'O pinto pia enquanto a pia pinga',
      body: 'Nunca diga nunca',
    }
}


export default Hero
