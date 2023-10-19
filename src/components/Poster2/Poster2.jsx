"use client"
import Link from 'next/link';
import Image from 'next/image';
import Card from '../Card/Card';
import { ImagePoster, Pl10, Poster2Container } from './Styled.Poster2';
import { Title } from '@/app/GlobalStyles';


export default function Poster2 () {
    return(
        <Poster2Container>
            <Pl10><Title>Colecao para mulheres crentes</Title></Pl10>
            <ImagePoster src="https://picsum.photos/5000/1500"></ImagePoster>
        </Poster2Container>
    );
};
