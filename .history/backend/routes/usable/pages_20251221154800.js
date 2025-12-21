
const express = require('express');
const router = express.Router();
const pagesModule = require('../../pages');
const pages = pagesModule.default || pagesModule;

/**
 * GET /api/pages
 * Fetch all pages
 */
// Return all pages from the static array
router.get('/', (req, res) => {
    try {
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
// Return a single page by slug from the static array
router.get('/:slug', (req, res) => {
    try {
        const { slug } = req.params;
        const page = pages.find(p => p.slug === slug);
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

module.exports = router;
