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
const Restaurant = z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    address: z.string().min(1),
    banner: z.string().min(1)
});
const partialRestaurant = Restaurant.partial();

const MenuTypeEnum = z.enum([
    'ALL',
    'SUSHI',
    'DONBURI',
    'RAMEN',
    'SNACK',
    'DRINK'
])

const Menu = z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    desc: z.string().min(1),
    price: z.number().positive(),
    discount: z.number().min(0).optional(),
    type: MenuTypeEnum.default('ALL'),
    timer: z.string().datetime().optional(),
    image: z.string().min(1),
    status: z.boolean().default(false),

    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),

    restaurant_id: z.string().uuid(),
    is_active: z.boolean().default(true),
})
const partialMenu = Menu.partial();

const Admin = z.object({
    id: z.string().uuid(),
    username: z.string().min(1),
    password: z.string().min(6)
})

// ? Simple Health Check endpoint
app.listen(PORT, () => {
    console.log(`Server Is Running On http://localhost:${PORT}`);
});

app.get('/', (_req, res: Response) => {
    res.send('Connected, Welcome to BackEnd jaaaa 👾👾')
})

// ? Implement Code
