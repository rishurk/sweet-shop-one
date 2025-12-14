import api from '../api/axios';

const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};

const login = async (userData) => {
    const response = await api.post('/auth/token', userData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('token');
};

export default {
    register,
    login,
    logout,
};
