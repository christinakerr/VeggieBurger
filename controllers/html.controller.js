const express = require("express");
const db = require("../models/burger.js");

const view = require("../views/layouts/main.view")

const router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll().then(function (burgers) {
        res.send(
            view(burgers)
        );
    });
});

module.exports = router;