module.exports = (app) => {
  const session = require("../controllers/session.controller.js");
  var router = require("express").Router();

  // Create a new session
  router.post("/", session.create);
  // Retrieve all availabilitys
  router.get("/", session.findAll);
  // Retrieve a single session with id
  router.get("/:id", session.findById);
  // Update a session with id
  router.put("/:id", session.update);
  // Delete a session with id
  router.delete("/:id", session.delete);
  // Delete all session
  router.delete("/", session.deleteAll);

  app.use("/performance-t2/session", router);
};
