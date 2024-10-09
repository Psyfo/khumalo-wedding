'use client';
import Header from './Header/Header';
import Synopsis from './Synopsis/Synopsis';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <Synopsis />
      <main className=''></main>
    </div>
  );
}
