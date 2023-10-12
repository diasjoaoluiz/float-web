"use client";
import styled from "styled-components";

export const FooterContainer = styled.div `
    margin: 100px 200px 20px 200px;

    @media screen and (max-width: 950px) {
        margin: 20px 20px 2px 5px;
    }
`;

export const Top = styled.div `
    display: flex;
    gap: 50px;

    @media screen and (max-width: 950px) {
        display: block;
    }
`;

export const TopSections = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: justify;
    font-size: 14px;

    @media screen and (max-width: 950px) {
        flex: 1;
        display: block;
        flex-direction: row;
        gap: 10px;
        text-align: justify;
        font-size: 14px;
    }
`;

export const RowMobile = styled.div `
    display: none;

    @media screen and (max-width: 950px) {
        display: block;
        border-bottom: 1px solid gray;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: right;
    }
`;

export const ContainerRowMobile = styled.div `
    display: block;

    @media screen and (max-width: 950px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const ImageRowMobile = styled.img `
    width: 1.5;
    display: none;
    @media screen and (max-width: 950px) {
        display: block;
    }
`;

export const Titles = styled.h1 `
    font-size: 18px;
    font-weight: 500;
    color: #555;
    @media screen and (max-width: 950px) {
        display: block;
    }
`;

export const FooterText = styled.span `
    color: gray;
    @media screen and (max-width: 950px) {

        display: block;
    }
`;

export const Bottom = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;

export const Left = styled.div `
    display: flex;
    align-items: center;
`;

export const Logo = styled.img `
    width: 3rem;
`;

export const Copyright = styled.span `
    margin-left: 20px;
    font-size: 12px;
    color: gray;
`;

export const Right = styled.div `
    
`;

export const Payments = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const ImgPayments = styled.img `
    width: 3rem;
`;