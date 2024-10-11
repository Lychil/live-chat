const db = require('../db');

// ToDo
class UsersController {
    async createUser(req, res) {
        const { name, password } = req.body;
        const isUser = await db.query(`SELECT * FROM users WHERE name = $1 LIMIT 1`, [name]);
        if (!!isUser.rows.length) {
            return res.status(401).json({ error: "Пользователь с таким ником уже существует" })
        }

        const newUser = await db.query(`
            INSERT INTO users (name, password)
             values ($1, $2) RETURNING *`,
            [name, password]
        );

        const user = { name: newUser.rows[0].name };

        res.cookie('auth', user, {
            maxAge: 9000000000, // Время жизни в миллисекундах
            httpOnly: true, // Доступно только через HTTP(S), не доступно через JavaScript
            secure: process.env.NODE_ENV === 'production', // Использовать secure только в продакшене
            sameSite: 'Strict' // Защита от CSRF
        });
        res.json(user);
    }

    async isAuth(req, res) {
        const cookies = req.cookies; // Все куки
        if (cookies.auth && cookies.auth.name) {
            res.json({ name: cookies.auth.name })
        } else { res.json({ name: null }); }
    }

    async isUser(req, res) {
        const { name, password } = req.body;

        const isName = await db.query(`SELECT * FROM users WHERE name = $1 LIMIT 1`, [name]);
        if (isName.rows.length === 0) {
            return res.status(404).json({ error: 'Пользователь с таким ником не найден' });
        }

        const isPassword = await db.query(`SELECT * FROM users WHERE name = $1 AND password = $2 LIMIT 1`, [name, password]);
        if (isPassword.rows.length === 0) {
            return res.status(404).json({ error: 'Неправильный пароль' });
        }

        const user = await db.query(`SELECT * FROM users WHERE name = $1 LIMIT 1`, [name]);
        res.cookie('auth', user.rows[0], {
            maxAge: 900000000, // Время жизни в миллисекундах
            httpOnly: true, // Доступно только через HTTP(S), не доступно через JavaScript
            secure: process.env.NODE_ENV === 'production', // Использовать secure только в продакшене
            sameSite: 'Strict' // Защита от CSRF
        });
        res.json({
            name: user.rows[0].name
        });
    }

    async Exit(req, res) {
        res.cookie('auth', { name: null }, {
            maxAge: 900000000, // Время жизни в миллисекундах
            httpOnly: true, // Доступно только через HTTP(S), не доступно через JavaScript
            secure: process.env.NODE_ENV === 'production', // Использовать secure только в продакшене
            sameSite: 'Strict', // Защита от CSRF
        });
        return res.json({ name: null });
    }

    async getInfo(req, res) {
        const id = req.query.id;
        const user = await db.query('SELECT name FROM users WHERE id = $1;', [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new UsersController();