import router from "./router.tsx";
import {RouterProvider} from "react-router-dom";
import authStore from "./features/auth-store.ts";
import {Toaster} from "react-hot-toast";
import AuthProvider from "react-auth-kit";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

function App() {

    return (
        <>
            <AuthProvider store={authStore}>
                <QueryClientProvider client={new QueryClient()}>
                    <ReactQueryDevtools initialIsOpen={false}/>
                    <RouterProvider router={router}/>
                </QueryClientProvider>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </AuthProvider>
        </>
    )
}

export default App
