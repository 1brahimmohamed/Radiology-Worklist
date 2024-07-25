import AxiosUtil from "../utils/axios.ts";
import {mapExamApiToWorklist} from "../utils/examsApiMapper.ts";
import {IExamResponse} from "../interfaces/exam.ts";
import {IPatient} from "../interfaces/patient.ts";

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

export const getExams = async () => {

    const resp = await AxiosUtil.sendRequest({
        method: 'GET',
        url: `${API_URL}/exam/my-exams`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('_auth')}`
        }
    });

    if (resp.status === 'error') {
        const {message} = resp;
        throw new Error(message);
    }

    if (resp.status === 'success') {
        const {data}: IExamResponse = resp;
        return mapExamApiToWorklist(data)
    }
};


export const doesPatientExist = async (nationalId: string) => {
    const resp = await AxiosUtil.sendRequest({
        method: 'GET',
        url: `${API_URL}/patient?NationalId=${nationalId}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('_auth')}`
        }
    });

    if (resp.status === 'success') {
        const {data}: IPatient[] = resp;
        return data[0];
    }
}

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
