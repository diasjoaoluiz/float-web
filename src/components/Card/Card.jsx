"use client"
import Link from 'next/link';
import Image from 'next/image';
import { CardContent, ImageCard } from './Styled.Card';
import { Text, Title } from '@/app/GlobalStyles';

export default function Card () {
    return( 
        <div>
            <CardContent>
                <ImageCard src="/images/modelo2.jpg" alt=""></ImageCard>
                <Text size="small" >Vestido Prada Vermelho tamanho "M"</Text>
                <Text size="small">R$ 350,00</Text>
            </CardContent>
        </div>
    );
};