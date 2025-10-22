// import { FaEnvelope  } from "react-icons/fa";


function InputField({placeholder, required, value, onchange, error, icon}) {
    return (
        <>
            <div className="relative">
                <input
                required = {required}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                className="block rounded-md border-none w-full font-poppins text-sm pl-9 pr-3 font-normal bg-gray-100 dark:bg-gray-300 py-3 text-black"
                />
                <span className="absolute text-gray-400 -translate-y-1/2 top-1/2 left-3 text-md">{icon}</span>
            </div>
            {error ? <span className="text-xs font-poppins text-red-600">{error.message}</span> : <></>}
        </>
    );
}

export default InputField;