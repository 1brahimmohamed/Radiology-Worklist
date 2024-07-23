import axios, {AxiosError, AxiosRequestConfig} from 'axios';

class AxiosUtil {
    public static async sendRequest(
        axiosConfig: AxiosRequestConfig,
    ) {

        try {
            const data = (await axios({...axiosConfig})).data;
            return {
                status: 'success',
                data
            }
        } catch (e: AxiosError<never, never>) {
            return {
                status: 'error',
                message: e.response.data
            };
        }

    }

    public static requestInterceptor() {
        axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    public static responseInterceptor() {
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error: AxiosError<never, never>) => {
                if (error.response?.status === 401) {
                    localStorage.removeItem('token');
                }

                return Promise.reject(error);
            }
        );
    }
}

export default AxiosUtil;
