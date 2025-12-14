import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get('/orders');
                setOrders(response.data);
            } catch (error) {
                console.error("Failed to fetch orders", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="container" style={{ paddingTop: '2rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>My Orders</h2>
            {loading ? (
                <p>Loading orders...</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <div key={order.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4>Order #{order.id}</h4>
                                    <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{new Date(order.created_at).toLocaleDateString()}</p>
                                    <p>Status: <span style={{ color: order.status === 'pending' ? '#f1c40f' : '#2ecc71' }}>{order.status}</span></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>${order.total_amount}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No orders yet. Go buy some sweets!</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Orders;
