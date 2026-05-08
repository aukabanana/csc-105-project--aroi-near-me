import axios, { type AxiosError } from "axios";
import type { Restaurant, Menu } from "../types/aroi";

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

export async function getRestaurants(): Promise<Restaurant[]> {
    try {
        const response = await api.get<Restaurant[]>("/restaurants");
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}

export async function getMenus(): Promise<Menu[]> {
    try {
        const response = await api.get<Menu[]>("/menus");
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}