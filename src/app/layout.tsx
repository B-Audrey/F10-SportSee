import type {Metadata} from "next";
import "./globals.scss";
import React from 'react';
import NavComponent from '@/app/shared/components/nav/nav.component';
import {Roboto} from 'next/font/google';
import SideToolbarComponent from '@/app/shared/components/side-tool-bar/side-toolbar.component';
import Dashboard from '@/app/pages/dashboard';

/**
 * Roboto font with the defalt options for the app
 */
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
    display: 'swap',
})

/**
 * Metadata object to define the title, description and icons of the app
 */
export const metadata: Metadata = {
    title: "Sport See",
    description: "A sportive App",
    icons: "favicon.ico",
};

/**
 * RootLayout functional root component to display the main layout of the app and dashborad in the middle
 * @constructor
 */
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
