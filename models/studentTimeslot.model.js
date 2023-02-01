module.exports = (sequelize, Sequelize) => {
  const StudentTimeslot = sequelize.define("studentTimeslot", {
    studentTimeslotId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
  },
  {
    timestamps: false
  });

  return StudentTimeslot;
};

