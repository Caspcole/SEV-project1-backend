module.exports = (app) => {
  const song = require("../controllers/song.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new song
  router.post("/", [authenticate], song.create);
  // Retrieve all songs
  router.get("/", [authenticate], song.findAll);
  // Retrieve a single song with id
  router.get("/:id", [authenticate], song.findById);
  // Retrieve all songs with composer id
  router.get("/composer/:id", song.findByComposerId);
  // Update a song with id
  router.put("/:id", [authenticate], song.update);
  // Delete a song with id
  router.delete("/:id", [authenticate], song.delete);
  // Delete all songs
  router.delete("/", [authenticate], song.deleteAll);

  app.use("/performance-t2/song", router);
};
