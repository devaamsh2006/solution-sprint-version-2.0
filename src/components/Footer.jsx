import React from 'react';

function Footer() {
    return (
        <footer
            className="footer-glass text-white pt-4 pb-3 mt-5"
            style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Solution Sprint 2.0</h5>
                        <p style={{ fontSize: '0.9rem' }}>
                            An innovative idea pitching event hosted by ISTE to inspire and empower student creativity and problem-solving.
                        </p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p style={{ fontSize: '0.9rem' }}>Email: iste@vnrvjiet.in</p>
                        <div>
                            <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-envelope-fill"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="text-secondary" />
                <div className="text-center" style={{ fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} ISTE VNRVJIET. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
