export const updateProfileData = async (token, formData) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/doctor/profile`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'doctor profile updation failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
}

export const updateProfileImage = async (token, formData) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/doctor/profile-image`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'doctor profile updation failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
}

export const addLeave = async (token, date) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/doctor/add-leave`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date })
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'leave added successfully');
        }
        return data;
    } catch (err) {
        throw err;
    }
}

export const removeLeave = async (token, date) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/doctor/remove-leave`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date })
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'leave removed successfully');
        }
        return data;
    } catch (err) {
        throw err;
    }
}

export const getUserAppointments = async (token) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointment/user`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'fetching user details failed');
        }
        return data;
    } catch (err) {
        throw err;
    } F
}