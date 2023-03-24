module.exports = (app) => {
  const event = require("../controllers/event.controller.js");
  //const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new event
  router.post("/", event.create);
  // Retrieve all events
  router.get("/", event.findAll);
  // Retrieve a single event with id
  router.get("/:id", event.findById);
  // Retrieve all events with date after date
  router.get("/date/:date", event.findDateAndAfter);
  // Update a event with id
  router.put("/:id", event.update);
  // Delete a event with id
  router.delete("/:id", event.delete);
  // Delete all events
  router.delete("/", [authenticate], event.deleteAll);
  // Retrieve timeslots fore current date
  router.get(
    "/critiqueTimeslots/:date",
    event.getStudentTimeslotsForCurrentDate
  );

  // Retrieve critiques by semester id
  router.get(
    "/semesterCritiques/:semesterId",
    [authenticate],
    event.getEventCritiquesBySemesterId
  );

  //REMEMBER TO RE ADD THE ", [authenticate],"
  app.use("/performance-t2/event", router);
};
