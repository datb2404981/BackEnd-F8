import express from 'express';
import newController from '../app/controllers/Newcontroller.js';

const router = express.Router();


router.get('/:slug', newController.show);

export default router;