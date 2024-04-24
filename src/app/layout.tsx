import type {Metadata} from "next";
import "./globals.scss";
import React from 'react';
import NavComponent from '@/app/shared/components/nav/nav.component';
import {Roboto} from 'next/font/google';
import SideToolbarComponent from '@/app/shared/components/side-tool-bar/side-toolbar.component';
import Dashboard from '@/app/pages/dashboard';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
    display: 'swap',
})


export const metadata: Metadata = {
    title: "Sport See",
    description: "A sportive App",
    icons: "favicon.ico",
};

export default function RootLayout({}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={roboto.className}>
        <body>
        <NavComponent/>
        <main>
            <SideToolbarComponent/>
            <Dashboard/>
        </main>
        </body>
        </html>
    );
}
