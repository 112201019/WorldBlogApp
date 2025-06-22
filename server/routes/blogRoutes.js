import express from 'express';
import { createBlog } from '../controllers/blogController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/blogs - Create a new blog post (protected)
router.post('/', protect, createBlog);

export default router;