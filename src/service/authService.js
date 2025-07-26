export const login = async (payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'Login failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
};

export const register = async (payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        console.log(data);

        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'registration failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
};
export const verifyOtp = async (payload, email) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/verify-otp?email=${email}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp: payload }),
        });

        const data = await res.json();
        console.log(data);

        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'otp verification failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
};

export const refreshToken = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/refresh-token`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'refreshing token failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
}