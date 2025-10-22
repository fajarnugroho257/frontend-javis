import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import InputPassword from "../components/InputPassword";
import { register } from "../store/userStore";
import { FaSignInAlt, FaEnvelope, FaUser  } from "react-icons/fa";
import ToggleMode from "../components/ToogleMode";
import ClipLoader from "react-spinners/ClipLoader";


function SignIn(){
    const [loading, setLoading] = useState(false);
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    // error
    const [errorNama, setErrorNama] = useState({status: false, message: null});
    const [errorEmail, setErrorEmail] = useState({status: false, message: null});
    const [errorPassword, setErrorPassword] = useState({status: false, message: null});
    const [errorconfPassword, setErrorConfPassword] = useState({status: false, message: null});
    // 
    const [notif, setNotif] = useState(false);
    const handleCLoseNotif = () => {
        setNotif(false);
    }
    // 
    const handleSubmit = ( async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorEmail(false);
        setErrorNama(false);
        setErrorPassword(false);
        setErrorConfPassword(false);
        if(password !== confPassword){
            setErrorConfPassword({status: true, message: "Password tidak sama"});
            return false;
        }
        const params = {
            nama, email, password, confPassword
        };
        setTimeout(async() => {
            try {
                const respon = await register(params);
                if (respon.success) {
                    setNotif(true);
                    setNama('');
                    setEmail('');
                    setPassword('');
                    setConfPassword('');
                }
            } catch (e) {
                const dataErrors = e.response.data.errors;
                dataErrors.forEach(element => {
                    element.path == 'email' ? setErrorEmail({status: true, message: element.msg}) : null;
                    element.path == 'nama' ? setErrorNama({status: true, message: element.msg}) : null;
                    element.path == 'password' ? setErrorPassword({status: true, message: element.msg}) : null;
                });
            } finally {
                setLoading(false);
            }
        }, 2000);
    });
    
    return (
        <div className="bg-gradient-to-t from-green-700 to-blue-700 h-screen w-screen flex justify-center items-center font-poppins relative">
            <div className="fixed top-1/2 z-50">
                {loading ? <ClipLoader size={50} speedMultiplier={0.8} /> : null}
            </div>
            <div className="w-[85%] md:w-[30%] bg-white dark:bg-gray-800 px-3 py-5 md:py-10 rounded-xl">
                <div className="w-14 h-14 bg-white dark:bg-gray-200 rounded-md flex justify-center items-center mx-auto shadow-md">
                    <FaSignInAlt className="text-3xl text-blue-700"/>
                </div>
                <form className="" onSubmit={handleSubmit}>
                    <div className="px-3">
                        <div className="text-center mt-3">
                            <h1 className="text-lg font-semibold dark:text-gray-200">Daftar Dengan Email</h1>
                            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-200">Buat Akun Anda</h2>
                        </div>
                        <div className={` ${notif ? "" : "hidden"} relative bg-green-500 text-white font-medium text-sm font-poppins mt-5 text-center py-2 rounded-md`}>
                            User Berhasil ditambah
                            <div className="absolute top-0 right-2 text-xs cursor-pointer" onClick={handleCLoseNotif}>x</div>
                        </div>
                        <div className="mt-5">
                            <InputField
                                placeholder="Nama"
                                icon={<FaUser/>}
                                required={false}
                                value={nama}
                                onchange={
                                    (val) => {
                                        setNama(val.target.value);
                                    }
                                }
                                error={errorNama}
                            />
                        </div>
                        <div className="mt-5 mb-2">
                            <InputField
                                placeholder="Email"
                                icon={<FaEnvelope/>}
                                required={false}
                                value={email}
                                onchange={
                                    (val) => {
                                        setEmail(val.target.value);
                                    }
                                }
                                error={errorEmail}
                            />
                        </div>
                        <div className="mt-5 mb-2">
                            <InputPassword
                            placeholder="Password"
                            required={false}
                            value={password}
                            onchange={
                                (val) => {
                                    setPassword(val.target.value);
                                }
                            }
                            error={errorPassword}
                            />
                        </div>
                        <div className="mt-5 mb-2">
                            <InputPassword
                            placeholder="Konfirmasi Password"
                            required={false}
                            value={confPassword}
                            onchange={
                                (val) => {
                                    setConfPassword(val.target.value);
                                }
                            }
                            error={errorconfPassword}
                            />
                        </div>
                        <div className="mt-5 text-center ">
                            <button
                            type="submit"
                            className="block w-full bg-slate-800 font-poppins text-colorGray font-semibold py-1 rounded-md hover:bg-blue-950 dark:bg-gray-200 dark:text-gray-800"
                            >
                            Sign In
                            </button>
                            <p className="text-center my-2 font-poppins dark:text-gray-200">Or</p>
                            <hr className="my-2" />
                            <Link to="/login" className="underline font-poppins text-slate-800 font-semibold py-1 px-3 dark:text-gray-200">
                            Log In
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="absolute top-5 right-4">
                <ToggleMode/>
            </div>
        </div>
    );
}

export default SignIn;