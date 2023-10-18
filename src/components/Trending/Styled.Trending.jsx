"use client"
import styled from "styled-components";

export const TrendingContainer = styled.div `
    margin: 10px;
`;

export const Pl10 = styled.div `
    padding-left: 10px;
`;

export const TrendingContent = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 990px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;