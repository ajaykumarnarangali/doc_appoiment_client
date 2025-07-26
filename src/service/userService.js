import { useSelector } from "react-redux"

export const getUser = async (token) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user/get-user`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'user Fetching failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
}