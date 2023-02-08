module.exports = app => {
    const songTranslation = require("../controllers/songTranslation.controller.js");
    var router = require("express").Router();

    // Create a new songTranslation
    router.post("/", songTranslation.create);
    // Retrieve all songTranslations
    router.get("/", songTranslation.findAll);
    // Retrieve a single songTranslation with id
    router.get("/:id", songTranslation.findById);
    // Update a songTranslation with id
    router.put("/:id", songTranslation.update);
    // Delete a songTranslation with id
    router.delete("/:id", songTranslation.delete);
    // Delete all songTranslations
    router.delete("/", songTranslation.deleteAll);

    app.use('/performance-t2/songTranslation', router);
};