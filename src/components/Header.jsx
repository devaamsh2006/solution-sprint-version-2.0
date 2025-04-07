import { Link } from 'react-scroll';

function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg fixed-top"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                zIndex: 10,
                padding: '0.75rem 2rem',
            }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h4 className="mb-0 fw-bold text-dark">Solution Sprint 2.0</h4>
                <ul className="navbar-nav d-flex gap-4">
                    <li>
                        <Link to="about" smooth={true} duration={500} spy={true} className="nav-link text-dark"
                            style={{ cursor: 'pointer' }}
                        >About</Link>
                    </li>
                    <li>
                        <Link to="domain" smooth={true} duration={500} spy={true} className="nav-link text-dark"                             
                            style={{ cursor: 'pointer' }}

                        >Domain</Link>
                    </li>
                    <li>
                        <Link to="faq" smooth={true} duration={500} spy={true} className="nav-link text-dark"
                            style={{ cursor: 'pointer' }}
                        >FAQ</Link>
                    </li>
                    <li>
                        <Link to="stats" smooth={true} duration={500} spy={true} className="nav-link text-dark"
                            style={{ cursor: 'pointer' }}
                        >Stats</Link>
                    </li>
                    <li>
                        <Link to="timeline" smooth={true} duration={500} spy={true} className="nav-link text-dark"
                            style={{ cursor: 'pointer' }}
                        >Timeline</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
