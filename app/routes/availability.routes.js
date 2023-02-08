module.exports = app => {
    const availability = require("../controllers/availability.controller.js");
    var router = require("express").Router();

    // Create a new availability
    router.post("/", availability.create);
    // Retrieve all availabilitys
    router.get("/", availability.findAll);
    // Retrieve a single availability with id
    router.get("/:id", availability.findById);
    // Update a availability with id
    router.put("/:id", availability.update);
    // Delete a availability with id
    router.delete("/:id", availability.delete);
    // Delete all availability
    router.delete("/", availability.deleteAll);

    app.use('/performance-t2', router);
};