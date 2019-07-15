import * as path from 'path';
import * as express from 'express';
import * as morgan from 'morgan';
import apiRouter from './routes';

const app = express();
// *** express >= 4.1 no longer need path. will know where to look with 'public'
// let p = path.join(__dirname, '../public');
// console.log(p);

// index.html file has all react/ts code in app.js bundle which is served in html page
app.use(express.static('public'));
app.use(express.json());
// look at morgan docs to see diff types of logs available
app.use(morgan('dev'));
// middleware to use the logic found in apiRouter
app.use('/api', apiRouter);

// if the home path ('public') or the '/api' path aren't matched send this path...
// '*' represents public and api - if not found send this '../...'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
