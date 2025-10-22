import { IoMenu } from "react-icons/io5";
import useAuthStore from "../store/authStore";
import { FaBell, FaUserCircle, FaWindowClose, FaHome, FaPowerOff } from "react-icons/fa";
import { useState } from "react";
import ToggleMode from "../components/ToogleMode";

function Dashboard(){
    const { logout } = useAuthStore();

    const handleLogOut = () => {
        logout();
    }
    const [keluar, setKeluar] = useState(false);
    const user_nama = localStorage.getItem('user_nama');
    return (
        <>
        <div className="font-poppins">
            <header className="w-full bg-white dark:bg-gray-700 shadow-sm px-6 py-3 flex justify-between items-centered">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h1>
                <div className="flex items-center gap-5">
                    <ToggleMode/>
                    <button className="relative text-gray-600 hover:text-gray-800 dark:text-gray-200">
                        <FaBell className="text-xl" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">1</span>
                    </button>
                    <div className="relative flex items-center gap-2">
                        <FaUserCircle className="text-2xl text-gray-600 cursor-pointer dark:text-gray-200" onClick={() => setKeluar(!keluar)} />
                        <span className="hidden md:block text-gray-700 font-medium dark:text-gray-200">
                            {user_nama}
                        </span>
                        <div className={` ${keluar ? "" : "hidden"} transition-all duration-300 ease-in-out  absolute -bottom-12 -left-14 md:-left-20 px-2 rounded-md flex items-center bg-red-500 text-white h-10 w-20 md:h-10 md:w-28 text-center text-base`}>
                            <div className="cursor-pointer flex gap-2 items-center text-xs md:text-base dark:text-gray-200" onClick={() => handleLogOut()}>
                                <FaPowerOff className=""/>
                                Keluar
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex justify-center items-center h-screen dark:bg-gray-200">
                <h1>Selamat Datang..</h1>
            </div>
        </div>
        </>
    )
}

export default Dashboard;