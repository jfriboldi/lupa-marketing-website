import Link from "next/link";
import Copyright from "./Copyright";
import { LogoWhite } from "./Logo"
import Lupa from "./Lupa";
import styled from "styled-components"
import { FooterLink, FooterInsLink } from "./NavLinks"
import { SocialList } from "./SocialList";


const Container = styled.div`
  background: ${props => props.theme.primaryColor};
  position: relative;
  padding: 1em 2em;
  min-height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  
  @media (min-width: 769px) {
    flex-direction: row;
    
  }
`;

const UnList = styled.ul`
  text-align: left;
  list-style: none;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`;

const LiTitle = styled.span`
    font-size: 1.2em;
    color: ${props => props.theme.primaryActiveColor};
    font-weight: 400;
  `;

const CopyRightSocial = styled.div`
  background: ${props => props.theme.secondaryColor};
  padding: 2em 2em 0;
  margin: 0;
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  `;
const LogoSec = styled.div`
  background: ${props => props.theme.primaryColor};
  position: relative;
  padding: 2em 0 0;
  min-height: 5vh;
  width: 100vw;
  overflow: hidden;
`

const Sector = styled.section`
  overflow: hidden;

`
export default function Foot() {
  
  return (
    <Sector>
      <LogoSec>
        <LogoWhite />  
      </LogoSec>
    <Container>
        
    <UnList>
      <FooterLink>
        <LiTitle>Empresa</LiTitle>
      </FooterLink>
      <FooterLink>
        <Link href="/atendimento">
          <FooterInsLink>Atendimento</FooterInsLink>
        </Link>
      </FooterLink>
      <FooterLink>
        <Link href="/formacao">
          <FooterInsLink>Formação</FooterInsLink>
        </Link>
      </FooterLink>
      <FooterLink>
        <Link href="/editora">
          <FooterInsLink>Editora</FooterInsLink>
        </Link>
      </FooterLink>
      <FooterLink>
        <Link href="/quem-somos">
          <FooterInsLink>Quem Somos</FooterInsLink>
        </Link>
      </FooterLink>
    </UnList>
    <UnList>
      <FooterLink>
        <LiTitle>Contatos</LiTitle>
      </FooterLink>
      <FooterLink>
        <Link href="/atendimento">
            <FooterInsLink>
              (65) 99625-9726
            </FooterInsLink>
        </Link>
      </FooterLink>
      <FooterLink>
        <Link href="/formacao">
          <FooterInsLink>(65) 99987-1354</FooterInsLink>
        </Link>
      </FooterLink>
      <FooterLink>
        <Link href="/editora">
          <FooterInsLink>secretaria@institutooca.com.br</FooterInsLink>
        </Link>
          </FooterLink>
    </UnList>
    <UnList>
      <FooterLink>
        <LiTitle>Endereço</LiTitle>
      </FooterLink>
      <FooterLink>
        <Link href="/atendimento">
            <FooterInsLink>
              Edifício Amazon Business Center,<br />
              Av. São Sebastião, nº 3.125,<br />
              Sala 902 - Quilombo - Cuiabá MT<br />
              CEP 78045-305
            </FooterInsLink>
        </Link>
      </FooterLink>
        </UnList>
    
      </Container>
        
    <CopyRightSocial>
      <Lupa /> 
      <SocialList />
      <Copyright />
    </CopyRightSocial>
  </Sector>    
  );
}
