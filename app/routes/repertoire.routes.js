module.exports = app => {
    const repertoire = require("../controllers/repertoire.controller.js");
    var router = require("express").Router();

    // Create a new repertoire
    router.post("/", repertoire.create);
    // Retrieve all repertoires
    router.get("/", repertoire.findAll);
    // Retrieve a single repertoire with id
    router.get("/:id", repertoire.findById);
    // Update a repertoire with id
    router.put("/:id", repertoire.update);
    // Delete a repertoire with id
    router.delete("/:id", repertoire.delete);
    // Delete all repertoires
    router.delete("/", repertoire.deleteAll);

    app.use('/performance-t2', router);
};