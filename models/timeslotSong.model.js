module.exports = (sequelize, Sequelize) => {
  const TimeslotSong = sequelize.define("timeslotSong", {
    role: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
  },
  {
    timestamps: false
  });

  return TimeslotSong;
};

