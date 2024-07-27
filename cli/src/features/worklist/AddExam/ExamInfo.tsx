import * as React from "react";
import InputWithLabel from "../../../ui/InputWithLabel.tsx";
import SelectWithLabel from "../../../ui/SelectWithLabel.tsx";

const ExamInfo = ({formRef}) => {

    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Exam Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Provide detailed information about the exam,
                    including the date, type, and any comments</p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" ref={formRef}>
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <InputWithLabel
                            id={"examType"}
                            required
                            label={"Exam Type*"}
                            type={"text"}
                        />

                        <InputWithLabel
                            id={"examDate"}
                            required
                            label={"Exam Date*"}
                            type={"datetime-local"}
                        />

                        <SelectWithLabel
                            id={"examStatus"}
                            required
                            label={"Status"}
                            options={['Scheduled', 'Arrived', 'Canceled', 'Completed']}
                        />

                        <InputWithLabel
                            id={"examComments"}
                            required
                            label={"Comments"}
                            type={"text-area"}
                            divClassName={"sm:col-span-full"}
                        />

                    </div>
                </div>

            </form>
        </div>
    )
}

export default ExamInfo
