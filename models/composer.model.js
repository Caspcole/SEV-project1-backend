module.exports = (sequelize, Sequelize) => {
  const Composer = sequelize.define("composer", {
    composerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    fName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nationality: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: Sequelize.DATE(10),
    },
    stuClassification: {
      type: Sequelize.STRING,
    },
    stuNumOfSemesters: {
      type: Sequelize.INTEGER,
    },
    stuEmailCritiqueBool: {
      type: Sequelize.BOOL,
    },
    stuCompletedHearing: {
      type: Sequelize.BOOL,
    },
    title: {
      type: Sequelize.String,
    },
  },
  {
    timestamps: false
  });

  return Composer;
};

