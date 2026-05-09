import express, { Request, Response } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import routers from './routes/routes.js'
import authroute from './routes/auth.route.js'

const app = express();
const PORT = process.env.PORT;
if (!PORT) throw new Error(`PORT is missing in your env file`);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ 
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(routers);
app.use(authroute);
app.use(errorHandler);

// ? Simple Health Check endpoint
app.listen(PORT, () => {
    console.log(`Server Is Running On http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Connected, Welcome to BackEnd jaaaa 👾👾')
})

