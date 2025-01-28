import { useState, useEffect } from 'react';

const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [role, setRole] = useState(localStorage.getItem('role') || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }

        if (role) {
            localStorage.setItem('role', role);
        } else {
            localStorage.removeItem('role');
        }
    }, [token, role]);

    const login = async (username, password) => {
        console.log(import.meta.env.VITE_API);
        try {
            const response = await fetch(`${import.meta.env.VITE_API}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setRole(data.data.role);
                window.location.reload(); // Forzar la actualización de la página
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const logout = () => {
        setToken(null);
        setRole(null);
        window.location.reload(); // Forzar la actualización de la página
    };

    return { token, role, login, logout };
};

export default useAuth;
