module.exports = app => {
    const composer = require("../controllers/composer.controller.js");
    var router = require("express").Router();

    // Create a new composer
    router.post("/", composer.create);
    // Retrieve all composers
    router.get("/", composer.findAll);
    // Retrieve a single composer with id
    router.get("/:id", composer.findById);
    // Update a composer with id
    router.put("/:id", composer.update);
    // Delete a composer with id
    router.delete("/:id", composer.delete);
    // Delete all composers
    router.delete("/", composer.deleteAll);

    app.use('/performance-t2', router);
};