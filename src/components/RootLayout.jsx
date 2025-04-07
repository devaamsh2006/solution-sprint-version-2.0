import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Background from './Background.jsx';
import { Outlet } from 'react-router-dom';
import '../Styles/RootLayout.css';

function RootLayout() {
    return (
        <div className="root-layout">
            <Background />
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
