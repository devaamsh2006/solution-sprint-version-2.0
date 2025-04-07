import { Link } from 'react-scroll';

function Header() {
    return (
        <nav
    className="navbar navbar-expand-lg fixed w-full mb-3"
    style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Reduced opacity from 0.2 to 0.1
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 10,
        padding: '0.75rem 2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' // Added subtle shadow
    }}
>
    <div className="container-fluid d-flex justify-content-between align-items-center">
        <h4 className="mb-0 fw-bold text-white">Solution Sprint 2.0</h4>
        <ul className="navbar-nav d-flex gap-4">
            <li><Link to="about" smooth={true} duration={500} spy={true} className="nav-link text-white">About</Link></li>
            <li><Link to="domain" smooth={true} duration={500} spy={true} className="nav-link text-white">Domain</Link></li>
            <li><Link to="faq" smooth={true} duration={500} spy={true} className="nav-link text-white">FAQ</Link></li>
            <li><Link to="rewards" smooth={true} duration={500} spy={true} className="nav-link text-white">Rewards</Link></li>
            <li><Link to="stats" smooth={true} duration={500} spy={true} className="nav-link text-white">Stats</Link></li>
            <li><Link to="timeline" smooth={true} duration={500} spy={true} className="nav-link text-white">Timeline</Link></li>
        </ul>
    </div>
</nav>
    );
}

export default Header;
