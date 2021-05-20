import React from 'react'
import Link from 'next/link'
import styled from "styled-components";
import Therapy from "../assets/therapy.svg"; 
import Education from "../assets/education.svg"; 
import Book from "../assets/book.svg"; 

const CatWrapper = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, minmax(100px, 300px));
  background: ${props => props.theme.secondaryColor};
  grid-gap: 2px;
  box-shadow: 0 5px 16px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
`;

const CatLinks = styled.a`
  display: grid;
  justify-items: center;        
  grid-gap: 10px;
  padding: 2em 0;
  background-size: 100% 200%;
  cursor: pointer;
  background-color: ${props => props.theme.formElementBackground};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
  
`;
const Categories = () => {
  
  return (
    
      <CatWrapper>
    
          <Link href="/atendimento">
            <CatLinks>
              <Therapy width={48} height={48} fill={"#000"} />
              <div>Atendimento</div>
            </CatLinks>
          </Link>
      
    
          <Link href="/formacao">
            <CatLinks>
              <Education width={48} height={48} fill={"#000"} />
              <div>Formação</div>
            </CatLinks>
          </Link>
      
    
          <Link href="/editora">
            <CatLinks>
              <Book width={48} height={48} fill={"#000"} />
              <div>Editora</div>
            </CatLinks>
          </Link>
      
      </CatWrapper>
    
  )
}

export default Categories