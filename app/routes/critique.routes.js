module.exports = app => {
    const critique = require("../controllers/critique.controller.js");
    var router = require("express").Router();

    // Create a new critique
    router.post("/", critique.create);
    // Retrieve all critiques
    router.get("/", critique.findAll);
    // Retrieve a single critique with id
    router.get("/:id", critique.findById);
    // Update a critique with id
    router.put("/:id", critique.update);
    // Delete a critique with id
    router.delete("/:id", critique.delete);
    // Delete all critiques
    router.delete("/", critique.deleteAll);

    app.use('/performance-t2/critique', router);
};