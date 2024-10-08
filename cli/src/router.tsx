import { Suspense, lazy } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Loading from "./ui/Loading.tsx";
import AddExam from "./features/worklist/AddExam/AddExam.tsx";
import Error from "./ui/Error.tsx";

// Lazy loaded components
const Login = lazy(() => import('./features/auth/Login'));
const Logout = lazy(() => import('./features/auth/Logout.tsx'));
const ViewerLayout = lazy(() => import('./ui/layouts/ViewerLayout.tsx'));
const MainLayout = lazy(() => import('./ui/layouts/MainLayout.tsx'));
const Viewer = lazy(() => import('./features/viewer/Viewer.tsx'));
const Worklist = lazy(() => import('./features/worklist/Worklist.tsx'));
const NotFound = lazy(() => import('./ui/404'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthOutlet fallbackPath={'/login'}></AuthOutlet>,
        errorElement: <Error errorMessage={"Something Went Wrong, please reload the application"} />,
        children: [
            {
                path: "/",
                element: <MainLayout/>,
                children: [
                    {
                        index: true,
                        element: <Worklist />
                    },
                    {
                        path: "add-exam",
                        element: <AddExam />
                    },
                    {
                        path: 'logout',
                        element: <Logout/>
                    }
                ]
            },
            {
                path: "viewer/:id",
                element: <ViewerLayout/>,
                children: [
                    {
                        index: true,
                        element: <Viewer/>
                    }
                ]
            },
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

// Wrap the router in Suspense to handle lazy loading
const LazyLoadedRouter = () => (
    <Suspense fallback={<Loading />}>
        <RouterProvider router={router}/>
    </Suspense>
);

export default LazyLoadedRouter;
