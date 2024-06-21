import React, {useState} from "react";
import cn from 'classnames';

const CustomInput = ({value, trueNum, maxLength, className, stateValue, handler}) => {
    const [currNum, setCurrNum] = useState(trueNum);

    const handleChange = (e) => {
        stateValue(e.target.value);
        const timer = setTimeout(() => {
            setCurrNum(e.target.value);
        }, 1000);

        return () => clearTimeout(timer);
    };

    return <>
        <input type="text"
               maxLength={maxLength ? maxLength : '1'}
               onChange={handleChange}
               className={cn("block w-16 h-16 text-xl font-semibold outline-none text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500",
                   {
                       "border-red-600": trueNum !== currNum,
                   }, className
               )}
               value={value}
               required/>
    </>
}
export default CustomInput;