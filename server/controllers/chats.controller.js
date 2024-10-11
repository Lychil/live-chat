const db = require('../db');

// ToDo
class ChatsController {
    async createChat(req, res) {
        const { id } = req.body;
        const cookies = req.cookies;
        await db.query('INSERT INTO chats (buddy, user_id) VALUES ($1, $2) RETURNING *', [id, cookies.auth.id]);
        await db.query('INSERT INTO chats (buddy, user_id) VALUES ($1, $2) RETURNING *', [cookies.auth.id, id]);
        res.json(null);
    }

    async getChats(req, res) {
        const cookies = req.cookies;
        const chats = await db.query('SELECT * FROM chats WHERE user_id = $1', [cookies.auth.id]);
        res.json(chats.rows)
    }
}

module.exports = new ChatsController();