"use client"
import Link from 'next/link';
import Image from 'next/image';
import Card from '../Card/Card';
import { Text, Title } from '@/app/GlobalStyles';
import { Pl10, TrendingContainer, TrendingContent } from './Styled.Trending';

export default function Trending () {
    return(
        <TrendingContainer>
            <Pl10><Title>Trending Now</Title></Pl10>
            <TrendingContent>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </TrendingContent>
        </TrendingContainer>
    );
};