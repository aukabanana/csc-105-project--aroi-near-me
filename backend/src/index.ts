import express, { Request, Response } from 'express';
import 'dotenv/config';
import morgan from 'morgan';


const app = express();
const PORT = process.env.PORT;
if (!PORT) throw new Error(`PORT is missing in your env file`);

app.use(express.json());
app.use(morgan('dev'));



// ? Simple Health Check endpoint
app.listen(PORT, () => {
    console.log(`Server Is Running On http://localhost:${PORT}`);
});

app.get('/', (_req, res: Response) => {
    res.send('Connected, Welcome to BackEnd jaaaa 👾👾')
})

