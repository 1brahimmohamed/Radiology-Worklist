import {IExamResponse, IExamWorklist} from "../interfaces/exam.ts";


export const STATUS_MAPPER = {
    0: 'Scheduled',
    1: 'Arrived',
    2: 'Canceled',
    3: 'Completed',
};

export const GENDER_MAPPER = {
    0: "Male",
    1: "Female"
}



export const mapExamApiToWorklist = (exams: IExamResponse[]): IExamWorklist[] => {
    return exams.map((exam) => {
        return {
            id: exam.id,
            type: exam.type,
            date: new Date(exam.date),
            time: new Date(exam.date),
            nationalId: exam.patient.nationalId,
            name: exam.patient.name,
            email: exam.patient.email,
            birthday: new Date(exam.patient.birthday),
            age: new Date().getFullYear() - new Date(exam.patient.birthday).getFullYear(),
            gender: GENDER_MAPPER[exam.patient.gender],
            status: STATUS_MAPPER[exam.status],
            comments: exam.comments,
        }
    });
}
