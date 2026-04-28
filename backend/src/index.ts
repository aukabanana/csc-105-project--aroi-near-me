import express, { Request, Response } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import prisma from './lib/prisma.js';
import { z, ZodError } from 'zod';

const app = express();
const PORT = process.env.PORT;
if (!PORT) throw new Error(`PORT is missing in your env file`);

app.use(express.json());
app.use(morgan('dev'));

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

app.get('/menus', async (req: Request, res: Response) => {
    try {
        const data = await prisma.menu.findMany();
        res.status(200).json(data);
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
})

app.post('/create-menu', async (req: Request, res: Response) => {
    try {
        // const create = createMenu.parse(req.body);
        const {name, desc, price, discount, type, timer, image, restaurant_id} = menuSchema.parse(req.body)
        const newMenu = await prisma.menu.create({
            data: {name, desc, price, discount, type : type as any, timer, image, restaurant_id}
        })
        res.status(201).json(newMenu)
    } catch (error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
})

app.get('/restaurant', async (req: Request, res: Response) => {
    try {
        const data = await prisma.restaurant.findMany()
        res.status(200).json(data)
    } catch(error) {
        if (error instanceof ZodError) return res.status(400).json(error.issues)
        res.status(500).json(error)
    }
})

app.post('/create-rest', async (req: Request, res: Response) => {
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
})

// ? Simple Health Check endpoint
app.listen(PORT, () => {
    console.log(`Server Is Running On http://localhost:${PORT}`);
});

app.get('/', (_req, res: Response) => {
    res.send('Connected, Welcome to BackEnd jaaaa 👾👾')
})

// ? Implement Code
