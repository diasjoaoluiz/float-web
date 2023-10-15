"use client";
import styled from "styled-components";

export const MobileMenuContainer = styled.div `
    background-color: white;
    overflow-y: auto;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    height: max-content;
    width: min(400rem, 60%);
    min-height: 100vh;
    position: fixed;
    top: 0px;
    z-index: 500;
    right: 0px;
    

    @media screen and (max-width: 730px) {
        display: block;
        
    }
`;

export const Content = styled.div `
    flex-direction: column; 
`;

export const TopContainer = styled.div `
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: right;
`;

export const IconsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuItem = styled.div `
    margin-left: 20px;
    margin: 20px;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    justify-content: space-between;
`;

export const ImageArrow = styled.img `
    padding-bottom: 5px;
    width: 1.5;
    cursor: pointer;
`;

export const Icons = styled.img `
    width: 1rem;
    margin: 15px;
    padding-top: 30px;
`;
  