"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { Text } from '@/app/GlobalStyles';
import { MainDiv, PosterContainer, ImagePoster, Info, TextPoster, Btn, ContainerInfo } from './Styled.Poster'

export default function Poster () {
    return(
        <MainDiv>
            <PosterContainer>
                <ImagePoster src="https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg" alt=""></ImagePoster>
                <Info>
                    <Text size="medium">E isso mesmo rapaziada <br /> bla bla bla bla bla bla bnla bnlsed</Text>
                    <Btn>SAIBA MAIS</Btn>
                </Info>
            </PosterContainer>
            <ContainerInfo>
                <div>
                <Text size="medium">E isso mesmo rapaziada <br /> bla bla bla bla bla bla bnla bnlsed</Text>
                    <Btn>SAIBA MAIS!</Btn>
                </div>
            </ContainerInfo>
        </MainDiv>
    );
};