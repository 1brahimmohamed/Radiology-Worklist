import LazyLoadedRouter from "./router.tsx";
import authStore from "./features/auth/auth-store.ts";
import {Toaster} from "react-hot-toast";
import AuthProvider from "react-auth-kit";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

function App() {

    return (
        <AuthProvider store={authStore}>
            <QueryClientProvider client={new QueryClient()}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <LazyLoadedRouter/>
            </QueryClientProvider>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{duration: 2500}}
            />
        </AuthProvider>
    )
}

export default App
