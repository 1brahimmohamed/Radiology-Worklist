import AxiosUtil from "../utils/axios.ts";

const API_URL = `${import.meta.env.VITE_BASE_URL}/auth`;


/**
 * Sends a login request to the authentication API.
 *
 * @param {FormData} formData - The form data containing the user's email and password.
 * @returns {Promise} - A promise that resolves to the response of the login request.
 */
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
