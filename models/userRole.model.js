module.exports = (sequelize, Sequelize) => {
  const UserRole = sequelize.define("userRole", {
    role: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
    },
    stuClassification: {
      type: Sequelize.STRING,
    },
    stuMajor: {
      type: Sequelize.STRING,
    },
    stuClassification: {
      type: Sequelize.STRING,
    },
    stuNumOfSemesters: {
      type: Sequelize.INTEGER,
    },
    stuEmailCritiqueBool: {
      type: Sequelize.BOOLEAN,
    },
    stuCompletedHearing: {
      type: Sequelize.BOOLEAN,
    },
    title: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false
  });

  return UserRole;
};
