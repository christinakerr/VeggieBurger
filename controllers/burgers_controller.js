const express = require("express");
const burger = require("../models/burger.js");

const view = require("../views/layouts/main.view")

const router = express.Router();

router.get("/", function (req, res) {
    burger.Burger.findAll().then(function (burgers) {
        res.send(
            view(burgers)
        );
    });
});

module.exports = router;