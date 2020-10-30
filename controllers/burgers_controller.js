const express = require("express");
const db = require("../models/burger.js");

const router = express.Router();

router.post("/", function(req, res){
    db.Burger.create({
        burger_name: req.body.name
    }).then(function(result) {
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.patch("/:id", function(req, res){
    db.Burger.update({
        devoured: req.body.devoured == 'true' || req.body.devoured === true
    }, {
        id: req.params.id
    }).then(function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

module.exports = router;