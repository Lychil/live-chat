const Router = require("express");
const router = new Router();
const messagesController = require("../controllers/messages.controller");

router.post('/messages/create', messagesController.createMessage);
router.get('/messages/all', messagesController.getMessages);

module.exports = router;