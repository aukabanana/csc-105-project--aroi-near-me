import {Request, Response} from 'express'
import morgan from 'morgan'
import { z, ZodError } from 'zod'
import prisma from '../lib/prisma.js'


// ? Schema Section
const restaurantSchema = z.object({
    name: z.string().min(1),
    banner: z.string().min(1),
    address: z.string().min(1)
});
const partialRestaurant = restaurantSchema.partial();

const MenuTypeEnum = z.enum([
    'ALL',
    'SUSHI',
    'DONBURI',
    'RAMEN',
    'SNACK',
    'DRINK'
])

const menuSchema = z.object({
    name: z.string().min(1),
    desc: z.string().min(1),
    price: z.number().positive(),
    discount: z.number().min(0).optional(),
    type: MenuTypeEnum.default('ALL'),
    timer: z.string().datetime().optional(),
    image: z.string().min(1),
    restaurant_id: z.string().uuid(),
})
const partialMenu = menuSchema.partial();

const Admin = z.object({
    username: z.string().min(1),
    password: z.string().min(6)
})

//get all menu
export const getAllMenu = async (req: Request, res: Response) => {
    try {
        const data = await prisma.menu.findMany();
        res.status(200).json(data);
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
            res.status(500).json(error)
    }
}

//create new menu
export const createMenu = async (req: Request, res: Response) => {
    try {
        const {name, desc, price, discount, type, timer, image, restaurant_id} = menuSchema.parse(req.body)
        const newMenu = await prisma.menu.create({
            data: {name, desc, price, discount, type : type as any, timer, image, restaurant_id}
        })
        res.status(201).json(newMenu);
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
            res.status(500).json(error)
    }
}

//get menu by name
//implement code here


//update menu (using patch)
//implement code here


//delete menu --> Change staus is_active
//implement code here


export const getAllRestaurant = async (req: Request, res: Response) => {
    try {
        const data = await prisma.restaurant.findMany()
        res.status(200).json(data)
    } catch(error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

export const createRestaurant = async (req: Request, res: Response) => {
    try {
        const {name, banner, address} = restaurantSchema.parse(req.body)
        const newRest = await prisma.restaurant.create({
            data: {name, banner, address}
        })
        res.status(201).json(newRest)
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

//update restaurant (using patch)
//implement code here


//delete restaurant  --> Change staus is_active
//implement code here
