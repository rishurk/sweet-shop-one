import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { useState } from 'react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCheckout = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const payload = {
                items: cart.map(item => ({
                    product_id: item.id,
                    quantity: item.quantity
                }))
            };

            await axios.post('/orders/', payload);
            clearCart();
            navigate('/orders');
        } catch (err) {
            console.error(err);
            setError('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Your Cart is Empty</h2>
                <button className="btn" onClick={() => navigate('/products')}>Browse Products</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h2>Shopping Cart</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="cart-list">
                {cart.map(item => (
                    <div key={item.id} className="cart-item" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        borderBottom: '1px solid #ccc',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        marginBottom: '10px',
                        borderRadius: '8px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            {item.image_url && <img src={item.image_url} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} />}
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button className="btn-secondary" onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', backgroundColor: '#e74c3c' }}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary" style={{ marginTop: '20px', textAlign: 'right' }}>
                <h3>Total: ${getCartTotal().toFixed(2)}</h3>
                <button
                    className="btn"
                    onClick={handleCheckout}
                    disabled={loading}
                    style={{ marginTop: '10px', padding: '10px 30px', fontSize: '1.1rem' }}
                >
                    {loading ? 'Processing...' : 'Checkout'}
                </button>
            </div>
        </div>
    );
};

export default Cart;
