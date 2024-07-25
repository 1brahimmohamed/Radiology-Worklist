import * as React from "react";
import ExamInfo from "./ExamInfo.tsx";
import PatientInfo from "./PetientInfo.tsx";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {STATUS_TO_NUMBER_MAPPER} from "../../../utils/mappedValues.ts";
import {createNewExam, createNewPatientWithExam} from "../../../services/apiWorklist.ts";
import toast from "react-hot-toast";
import {IExamResponse} from "../../../interfaces/exam.ts";
import redirect from "../../../utils/redirect.ts";


const AddExam = () => {

    const patientFormRef = useRef<HTMLFormElement>(null);
    const examFormRef = useRef<HTMLFormElement>(null);
    const [patientExists, setPatientExists] = useState<boolean>(false);
    const navigate = useNavigate();
    const user = useAuthUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const examFormData = new FormData(examFormRef.current);

        if (patientExists) {

            const body = {
                patientId: patientFormRef.current.id,
                radiologistId: user.id,

                type: examFormData.get('examType'),
                date: examFormData.get('examDate'),
                status: STATUS_TO_NUMBER_MAPPER[examFormData.get('examStatus')],
                comments: examFormData.get('examComments'),
            }

            const resp = await createNewExam(body);

            if (resp.status === 'error') {
                const {message} = resp;
                toast.error(message);
            }

            if (resp.status === 'success') {
                const {data}: IExamResponse = resp;

                toast.success("Exam added successfully");

                console.log("success", data);

                redirect(navigate, '/');

            }
        } else {
            const patientFormData = new FormData(patientFormRef.current);

            const body = {
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

            const resp = await createNewPatientWithExam(body)

            if (resp.status === 'error') {
                const {message} = resp;
                toast.error(message.title);
            }

            else if (resp.status === 'success') {
                toast.success("Exam added successfully");
                redirect(navigate, '/');
            }

        }

    }
    return (

        <div className={"flex-col space-y-10 px-32 py-10"}>
            <div className="sm:flex sm:items-center pt-1">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold leading-6 text-gray-900">Add Exam</h1>
                    <p className="mt-2 text-sm text-gray-700"> Enter the patient's personal details and exam
                        information. </p>
                </div>
            </div>

            <div className="space-y-10 divide-y divide-gray-900/10 ">


                <PatientInfo formRef={patientFormRef} patientExists={patientExists}
                             patientExistsHandler={setPatientExists}/>

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
                        type="submit"
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
