import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

function InputPassword({placeholder, required, value, onchange, error}) {
    const [showPassword, setShowPassword] = useState(false);
    const { status, message } = error;
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <>
            <div className="relative">
                <input
                required={required}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                className="block rounded-md border-none w-full font-poppins text-sm pl-9 pr-6 font-normal bg-gray-100 dark:bg-gray-300 py-3 text-black"
                />
                <FaLock className="absolute text-gray-400 -translate-y-1/2 top-1/2 left-3 text-md"/>
                {showPassword ? <FaEye className="absolute -translate-y-1/2 top-1/2 right-1" onClick={handleShowPassword}/> : <FaEyeSlash className="absolute -translate-y-1/2 top-1/2 right-1" onClick={handleShowPassword}/>}
            </div>
            {status ? <span className="text-xs font-poppins text-red-600">{message}</span> : <></>}
        </>
    );
}

export default InputPassword;