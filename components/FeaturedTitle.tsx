import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { typeScale, primaryFont } from "../utils"

const SectionHeader = styled.div`
    width: 80%;
    text-align: center;
    border-bottom: 1px solid #bfbfbf;
    margin: 0 auto;
  `;

  const Heading = styled.h1`
    font-size: ${typeScale.header2};
    font-family: ${primaryFont};
    color: ${props => props.theme.primaryColor };
  `;

  
  

const FeaturedTitle: FC<{ title: string; }> = ({
  title,
  }) => {
  
  return (
    <SectionHeader>
      <Heading>
        {title}
      </Heading>
    </SectionHeader>
    
  )
}

export default FeaturedTitle