import AxiosUtil from "../utils/axios.ts";

const API_URL = `${import.meta.env.VITE_BASE_URL}/auth`;

export const login = async (formData: FormData) => {
    return await AxiosUtil.sendRequest({
        method: 'POST',
        url: `${API_URL}/login`,
        data: {
            email: formData.get('email'),
            password: formData.get('password')
        }
    });
};
