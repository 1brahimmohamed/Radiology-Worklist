import {FC} from "react";

type TSelectWithLabel = {
    id: string;
    label: string;
    options: string[];
    selectClassName?: string;
    divWidth?: string;
    autoComplete?: string;
    isDisabled?: boolean;
    rest?: [];
}

const SelectWithLabel: FC<TSelectWithLabel> = ({
                                                   id,
                                                   label,
                                                   options= [],
                                                   selectClassName,
                                                   divWidth = '3',
                                                   autoComplete,
    ...rest
                                               }) => {
    return (
        <div className={`sm:col-span-${divWidth}`}>
            <label htmlFor={id}
                   className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <select
                    id={id}
                    name={id}
                    autoComplete={autoComplete}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                    sm:text-sm sm:leading-6 ${selectClassName}`}
                    {...rest}
                >
                    {
                        options.map((option, index) => {
                            return <option key={index}>{option}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default SelectWithLabel;
