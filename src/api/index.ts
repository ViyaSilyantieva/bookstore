import axios from "axios";

export const postApi = axios.create({
    baseURL: "https://api.itbook.store/1.0"
});
