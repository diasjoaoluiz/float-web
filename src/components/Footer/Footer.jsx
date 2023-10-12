"use client"
import React from 'react';
import { FooterContainer, Top, TopSections, Titles, ContainerRowMobile, FooterText, ImageRowMobile, RowMobile, Bottom, Left, Logo, Copyright, Right, Payments, ImgPayments } from './Styled.Footer';


export default function Footer () {
    return(
        <FooterContainer>
            <Top>
                <TopSections>
                    <Titles>Cetegorias</Titles>
                    <ContainerRowMobile>
                        <FooterText>Mulheres</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Homens</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Tenis</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Acessorios</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Lancamento</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                </TopSections>
                <TopSections>
                    <Titles>Links Uteis</Titles>
                    <ContainerRowMobile>
                        <FooterText>SAQ</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Paginas</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Bla blabla</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Compare</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                    <ContainerRowMobile>
                        <FooterText>Cookies</FooterText>
                        <ImageRowMobile src="/images/angle-small-right.png"></ImageRowMobile>
                    </ContainerRowMobile>
                    <RowMobile></RowMobile>
                </TopSections>
                <TopSections>
                    <Titles>Sobre</Titles>
                    <FooterText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quisquam harum aliquam ad modi ab, iure enim vel tempore? Magnam optio distinctio porro autem iure dolore amet, quo quis praesentium.</FooterText>  
                </TopSections>
                <TopSections>
                    <Titles>Contato</Titles>
                    <FooterText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quisquam harum aliquam ad modi ab, iure enim vel tempore? Magnam optio distinctio porro autem iure dolore amet, quo quis praesentium.</FooterText>
                </TopSections>
            </Top>
            <Bottom>
                <Left>
                    <Logo src="/images/logo.png" alt=""></Logo>
                    <Copyright>© 2023 Loja Float Mart - Todos os direitos reservados.</Copyright>
                </Left>
            </Bottom>
            <Right>
                <Payments>
                    <ImgPayments src="/images/cc-visa.png"></ImgPayments>
                </Payments>
            </Right>
        </FooterContainer>
    );
};