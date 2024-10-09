const Router = require("express");
const router = new Router();
const chatsController = require("../controllers/chats.controller");

router.post('/chats/create', chatsController.createChat);

module.exports = router;