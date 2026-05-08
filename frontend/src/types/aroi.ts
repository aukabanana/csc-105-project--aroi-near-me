export type MenuType = | 'ALL' | 'SUSHI' | 'DONBURI' | 'RAMEN' | 'SNACK' | 'DRINK';

export interface Restaurant {
    id: string;
    name: string;
    banner: string;
    address: string;
    is_active: boolean;
}

export interface RestaurantFormData {
    name: string;
    banner: string;
    address: string;
}

export interface Menu {
    id: string;
    name: string;
    desc: string;
    price: number;
    discount: number | null;
    type: MenuType;
    timer: string | null;
    image: string;
    status: boolean;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    restaurant_id: string;
}

export interface MenuFormData {
    name: string;
    desc: string;
    price: number;
    discount?: number | null;
    type?: MenuType;
    timer?: string | null;
    image: string;
    status?: boolean;
    restaurant_id: string;
}

export interface Admin {
    id: string;
    username: string;
    password: string;
}

export interface AdminLoginFormData {
    username: string;
    password: string;
}

export interface AdminLoginResponse {
    message: string;
    username: string;
}

export interface AdminLogoutResponse {
    message: string;
}