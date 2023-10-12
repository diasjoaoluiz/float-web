"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/app/GlobalStyles';
import { IconsContainer, MobileMenuContainer, TopContainer, Content, MenuItem, ImageArrow, Icons } from './Styled.MobileMenu';

export default function MobileMenu ({active}) {
    return (
        <MobileMenuContainer sidebar={active}>
            <TopContainer>
                <IconsContainer>
                    <Icons src="/images/search.png" alt=""></ Icons>
                    <Icons src="/images/user.png" alt=""></ Icons>
                    <Icons src="/images/shopping-cart.png" alt=""></ Icons>
                </IconsContainer>
            </TopContainer>
            <Content>
                <MenuItem>
                    <Text size="medium">Home</Text>
                    <ImageArrow src="/images/angle-small-right.png" alt=""></ImageArrow>
                </MenuItem>
                <MenuItem>
                    <Text size="medium">Fones de Ouvido</Text>
                    <ImageArrow src="/images/angle-small-right.png" ></ImageArrow>
                </MenuItem>
                <MenuItem>
                <Text size="medium">Relogios Inteligentes</Text>
                    <ImageArrow src="/images/angle-small-right.png"></ImageArrow>
                </MenuItem>
                <MenuItem>
                    <Text size="medium">Acessorios</Text>
                    <ImageArrow src="/images/angle-small-right.png"></ImageArrow>
                </MenuItem>
            </Content>
        </MobileMenuContainer>
    );
};