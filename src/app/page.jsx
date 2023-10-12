import Image from 'next/image'
import GlobalStyle from './GlobalStyles';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <GlobalStyle />
    </main>
  )
}
