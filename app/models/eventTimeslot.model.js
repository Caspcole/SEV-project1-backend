module.exports = (sequelize, Sequelize) => {
  const EventTimeslot = sequelize.define("eventTimeslot", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
    },
    type: {
      type: Sequelize.STRING
    },
    startTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    endTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    hasPassed: {
      type: Sequelize.BOOLEAN
    },
    isComplete: {
      type: Sequelize.BOOLEAN
    },
  },
  {
    timestamps: false
  });

  return EventTimeslot;
};

