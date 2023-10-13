"use client"
import React from 'react';
import GlobalStyle from './GlobalStyles';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Poster from '@/components/Poster/Poster';

export default function Home() {
  return (
    <main>
      <Header />
      <Poster />
      <Footer />
      <GlobalStyle />
    </main>
  )
}
