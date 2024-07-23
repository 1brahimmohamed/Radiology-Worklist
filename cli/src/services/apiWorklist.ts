import AxiosUtil from "../utils/axios.ts";
import {mapExamApiToWorklist} from "../utils/examsApiMapper.ts";
import {IExamResponse} from "../interfaces/exam.ts";

const API_URL = `${import.meta.env.VITE_BASE_URL}/exam`;

export const getExams = async () => {

    const resp = await AxiosUtil.sendRequest({
        method: 'GET',
        url: `${API_URL}/my-exams`,
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
