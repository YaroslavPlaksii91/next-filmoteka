import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from './components/Header/Header';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moviec Cinema - Your Ultimate Movie Destination',
  description:
    'Discover the latest movies and TV shows. Get recommendations, watch trailers, and explore a wide range of genres. Your ultimate movie destination awaits!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
