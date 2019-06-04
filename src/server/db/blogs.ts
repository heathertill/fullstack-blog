import { Query } from './index';

const all = async () => Query('SELECT * FROM blogs ORDER BY _created DESC');
const one = async (id: number) => Query('SELECT * FROM blogs WHERE id = ?', [id]);
const createBlog = async (title: string, content: string, authorid: number) => Query('INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)', [title, content, authorid]);
const updateBlog = async (title: string, id: number) => Query('UPDATE blogs SET title = ? WHERE id = ?', [title, id]);
const deleteBlog = async (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

export default {
    all,
    one,
    createBlog,
    updateBlog,
    deleteBlog
}