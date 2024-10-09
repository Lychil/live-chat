const db = require('../db');

// ToDo
class ChatsController {
    async createChat(req, res) {
        const { id } = req.body;
        const cookies = req.cookies;
        const chat = await db.query('INSERT INTO chats (buddy, user_id) VALUES ($1, $2) RETURNING *', [id, cookies.auth.id]);
        console.log('create')
        res.json(chat.rows);
    }
}

module.exports = new ChatsController();