import express from 'express';
import { getFaqs, getFaqById, createFaq, updateFaq, deleteFaq } from '../controllers/faqController.js';

const router = express.Router();

router.get('/faqs', getFaqs);
router.get('/faqs/:id', getFaqById);
router.post('/faqs', createFaq);
router.put('/faqs/:id', updateFaq);
router.delete('/faqs/:id', deleteFaq);

export default router;