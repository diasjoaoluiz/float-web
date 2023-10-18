"use client"
import React from 'react';
import GlobalStyle from './GlobalStyles';
import Poster from '@/components/Poster/Poster';
import Trending from '@/components/Trending/Trending';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Poster />
      <Trending />
      <Footer />
      <GlobalStyle />
    </main>
  )
}
