'use client';
import Header from './Header/Header';
import Schedule from './Schedule/Schedule';
import Synopsis from './Synopsis/Synopsis';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <Synopsis />
      <Schedule />
    </div>
  );
}
