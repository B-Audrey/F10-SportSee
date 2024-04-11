import type { Metadata } from "next";
import "./globals.scss";
import React from 'react';
import Nav from '@/app/components/nav/nav';
import { Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Sport See",
  description: "A sportive App",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={roboto.className}>
    <body>
    <Nav />

    {children}
    </body>
    </html>
  );
}
