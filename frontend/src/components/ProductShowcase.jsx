import React from 'react';

const ProductShowcase = () => {
    const products = [
        {
            id: 1,
            name: "Velvet Strawberry Cupcake",
            price: "$4.50",
            image: "/images/cupcake.png",
            badge: "Trending"
        },
        {
            id: 2,
            name: "Parisian Macaron Box",
            price: "$24.00",
            image: "/images/macarons.png",
            badge: "Gift Special"
        },
        {
            id: 3,
            name: "Artisan Dark Truffles",
            price: "$18.50",
            image: "/images/truffles.png",
            badge: "Signature"
        }
    ];

    return (
        <section id="menu" className="py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <span className="text-danger fw-bold text-uppercase letter-spacing-2">Our Menu</span>
                    <h2 className="display-4 fw-bold mt-2 text-dark">Sweet Delights</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>Explore our curated selection of fine pastries and handcrafted chocolates.</p>
                </div>

                <div className="row g-4">
                    {products.map(product => (
                        <div key={product.id} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover transition-all">
                                <div className="position-relative">
                                    <img src={product.image} className="card-img-top object-fit-cover" alt={product.name} style={{ height: '300px' }} />
                                    <span className="position-absolute top-0 end-0 m-3 badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-bold">
                                        {product.badge}
                                    </span>
                                </div>
                                <div className="card-body p-4 text-center bg-white">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex text-warning small">
                                            {'★'.repeat(5)}
                                        </div>
                                        <div className="fw-bold text-primary fs-5">{product.price}</div>
                                    </div>
                                    <h3 className="h4 fw-bold text-dark mb-3">{product.name}</h3>
                                    <button className="btn btn-outline-danger w-100 rounded-pill fw-bold">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-primary-custom btn-lg">View Full Menu</button>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
