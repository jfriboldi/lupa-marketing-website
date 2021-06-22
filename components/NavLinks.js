import styled from "styled-components";
import { typeScale } from "../utils";

export const NavLink = styled.li`
  ${
    "" /* font-size: 1rem;
  padding: 1em;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph}; */
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  ${
    "" /* &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary}; */
  }
`;

export const TopBarLink = styled(NavLink)`
  ${
    "" /* background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent; */
  }
`;

export const FooterLink = styled(NavLink)`
  background: none;
  color: ${(props) => props.theme.textColorOnPrimary};
  justify-content: flex-start;
`;

export const FooterInsLink = styled.a`
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
  }
`;

export const InsideLink = styled.a`
  font-size: ${typeScale.header4};
  color: white;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
  &:before {
    content: "[";
    position: absolute;
    left: -10px;
    top: 5px;
    font-weight: 400;
    color: black;
    font-size: ${typeScale.header3};
    opacity: ${props => props.active ? 1 : 0};
  }
  &:after {
    content: "]";
    position: relative;
    right: -10px;
    color: black;
    font-weight: 800;
    font-size: ${typeScale.header3};
    top: 5px;
    opacity: ${props => props.active ? 1 : 0};
  }
  &:hover {
    color: ${props => props.theme.lupaRed};
    
  }
`;
