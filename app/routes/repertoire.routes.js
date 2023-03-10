module.exports = (app) => {
  const repertoire = require("../controllers/repertoire.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new repertoire
  router.post("/", [authenticate], repertoire.create);
  // Retrieve all repertoires
  router.get("/", [authenticate], repertoire.findAll);
  // Retrieve a single repertoire with id
  router.get("/:id", [authenticate], repertoire.findById);
  // Update a repertoire with id
  router.put("/:id", [authenticate], repertoire.update);
  // Delete a repertoire with id
  router.delete("/:id", [authenticate], repertoire.delete);
  // Delete all repertoires
  router.delete("/", [authenticate], repertoire.deleteAll);

  app.use("/performance-t2/repertoire", router);
};
