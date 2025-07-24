import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validateRegForm } from '../../utils/validations'
import { register } from '../../service/authService'
function RegForm() {

    const [formData, setFormData] = useState({
        username: '', email: '', password: '', role: 'user'
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(prev => ({ ...prev, [name]: '' }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const errors = validateRegForm(formData);
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        try {
            setLoading(true);
            const response = await register(formData);
            if (response.success) {
                navigate(`/otp?email=${encodeURIComponent(formData.email)}`);
            }
        } catch (err) {
            console.error(err.message);
            setError({ general: err.message || "registration failed" });
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="border p-8 rounded-xl shadow-md w-full max-w-sm text-formText">
            <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
            <p className="text-sm mb-4">Please sign up to book appointment</p>
            <form className="space-y-4"
                onSubmit={handleRegister}>
                <div>
                    <label className="block text-sm mb-1">Full Name</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={`w-full border ${error?.username ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                        placeholder="Enter your full name"
                    />
                    {error?.username && <p className="text-red-500 text-sm mt-1">{error.username}</p>}
                </div>
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
                    {loading ? 'Registering' : 'Create account'}
                </button>
            </form>
            <p className="text-sm mt-4 text-start">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 hover:underline">
                    Login here
                </Link>
            </p>
        </div>
    )
}

export default RegForm