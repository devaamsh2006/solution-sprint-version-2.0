import { useLocation } from 'react-router-dom';
import {Link} from 'react-scroll'
import { useState } from 'react';

function Header() {
    const location = useLocation();
    const [sel,setSel] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="fixed w-full z-50 backdrop-blur-xl shadow-md px-4 sm:px-8 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg sm:text-xl font-bold text-white">Solution Sprint 2.0</Link>
                
                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
                    <li>
                        <Link
                            to="home"
                            className={`cursor-pointer transition ${sel === '' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel(''); setIsMenuOpen(false);}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'about' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('about'); setIsMenuOpen(false);}}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="domain" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'domain' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('domain'); setIsMenuOpen(false);}}
                        >
                            Domain
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="faq" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'faq' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('faq'); setIsMenuOpen(false);}}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="stats" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'stats' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('stats'); setIsMenuOpen(false);}}
                        >
                            Stats
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="timeline" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'timeline' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('timeline'); setIsMenuOpen(false);}}
                        >
                            Timeline
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl`}>
                <ul className="flex flex-col items-center py-4 space-y-4 text-white text-sm font-medium">
                    <li>
                        <Link
                            to=""
                            className={`cursor-pointer transition ${sel === '' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel(''); setIsMenuOpen(false);}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'about' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('about'); setIsMenuOpen(false);}}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="domain" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'domain' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('domain'); setIsMenuOpen(false);}}
                        >
                            Domain
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="faq" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'faq' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('faq'); setIsMenuOpen(false);}}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="stats" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'stats' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('stats'); setIsMenuOpen(false);}}
                        >
                            Stats
                        </Link>
                    </li>
                    <li>
                        <Link
                           to="timeline" smooth={true} duration={500}
                            className={`cursor-pointer transition ${sel === 'timeline' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                            onClick={()=>{setSel('timeline'); setIsMenuOpen(false);}}
                        >
                            Timeline
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
