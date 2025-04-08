import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Background from './Background.jsx';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx'; // 👈 Import it

function RootLayout() {
    return (
        <div className="root-layout">
            <Background />
            <Header />
            <ScrollToTop /> {/* 👈 Place it here to run on route changes */}
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
