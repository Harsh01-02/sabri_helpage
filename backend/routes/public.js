// Minimal placeholder for /api/public route
import express from 'express';
const router = express.Router();

// Example: Health check
router.get('/', (req, res) => {
  res.json({ message: 'Public route is working.' });
});

export default router;
