import express from 'express';
import { uploadFile } from '../controllers/uploadController.js';
import { uploadImage, uploadVideo, uploadPDF } from '../utils/multerConfig.js';
import { protect } from '../middleware/authMiddleware.js';
import { permit } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Image upload
router.post(
  '/image',
  protect,
  permit('editor', 'manager', 'admin', 'super-admin'),
  uploadImage.single('file'), // field name MUST be "file"
  uploadFile
);

// Video upload
router.post(
  '/video',
  protect,
  permit('editor', 'manager', 'admin', 'super-admin'),
  uploadVideo.single('file'),
  uploadFile
);

// PDF upload
router.post(
  '/pdf',
  protect,
  permit('editor', 'manager', 'admin', 'super-admin'),
  uploadPDF.single('file'),
  uploadFile
);

export default router;
