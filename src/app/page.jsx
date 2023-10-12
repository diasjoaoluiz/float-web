import Image from 'next/image'
import GlobalStyle from './GlobalStyles';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Footer />
      <GlobalStyle />
    </main>
  )
}
