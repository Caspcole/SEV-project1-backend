module.exports = app => {
    const event = require("../controllers/event.controller.js");
    var router = require("express").Router();

    // Create a new event
    router.post("/", event.create);
    // Retrieve all events
    router.get("/", event.findAll);
    // Retrieve a single event with id
    router.get("/:id", event.findById);
    // Update a event with id
    router.put("/:id", event.update);
    // Delete a event with id
    router.delete("/:id", event.delete);
    // Delete all events
    router.delete("/", event.deleteAll);

    app.use('/performance-t2', router);
};