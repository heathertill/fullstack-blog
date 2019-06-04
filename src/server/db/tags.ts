import { Query } from './index';

const createBlogTag = async (blogid: number, tagid: number) => Query('INSERT INTO blogTags (blogid, tagid) VALUES (?, ?)', [blogid, tagid]);
const getTag = async (blogid: number) => Query('CALL spBlogTags(?)', [blogid])

export default {
    createBlogTag,
    getTag
}