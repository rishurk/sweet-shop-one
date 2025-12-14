import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #ff6b6b, #4ecdc4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Sweetest Treats in Town
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Handcrafted sweets made with love. Order online and get them delivered to your doorstep.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/products" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
                    Shop Now
                </Link>
                <Link to="/register" className="btn" style={{ background: 'rgba(255,255,255,0.1)', padding: '12px 30px', fontSize: '1.1rem' }}>
                    Join Us
                </Link>
            </div>

            <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="glass-card">
                    <h3 style={{ color: '#ff6b6b' }}>Premium Quality</h3>
                    <p>We use only the finest ingredients.</p>
                </div>
                <div className="glass-card">
                    <h3 style={{ color: '#4ecdc4' }}>Fast Delivery</h3>
                    <p>Fresh sweets delivered in 30 mins.</p>
                </div>
                <div className="glass-card">
                    <h3 style={{ color: '#ff6b6b' }}>Made with Love</h3>
                    <p>Traditional recipes, modern taste.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
