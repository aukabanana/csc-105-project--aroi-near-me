import axios, { type AxiosError } from "axios";
import type { Restaurant, RestaurantFormData, Menu, MenuFormData, Admin,AdminLoginFormData, AdminLoginResponse, AdminLogoutResponse } from "../types/aroi";

const api = axios.create({
baseURL: "http://localhost:3000/",
});

interface ApiError {
message: string;
}

function getErrorMessage(err: unknown): string {
const error = err as AxiosError<ApiError>;
return error.response?.data?.message ?? "Something went wrong";
}