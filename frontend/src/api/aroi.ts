import axios, { type AxiosError } from "axios";
import type { Restaurant, RestaurantFormData, Menu, AdminLoginFormData, AdminLoginResponse, AdminLogoutResponse } from "../types/aroi";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

interface ApiError {
    message: string;
}

export function getErrorMessage(err: unknown): string {
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

export async function createRestaurant(data: RestaurantFormData): Promise<Restaurant> {
    try {
        const response = await api.post<Restaurant>("/create-restaurant", data);
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}


export async function updateRestaurant(
    id: string,
    data: Partial<RestaurantFormData>
): Promise<Restaurant> {
    try {
        const response = await api.patch<Restaurant>(`/restaurant/${id}`, data);
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

export async function loginAdmin(data: AdminLoginFormData): Promise<AdminLoginResponse> {
    try {
        const response = await api.post<AdminLoginResponse>("/login-admin", data);
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}

export async function logoutAdmin(): Promise<AdminLogoutResponse> {
    try {
        const response = await api.post<AdminLogoutResponse>("/logout-admin");
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}