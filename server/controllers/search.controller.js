const db = require('../db');

// ToDo
class SearchController {
    async getUsers(req, res) {
        const str = req.query.str;
        if (str === "") res.json([]);
        else {

            const cookies = req.cookies;
            const users = await db.query('SELECT name FROM users WHERE name LIKE $1 AND id != $2;', [`${str}%`, cookies.auth.id]);
            res.json(users.rows);
        }
    }
}

module.exports = new SearchController();