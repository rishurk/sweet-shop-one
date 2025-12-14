import React from 'react';

const Hero = () => {
    return (
        <section className="d-flex align-items-center min-vh-100 pt-5 position-relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="position-absolute top-0 end-0 translate-middle-y bg-danger opacity-10 rounded-circle" style={{ width: '600px', height: '600px', filter: 'blur(80px)' }}></div>

            <div className="container position-relative z-index-1">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
                        <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-2 mb-3 fw-bold">
                            ✨ Freshly Baked Daily
                        </span>
                        <h1 className="display-3 fw-bold mb-4 lh-sm">
                            Taste the <span className="text-gradient">Magic</span> in<br />
                            Every <span style={{ color: 'var(--primary-color)' }}>Bite</span>
                        </h1>
                        <p className="lead text-muted mb-5">
                            Handcrafted artisan sweets, pastries, and chocolates made with love and the finest organic ingredients. Treat yourself today.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                            <button className="btn btn-primary-custom btn-lg shadow-lg">View Menu</button>
                            <button className="btn btn-outline-danger btn-lg rounded-pill px-4 border-2 fw-bold">Our Story</button>
                        </div>

                        <div className="mt-5 d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                            <div className="d-flex">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="rounded-circle border border-2 border-white bg-secondary" style={{ width: '40px', height: '40px', marginLeft: i > 1 ? '-10px' : 0, backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }}></div>
                                ))}
                            </div>
                            <div className="text-start">
                                <div className="fw-bold text-dark">5,000+ Happy Customers</div>
                                <div className="text-muted small">Rated 4.9/5 stars</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div className="glass-panel p-2 rounded-4 shadow-lg rotate-n3 animation-float">
                                <img src="/images/hero.png" alt="Delicious Sweets Display" className="img-fluid rounded-4 w-100 object-fit-cover" style={{ height: '500px' }} />
                            </div>

                            {/* Floating Badge */}
                            <div className="position-absolute bottom-0 start-0 translate-middle-x bg-white p-3 rounded-4 shadow-lg animation-float-delayed" style={{ maxWidth: '200px' }}>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <span className="fs-2">🧁</span>
                                    <div className="fw-bold lh-1 text-dark">Best Seller</div>
                                </div>
                                <div className="small text-muted">Strawberry Supreme Cupcakes are flying off the shelves!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
