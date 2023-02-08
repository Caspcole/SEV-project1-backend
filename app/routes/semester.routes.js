module.exports = app => {
    const semester = require("../controllers/semester.controller.js");
    var router = require("express").Router();

    // Create a new semester
    router.post("/", semester.create);
    // Retrieve all semesters
    router.get("/", semester.findAll);
    // Retrieve a single semester with id
    router.get("/:id", semester.findById);
    // Update a semester with id
    router.put("/:id", semester.update);
    // Delete a semester with id
    router.delete("/:id", semester.delete);
    // Delete all semesters
    router.delete("/", semester.deleteAll);

    app.use('/performance-t2', router);
};