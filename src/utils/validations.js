export const validateLoginForm = ({ email, password }) => {
    const verror = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        verror.email = 'Invalid email';
    }
    if (!password || password.length < 6) {
        verror.password = 'Password must be at least 6 characters';
    }
    return verror;
};

export const validateRegForm = ({ email, password, username }) => {
    const verror = {};
    if (!username || username.length < 4) {
        verror.username = 'Invalid username';
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        verror.email = 'Invalid email';
    }
    if (!password || password.length < 6) {
        verror.password = 'Password must be at least 6 characters';
    }
    return verror;
};