module.exports = (sequelize, Sequelize) => {
  const Semester = sequelize.define("semester", {
    semesterId: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    code: {
      type: Sequelize.UNKNOWN,
      allowNull: false
    },
  },
  {
    timestamps: false
  });

  return Semester;
};

