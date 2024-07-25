export interface IExamResponse {
    id: number,
    date: Date,
    status: number,
    comments?: string,
    type: string
    radiologist: {
        name: string,
        id: string
    },
    patient: {
        id: number,
        nationalId: string,
        name: string,
        email:string,
        birthday: Date,
        gender: number
    }
}

export interface IExamWorklist {
    id: number,
    type: string,
    date: Date,
    time: Date,
    nationalId: string,
    name: string,
    email: string,
    birthday: Date,
    age: number
    gender: string,
    status: string
    comments?: string,
}

export interface IExam {
    id: number,
    date: Date,
    status: number,
    type: string
    comments?: string,
}
