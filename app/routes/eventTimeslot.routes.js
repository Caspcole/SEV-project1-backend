module.exports = app => {
    const eventTimeslot = require("../controllers/eventTimeslot.controller.js");
    var router = require("express").Router();

    // Create a new eventTimeslot
    router.post("/", eventTimeslot.create);
    // Retrieve all eventTimeslots
    router.get("/", eventTimeslot.findAll);
    // Retrieve a single eventTimeslot with id
    router.get("/:id", eventTimeslot.findById);
    // Update a eventTimeslot with id
    router.put("/:id", eventTimeslot.update);
    // Delete a eventTimeslot with id
    router.delete("/:id", eventTimeslot.delete);
    // Delete all eventTimeslots
    router.delete("/", eventTimeslot.deleteAll);

    app.use('/performance-t2', router);
};