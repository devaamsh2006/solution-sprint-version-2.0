import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    
    return (
        <nav className="fixed w-full z-50 backdrop-blur-xl shadow-md px-8 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">Solution Sprint 2.0</Link>
                <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
                    <li>
                        <Link
                            to="/"
                            className={`cursor-pointer transition ${location.pathname === '/' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`cursor-pointer transition ${location.pathname === '/about' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/domain"
                            className={`cursor-pointer transition ${location.pathname === '/domain' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                        >
                            Domain
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            className={`cursor-pointer transition ${location.pathname === '/faq' ? 'text-purple-400' : 'hover:text-purple-400'}`}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/stats"
                            className={`cursor-pointer transition ${location.pathname === '/stats' ? 'text-purple-400' : 'hover:text-purple-400'}`}
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
