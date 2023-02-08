module.exports = app => {
    const evaluation = require("../controllers/evaluation.controller.js");
    var router = require("express").Router();

    // Create a new evaluation
    router.post("/", evaluation.create);
    // Retrieve all evaluations
    router.get("/", evaluation.findAll);
    // Retrieve a single evaluation with id
    router.get("/:id", evaluation.findById);
    // Update a evaluation with id
    router.put("/:id", evaluation.update);
    // Delete a evaluation with id
    router.delete("/:id", evaluation.delete);
    // Delete all evaluations
    router.delete("/", evaluation.deleteAll);

    app.use('/performance-t2/evaluation', router);
};