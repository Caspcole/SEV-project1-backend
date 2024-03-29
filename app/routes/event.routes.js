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
  router.get("/gtedate/:date", [authenticate], event.findDateAndAfter);
  // Retrieve all events with date before date
  router.get("/ltedate/:date", [authenticate], event.findDateAndBefore);
  // Update a event with id
  router.put("/:id", [authenticate], event.update);
  // Delete a event with id
  router.delete("/:id", [authenticate], event.delete);
  // Delete all events
  router.delete("/", [authenticate], event.deleteAll);
  // Retrieve timeslots fore current date
  router.get(
    "/critiqueTimeslots/:date",
    [authenticate],
    event.getStudentTimeslotsForCurrentDate
  );

  // Retrieve events by semesterId
  router.get(
    "/semesterEvents/:semesterId",
    [authenticate],
    event.getEventsBySemesterId
  );

  // Retrieve critiques by semester id
  router.get(
    "/semesterCritiques/:semesterId",
    [authenticate],
    event.getEventCritiquesBySemesterId
  );
  // Retrieve critiques by semester id and student id
  router.get(
    "/semesterCritiques/:semesterId/user/:userId",
    [authenticate],
    event.getEventCritiquesBySemesterAndStudent
  );

  //REMEMBER TO RE ADD THE ", [authenticate],"
  app.use("/performance-t2/event", router);
};
