import express from 'express';
import coursesController from '../app/controllers/Coursescontroller.js';

const router = express.Router();

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.get('/:slug', coursesController.show);

export default router;