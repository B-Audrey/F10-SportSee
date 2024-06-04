import type {Metadata} from "next";
import React from 'react';
import {Roboto} from 'next/font/google';
import NavComponent from '../shared/components/nav/nav.component';
import './globals.scss';

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
 */
export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={roboto.className}>
        <body>
        {<NavComponent/>}
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
