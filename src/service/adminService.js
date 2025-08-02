export const DoctorReg = async (token, payload) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/add-doctor`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: payload,
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