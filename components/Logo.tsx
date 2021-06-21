import React from 'react'
import Link from 'next/link'
import LupaLogo from '../assets/logo.svg'
import styled from 'styled-components'


const LogoCont = styled.div`
  width: 100%;
  height: 90%;
  max-width: 150px;
  
`

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