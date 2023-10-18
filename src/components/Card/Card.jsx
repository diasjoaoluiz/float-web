"use client"
import Link from 'next/link';
import Image from 'next/image';
import { CardContainer, CardContent, ImageCard, Pt10 } from './Styled.Card';
import { Text, TextBold } from '@/app/GlobalStyles';

export default function Card (props) {
    return( 
        <CardContainer>
            <CardContent>
                <ImageCard src={props.image} alt=""></ImageCard>
                <Text size="small">{props.description}</Text>
                <Pt10><TextBold size="small">{props.price}</TextBold></Pt10>
            </CardContent>
        </CardContainer>
    );
};