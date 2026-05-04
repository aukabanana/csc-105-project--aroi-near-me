import { Request, Response } from 'express'
import morgan from 'morgan'
import {z, ZodError } from 'zod'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const adminSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const result = adminSchema.safeParse(req.body)
        if (!result.success) {
            return res.status(400).json({error: result.error.message})
        } 
        const { username, password } = result.data

        const admin = await prisma.admin.findFirst({
            where: {username}
        })


        if (!admin) {
            return res.status(400).json({ message : "Invalid username"})
        }

        const passwordMatch = await bcrypt.compare(password, admin.password)

        if (!passwordMatch) {
            return res.status(400).json({message: 'Invalid password'})
        }
        
        //set token
        const token = jwt.sign(
            {username: admin.username, password: admin.password},
            process.env.JWT_SECRET!,
            {expiresIn: '3d'}
        )
        
        //collect cookie in "token"
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 3 * 60 * 60 * 1000
        }) 
        
        res.status(200).json({message: 'login successfully',
            username: username,
            password: password
        })

    } catch (error) {
        if(error instanceof ZodError) {
            return res.status(400).json({ message: "Invalid input" })
        }
        return res.status(500).json({message: 'Internal Server Error'})
    }
}
