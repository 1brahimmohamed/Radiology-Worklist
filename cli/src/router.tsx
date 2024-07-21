import {createBrowserRouter} from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Login from './features/auth/Login';
import NotFound from './ui/404';
import Logout from "./features/auth/Logout.tsx";
import ViewerLayout from "./ui/layouts/ViewerLayout.tsx";
import MainLayout from "./ui/layouts/MainLayout.tsx";
import Viewer from "./features/viewer/Viewer.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <AuthOutlet fallbackPath={'/login'}></AuthOutlet>,
        children: [
            {
                path: "/",
                element: <MainLayout/>,
                children: [
                    {
                        path: '/',
                        element: <div>Home</div>
                    },
                    {
                        path: 'logout',
                        element: <Logout/>
                    }
                ]
            },
        ]
    },
    {
        path: "viewer",
        element: <ViewerLayout/>,
        children: [
            {
                index: true,
                element: <Viewer/>
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
