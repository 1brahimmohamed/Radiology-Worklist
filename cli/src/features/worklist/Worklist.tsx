import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useQuery} from "@tanstack/react-query";
import {getExams} from "../../services/apiWorklist.ts";
import Loading from "../../ui/Loading.tsx";
import WORKLIST_TABLE_COLUMNS from "./WorklistTableColumns.tsx";
import {useNavigate} from "react-router-dom";
import Error from "../../ui/Error.tsx";


const Worklist = () => {


    const {data: exams, isLoading, isLoadingError} = useQuery({
        queryKey: ['exams'],
        queryFn: getExams,
    });

    const navigate = useNavigate();

    if (isLoading)
        return <Loading/>;

    if (isLoadingError)
        return <Error errorMessage={"Unable to Load the Exams please try again or refresh the page"}/>;


    console.log(exams);

    return (
        <div className={"flex-col space-y-5"}>

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold leading-6 text-gray-900">Exams Worklist</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all of your Exams </p>
                </div>
                <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-primary-main px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                            navigate('/add-exam')
                        }}
                    >
                        Add Exam +
                    </button>
                </div>
            </div>

            <div className={"h-[78vh] min-h-96 w-auto"}>
                <DataGrid
                    rows={exams}
                    columns={WORKLIST_TABLE_COLUMNS}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 10},
                        },
                    }}
                    onRowDoubleClick={(row) => {
                        navigate(`/viewer/${row.id}`);
                    }}
                    pageSizeOptions={[10, 25, 50]}
                />
            </div>
        </div>
    );
}

export default Worklist;
