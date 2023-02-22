const db = require("../models");
const { Op } = require("sequelize");
const EventTimeslot = db.eventTimeslot;

// Create and Save a new eventTimeslot
exports.create = (req, res) => {
  // Validate request
  if (!req.body.startTime) {
    res.status(400).send({
      message: "start time can not be empty!"
    });
    return;
  } else if (!req.body.endTime) {
    res.status(400).send({
      message: "end time can not be empty!"
    });
    return;
  } else if (!req.body.eventId) {
    res.status(400).send({
      message: "eventId can not be empty!"
    });
    return;
  }
  
  const eventTimeslot = {
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    hasPassed: req.body.hasPassed,
    isComplete: req.body.isComplete,
    accompanistId: req.body.accompanistId,
    eventId: req.body.eventId
  };

  // Create and Save a new eventTimeslot
  EventTimeslot.create(eventTimeslot)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the eventTimeslot."
      });
    });
};

// Retrieve all eventTimeslots from the database
exports.findAll = (req, res) => {
  EventTimeslot.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving eventTimeslots."
      });
    });
};

// Retrieve a(n) eventTimeslot by id
exports.findById = (req, res) => {
  const id = req.params.id;
  EventTimeslot.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: 'Cannot find eventTimeslot with id=' + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving eventTimeslot with id=' + id
      });
    });
};

// Update a(n) eventTimeslot by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  EventTimeslot.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: 'EventTimeslot was updated successfully.'
      });
    } else {
      res.send({
        message: 'Cannot update eventTimeslot with id=' + id + '. Maybe the eventTimeslot was not found or req.body is empty!'
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: 'Error updating eventTimeslot with id=' + id
    });
  });
};

// Delete a(n) eventTimeslot with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  EventTimeslot.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: 'EventTimeslot was deleted successfully!'
      });
    } else {
      res.send({
        message: 'Cannot delete eventTimeslot with id=' + id + '. Maybe the eventTimeslot was not found'
      })
    }
  })
  .catch((err) => {
    res.status(500).send({
      message: "Could not delete eventTimeslot with id=" + id,
    });
  });
};

// Delete all eventTimeslots from the database.
exports.deleteAll = (req, res) => {
  EventTimeslot.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} eventTimeslots were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all eventTimeslots.",
      });
    });
};