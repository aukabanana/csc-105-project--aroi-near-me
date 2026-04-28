import express, { Request, Response } from 'express'
import morgan from 'morgan'
import "dotenv/config"
import prisma from './lib/prisma'
import { z, ZodError } from 'zod'

const app = express()
const PORT = 3000

if (!PORT) throw new Error("This PORT is does not exist")

const restaurantSchema = z.object({
    id: z.string(),
    name: z.string(),
    banner: z.string(),
    address: z.string(),
    menu: z.array(menuSchema)
})
const partialRestaurant = restaurantSchema.partial()

const menuSchema = z.object({
    id: z.string(),
    image: z.string(),
    name: z.string(),
    restName: z.string(),
    desc: z.string(),
    price: z.number().optional(),
    discount: z.number().optional(),
    type: z.string(),
    timer: z.string(),
    status: z.boolean(),
    admin: z.boolean(),

    restaurantId: z.string()
})
const partialMenu = menuSchema.partial()

const adminSchema = z.object({
    id: z.string(),
    username: z.string(),
    pass: z.string()
})
const partialAdmin = adminSchema.partial()

app.use(express.json())
app.use(morgan('dev'))



app.listen(PORT, () => {
    console.log(`This server is running on PORT: ${PORT}`)
})
