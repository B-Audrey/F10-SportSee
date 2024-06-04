import React from 'react';
import SideToolbarComponent from '../../shared/components/side-tool-bar/side-toolbar.component';

/**
 * RootLayout functional root component to display the main layout of the app and dashborad in the middle
 */
export default function DashboardLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SideToolbarComponent/>
            <main>
                {children}
            </main>
        </>
    );
}
