module.exports = app => {
    const studentTimeslot = require("../controllers/studentTimeslot.controller.js");
    var router = require("express").Router();

    // Create a new studentTimeslot
    router.post("/", studentTimeslot.create);
    // Retrieve all studentTimeslots
    router.get("/", studentTimeslot.findAll);
    // Retrieve a single studentTimeslot with id
    router.get("/:id", studentTimeslot.findById);
    // Update a studentTimeslot with id
    router.put("/:id", studentTimeslot.update);
    // Delete a studentTimeslot with id
    router.delete("/:id", studentTimeslot.delete);
    // Delete all studentTimeslots
    router.delete("/", studentTimeslot.deleteAll);

    app.use('/performance-t2', router);
};