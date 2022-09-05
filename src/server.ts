import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import path from 'path';
import apiRoute from './routes';
import cors from 'cors';

dotenv.config();
const server = express();
server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));

server.use(apiRoute);

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({erro: "Endpoint não encontrado"});
});

server.listen(process.env.PORT);