const express = require("express");
const burger = require("../models.burger.js");

const router = express.Router();

router.get("/", function (req, res) {
    db.Cat.findAll().then(function (cats) {
        res.send(
            views.layout({
                children: views.cats({ cats })
            })
        );
    });
});

module.exports = router;