import React, { useState } from 'react'
import styled from 'styled-components'
import { typeScale, primaryFont } from "../utils";
import { EmailInput } from './TextFields'
import { PrimaryButton } from "./Buttons"
import CloseIcon from "../assets/closeicon.svg"


const Pane = styled.div`
  min-height: 50vh;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+");padding: 2em 0;
  display: flex;
  align-items: center;
  position: relative;
  padding: 5em 0;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.20);
`;

const Heading = styled.h2`
  font-size: ${typeScale.header2};
  margin: 0 0 2em 0;
  font-family: ${primaryFont};
  color: ${props => props.theme.primaryColor};
  text-align: center;
  line-height: 1em;
`;

const Subheader = styled.h5`
  font-size: ${typeScale.header5};
  margin: 0 0 0.2em 0;
  color: ${props => props.theme.secondaryColor};
  text-align: center;
`
const InputCont = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`

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

const Message = styled.div`
  color: ${props => props.theme.textColorOnPrimary};
  background-color: ${props => props.theme.status.successColor};
  position: absolute;
  top: 50px;
  margin: 0 auto;
  width: 400px;
  z-index: 10;
  padding: 2em;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const BtnMdf = styled(PrimaryButton)`
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 14px 20px;
  width: 316px;

  @media (min-width: 769px) {
    width: unset;
  }
`
const Subscribe = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const cleanInput = () => {
    document.querySelector('input').value = "";
  }

  const seeEmail = (e) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(e) ) {
        setValidEmail(false)
    }
    else {
        setValidEmail(true)
    }
  }
  const handlePress = async () => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await response.json();
    if (data) {
      setShowModal(true);
    }
  };
  return (
    <Pane>
      <Subheader>Fique por dentro das novidades do Instituto Oca</Subheader>
      <Heading>Inscreva-se em nossa Newsletter!</Heading>
      <InputCont>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder='voce@exemplo.com.br'
            onChange={e => { 
              setEmail(e.target.value)
              seeEmail(e.target.value)}}
          />
        </div>
        <BtnMdf disabled={validEmail} onClick={handlePress} >Inscrever</BtnMdf>
      </InputCont>
      <Message style={{ opacity: showModal ? '1' : '0' }}>Obrigado! Seu Email foi recebido com sucesso!
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => {
            setShowModal(false)
            cleanInput()
          }}
        >
          <CloseIcon fill={'#fff'} width={24} height={24} />
        </CloseModalButton>
      </Message>
    </Pane>
  )
}

export default Subscribe