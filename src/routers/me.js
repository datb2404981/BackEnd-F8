import express from 'express';
import meController from '../app/controllers/Mecontroller.js';

const router = express.Router();

router.get('/stored/courses', meController.storedCourses);


export default router;