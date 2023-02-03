module.exports = (sequelize, Sequelize) => {
  const EventTimeslot = sequelize.define("eventTimeslot", {
    timeslot: {
      type: Sequelize.TIME,
      primaryKey: true,
      unique: true
    },
    type: {
      type: Sequelize.STRING,
    },
    startTime: {
      type: Sequelize.TIME,
    },
    endTime: {
      type: Sequelize.TIME,
    },
    hasPassed: {
      type: Sequelize.BOOLEAN,
    },
    isComplete: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false
  });

  return EventTimeslot;
};

