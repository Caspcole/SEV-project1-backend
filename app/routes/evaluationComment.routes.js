module.exports = app => {
    const evaluationComment = require("../controllers/evaluationComment.controller.js");
    var router = require("express").Router();

    // Create a new evaluationComment
    router.post("/", evaluationComment.create);
    // Retrieve all evaluationComments
    router.get("/", evaluationComment.findAll);
    // Retrieve a single evaluationComment with id
    router.get("/:id", evaluationComment.findById);
    // Update a evaluationComment with id
    router.put("/:id", evaluationComment.update);
    // Delete a evaluationComment with id
    router.delete("/:id", evaluationComment.delete);
    // Delete all evaluationComments
    router.delete("/", evaluationComment.deleteAll);

    app.use('/performance-t2', router);
};