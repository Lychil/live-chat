const Router = require("express");
const router = new Router();
const usersController = require("../controllers/users.controller");

router.post('/users/create', usersController.createUser);
router.get('/users/check', usersController.isAuth);
router.post('/users/login', usersController.isUser);
router.post('/users/exit', usersController.Exit);
router.get('/users/info', usersController.getInfo);

module.exports = router;