import { useLocation } from 'react-router-dom';
import {Link} from 'react-scroll'
import { useState } from 'react';

function Header() {
    const location = useLocation();
    const [sel,setSel] = useState('')
    
    return (
        <nav className="fixed w-full z-50 backdrop-blur-xl shadow-md px-8 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">Solution Sprint 2.0</Link>
                <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
                    <li>
                        <Link
                            to=""
                            className={`cursor-pointer transition ${sel === '' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('')}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'about' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('about')}}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="domain" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'domain' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('domain')}}
                        >
                            Domain
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="faq" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'faq' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('faq')}}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="stats" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'stats' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('stats')}}
                        >
                            Stats
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
