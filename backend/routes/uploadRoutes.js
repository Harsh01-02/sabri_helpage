import express from 'express';
const router = express.Router();
import { uploadFile } from '../controllers/uploadController.js';
import { uploadImage, uploadVideo, uploadPDF } from '../utils/multerConfig.js';
import { protect } from '../middleware/authMiddleware.js';
import { permit } from '../middleware/roleMiddleware.js';

router.post('/image', protect, permit('editor', 'manager', 'admin', 'super-admin'), uploadImage.single('file'), uploadFile);
router.post('/video', protect, permit('editor', 'manager', 'admin', 'super-admin'), uploadVideo.single('file'), uploadFile);
router.post('/pdf', protect, permit('editor', 'manager', 'admin', 'super-admin'), uploadPDF.single('file'), uploadFile);

export default router;
