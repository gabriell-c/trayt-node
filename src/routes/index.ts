import { Router } from 'express';
import * as ApiController from '../controllers/ApiController';

const router = Router();

router.get('/', ApiController.lisAllApi);
router.get('/api/netflix', ApiController.listApiNetflix);
router.get('/api/primevideo', ApiController.listApiPrimeVideo);
router.get('/api/starplus', ApiController.listApiStartPlus);
router.get('/api/disneyplus', ApiController.listApiDisneyPlus);
router.get('/api/trailers', ApiController.allTrailers);
router.get('/api/outros', ApiController.allOutros);
router.get('/api/all', ApiController.allApi);

export default router;