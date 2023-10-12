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

export const Text = styled.p`
  font-size: ${({ size }) => fontSizes[size] || fontSizes.medium};
`;
  
export default GlobalStyle;
