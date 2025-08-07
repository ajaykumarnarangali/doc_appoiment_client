import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../utils/validations";
import { login } from "../../service/authService";
import { setToken } from "./authSlice";
import { useDispatch } from "react-redux";

function LoginForm({ Heading, Redirecter }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState({});
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(prev => ({ ...prev, [name]: '' }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const errors = validateLoginForm(formData);
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        try {
            const response = await login(formData);
            if (response.requires_otp) {
                navigate(`/otp?email=${encodeURIComponent(formData.email)}`);
            } else {
                dispatch(setToken(response?.access_token));
                const role = response?.role;
                switch (role) {
                    case 'admin':
                        navigate('/admin/dashboard');
                        break;
                    case 'doctor':
                        navigate('/doctor/dashboard');
                        break;
                    case 'user':
                    default:
                        navigate('/home');
                }
            }
        } catch (err) {
            console.error(err.message);
            setError({ general: err.message || "Login failed" });
        }
    };

    return (
        <div className="border p-8 rounded-xl shadow-md w-full max-w-sm text-formText">
            {Heading}
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        className={`w-full border ${error?.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                        placeholder="Enter your email"
                    />
                    {error?.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                </div>
                <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        className={`w-full border ${error?.password ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                        placeholder="Enter your password"
                    />
                    {error?.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                </div>
                {error?.general && <p className="text-red-500 text-sm">{error.general}</p>}
                <button
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition"
                >
                    Login
                </button>
            </form>
            {Redirecter}
        </div>
    );
}

export default LoginForm;
