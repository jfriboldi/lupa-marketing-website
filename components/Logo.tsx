import React from 'react'
import Link from 'next/link'
import LupaLogo from '../assets/lupa_logo.svg'
import styled from 'styled-components'


const LogoCont = styled.div`
  height: 80px;
  max-width: 150px;
  margin: 0 auto;
`

const LogoFooter = styled(LupaLogo)`
  path{
    fill: #fff;
  }
`

export const LogoWhite = () => {
  return (
    <Link href="/">
      <a>
        <LogoCont>
          <LogoFooter height={80}/>
        </LogoCont>
      </a>
    </Link>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoCont>
          <LupaLogo width={200}/>
        </LogoCont>
      </a>
    </Link>
  )
}

export default Logo