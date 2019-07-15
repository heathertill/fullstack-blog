import { Router } from 'express';
import db from '../db';

const router = Router();






router.get('/:name', async (req, res) => {
    let name = req.params.name
    try {
        res.json((await db.Authors.getAuthId(name))[0])
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})


export default router;