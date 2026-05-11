import { Request, Response } from 'express'
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
    price: z.coerce.number().positive(),
    discount: z.coerce.number().min(0).optional(),
    type: MenuTypeEnum.default("ALL"),
    timer: z.string().optional(),
    image: z.string().min(1),
    status: z.coerce.boolean().default(false),
    restaurant_id: z.string().uuid(),
})

const updateMenuSchema = z.object({
    name: z.string().min(1).optional(),
    desc: z.string().min(1).optional(),
    price: z.coerce.number().positive().optional(),

    discount: z.preprocess(
        (value) => value === "" || value === "null" ? null : value,
        z.coerce.number().min(0).nullable().optional()
    ),

    type: MenuTypeEnum.optional(),

    timer: z.preprocess(
        (value) => value === "" || value === "null" ? null : value,
        z.string().nullable().optional()
    ),

    image: z.string().min(1).optional(),
    status: z.coerce.boolean().optional(),
    restaurant_id: z.string().uuid().optional(),
})

const partialMenu = menuSchema.partial();

const Admin = z.object({
    username: z.string().min(1),
    password: z.string().min(6)
})

//get all menu
export const getAllMenu = async (req: Request, res: Response) => {
    try {
        const data = await prisma.menu.findMany({
            where: {
                is_active: true
            }
        });

        res.status(200).json(data);
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

// get promotion menu
export const getPromotionMenus = async (req: Request, res: Response) => {
    try {
        const data = await prisma.menu.findMany({
            where: {
                is_active: true,
                status: true,
                OR: [
                    {
                        timer: {
                            not: null
                        }
                    },
                    {
                        discount: {
                            not: null
                        }
                    },
                ]
            },
            include: {
                restaurant: true
            }
        })

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

//create new menu
export const createMenu = async (req: Request, res: Response) => {
    try {
        const image = req.file ? `/uploads/img/${req.file.filename}` : ""

        const data = menuSchema.parse({
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            discount: req.body.discount || undefined,
            type: req.body.type,
            timer: req.body.timer || undefined,
            image,
            status: req.body.status ?? false,
            restaurant_id: req.body.restaurant_id,
        })

        const newMenu = await prisma.menu.create({
            data: {
                ...data,
                type: data.type as any,
            }
        })

        res.status(201).json(newMenu)
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues)
        }

        res.status(500).json(error)
    }
}

//get menu by name
export const getMenuByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name as string
        const data = await prisma.menu.findMany({
            where: { name: name }
        })
        res.status(200).json(data)
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

//update menu (using patch)
export const updateMenu = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string

        const image = req.file
            ? `/uploads/img/${req.file.filename}`
            : undefined

        const data = updateMenuSchema.parse({
            ...req.body,
            ...(image ? { image } : {})
        })

        const updatedMenu = await prisma.menu.update({
            where: { id },
            data: {
                ...data,
                type: data.type as any,
            }
        })

        res.status(200).json(updatedMenu)
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues)
        }

        res.status(500).json(error)
    }
}

//delete menu --> Change staus is_active
export const deleteMenu = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string

        const data = await prisma.menu.update({
            where: {
                id: id
            },
            data: {
                is_active: false
            }
        })
        res.status(200).json({
            message: "Menu deleted successfully",
            data
        })
    } catch (error) {
        if (error instanceof ZodError)
            return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

export const getAllRestaurant = async (req: Request, res: Response) => {
    try {
        const data = await prisma.restaurant.findMany()
        res.status(200).json(data)
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

export const createRestaurant = async (req: Request, res: Response) => {
    try {
        const banner = req.file ? `/uploads/img/${req.file.filename}` : ""

        const data = restaurantSchema.parse({
            name: req.body.name,
            address: req.body.address,
            banner
        })

        const newRest = await prisma.restaurant.create({
            data
        })

        res.status(201).json(newRest)
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}

//update restaurant (using patch)
export const updateRestaurant = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string

        const banner = req.file
            ? `/uploads/img/${req.file.filename}`
            : undefined

        const body = partialRestaurant.parse({
            ...req.body,
            ...(banner ? { banner } : {})
        })

        const data = await prisma.restaurant.update({
            where: {
                id
            },
            data: body
        })

        res.status(200).json(data)
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues)
        }

        res.status(500).json(error)
    }
}

//delete restaurant  --> Change staus is_active
export const deleteRestaurant = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string
        const data = await prisma.restaurant.update({
            where: {
                id: id
            },
            data: {
                is_active: false
            }
        })
        res.status(200).json({
            message: "Restaurant deleted successfully",
            data
        })
    } catch (error) {
        if (error instanceof ZodError)
            return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
}
