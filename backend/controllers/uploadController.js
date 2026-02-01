import cloudinary from '../config/cloudinary.js'; // ✅ add .js

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto', // image / video / pdf
          folder: 'sabri-helpage',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(req.file.buffer); // ✅ correct
    });

    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id,
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'File upload failed' });
  }
};
