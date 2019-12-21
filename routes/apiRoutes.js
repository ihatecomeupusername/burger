var db = require("../models");

module.exports = function (app) {
    //post route that listens for click
    //then grabs the info
    //.then() res.json and put the call inside the function istelf instead of handlebars

    const axios = require("axios");
    var tripname;

    app.post("/api/all", function (req, res) {
        tripname = req.body;
        db.Destinations.create({
            name: tripname,
        }).then(function (results) {
            res.end();
        });
    });

    app.get("/api/all", function (req, res) {
        db.Destinations.findAll({}).then(function (results) {
            console.log(results);
            // results are available to us inside the .then
            res.json(results);
        });
    });
};
