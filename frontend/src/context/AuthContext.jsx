import React, { createContext, useState, useEffect } from 'react';
import authService from '../auth/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Optionally validate token or fetch user profile here
            // For simplicity, we just assume logged in if token exists
            // A real app would hit a /me endpoint
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const login = async (userData) => {
        const data = await authService.login(userData);
        setUser({ token: data.access_token });
    };

    const register = async (userData) => {
        await authService.register(userData);
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
