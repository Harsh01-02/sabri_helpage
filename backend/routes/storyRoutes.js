import express from 'express';
import { getStories, getStoryById, createStory, updateStory, deleteStory } from '../controllers/storyController.js';

const router = express.Router();

router.get('/story', getStories);
router.get('/story/:id', getStoryById);
router.post('/story', createStory);
router.put('/story/:id', updateStory);
router.delete('/story/:id', deleteStory);

export default router;
