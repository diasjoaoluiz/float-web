import styled from "styled-components";

export const MainDiv = styled.div `
        overflow-x: hidden;
        max-width: 100%;
        margin: 0 auto;
`;

export const PosterContainer = styled.div `
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
`;

export const Info = styled.div `
        position: absolute;
        top: 20rem;
        left: 3rem;
        width: 300px;
        height: 250px;   

        @media screen and (max-width: 950px) {
                display: none;
        }
`;

export const TextPoster = styled.p `
        color: white;
        letter-spacing: 1px;
 
`;


export const Btn = styled.button `
        letter-spacing: 2px;
        width: 150px;
        height: 40px;
        border: 2px solid white; 
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

export const ContainerInfo = styled.div `
        display: none;
        @media screen and (max-width: 950px) {
                width: 100vw;
                display: block;
                background-color: gray;
                display: flex;
                margin: 0;
                padding-left: 2rem;
                padding-bottom: 1.5rem;

        }
`;

export const ImagePoster = styled.img `
        max-width: 100%;
`;

export const InfoMobile = styled.div `
        
`;