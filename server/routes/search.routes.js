const Router = require("express");
const router = new Router();
const searchController = require("../controllers/search.controller");

router.get('/search/all', searchController.getUsers);

module.exports = router;