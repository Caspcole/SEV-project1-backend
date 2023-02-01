module.exports = (sequelize, Sequelize) => {
  const Instrument = sequelize.define("instrument", {
    instrument: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false
  });

  return Instrument;
};

