import express from 'express';
import { getPublications, getPublicationById, createPublication, updatePublication, deletePublication } from '../controllers/publicationController.js';

const router = express.Router();

router.get('/publications', getPublications);
router.get('/publications/:id', getPublicationById);
router.post('/publications', createPublication);
router.put('/publications/:id', updatePublication);
router.delete('/publications/:id', deletePublication);

export default router;