module.exports = (app) => {
  const studentInstrument = require("../controllers/studentInstrument.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new studentInstrument
  router.post("/", [authenticate], studentInstrument.create);
  // Retrieve all studentInstruments
  router.get("/", [authenticate], studentInstrument.findAll);
  // Retrieve a single studentInstrument with id
  router.get("/:id", [authenticate], studentInstrument.findById);
  // Update a studentInstrument with id
  router.put("/:id", [authenticate], studentInstrument.update);
  // Delete a studentInstrument with id
  router.delete("/:id", [authenticate], studentInstrument.delete);
  // Delete all studentInstruments
  router.delete("/", [authenticate], studentInstrument.deleteAll);
  // Get by userId
  router.get("/userId/:userId", [authenticate], studentInstrument.getByUserId);
  // Get accompanist, instructor, and instrument by userId
  router.get(
    "/userId/allData/:userId",
    [authenticate],
    studentInstrument.getInstrumentAndInstructorAndAccompanistByUserId
  );

  app.use("/performance-t2/studentInstrument", router);
};
