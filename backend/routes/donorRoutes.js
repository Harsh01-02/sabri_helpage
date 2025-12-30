import express from 'express';
import { getDonors, getDonorById, createDonor, updateDonor, deleteDonor } from '../controllers/donorController.js';

const router = express.Router();

router.get('/donors', getDonors);
router.get('/donors/:id', getDonorById);
router.post('/donors', createDonor);
router.put('/donors/:id', updateDonor);
router.delete('/donors/:id', deleteDonor);

export default router;