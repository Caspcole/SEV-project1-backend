module.exports = (sequelize, Sequelize) => {
  const Repertoire = sequelize.define("repertoire", {
    role: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
  },
  {
    timestamps: false
  });

  return Repertoire;
};

