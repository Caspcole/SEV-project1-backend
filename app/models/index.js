const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    supportBigNumbers: true
  },
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.availability = require("./availability.model.js")(sequelize, Sequelize);
db.userRole = require("./userRole.model.js")(sequelize, Sequelize);
db.studentInstrument = require("./studentInstrument.model.js")(sequelize, Sequelize);
db.instrument = require("./instrument.model.js")(sequelize, Sequelize);
db.studentTimeslot = require("./studentTimeslot.model.js")(sequelize, Sequelize);
db.critique = require("./critique.model.js")(sequelize, Sequelize);
db.eventTimeslot = require("./eventTimeslot.model.js")(sequelize, Sequelize);
db.event = require("./event.model.js")(sequelize, Sequelize);
db.year = require("./year.model.js")(sequelize, Sequelize);
db.semester = require("./semester.model.js")(sequelize, Sequelize);
db.composer = require("./composer.model.js")(sequelize, Sequelize);
db.song = require("./song.model.js")(sequelize, Sequelize);
db.songTranslation = require("./songTranslation.model.js")(sequelize, Sequelize);
db.repertoire = require("./repertoire.model.js")(sequelize, Sequelize);
db.timeslotSong = require("./timeslotSong.model.js")(sequelize, Sequelize);
db.evaluation = require("./evaluation.model.js")(sequelize, Sequelize);
db.evaluationComment = require("./evaluationComment.model.js")(sequelize, Sequelize);

//Availability FKs
db.availability.belongsTo(db.user,{as: "user"}, {foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Critique FKs
db.critique.belongsTo(db.userRole,{as: "critiquer"},{foreignkey: {name: "critiquer", allowNull: false }, onDelete: "CASCADE"});
db.critique.belongsTo(db.studentTimeslot,{as: "timeslot"},{foreignkey: {name: "timeslot", allowNull: false }, onDelete: "CASCADE"});

//Evaluation FKs
db.evaluation.belongsTo(db.userRole,{as: "faculty"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.evaluation.belongsTo(db.studentInstrument,{as: "student"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//EvaluationComment FKs
db.evaluationComment.belongsTo(db.evaluation,{as: "evaluation"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Event FKs
db.event.belongsTo(db.semester,{as: "semester"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//EventTimeslot FKs
db.eventTimeslot.belongsTo(db.userRole,{as: "accompanist"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.eventTimeslot.belongsTo(db.event,{as: "event"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Repertoire FKs
db.repertoire.belongsTo(db.userRole,{as: "student"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.repertoire.belongsTo(db.instrument,{as: "instrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.repertoire.belongsTo(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Semester FKs
db.semester.belongsTo(db.year,{as: "year"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Song FKs
db.song.belongsTo(db.composer,{as: "composer"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//SongTranslation FKs
db.songTranslation.belongsTo(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//StudentInstrument FKs
db.studentInstrument.belongsTo(db.user,{as: "student"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentInstrument.belongsTo(db.instrument,{as: "instrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentInstrument.belongsTo(db.userRole,{as: "accompanist"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentInstrument.belongsTo(db.userRole,{as: "instructor"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//StudentTimeslot FKs
db.studentTimeslot.belongsTo(db.studentInstrument,{as: "studentInstrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentTimeslot.belongsTo(db.eventTimeslot,{as: "eventTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentTimeslot.belongsTo(db.userRole,{as: "instructor"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//TimeslotSong KFs
db.timeslotSong.belongsTo(db.studentTimeslot,{as: "timeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.timeslotSong.belongsTo(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//UserRole FKs
db.userRole.belongsTo(db.user,{as: "user"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

module.exports = db;