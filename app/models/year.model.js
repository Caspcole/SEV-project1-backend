module.exports = (sequelize, Sequelize) => {
  const Year = sequelize.define("year", {
    year: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
    },
  },
  {
    timestamps: false
  });

  return Year;
};

