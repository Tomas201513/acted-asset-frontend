import axios from "axios";
import { TokenJson } from "./token/AuthToken";
import axiosInstance from "src/utils/useAxiosInterceptors";

const api = "http://127.0.0.1:8000/api/budgets";
const api2 = "http://127.0.0.1:8000/api/projects";

export const GetBudget = async () => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.get(api, TokenJson());
    return res.data;
    } else {
        // console.log("No token");
    }
    }
export const GetBudgetDetail = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.get(`${api}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const CreateBudget = async (values) => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.post(api, values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const UpdateBudget = async (values) => {
    if (localStorage.getItem("accessToken") && values) {
        const res = await axiosInstance.put(`${api}${values.selectedData}/`, values.values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const DeleteBudget = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.delete(`${api}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }


"###############################################################################"
/////////////////////////////////////////////////////////////////////////////////
"###############################################################################"


export const GetProject = async () => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.get(api2, TokenJson());
        console.log('----',res.data);
    return res.data;
    } else {
        // console.log("No token");
    }
    }
export const GetProjectDetail = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.get(`${api2}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const CreateProject = async (values) => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.post(api2, values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const UpdateProject = async (values) => {
    if (localStorage.getItem("accessToken") && values) {
        const res = await axiosInstance.put(`${api2}${values.selectedData}/`, values.values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const DeleteProject = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.delete(`${api2}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

