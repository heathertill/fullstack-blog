let config = require('../../../config');
let Connection = config.Connection;

// don't need export by each function as they are exported collectively at tbe bottom
export const allOneTag = async (id: number) => {
    // let query = 'SELECT * FROM blogs b JOIN blogTags bt ON b.id = bt.blogid WHERE bt.tagid = ?';
    let query = 'CALL spAllOneTag(?)';
    return new Promise((resolve, reject) => {
        Connection.query(query, [id], (err: any, results: any) => {
            if (err) {
            return reject(err)
        } resolve(results)
        })
    })
}

export default {
allOneTag
}