import React from 'react'
import styled from 'styled-components'
import { typeScale } from "../utils"
import Calendar from '../assets/calendar.svg'
import Clock from '../assets/clock.svg'
import Money from "../assets/piggy.svg"
import Duration from "../assets/duration.svg"
import Location from "../assets/location.svg"

const Card = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  
  box-shadow: 0px 0px 5px rgba(67, 90, 111, 0.47);
  border-radius: 10px;
  background: #E5E5E5;
  margin-top: 2em;
`
const Title = styled.h4`
  font-size: ${typeScale.header4};
  color: #fff;
`
const TitleBg = styled.div`
  display: flex;
  background-color: ${props => props.theme.primaryColor};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 10px;
  padding: 0 1em;
  gap: 10px;
`

const Desc = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.textColor};
  padding: 0 1em;
`
export default function CourseCard() {
  return (
    <Card>
      <TitleBg>
        <Calendar width={36} height={36} fill={"#fff"} />
        <Title>Início</Title>
      </TitleBg>
      <div><Desc>22 de maio/2021</Desc></div>
      <TitleBg>
        <Duration width={36} height={36} fill={"#fff"} />
        <Title>Duração do Curso</Title>
      </TitleBg>
      <div><Desc>19 meses</Desc></div>
      <TitleBg>
        <Clock width={36} height={36} fill={"#fff"} />
        <Title>Horários</Title></TitleBg>
      <div><Desc>sábados 09 às 13 hs - 14 as 20 hs<br />domingo das 09 as 14 hs</Desc></div>
      <TitleBg>
        <Money width={36} height={36} fill={"#fff"} />
        <Title>Investimento</Title></TitleBg>
      <div><Desc>Matrícula R$ 290,00<br /> + 20 x de R$ 380,00 boletos bancários</Desc></div>
      <TitleBg>
        <Location width={36} height={36} fill={"#fff"} />
        <Title>Local</Title>
      </TitleBg>
      <div><Desc>Ensino Remoto (On Line)</Desc></div>
    </Card>
    
     
  )
}