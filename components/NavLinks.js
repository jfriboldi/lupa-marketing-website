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
  text-align: center;
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0px;
    height: 5px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.5s;
    opacity: 0;
    background-color: ${(props) => props.theme.primaryHoverColor};
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  &:hover {
    &:before,
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
`;
