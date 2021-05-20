import React from "react";
import styled from "styled-components";
import { typeScale, primaryFont } from "../utils";

const Input = styled.input`
  width: 316px;
  height: 52px;
  background-color: ${(props) => props.theme.formElementBackground};
  border: none;
  padding-left: 8px;
  font-family: ${primaryFont};
  border-radius: 2px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  color: ${(props) => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin-bottom: 8px;
`;

export const NormalInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor={label}>{label}</Label>
    <Input id={label} type="text" placeholder={placeholder} />
  </div>
);

export const EmailInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="email">{label}</Label>
    <Input id="email" type="email" placeholder={placeholder} />
  </div>
);

export const PasswordInput = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="password">{label}</Label>
    <Input id="password" type="password" placeholder={placeholder} />
  </div>
);
