import {IExamResponse, IExamWorklist} from "../interfaces/exam.ts";
import {GENDER_MAPPER, NUMBER_TO_STATUS_MAPPER} from "./mappedValues.ts";


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
            status: NUMBER_TO_STATUS_MAPPER[exam.status],
            comments: exam.comments,
        }
    });
}
