module.exports = (sequelize, Sequelize) => {
  const Semester = sequelize.define("semester", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false
  });

  return Semester;
};

