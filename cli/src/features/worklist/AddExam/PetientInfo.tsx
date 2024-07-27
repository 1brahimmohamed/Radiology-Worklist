import InputWithLabel from "../../../ui/InputWithLabel.tsx";
import {doesPatientExist} from "../../../services/apiWorklist.ts";
import SelectWithLabel from "../../../ui/SelectWithLabel.tsx";
import {GENDER_MAPPER} from "../../../utils/mappedValues.ts";
import {formatDate} from "../../../utils/formatDate.ts";


const clearForm = (formRef) => {
    formRef.current.id = '';
    formRef.current['patientName'].value = '';
    formRef.current['email'].value = '';
    formRef.current['birthday'].value = '';
}
const setFormValues = (formRef, patientData) => {
    formRef.current.id = patientData.id;
    formRef.current['patientName'].value = patientData.name;
    formRef.current['email'].value = patientData.email;
    formRef.current['birthday'].value = formatDate(new Date(patientData.birthday));
    formRef.current['gender'].value = GENDER_MAPPER[patientData.gender];
}

const PatientInfo = ({
                         patientExists,
                         patientExistsHandler,
                         formRef
                     }) => {


    const handleSearchPatient = async (event) => {
        const newValue = event.target.value;

        if (newValue.length === 14 && formRef.current) {
            const patientData = await doesPatientExist(newValue);

            if (patientData) {
                setFormValues(formRef, patientData);
                patientExistsHandler(true);
            } else {
                clearForm(formRef);
                patientExistsHandler(false);
            }
        }
    }


    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            <div className="px-4 sm:px-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Patient Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Enter the patient's National ID to search our database. If the patient exists, their information
                    will be fetched automatically
                </p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" ref={formRef}>
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                        <InputWithLabel
                            id={"nationalId"}
                            required
                            label={"National ID*"}
                            type={"text"}
                            onInputChangeHandler={handleSearchPatient} maxLength={14}
                        />

                        <InputWithLabel
                            id={"patientName"}
                            required
                            label={"Patient Name*"}
                            type={"text"}
                            disabled={patientExists}
                        />

                        <InputWithLabel
                            id={"email"}
                            required
                            label={"Email*"}
                            type={"email"}
                            disabled={patientExists}
                        />


                        <SelectWithLabel
                            id={"gender"}
                            required
                            label={"Gender*"}
                            disabled={patientExists}
                            options={['Male', "Female"]}
                        />

                        <InputWithLabel
                            id={"birthday"}
                            required
                            label={"Birthday*"}
                            type={"date"}
                            disabled={patientExists}
                        />

                    </div>
                </div>
            </form>
        </div>
    )
};

export default PatientInfo;
