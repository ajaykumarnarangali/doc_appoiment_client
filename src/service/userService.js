
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

export const updateProfileData = async (token, formData) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
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
            throw new Error(data.message || 'user profile updation failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
}

export const updateProfileImage = async (token, formData) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile-image`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'user profile updation failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
}