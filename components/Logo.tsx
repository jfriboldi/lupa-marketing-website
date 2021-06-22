import React from 'react'
import Link from 'next/link'
import LupaLogo from '../assets/logo.svg'
import styled from 'styled-components'
import { defaultTheme } from '../utils'


const LogoCont = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const Logo = () => {
  return (
    <LogoCont>
      <Link href="/">
        <a>
          <LupaLogo fill={defaultTheme.lupaRed} />
        </a>
      </Link>
    </LogoCont>
  )
}

export default Logo