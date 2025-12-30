import express from 'express';
const router = express.Router();
import { getAwards, getAwardById, createAward, updateAward, deleteAward } from '../controllers/awardController.js';

router.get('/awards', getAwards);
router.get('/awards/:id', getAwardById);
router.post('/awards', createAward);
router.put('/awards/:id', updateAward);
router.delete('/awards/:id', deleteAward);

export default router;
