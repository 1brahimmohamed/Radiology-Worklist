import * as React from "react";
import ExamInfo from "./ExamInfo.tsx";
import PatientInfo from "./PetientInfo.tsx";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {STATUS_TO_NUMBER_MAPPER} from "../../../utils/mappedValues.ts";
import {createNewExam, createNewPatientWithExam} from "../../../services/apiWorklist.ts";
import toast from "react-hot-toast";
import redirect from "../../../utils/redirect.ts";


const setupPatientExistRequestBody = (examFormData: FormData, patientFormRef: React.RefObject<HTMLFormElement>, user) => {
    return {
        patientId: patientFormRef.current?.id,
        radiologistId: user.id,
        type: examFormData.get('examType'),
        date: examFormData.get('examDate'),
        status: STATUS_TO_NUMBER_MAPPER[examFormData.get('examStatus')],
        comments: examFormData.get('examComments'),

    }
}

const setupPatientNotExistRequestBody = (examFormData: FormData, patientFormData: FormData, user) => {
    return {
        // patient
        nationalId: patientFormData.get('nationalId'),
        name: patientFormData.get('patientName'),
        email: patientFormData.get('email'),
        birthday: patientFormData.get('birthday'),
        gender: patientFormData.get('gender'),

        // exam
        type: examFormData.get('examType'),
        date: examFormData.get('examDate'),
        status: STATUS_TO_NUMBER_MAPPER[examFormData.get('examStatus')],
        comments: examFormData.get('examComments'),
        radiologistId: user.id,
    }
}


const AddExam = () => {

    const patientFormRef = useRef<HTMLFormElement | null>(null);
    const examFormRef = useRef<HTMLFormElement | null>(null);
    const [patientExists, setPatientExists] = useState<boolean>(false);
    const navigate = useNavigate();
    const user = useAuthUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // check if forms are valid
        if (patientFormRef.current && !patientFormRef.current?.reportValidity()) {
            toast.error("Please fill in all the required patient fields");
        }

        // check if forms are valid
        if (examFormRef.current && !examFormRef.current?.reportValidity()) {
            toast.error("Please fill in all the required exams fields");
        }

        // get form data from both forms
        const examFormData = new FormData(examFormRef?.current);
        const patientFormData = new FormData(patientFormRef?.current);

        console.log("p1");

        // handle response from api
        const handleResponse = (resp) => {
            if (resp.status === 'success') {
                toast.success("Exam added successfully");
                redirect(navigate, '/');
            }
        };

        // check if patient exists or not and call the appropriate api
        if (patientExists) {
            const resp = await createNewExam(setupPatientExistRequestBody(examFormData, patientFormRef, user));
            handleResponse(resp);
        } else {
            const resp = await createNewPatientWithExam(setupPatientNotExistRequestBody(examFormData, patientFormData, user));
            handleResponse(resp);
        }

    }
    return (
        <div className={"flex-col space-y-10"}>

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold leading-6 text-gray-900">Add Exam</h1>
                    <p className="mt-2 text-sm text-gray-700"> Enter the patient's personal details and exam
                        information. </p>
                </div>
            </div>

            <div className="space-y-10 divide-y divide-gray-900/10 px-4 sm:px-32 ">


                <PatientInfo
                    formRef={patientFormRef}
                    patientExists={patientExists}
                    patientExistsHandler={setPatientExists}
                />

                <ExamInfo formRef={examFormRef}/>

                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="rounded-md bg-primary-main px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
                    >
                        Add
                    </button>
                </div>

            </div>
        </div>


    )
}

export default AddExam;
