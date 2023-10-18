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
                <Card image="/images/modelo1.jpg" description="Vestido Azul + Luvas pretas" price="R$ 120,00"></Card>
                <Card image="/images/modelo2.jpg" description="Vestido Vermelho renda da jamaica" price="R$ 120,00"></Card>
                <Card image="/images/modelo3.jpg" description="Vestido esquisito prata bla bla bla" price="R$ 120,00"></Card>
                <Card image="/images/modelo1.jpg" description="Vestido Azul + Luvas pretas" price="R$ 120,00"></Card>
                <Card image="/images/modelo3.jpg" description="Vestido esquisito prata bla bla bla" price="R$ 120,00"></Card>
                <Card image="/images/modelo2.jpg" description="Vestido Vermelho renda da jamaica" price="R$ 120,00"></Card>
            </TrendingContent>
        </TrendingContainer>
    );
};