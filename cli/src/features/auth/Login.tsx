import {useEffect, useRef, useState, FormEvent} from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    // hooks
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    const signIn = useSignIn();
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();

    // if user is signed in, redirect
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, []);

    // handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        const formData = new FormData(e.target as HTMLFormElement);
        if (!formData.get('email') || !formData.get('password')) {
            toast.error('Please fill in all fields', {duration: 2500});
            setIsSubmitting(false);
            return;
        }

        const response = {
            status: 'success',
            data: {
                id: 1,
                name: 'John Doe',
                email: 'j@ht.com',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiZG9jdG9yIiwiaWF0IjoxNjI5MzUwNjQyLCJleHAiOjE2MjkzNTA5NDJ9.1'
            }
        }
        setIsSubmitting(false);

        if (response.status === 'success') {
            signIn({
                auth: {
                    token: response.data.token,
                    type: 'Bearer'
                },
                userState: response.data
            });

            toast.success('Login successful', {duration: 2500});

            setTimeout(() => {
                navigate('/');
            }, 2000);

        } else {
            toast.error('Login failed, please try again', {duration: 2500});
        }
    };


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {/* Logo and Header*/}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="HeathTOM logo"
                    src="/ui/logo.webp"
                    className="mx-auto h-14 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            {/* Form */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isSubmitting ? (
                                <div className={'animate-spin'}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Forgot your password?{' '}
                    <a href="#" className="font-semibold leading-6 text-primary-main hover:text-secondary-main">
                        Contact support
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login
