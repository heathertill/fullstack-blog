import { Query } from './index';

// don't need export by each function as they are exported collectively at tbe bottom
const getAuthId = async (name: string) => Query('CALL spGetAuthId(?)', [name]);

// const getAuthId = async(name: string) => Query('SELECT id FROM authors WHERE name = ?', [name])

export default {
    getAuthId
}


