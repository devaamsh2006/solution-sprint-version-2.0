import React from 'react';
import '../Styles/Domain.css';
import {
    FaGraduationCap,
    FaHeartbeat,
    FaLeaf,
    FaGamepad,
    FaPalette,
    FaPlane
} from 'react-icons/fa';

const domains = [
    { icon: <FaGraduationCap />, title: 'Education' },
    { icon: <FaHeartbeat />, title: 'Health Care' },
    { icon: <FaLeaf />, title: 'Sustainability' },
    { icon: <FaGamepad />, title: 'Gamification' },
    { icon: <FaPalette />, title: 'Arts & Entertainment' },
    { icon: <FaPlane />, title: 'Travel' }
];

function Domain() {
    return (
        <div className="domain-wrapper">
            <h1 className="domain-title text-white">Explore Our Domains</h1>
            <div className="domain-grid">
                {domains.map((domain, index) => (
                    <div key={index} className="domain-card">
                        <div className="domain-icon">{domain.icon}</div>
                        <h2 className="domain-name">{domain.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Domain;
