import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { getCartCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginLeft: 0 }}>
                    Sweet Shop
                </Link>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    {user ? (
                        <>
                            <Link to="/orders">My Orders</Link>
                            <Link to="/cart">Cart ({getCartCount()})</Link>
                            <button
                                onClick={handleLogout}
                                className="btn"
                                style={{ marginLeft: '1.5rem', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register" className="btn btn-primary" style={{ marginLeft: '1.5rem', color: 'white' }}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
