const express = require('express');
const usersRouter = require("./routes/users.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json()) // express по умолчанию не может распарсить строку
app.use('/api', usersRouter);

app.listen(PORT, () => console.log('server is ready!'));