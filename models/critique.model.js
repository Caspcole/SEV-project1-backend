module.exports = (sequelize, Sequelize) => {
  const Critique = sequelize.define("critique", {
    critiqueId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    grade: {
      type: Sequelize.CHAR(1),
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false
  });

  return Critique;
};

