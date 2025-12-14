import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('username', email); // OAuth2 expects 'username'
        formData.append('password', password);

        try {
            const response = await fetch('http://127.0.0.1:8000/token', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || 'Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            navigate('/');
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
                            <h2 className="text-center fw-bold text-gradient mb-4">Welcome Back</h2>
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
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-primary-custom btn-lg shadow">Login</button>
                                </div>
                                <div className="text-center text-muted">
                                    Don't have an account? <Link to="/register" className="text-danger fw-bold text-decoration-none">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
