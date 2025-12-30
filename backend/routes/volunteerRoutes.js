import express from 'express';
import { getVolunteers, getVolunteerById, createVolunteer, updateVolunteer, deleteVolunteer } from '../controllers/volunteerController.js';

const router = express.Router();

router.get('/volunteers', getVolunteers);
router.get('/volunteers/:id', getVolunteerById);
router.post('/volunteers', createVolunteer);
router.put('/volunteers/:id', updateVolunteer);
router.delete('/volunteers/:id', deleteVolunteer);

export default router;