
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

export const getBookedTimeSlots = async (token, doctorId, date) => {
    const params = new URLSearchParams({
        doctorId,
        date
    });
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/appointment/doctor?${params}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        const data = await res.json();
        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'fetching booked time slots failed');
        }
        return data;
    } catch (err) {
        throw err;
    }
};