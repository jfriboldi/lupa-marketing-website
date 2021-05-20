import React, { FC } from 'react'
import NextLink from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import { TopBarLink, InsideLink } from "./NavLinks";
import Logo from './Logo';
import styled from 'styled-components';
import Translation from './Translation'

type Props = {
  active?: boolean;
};

const Pane = styled.div`
  width: 100vw;
  padding: 0;
  border-bottom: 1 px solid gray;
  height: 120px;
  background: ${props => props.theme.backgroundColor};
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0px 0px 1px rgba(67, 90, 111, 0.47);
  
  
`;

const Container = styled.div`
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  
`;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 1em;
`;

const ListCont = styled.ul<Props>`
  display: ${props => props.active ? 'flex' : 'none'};
  position: ${props => props.active ? 'fixed' : 'relative'};
  flex-direction: ${props => props.active ? 'column' : 'row'};
  top: ${props => props.active ? '120px' : 'unset'};
  left: ${props => props.active ? '0' : 'unset'};
  background-color: #fff;
  list-style-type: none;
  margin: 0;
  padding: ${props => props.active ? '8em 0' : '0'};
  justify-content: space-around;
  align-items: center;
  height: calc(100% - 120px);
  width: ${props => props.active ? '100%' : 'clamp(60%, 800px, 80%)'};
  
  

  @media (min-width: 850px) {
    display: flex;
    
  }
`;

const LayoutProt = styled.div`
  position: relative;
  height: 120px;
`

const Navigation: FC<{ links?: { name: string; link: string }[] }> = ({ links }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <nav>
        <LayoutProt />
        <Pane>
          <Container>
            <Panel>
              <Logo />
              <ListCont active={active}>
              {links && links.length > 0 ? links.map((link) => (
                <TopBarLink key={link.name}>
                  <NextLink href={link.link}>
                    <InsideLink>
                      {link.name}
                    </InsideLink>
                  </NextLink>
                </TopBarLink>
                ))
                : null}
              </ListCont>
              <Translation />
          </Panel>
        </Container>
      </Pane>
    </nav>
  </>
  );
}

Navigation.defaultProps = {
  links: [{ name: 'Atendimento', link: '/atendimento' },
          { name: 'Formações', link: '/formacao' },
          { name: 'Editora', link: '/editora' },
          { name: 'Quem Somos', link: '/quem-somos' }],
}


    
export default Navigation