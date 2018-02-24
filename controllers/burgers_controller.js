var express = require("express");
var router = express.Router();
var db = require("../models");

// module.exports = function(router) { 
router.get("/", function(req, res) {
  res.redirect("/burgers");
})

// router to get contents of database to show onscreen
router.get("/burgers", function(req, res) {
  // express callback response by calling burger.findAll
  db.burgers.findAll()
  .then(function(allBurgers) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: allBurgers };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.create
  db.burgers.create({
    name: req.body.name,
    devoured: false
  }).then(function() {
    res.redirect("/burgers");
  });
});

// put route -> back to index - update to devoured
router.put("/burgers/update/:id", function(req, res) {
  db.burgers.findById(req.params.id).then(function(data) {
    db.burgers.update({
      devoured: true
    }).then(function() {
    res.redirect("/burgers");
    });
  });  
});

module.exports = router;
