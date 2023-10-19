"use client"
import React from 'react';
import GlobalStyle from './GlobalStyles';
import Poster from '@/components/Poster/Poster';
import Trending from '@/components/Trending/Trending';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Poster2 from '@/components/Poster2/Poster2';

export default function Home() {
  return (
    <main>
      <Header />
      <Poster />
      <Trending />
      <Poster2 />
      <Footer />
      <GlobalStyle />
    </main>
  )
}
