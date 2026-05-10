import axios, { type AxiosError } from "axios";
import type { Restaurant, Menu, AdminLoginFormData, AdminLoginResponse, AdminLogoutResponse } from "../types/aroi";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

interface ApiError {
    message: string;
}

interface DeleteResponse<T> {
    message: string;
    data: T;
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

export async function createRestaurant(data: FormData): Promise<Restaurant> {
    try {
        const response = await api.post<Restaurant>("/create-restaurant", data);
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}

export async function updateRestaurant(
    id: string,
    data: FormData
): Promise<Restaurant> {
    try {
        const response = await api.patch<Restaurant>(`/restaurant/${id}`, data);
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}

export async function deleteRestaurant(
    id: string
): Promise<DeleteResponse<Restaurant>> {
    try {
        const response = await api.delete<DeleteResponse<Restaurant>>(
            `/restaurant/${id}`
        );
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

export async function createMenu(data: FormData): Promise<Menu> {
    try {
        const response = await api.post<Menu>("/create-menu", data);
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}

export async function updateMenuStatus(
    id: string,
    status: boolean
): Promise<Menu> {
    try {
        const response = await api.patch<Menu>(`/menu/${id}`, { status });
        return response.data;
    } catch (err) {
        throw new Error(getErrorMessage(err));
    }
}

export async function updateMenu(
    id: string,
    data: FormData
): Promise<Menu> {
    try {
        const response = await api.patch<Menu>(`/menu/${id}`, data)
        return response.data
    } catch (err) {
        throw new Error(getErrorMessage(err))
    }
}

export async function deleteMenu(
  id: string
): Promise<DeleteResponse<Menu>> {
  try {
    const response = await api.delete<DeleteResponse<Menu>>(`/menu/${id}`);
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