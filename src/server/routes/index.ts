import { Router } from 'express';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import authorsRouter from './authors';

const router = Router();


router.use('/blogs', blogsRouter);
router.use('/tags', tagsRouter);
router.use('/authors', authorsRouter);










export default router;

