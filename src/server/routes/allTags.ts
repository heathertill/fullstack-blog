import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:selectTag', async (req, res) => {
    let id = req.params.selectTag;
    try {
        let tags: any = await db.AllTags.allOneTag(id);
        res.json(tags[0])
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})




export default router