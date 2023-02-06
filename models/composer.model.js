module.exports = (sequelize, Sequelize) => {
  const Composer = sequelize.define("composer", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    fName: {
      type: Sequelize.STRING,
      allowNull: false,
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
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    dateOfDeath: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: false
  });

  return Composer;
};

