import WarningIcon from '@mui/icons-material/Warning';
import {FC} from "react";


type TError = {
    errorMessage: string
};


const Error: FC<TError> = ({errorMessage}) => {
    return (
        <div className={"flex justify-center h-full items-center"}>
            <div className="rounded-md bg-red-100 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <WarningIcon aria-hidden="true" className="h-5 w-5 text-red-400"/>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error</h3>
                        <div className="mt-2 text-sm text-red-700">
                            <p>
                                {errorMessage}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
