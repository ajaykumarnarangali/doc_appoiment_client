
export const takeAppoinment = async (token, payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointment/new`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'taking new appointment failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
};