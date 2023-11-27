import axios from "axios";
import { TokenJson } from "./token/AuthToken";
import axiosInstance from "src/utils/useAxiosInterceptors";

const api2 = "http://127.0.0.1:8000/api/subCatagories/";

export const GetSubCatagory = async () => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.get(api2, TokenJson());
    return res.data;
    } else {
        // console.log("No token");
    }
    }
export const GetSubCatagoryDetail = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.get(`${api2}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const CreateSubCatagory = async (values) => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.post(api2, values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const UpdateSubCatagory = async (values) => {
    if (localStorage.getItem("accessToken") && values) {
        const res = await axiosInstance.put(`${api2}${values.selectedData}/`, values.values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const DeleteSubCatagory = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.delete(`${api2}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }
