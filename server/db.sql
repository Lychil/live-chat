CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE chats (
    id SERIAL PRIMARY KEY,
    buddy INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (buddy) REFERENCES users (id)
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    message VARCHAR(255),
    user_id INTEGER,
    chat_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);