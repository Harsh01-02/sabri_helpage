import express from 'express';
import { getInternships, getInternshipById, createInternship, updateInternship, deleteInternship } from '../controllers/internshipController.js';

const router = express.Router();

router.get('/internships', getInternships);
router.get('/internships/:id', getInternshipById);
router.post('/internships', createInternship);
router.put('/internships/:id', updateInternship);
router.delete('/internships/:id', deleteInternship);

export default router;