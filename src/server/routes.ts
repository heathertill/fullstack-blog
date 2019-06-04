import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/blogs/:id?', async (req, res) => {
    let id = req.params.id
    if (id) {
        try {
            // the [0] gets the blog object from the array
            res.json((await db.Blogs.one(id))[0]);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.Blogs.all());
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
});

router.post('/api/blogs', async (req, res) => {
    try {
        let newBlog = await db.Blogs.createBlog(req.body.title, req.body.content, req.body.authorid);
        res.json(newBlog);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/api/blogs/:id', async (req, res) => {
    try {
        res.json(await db.Blogs.updateBlog(req.body.title, req.params.id))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/api/blogs/:id', async (req, res) => {
    try {
        res.json(await db.Blogs.deleteBlog(req.params.id))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/api/tags/:blogid', async (req, res) => {
    try {
        res.json((await db.Tags.getTag(req.params.blogid)))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/api/tags', async (req, res) => {
    try {
        res.json(await db.Tags.createBlogTag(req.body.blogid, req.body.tagid))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


export default router;