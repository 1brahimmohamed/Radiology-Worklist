import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {

    // hocks
    const navigate = useNavigate();
    const signOut = useSignOut();

    // logout and redirect to login page
    useEffect(() => {
        signOut();
        navigate('/login');
    }, []);

    return null;
};

export default Logout;
