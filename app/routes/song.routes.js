module.exports = app => {
    const song = require("../controllers/song.controller.js");
    var router = require("express").Router();

    // Create a new song
    router.post("/", song.create);
    // Retrieve all songs
    router.get("/", song.findAll);
    // Retrieve a single song with id
    router.get("/:id", song.findById);
    // Update a song with id
    router.put("/:id", song.update);
    // Delete a song with id
    router.delete("/:id", song.delete);
    // Delete all songs
    router.delete("/", song.deleteAll);

    app.use('/performance-t2', router);
};