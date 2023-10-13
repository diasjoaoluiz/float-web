"use client";
import styled from "styled-components";

export const HeaderContainer = styled.div `
    
`;

export const Container = styled.div `
    width: 100%;
    max-width: 980px;
    margin: auto;
`;

export const Content = styled.div `
    padding: 0.625em 1.875em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.div `
    display: flex;
    align-items: center;
    gap: 25px;
`;

export const Logo = styled.img `
    width: 3rem;
    left: 0;
`;

export const NavItem = styled.div `
    display: flex;
    align-items: center;
    font-size: 1.125em;

    @media screen and (max-width: 820px) {
        display: none;
    }
`;

export const NavItemRight = styled.div `
    display: flex;
    align-items: center;
    font-size: 1.125em;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`;

export const MobileMenuIcon = styled.img `
    display: none;
    cursor: pointer;

    @media screen and (max-width: 820px) {
        display: block;
        cursor: pointer;
    }
`;
