import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Organic Ingredients",
            description: "We source only the finest organic flour, sugar, and dairy.",
            icon: "🌿"
        },
        {
            title: "Handmade Daily",
            description: "Everything is baked fresh every single morning by our chefs.",
            icon: "👩‍🍳"
        },
        {
            title: "Eco Packaging",
            description: "Our beautiful boxes are 100% recyclable and earth-friendly.",
            icon: "♻️"
        }
    ];

    return (
        <section id="features" className="py-5" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))' }}>
            <div className="container">
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-4">
                            <div className="glass-panel p-5 h-100 text-center hover-up transition-all border-0">
                                <div className="display-3 mb-4">{feature.icon}</div>
                                <h3 className="h4 fw-bold mb-3 text-dark">{feature.title}</h3>
                                <p className="text-muted">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
