module.exports = app => {
    const studentInstrument = require("../controllers/studentInstrument.controller.js");
    var router = require("express").Router();

    // Create a new studentInstrument
    router.post("/", studentInstrument.create);
    // Retrieve all studentInstruments
    router.get("/", studentInstrument.findAll);
    // Retrieve a single studentInstrument with id
    router.get("/:id", studentInstrument.findById);
    // Update a studentInstrument with id
    router.put("/:id", studentInstrument.update);
    // Delete a studentInstrument with id
    router.delete("/:id", studentInstrument.delete);
    // Delete all studentInstruments
    router.delete("/", studentInstrument.deleteAll);

    app.use('/performance-t2/studentInstrument', router);
};