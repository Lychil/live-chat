const db = require('../db');

// ToDo
class MessagesController {
    async createMessage(req, res) {
        const { message, chat_id } = req.body;
        const cookies = req.cookies;
        await db.query('INSERT INTO messages(message, user_id, chat_id) VALUES ($1, $2, $3) RETURNING *', [message, cookies.auth.id, chat_id]);
        res.json();
    }

    async getMessages(req, res) {
        const id = req.query.id;
        if (id !== -1) {
            const messages = await db.query('SELECT * FROM messages WHERE chat_id = $1', [id]);
            res.json(messages.rows);
        } else {
            res.json([])
        }
        // id, message, user_id
    }
}

module.exports = new MessagesController();