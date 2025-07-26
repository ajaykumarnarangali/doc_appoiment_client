import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { verifyOtp } from '../../service/authService'
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from './authSlice'

function OtpForm() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dispatch = useDispatch();

    const OTP_DIGIT_COUNT = 6;
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (value, index) => {
        if (!value || value == '') {
            return;
        }
        setOtp(prev => {
            return prev.map((each, i) => {
                return index == i ? value.slice(-1) : each
            })
        })
        if (index + 1 < OTP_DIGIT_COUNT) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    const handleBackspace = (e, index) => {
        if (e.key === ' ') {
            e.preventDefault();
            return;
        }
        if (e.key === 'Backspace') {
            inputRefs.current[index].value = '';
            setOtp(prev =>
                prev.map((each, i) => (i === index ? '' : each))
            );
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
        if (e.key === 'ArrowLeft') {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowRight') {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpVerification = async (e) => {
        e.preventDefault();
        try {
            const OTP = otp.join("");
            const email = queryParams.get("email");
            const response = await verifyOtp(OTP, email);
            if (response.success) {
                dispatch(setToken(response?.access_token));
                navigate('/home');
            }
        } catch (err) {
            console.error(err.message);
            setError(err.message || "registration failed");
        }
    }

    return (
        <div className="border p-8 rounded-xl shadow-md w-full max-w-sm text-formText">
            <h2 className="text-2xl text-center font-semibold mb-2">Email Verification</h2>
            <p className="text-sm mb-4">Enter the 6 digit verification code that was sent to your phone number</p>
            <form
                onSubmit={handleOtpVerification}>
                <div className='w-fit flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        {
                            Array(OTP_DIGIT_COUNT).fill(0).map((_, i) => {
                                return (<input type='text'
                                    ref={el => inputRefs.current[i] = el}
                                    onChange={(e) => { handleChange(e.target.value, i) }}
                                    value={otp[i]}
                                    onKeyDown={(e) => { handleBackspace(e, i) }}
                                    className='h-12 w-12 border border-slate-400 rounded-sm text-center' key={i} />)
                            })
                        }
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition"
                        >
                            Verify account
                        </button>
                        {error && <p className="text-red-500 text-sm py-2">{error}</p>}
                        <p className='text-indigo-500 text-sm text-center'>Didn't recieve code? <span className='font-semibold cursor-pointer'>Resend</span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default OtpForm