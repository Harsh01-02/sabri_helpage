import express from 'express';
import { getVideos, getVideoById, createVideo, updateVideo, deleteVideo } from '../controllers/videoController.js';

const router = express.Router();

router.get('/videos', getVideos);
router.get('/videos/:id', getVideoById);
router.post('/videos', createVideo);
router.put('/videos/:id', updateVideo);
router.delete('/videos/:id', deleteVideo);

export default router;