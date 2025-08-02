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

export const validateDoctRegForm = ({
    username, email, password, experience, fees, about, speciality, degree, address
}) => {
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
    if (!experience) {
        verror.experience = 'Invalid experience value';
    }
    if (!fees) {
        verror.fees = 'Invalid fees value'
    }
    if (!about) {
        verror.about = "This field can't empty"
    }
    if (!degree) {
        verror.degree = "This field can't empty"
    }
    if (!speciality) {
        verror.speciality = 'Invalid speciality'
    }
    if (!address) {
        verror.address = "This field can't empty"
    }
    return verror;
}