import { Link } from 'react-scroll';

function Header() {
    return (
        <nav className="fixed w-full z-50 backdrop-blur-xl shadow-md px-8 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h4 className="text-xl font-bold text-white">Solution Sprint 2.0</h4>
                <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="domain"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            Domain
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="faq"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="rewards"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            Rewards
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="stats"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-purple-400 transition"
                        >
                            Stats
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="timeline"
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-purple-400 transition"
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
