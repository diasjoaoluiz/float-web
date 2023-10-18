"use client"
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const fontSizes = {
  small: '14px',
  medium: '18px',
  large: '36px',
};


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }
`;
export default GlobalStyle;

export const Text = styled.p`
  font-size: ${({ size }) => fontSizes[size] || fontSizes.medium};
  margin:0;
`;

export const TextWhite = styled(Text)`
  color: white;
`;

export const TextBold = styled(Text)`
  font-weight: 500;
`;

export const Title = styled.h1 `
  font-size: 40px;

  @media screen and (max-width: 820px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const DefaultButton = styled.button `
  letter-spacing: 2px;
  width: 150px;
  height: 40px;
  border: 2px solid white;
  border-radius: 20px; 
  background-color: transparent; 
  padding: 10px 20px;
  text-decoration: none; 
  color: white; 
  display: inline-block; 
  cursor: pointer; 

  &:hover {
    background-color: black;
  }
`;
  

