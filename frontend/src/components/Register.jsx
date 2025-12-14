import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || 'Registration failed');
            }

            // Redirect to login on success
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center pt-5">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="glass-panel p-5">
                            <h2 className="text-center fw-bold text-gradient mb-4">Create Account</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control rounded-pill p-3 border-0 bg-white bg-opacity-50"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Password</label>
                                    <input
                                        type="password"
                                        className="form-control rounded-pill p-3 border-0 bg-white bg-opacity-50"
                                        placeholder="Min. 8 characters"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-primary-custom btn-lg shadow">Sign Up</button>
                                </div>
                                <div className="text-center text-muted">
                                    Already have an account? <Link to="/login" className="text-danger fw-bold text-decoration-none">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
