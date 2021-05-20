import React, { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from "./Buttons"
import styled from 'styled-components'
import { typeScale, primaryFont } from "../utils"

interface Props{
  invert: boolean
}

const LeftDiv = styled.div<{ invert: boolean}>`
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: 2 / 3;
    padding-bottom: 3em;

    @media (min-width: 769px) {
      justify-content: center;
      text-align: ${props => props.invert ? 'left' : 'right'};
      align-items: ${props => props.invert ? 'flex-start' : 'flex-end'};
      grid-row: unset;
      padding: 0 2em;
    }
  `;

  const Heading = styled.h1<{ invert: boolean}>`
    font-size: ${typeScale.header2};
    margin-bottom: 2rem;
    font-family: ${primaryFont};
    color: ${props => props.invert ? props.theme.primaryColor : props.theme.textColorOnPrimary };
  `;

  const Paragraph = styled.p<{ invert: boolean}>`
    font-size: ${typeScale.paragraph};
    margin-bottom: 2rem;
    font-family: ${primaryFont};
    color: ${props => props.invert ? props.theme.secondaryColor : props.theme.textColorOnPrimary };
  `;

  const RightDiv = styled.div`
    width: 100%;
    height: 100%;
    @media (min-width: 769px) {
      justify-content: center;
    }
  `;

  const Featured = styled.div<{ invert: boolean}>`
    
    background: ${props => props.invert ? 'white' : props.theme.secondaryColor};
    padding: 0;
    border-top: 1px solid rgb(228, 231, 235);
    display: flex;
    position: relative;
    overflow: hidden;
  `

  const Content = styled.div<{ invert: boolean}>`
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 30px 0;

    @media (min-width: 769px) {
      grid-template-columns: ${props => props.invert ? '60% 40%' : '40% 60%'};
      justify-content: center;
      align-items: center;
      row-gap: 0;
      gap: 0 15px; 
    }

  `

const FeatureSection: FC<{ invert?: boolean; title: string; body: string; image: string; link: string; }> = ({
  title,
  body,
  image,
  invert,
  link,
  }) => {
  
  const Left = () => (
    <LeftDiv invert={invert}>
      <Heading invert={invert}>{title}</Heading>
      <Paragraph invert={invert}>{body}</Paragraph>
      <Link href={link}>
        <PrimaryButton>
          Saiba Mais
        </PrimaryButton>
      </Link>
    </LeftDiv>
  )
  const Right = () => (
    <RightDiv>
      <Image src={image} layout="intrinsic" width={1368} height={912} quality={100} loading="lazy" />
    </RightDiv>
  )

  const children = invert ? [Right, Left] : [Left, Right]
  return (
    <>
      <Featured invert={invert}>
        <Content invert={invert}>
          {children.map((Child, i) => (
            <Child key={i}/>
          ))}
        </Content>
      </Featured>
    </>
  )
}

export default FeatureSection