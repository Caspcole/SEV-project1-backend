module.exports = (app) => {
  const event = require("../controllers/event.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new event
  router.post("/", [authenticate], event.create);
  // Retrieve all events
  router.get("/", [authenticate], event.findAll);
  // Retrieve a single event with id
  router.get("/:id", [authenticate], event.findById);
  // Retrieve all events with date after date
  router.get("/date/:date", [authenticate], event.findDateAndAfter);
  // Update a event with id
  router.put("/:id", [authenticate], event.update);
  // Delete a event with id
  router.delete("/:id", [authenticate], event.delete);
  // Delete all events
  router.delete("/", [authenticate], event.deleteAll);
  // Retrieve critiques by semester id
  router.get(
    "/semesterCritiques/:semesterId",
    [authenticate],
    event.getEventCritiquesBySemesterId
  );

  app.use("/performance-t2/event", router);
};
