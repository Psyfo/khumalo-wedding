'use client';
import Header from './Header/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <main className=''></main>
    </div>
  );
}
