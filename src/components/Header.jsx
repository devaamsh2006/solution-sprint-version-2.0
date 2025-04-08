import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="fixed w-full z-50 backdrop-blur-xl shadow-md px-8 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">Solution Sprint 2.0</Link>
                <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
                    <li>
                        <Link
                            to="/"
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/domain"
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            Domain
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/stats"
                            className="cursor-pointer hover:text-purple-400 transition"
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
