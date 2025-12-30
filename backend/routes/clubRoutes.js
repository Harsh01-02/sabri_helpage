import express from 'express';
import { getClubRegistrations, getClubRegistrationById, createClubRegistration, updateClubRegistration, deleteClubRegistration } from '../controllers/clubController.js';

const router = express.Router();

router.get('/clubs', getClubRegistrations);
router.get('/clubs/:id', getClubRegistrationById);
router.post('/clubs', createClubRegistration);
router.put('/clubs/:id', updateClubRegistration);
router.delete('/clubs/:id', deleteClubRegistration);

export default router;