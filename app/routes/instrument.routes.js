module.exports = app => {
    const instrument = require("../controllers/instrument.controller.js");
    var router = require("express").Router();

    // Create a new instrument
    router.post("/", instrument.create);
    // Retrieve all instruments
    router.get("/", instrument.findAll);
    // Retrieve a single instrument with id
    router.get("/:id", instrument.findById);
    // Update a instrument with id
    router.put("/:id", instrument.update);
    // Delete a instrument with id
    router.delete("/:id", instrument.delete);
    // Delete all instruments
    router.delete("/", instrument.deleteAll);

    app.use('/performance-t2', router);
};