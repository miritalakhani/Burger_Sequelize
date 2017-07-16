var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/burger", function(req, res) {
    console.log("test");
    db.burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.get("/burger/:id", function(req, res) {
     // Find one Author with the id in req.params.id and return them to the user with res.json
    db.burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // app.post("/burger", function(req, res) {
  //    // Create an Author with the data available to us in req.body
  //   console.log(req.body);
  //   db.burger.create(req.body).then(function(dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

  // app.delete("/burger/:id", function(req, res) {
  //   // Delete the Author with the id available to us in req.params.id
  //   db.burger.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

};
