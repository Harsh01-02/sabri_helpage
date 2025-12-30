import express from 'express';
import { getTeachers, createTeacher, getTeacherById } from '../controllers/teacherController.js';

const router = express.Router();

// GET all teachers
router.get('/teachers', getTeachers);

// POST create a new teacher
router.post('/teachers', createTeacher);

// GET a single teacher by ID
router.get('/teachers/:id', getTeacherById);

export default router;