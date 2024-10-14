const express = require('express');
const chatsRouter = require("./routes/chats.routes");
const usersRouter = require("./routes/users.routes");
const searchRouter = require("./routes/search.routes");
const messagesRouter = require("./routes/messages.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: 5050 });
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

const rooms = {}; // Словарь для хранения комнат и подключённых клиентов

wss.on('connection', (ws) => {
    ws.roomId = null;

    // Обработка сообщения от клиента
    ws.on('message', (data) => {
        const { roomId, message } = JSON.parse(data);

        if (!rooms[roomId]) {
            rooms[roomId] = [];
        }
        if (!rooms[roomId].includes(ws)) {
            // Добавляем клиента в комнату
            rooms[roomId].push(ws);
        }

        // Отправляем сообщение всем клиентам в комнате
        if (!message) {
            ws.roomId = roomId;
            if (!rooms[roomId].includes(ws)) rooms[roomId].push(ws);
        }
        else {
            rooms[roomId].forEach(client => {
                client.send(JSON.stringify({ roomId, message }));
            });
        }
    });

    // Обработка отключения клиента
    ws.on('close', () => {
        // Удаляем клиента из его комнаты
        if (ws.roomId && rooms[ws.roomId]) {
            rooms[ws.roomId] = rooms[ws.roomId].filter(client => client !== ws);
        }
    });
});

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json()) // express по умолчанию не может распарсить строку
app.use('/api', usersRouter);
app.use('/api', searchRouter);
app.use('/api', chatsRouter);
app.use('/api', messagesRouter);

app.listen(PORT, () => console.log('server is ready!'));