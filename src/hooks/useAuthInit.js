import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { toggleLoading, setToken, setUser } from '../features/auth/authSlice'
import { refreshToken } from '../service/authService'
import { getUser } from '../service/userService'

const useAuthInit = () => {
    const { accessToken } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const reff = useRef(false);


    const init = async () => {
        dispatch(toggleLoading(true));
        try {
            if (!accessToken) {
                const refresdata = await refreshToken();
                if (refresdata.access_token) {
                    dispatch(setToken(refresdata?.access_token));
                    return;
                } else {
                    throw new Error('failed to refresh token')
                }
            }
            const userData = await getUser(accessToken);
            reff.current = true
            if (userData) {
                dispatch(setUser({ user: userData?.user }));
            }
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            dispatch(toggleLoading(false));
        }
    }

    useEffect(() => {
        if (reff.current) {
            console.log('stopped');
            return;
        }
        init();
    }, [accessToken]);

    return { error };

}

export default useAuthInit