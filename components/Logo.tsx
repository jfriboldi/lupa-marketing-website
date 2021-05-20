import React from 'react'
import Link from 'next/link'
import LupaLogo from '../assets/logo_b.svg'
import LogoInv from '../assets/logo_w.svg'
import styled from 'styled-components'


const LogoCont = styled.div`
  width: 100%;
  height: 90%;
  max-width: 150px;
  
`


export const LogoWhite = () => {
  return (
    <Link href="/">
      <a>
        <LogoCont>
          <LogoInv height={80}/>
        </LogoCont>
      </a>
    </Link>
  )
}

const Logo = () => {
  return (
    <LogoCont>
      <Link href="/">
        <a>
          <LupaLogo />
        </a>
      </Link>
    </LogoCont>
  )
}

export default Logo