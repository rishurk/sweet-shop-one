import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                padding: '0 20px'
            }}>
                <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Indulge in Sweet Perfection
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', maxWidth: '700px', fontWeight: '300', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Experience the finest handcrafted chocolates, pastries, and treats, delivered fresh to your door.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/products" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Explore Collection
                    </Link>
                    <Link to="/register" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '15px 40px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Join the Club
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="container" style={{ padding: '5rem 20px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--light)' }}>Why Choose Sweet Shop?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div className="glass-card" style={{ textAlign: 'center', padding: '0', overflow: 'hidden' }}>
                        <img src="/images/chef.png" alt="Handcrafted" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>Artisanal Quality</h3>
                            <p>Handcrafted daily by master pastry chefs using premium, locally sourced ingredients.</p>
                        </div>
                    </div>
                    <div className="glass-card" style={{ textAlign: 'center', padding: '0', overflow: 'hidden' }}>
                        <img src="/images/delivery.png" alt="Fast Delivery" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>Lightning Fast</h3>
                            <p>From our oven to your doorstep in minutes. Guaranteed fresh on arrival.</p>
                        </div>
                    </div>
                    <div className="glass-card" style={{ textAlign: 'center', padding: '0', overflow: 'hidden' }}>
                        <img src="/images/gift.png" alt="Gifting" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>Perfect for Gifting</h3>
                            <p>Exquisite packaging that makes every delivery feel like a special occasion.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter/Footer Callout */}
            <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #ff8e8e 100%)', padding: '5rem 20px', textAlign: 'center', marginTop: '3rem' }}>
                <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Satisfy Your Cravings?</h2>
                <Link to="/products" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    Shop All Sweets
                </Link>
            </div>
        </div>
    );
};
export default Home;
