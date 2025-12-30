import express from 'express';
import Page from '../../models/Page.js';

const router = express.Router();

/**
 * GET /api/pages
 * Fetch all pages
 */
router.get('/', async (req, res) => {
    try {
        const pages = await Page.find().sort({ createdAt: 1 });
        res.json(pages);
    } catch (error) {
        console.error('Error fetching pages:', error);
        res.status(500).json({
            message: 'Failed to fetch pages',
            error: error.message
        });
    }
});

/**
 * GET /api/pages/:slug
 * Fetch a single page by slug
 */
router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;

        const page = await Page.findOne({ slug });

        if (!page) {
            return res.status(404).json({ message: 'Page not found' });
        }

        res.json(page);
    } catch (error) {
        console.error('Error fetching page:', error);
        res.status(500).json({
            message: 'Failed to fetch page',
            error: error.message
        });
    }
});

export default router;
