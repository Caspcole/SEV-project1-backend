module.exports = app => {
    const timeslotSong = require("../controllers/timeslotSong.controller.js");
    var router = require("express").Router();

    // Create a new timeslotSong
    router.post("/", timeslotSong.create);
    // Retrieve all timeslotSongs
    router.get("/", timeslotSong.findAll);
    // Retrieve a single timeslotSong with id
    router.get("/:id", timeslotSong.findById);
    // Update a timeslotSong with id
    router.put("/:id", timeslotSong.update);
    // Delete a timeslotSong with id
    router.delete("/:id", timeslotSong.delete);
    // Delete all timeslotSongs
    router.delete("/", timeslotSong.deleteAll);

    app.use('/performance-t2/timeslotSong', router);
};