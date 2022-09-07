const express = require("express");

const controle = require("../controllers/controle")

const router = express.Router();

router.get("/home", controle.inicio);

router.get("/sobre", controle.sobre);

module.exports = router;
