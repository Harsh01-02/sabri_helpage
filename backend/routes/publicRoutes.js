import express from 'express';
import { createContact, createSubscription, createDonation } from '../controllers/servicesController.js';
import { getPageBySlug } from '../controllers/pageController.js';

const router = express.Router();

// Service routes
router.post('/contact', createContact);
router.post('/subscribe', createSubscription);
router.post('/donate', createDonation);

// Content routes
router.get('/causes', (req, res) => {
  req.params.slug = 'causes';
  return getPageBySlug(req, res);
});

router.get('/stories', (req, res) => {
  req.params.slug = 'stories';
  return getPageBySlug(req, res);
});

export default router;