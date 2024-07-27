import {FC} from "react";
import * as React from "react";


type TInputWithLabel = {
    id: string;
    type: string;
    label?: string;
    inputClassName?: string;
    divClassName?: string;
    onInputChangeHandler?: (event) => void;
    rest?: []
}


const InputWithLabel: FC<TInputWithLabel> = ({
                                                 id,
                                                 label,
                                                 inputClassName,
                                                 divClassName = 'sm:col-span-3',
                                                 onInputChangeHandler,
                                                 ...rest
                                             }) => {
    return (
        <div className={`${divClassName}`}>
            <label
                htmlFor={id}

                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                {
                    rest.type !== 'text-area' ?
                        (
                            <input
                                id={id}
                                name={id}
                                onChange={onInputChangeHandler}
                                className={`px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                    sm:text-sm sm:leading-6 ${inputClassName}`}
                                {...rest}
                            />
                        ) : (
                            <textarea
                                id={id}
                                name={id}
                                rows={4}
                                className="px-3 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        )
                }
            </div>
        </div>
    )
}

export default InputWithLabel;
