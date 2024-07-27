import AxiosUtil from "../utils/axios.ts";
import {mapExamApiToWorklist} from "../utils/examsApiMapper.ts";
import {IExamResponse} from "../interfaces/exam.ts";
import {IPatient} from "../interfaces/patient.ts";

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

/**
 * Fetches the list of exams for the authenticated user.
 *
 * @async
 * @function getExams
 * @returns {Promise<Array>} A promise that resolves to the list of exams mapped to the worklist format.
 * @throws {Error} Throws an error if the response status is 'error'.
 */
export const getExams = async () => {

    const response = await AxiosUtil.sendRequest({
        method: 'GET',
        url: `${API_URL}/exam/my-exams`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('_auth')}`
        }
    });

    if (response.status === 'error') {
        const {message} = response;
        throw new Error(message);
    }

    if (response.status === 'success') {
        const {data}: IExamResponse = response;
        return mapExamApiToWorklist(data)
    }
};

/**
 * Checks if a patient exists based on their National ID and returns the patient data if they exist.
 *
 * @async
 * @function doesPatientExist
 * @param {string} nationalId - The National ID of the patient to check.
 * @returns {Promise<IPatient | undefined>} A promise that resolves to the patient data if the patient exists, or undefined if the patient does not exist.
 */
export const doesPatientExist = async (nationalId: string) => {
    const response = await AxiosUtil.sendRequest({
        method: 'GET',
        url: `${API_URL}/patient?NationalId=${nationalId}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('_auth')}`
        }
    });

    if (response.status === 'success') {
        const {data}: IPatient[] = response;
        return data[0];
    }
}


/**
 * Creates a new exam based on the provided request body.
 *
 * @async
 * @function createNewExam
 * @param {Object} requestBody - The request body to create the new exam.
 * @returns {Promise<Object>} A promise that resolves to the response from the API.
 */

export const createNewExam = async (requestBody) => {
    return await AxiosUtil.sendRequest({
        method: 'POST',
        url: `${API_URL}/exam`,
        data: requestBody,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('_auth')}`
        }
    });
}

/**
 * Creates a new patient and Exam based on the provided request body.
 *
 * @async
 * @function createNewPatientWithExam
 * @param {Object} requestBody - The request body to create the new patient & exam.
 * @returns {Promise<Object>} A promise that resolves to the response from the API.
 */

export const createNewPatientWithExam = async (requestBody) => {
    return await AxiosUtil.sendRequest({
        method: 'POST',
        url: `${API_URL}/exam/create-patient-and-exam`,
        data: requestBody,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('_auth')}`
        }
    });
}
