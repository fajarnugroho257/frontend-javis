import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:8000";

const useAuthStore = create ((set) => ({
    user: null,

    token: localStorage.getItem('token') || null,
    
    login: async (params) => {
        const response = await axios.post(`${API_URL}/auth/login`, params);
        if(response.data.success){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_nama', response.data.user_nama);
            set({user_nama: response.data.user_nama, token: response.data.token});
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        set({user: null, token: null});
    },

}));

export default useAuthStore;