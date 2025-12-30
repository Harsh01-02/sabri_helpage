import express from 'express';
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

router.get('/event', getEvents);
router.get('/event/:id', getEventById);
router.post('/event', createEvent);
router.put('/event/:id', updateEvent);
router.delete('/event/:id', deleteEvent);

export default router;