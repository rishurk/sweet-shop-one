import React, { createContext, useState, useEffect } from 'react';
import authService from '../auth/authService';

export const AuthContext = createContext();

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("AuthContext: Checking token...");
        try {
            const token = localStorage.getItem('token');
            if (token) {
                console.log("AuthContext: Token found");
                setUser({ token });
            } else {
                console.log("AuthContext: No token");
            }
        } catch (e) {
            console.error("AuthContext Error:", e);
        } finally {
            setLoading(false);
        }
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
            {children}
        </AuthContext.Provider>
    );
};
