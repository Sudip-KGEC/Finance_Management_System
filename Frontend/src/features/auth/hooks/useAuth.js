import { useState } from 'react';
import {register , login , getMe , logout} from '../services/auth.service.js';
import { useNavigate } from 'react-router-dom';


export default function useAuth () {

const navigate = useNavigate()

const [user , setUser] = useState(null);
const [loading , setLoading] = useState(false);
const [error , setError] = useState(null);


const handleRegister = async (formdata) => {

    try {
        setLoading(true);
        setError(null);

        await register(formdata)
        navigate("/")
    } catch (err) {
        setError(err.response?.data?.error || "Register failed");
    } finally {
        setLoading(false)
    }

} 



const handleLogin = async (formdata) => {

    try {

        setLoading(true);
        setError(null);

        await login(formdata);
        navigate('/')
        
    } catch (err) {
        setError(err.response?.data?.error || "Login failed");
        
    } finally {
        setLoading(false)
    }
};


const handleGetMe = async () => {
    try {
        setLoading(true);
        setError(null);
         const data = await getMe();
         setUser(data.user);
    } catch (err) {
         setError(err.response?.data?.error || "Required login");
    } finally {
        setLoading(false)
    }
} 


const handleLogout = async () => {
     await logout();
    setUser(null);
   navigate("/login");
}




return {
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout,
    user, 
    loading,
    error
}

}