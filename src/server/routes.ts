import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs/:id?', async (req, res) => {
    let id = req.params.id
    if (id) {
        try {
            // the [0] gets the blog object from the array
            res.json((await db.Blogs.one(id))[0]);
        } catch (err) {
            console.log('blogs/id: err:', err);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.Blogs.all());
        } catch (err) {
            console.log('blogs err:', err);
            res.sendStatus(500);
        }
    }

})

export default router;