import express from 'express';
import { submitContactForm } from '../controllers/contactController.js';
import { validateContactForm } from '../middleware/validation.js';

const router = express.Router();

router.post('/contact', validateContactForm, submitContactForm);

export default router;