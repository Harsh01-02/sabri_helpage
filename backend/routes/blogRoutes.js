import express from 'express';
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Use plural collection path: /api/blogs
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.post('/blogs', protect, createBlog);
router.put('/blogs/:id', protect, updateBlog);
router.delete('/blogs/:id', protect, deleteBlog);

export default router;