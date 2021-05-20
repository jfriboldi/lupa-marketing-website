import styled from "styled-components";
import { typeScale, primaryFont } from "../utils";

type Props = {
  paddingBtn?: string;
}

export const Button = styled.button<Props>`
  padding: ${props => props.paddingBtn || '8px 12px'};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button as any)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
`;

export const WhatsAppBtn = styled(Button as any)`
  background-color: ${(props) => props.theme.status.successColor};
  color: ${(props) => props.theme.textColorInverted};
  border: 2px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme.status.successColorHover};
  }

  &:active {
    background-color: ${(props) => props.theme.status.successColorActive};
  }
  
`;
