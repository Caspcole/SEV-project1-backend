module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    type: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: Sequelize.TIME,
    },
    endTime: {
      type: Sequelize.TIME,
    },
    isVisible: {
      type: Sequelize.BOOL,
      allowNull: false,
    },
    canMergeSlots: {
      type: Sequelize.BOOL,
      allowNull: false
    },
    slotDuration: {
      type: Sequelize.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: false
  });

  return Event;
};

