import React from 'react'
import styled from 'styled-components'
import { typeScale, primaryFont } from "../utils"
import Image from 'next/image'


type Props = {
  image?: string;
  children?: any;
  subheader?: string;
  imageWidth?: number;
  imageHeight?: number;

};

const Desc = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.textColor};
  padding: 0 2em;
  line-height: 1.4rem;
`

const Section = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  padding: 2em 2em;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
    align-items: center;
  }
`

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const LeftDiv = styled.div`
    width: 100%;
    height: 100%;
    @media (min-width: 769px) {
      justify-content: center;
    }
  `;

const SubHeader = styled.h3`
  font-size: ${typeScale.header3};
  font-family: ${primaryFont};
  color: ${props => props.theme.primaryColor };
  text-align: center;
`;

const DescSection = ({ children, image, subheader, imageHeight, imageWidth } : Props) => {
  
  return (
    <Section>
      <LeftDiv>
        <Image src={image} layout="intrinsic" width={imageWidth || 1280} height={imageWidth || 605} quality={65} loading="lazy" />
      </LeftDiv>
      <RightPane>
        <SubHeader>{subheader}</SubHeader>
        <Desc>{children}</Desc>
      </RightPane>
    </Section>
    
    
  )
}

export default DescSection



