import { Request, Response } from 'express';
import apiNetflix from '../jsons/netflixYtApi.json';
import apiPrimeVideo from '../jsons/primeVideoYtApi.json';
import apiStartPlus from '../jsons/startPlusYtApi.json';
import apiDisneyPlus from '../jsons/disneyPlusYtApi.json';
import trailers from '../jsons/trailersApi.json';
import outros from '../jsons/outrosApi.json';
import AllListApi from '../jsons/listAllApi.json';
import all from '../jsons/allApi.json';

export const lisAllApi = async (req: Request, res: Response)=>{
    let result = AllListApi;
    res.json(result);
};

export const listApiNetflix = async (req: Request, res: Response)=>{
    let result = apiNetflix;
    res.json(result);
};

export const listApiPrimeVideo = async (req: Request, res: Response)=>{
    let result = apiPrimeVideo;
    res.json(result);
};

export const listApiStartPlus = async (req: Request, res: Response)=>{
    let result = apiStartPlus;
    res.json(result);
};

export const listApiDisneyPlus = async (req: Request, res: Response)=>{
    let result = apiDisneyPlus;
    res.json(result);
};

export const allApi = async (req: Request, res: Response)=>{
    let result = all;
    res.json(result);
};

export const allTrailers = async (req: Request, res: Response)=>{
    let result = trailers;
    res.json(result);
};

export const allOutros = async (req: Request, res: Response)=>{
    let result = outros;
    res.json(result);
};