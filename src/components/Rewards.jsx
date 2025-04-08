import React from 'react';
import './Rewards.css';

const Rewards=()=>{
    return (
        <div className="rewards">
            <header className="rewards-header">
                <h1>Prizes & Rewards</h1>
                <p>Recognizing and rewarding innovation across all dimensions</p>
            </header>

            <section className="reward-section">
                <h1>Unleash your potential</h1>
                <p>Massive Rewards Await: Over ₹ 8.5 Lakh in Cash, Swags and Track Prizes for the winners and $ 250,000 in Benefits for All Participants to Fuel Your Innovation</p>
                <ul>
                    <li><strong>CASH PRIZES</strong>₹ 1,00,000 Cash prizes for the top 3 winners of HACKHAZARDS '25</li>
                    <li><strong>T-Shirts</strong>₹ 2,00,000 Worth of T-shirts for the top 100 teams</li>
                    <li><strong>Track Prizes</strong>$ 6,500+ Worth of prizes across 5 specialized tracks</li>
                    <li><strong>Total Benefits</strong>$ 250,000 Worth of benefits for all participants Over ₹ 2.1 Crore in Digital Credits, Vouchers and Benefits</li>
                </ul>
            </section>

            <section className="reward-section">
                <h2>National Winners of HACKHAZARDS '25</h2>
                <ul>
                    <li><strong>First Place:</strong> ₹50,000 Cash prize for the national winner</li>
                    <li><strong>Second Place:</strong> ₹30,000 Cash prize for the runner-up</li>
                    <li><strong>Third Place:</strong> ₹20,000 Cash prize for the second runner-up</li>
                </ul>
            </section>

            <section className="reward-section">
                <h2>T-Shirts Worth ₹2,00,000</h2>
                <p>Top 100 teams will receive exclusive branded T-shirts.</p>
            </section>

            <section className="reward-section">
                <h2>Track-Specific Prizes ($6,500+)</h2>
                <ul>
                <li><strong>Monad Track:</strong> $1,700 worth of cash and swags</li>
                <li><strong>InfinyOn Track:</strong> $1,200 worth of cash and swags</li>
                <li><strong>BASE Track:</strong> $1,200 worth of cash</li>
                <li><strong>Screenpipe Track:</strong> $1,200 worth of cash</li>
                <li><strong>Groq Track:</strong> $600 worth of swags</li>
                <li><strong>Stellar Track:</strong> $500 worth of cash</li>
                </ul>
            </section>

            <section className="reward-section">
                <h2>Benefits Worth $ 250,000</h2>
                <p>All participants of HACKHAZARDS '25 will receive digital credits, vouchers, and other benefits worth $ 250,000 (₹ 2.1 Crore)</p>
                <li>All Participants Eligible</li>
            </section>
        </div>
    );
};

export default Rewards;