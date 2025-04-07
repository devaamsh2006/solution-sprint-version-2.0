import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Background from './Background.jsx'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>

            <div>
                <Background />
                <Header></Header>
                <div>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default RootLayout
