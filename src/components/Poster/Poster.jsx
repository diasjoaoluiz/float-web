"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { Text, TextWhite, DefaultButton } from '@/app/GlobalStyles';
import { MainDiv, PosterContainer, ImagePoster, Info, TextPoster, Btn, ContainerInfo } from './Styled.Poster'

export default function Poster () {
    return(
        <MainDiv>
            <PosterContainer>
                <ImagePoster src="https://picsum.photos/2000/850" alt=""></ImagePoster>
                <Info>
                    <TextWhite size="medium">E isso mesmo rapaziada <br /> bla bla bla bla bla bla bnla bnlsed</TextWhite>
                    <DefaultButton>SAIBA MAIS</DefaultButton>
                </Info>
            </PosterContainer>
            <ContainerInfo>
                <div>
                <TextWhite size="medium">E isso mesmo rapaziada <br /> bla bla bla bla bla bla bnla bnlsed</TextWhite>
                    <DefaultButton>SAIBA MAIS!</DefaultButton>
                </div>
            </ContainerInfo>
        </MainDiv>
    );
};