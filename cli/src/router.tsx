import {createBrowserRouter} from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Login from './features/auth/Login';
import NotFound from './ui/404';
import Logout from "./features/Logout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthOutlet fallbackPath={'/login'}></AuthOutlet>,
        children: [
            {
                path: '/',
                element: <div>Home</div>
            },
            {
                path: '/logout',
                element: <Logout/>
            }

        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;
