import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error("DATABASE URL is not found in .env file")

const adapter = new PrismaLibSql({url : connectionString })
const prisma = new PrismaClient({adapter})

export default prisma
