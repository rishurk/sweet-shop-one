import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {product.image_url && <img src={product.image_url} alt={product.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', height: '200px', objectFit: 'cover' }} />}
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
            <p style={{ color: '#ccc', flexGrow: 1 }}>{product.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--secondary)' }}>
                    ${product.price}
                </span>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
