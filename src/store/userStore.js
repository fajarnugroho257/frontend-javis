import axios from "axios";

const API_URL = "http://localhost:8000";

export const register = async (params) => {
    const response = await axios.post(`${API_URL}/auth`, params);
    return response.data;
};