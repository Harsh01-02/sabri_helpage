const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


const uploadImage = multer({
  storage,
  fileFilter: function (req, file, cb) {
    // Accept any file with an image MIME type
    if (file.mimetype && file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

const uploadVideo = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.mp4' || ext === '.avi' || ext === '.mov' || ext === '.wmv' || ext === '.mkv' || ext === '.webm') {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed'));
    }
  }
});

const uploadPDF = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

module.exports = { uploadImage, uploadVideo, uploadPDF };