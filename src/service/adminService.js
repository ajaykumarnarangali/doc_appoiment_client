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

export const getAlldoctors = async (token) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/admin/all-doctors`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        const data = await res.json();

        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'doctor fetch failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
};