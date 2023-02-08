module.exports = app => {
    const userRole = require("../controllers/userRole.controller.js");
    var router = require("express").Router();

    // Create a new userRole
    router.post("/", userRole.create);
    // Retrieve all userRoles
    router.get("/", userRole.findAll);
    // Retrieve a single userRole with id
    router.get("/:id", userRole.findById);
    // Update a userRole with id
    router.put("/:id", userRole.update);
    // Delete a userRole with id
    router.delete("/:id", userRole.delete);
    // Delete all userRoles
    router.delete("/", userRole.deleteAll);

    app.use('/performance-t2/userRole', router);
};