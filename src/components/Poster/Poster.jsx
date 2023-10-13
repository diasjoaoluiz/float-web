"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { MainDiv, PosterContainer, ImagePoster, Info, TextPoster, Btn, ContainerInfo } from './Styled.Poster'

export default function Poster () {
    return(
        <MainDiv>
            <PosterContainer>
                <ImagePoster src="https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg" alt=""></ImagePoster>
                <Info>
                    <TextPoster>E isso mesmo rapaziada <br /> bla bla bla bla bla bla bnla bnlsed</TextPoster>
                    <Btn>SAIBA MAIS</Btn>
                </Info>
            </PosterContainer>
            <ContainerInfo>
                <div>
                    <TextPoster>E isso mesmo rapaziada <br /> bla bla bla bla bla bla bnla bnlsed</TextPoster>
                    <Btn>SAIBA MAIS!</Btn>
                </div>
            </ContainerInfo>
        </MainDiv>
    );
};