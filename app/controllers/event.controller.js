const db = require("../models");
const { Op } = require("sequelize");
const { event } = require("../models");
const Event = db.event;

// Create and Save a new event
exports.create = (req, res) => {
  // Validate request
  if (!req.body.date) {
    res.status(400).send({
      message: "Date can not be empty!",
    });
    return;
  } else if (!req.body.isVisible) {
    res.status(400).send({
      message: "isVisible can not be empty!",
    });
    return;
  } else if (!req.body.canMergeSlots) {
    res.status(400).send({
      message: "canMergeSlots can not be empty!",
    });
    return;
  } else if (!req.body.slotDuration) {
    res.status(400).send({
      message: "slot duration can not be empty!",
    });
    return;
  } else if (!req.body.semesterId) {
    res.status(400).send({
      message: "semesterId can not be empty!",
    });
    return;
  }

  const event = {
    type: req.body.type,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    isVisible: req.body.isVisible,
    canMergeSlots: req.body.canMergeSlots,
    slotDuration: req.body.slotDuration,
    semesterId: req.body.semesterId,
  };

  // Create and Save a new event
  Event.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the event.",
      });
    });
};

// Retrieve all events from the database
exports.findAll = (req, res) => {
  Event.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving events.",
      });
    });
};

// Retrieve a(n) event by id
exports.findById = (req, res) => {
  const id = req.params.id;
  Event.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cannot find event with id=" + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving event with id=" + id,
      });
    });
};

// Retrieve all events from the database from the specified date onwards
exports.findDateAndAfter = (req, res) => {
  const date = req.params.date;
  console.log(date);
  Event.findAll({
    where: {
      date: {
        [Op.gte]: date,
      },
    },
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cannot find event on or after " + date,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving events.",
      });
    });
};

// Update a(n) event by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Event.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Event was updated successfully.",
        });
      } else {
        res.send({
          message:
            "Cannot update event with id=" +
            id +
            ". Maybe the event was not found or req.body is empty!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating event with id=" + id,
      });
    });
};

// Delete a(n) event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Event.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Event was deleted successfully!",
        });
      } else {
        res.send({
          message:
            "Cannot delete event with id=" +
            id +
            ". Maybe the event was not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete event with id=" + id,
      });
    });
};

// Delete all events from the database.
exports.deleteAll = (req, res) => {
  Event.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} events were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all event.",
      });
    });
};

exports.getStudentTimeslotsForCurrentDate = (req, res) => {
  Event.findAll({
    where: {
      date: { [Op.eq]: req.params.date },
    },
    attributes: ["id", "type", "date"],
    include: {
      model: db.eventTimeslot,
      required: false /*false for Left Outer -debug use*/,
      attributes: ["id", "startTime", "endTime"],
      include: {
        model: db.studentTimeslot,
        required: true,
        attributes: ["id"],
        include: {
          model: db.studentInstrument,
          required: true,
          attributes: ["id"],
          include: [
            {
              model: db.instrument,
              required: true,
              attributes: ["id", "name", "type"],
            },
            {
              model: db.userRole,
              required: true,
              as: "student",
              attributes: ["id"],
              include: {
                model: db.user,
                required: true,
                attributes: ["id", "fName", "lName"],
              },
            },
          ],
        },
      },
    },
  })
    // .then((data) => {
    //   res.send(data);
    // })
    .then((data) => {
      let text = "[";
      for (let eI = 0; eI < data.length; eI++) {
        let curEvent = data[eI].dataValues;
        text +=
          '{"eventId":"' +
          curEvent.id +
          '","eventType":"' +
          curEvent.type +
          '","eventDate":"' +
          curEvent.date +
          '","timeslots":[';
        for (let etI = 0; etI < curEvent.eventTimeslots.length; etI++) {
          let curEventTs = curEvent.eventTimeslots[etI].dataValues;
          text +=
            '{"timeslotId":"' +
            curEventTs.id +
            '","startTime":"' +
            curEventTs.startTime +
            '","endTime":"' +
            curEventTs.endTime +
            '","students":[';
          for (let stI = 0; stI < curEventTs.studentTimeslots.length; stI++) {
            let curStudentTs = curEventTs.studentTimeslots[stI].dataValues;
            let student = curStudentTs.studentInstrument.dataValues.student;
            text +=
              '{"studentId":"' +
              student.dataValues.user.dataValues.id +
              '","fName":"' +
              student.dataValues.user.dataValues.fName +
              '","lName":"' +
              student.dataValues.user.dataValues.lName +
              '","instrumentName":"' +
              curStudentTs.studentInstrument.dataValues.instrument.dataValues
                .name +
              '","instrumentType":"' +
              curStudentTs.studentInstrument.dataValues.instrument.dataValues
                .type +
              '"}';
            if (curEventTs.studentTimeslots.length - stI > 1) {
              text += ",";
            }
            text += "]}";
          }
          if (curEvent.eventTimeslots.length - etI > 1) {
            text += ",";
          }
        }
        // text += "]}]}";
        text += "]}";
        if (data.length - eI > 1) {
          text += ",";
        }
      }
      text += "]";
      res.send(JSON.parse(text));
      // res.send(text);
      // res.send();
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving events.",
      });
    });
};
