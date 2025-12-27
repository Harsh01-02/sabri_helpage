const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/uploadController');
const { uploadImage, uploadVideo, uploadPDF } = require('../utils/multerConfig');
const { protect } = require('../middleware/authMiddleware');
const { permit } = require('../middleware/roleMiddleware');

router.post('/image', protect, permit('editor', 'manager', 'admin', 'super-admin'), uploadImage.single('file'), uploadFile);
router.post('/video', protect, permit('editor', 'manager', 'admin', 'super-admin'), uploadVideo.single('file'), uploadFile);
router.post('/pdf', protect, permit('editor', 'manager', 'admin', 'super-admin'), uploadPDF.single('file'), uploadFile);

module.exports = router;
