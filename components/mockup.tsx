import React, { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { typeScale, primaryFont } from "../utils";

const Pane = styled.div`
  min-height: 70vh;
  background: white;
  padding: 2rem 0;
  border-top: 1 px solid gray;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 960px;
  margin: auto 0;
  width: 100%;
  height: 100%;
`;

const PaneOne = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (min-width: 1320px) {
    justify-content: space-around;
  }
`;

const PaneTwo = styled.div`
  z-index: 1;
  width: 100%;
  @media (min-width: 769px) {
    width: 50%;
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 6vw, 3rem);
  line-height: clamp(2rem, 6vw, 3rem);
  text-align: center;
  color: ${props => props.theme.primaryColor};

  @media (min-width: 769px) {
    text-align: right;
  }
`;

const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  text-align: center;
  color: ${props => props.theme.secondaryColor};

  @media (min-width: 769px) {
    text-align: right;
  }
`;
const Mockup = () => {
  return (
    <Pane>
      <Container>
        <PaneOne>
          <PaneTwo>
            <Heading>
              Pós Graduação em Constelações – Relações Humanas Sistêmicas 
            </Heading>
            <Paragraph>Ensino Remoto, Online</Paragraph>
          </PaneTwo>
        <Image alt="background"
            src="/images/mockup.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          loading="lazy" />
        </PaneOne>
      </Container>
    </Pane>
  )
}

export default Mockup
