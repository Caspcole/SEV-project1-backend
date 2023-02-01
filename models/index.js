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


//FOREIGN KEYS
//every fk has a has many and belongs to

//Availability table
//  user has availabilities
db.user.hasMany(db.availability,{as: "availability"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.availability.belongsTo(db.user,{as: "user"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//UserRole
//  user has user roles
db.user.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.user,{as: "user"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//StudentInstrument
// studentInstrument has users
db.studentInstrument.hasMany(db.user,{as: "user"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.user.belongsTo(db.studentInstrument,{as: "studentInstrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
// studentInstrument has instruments
db.studentInstrument.hasMany(db.instrument,{as: "instrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.instrument.belongsTo(db.studentInstrument,{as: "studentInstrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
// studentInstrument has accompanists
db.studentInstrument.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.studentInstrument,{as: "studentInstrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
// studentInstrument has instructors
//ASK ABOUT THIS -  ANDREW
db.studentInstrument.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.studentInstrument,{as: "studentInstrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//StudentTimeslot
//  studentTimeslot has studentInstruments
db.studentTimeslot.hasMany(db.studentInstrument,{as: "studentInstrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentInstrument.belongsTo(db.studentTimeslot,{as: "studentTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  studentTimeslot has eventTimelsots
//ASK ABOUT THIS - ANDREW
db.studentTimeslot.hasMany(db.eventTimeslot,{as: "eventTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.eventTimeslot.belongsTo(db.studentTimeslot,{as: "studentTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  studentTimeslot has instructors
db.studentTimeslot.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.studentTimeslot,{as: "studentTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Critique
//  critique has critiquers
db.critique.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.critique,{as: "critique"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  critique has studentTimeslots
db.critique.hasMany(db.studentTimeslot,{as: "studentTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentTimeslot.belongsTo(db.critique,{as: "critique"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//EventTimeslot
//  eventTimeslot has accompanists
db.eventTimeslot.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.eventTimeslot,{as: "eventTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  eventTimeslot has events
db.eventTimeslot.hasMany(db.event,{as: "event"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.event.belongsTo(db.eventTimeslot,{as: "eventTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Event
//  event has semesters
db.event.hasMany(db.semester,{as: "semester"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.studentTimeslot.belongsTo(db.event,{as: "event"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Semester
//  semester has year
db.semester.hasMany(db.year,{as: "year"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.year.belongsTo(db.semester,{as: "semester"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Song
//  song has composer
db.song.hasMany(db.composer,{as: "composer"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.composer.belongsTo(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//SongTranslation
//  songTranslation has song
db.songTranslation.hasMany(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.song.belongsTo(db.songTranslation,{as: "songTranslation"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

//Repertoire
//  repertoire has student
//ASK ANDREW
db.repertoire.hasMany(db.userRole,{as: "userRole"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.userRole.belongsTo(db.repertoire,{as: "repertoire"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  repertoire has instrument
db.repertoire.hasMany(db.instrument,{as: "instrument"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.instrument.belongsTo(db.repertoire,{as: "repertoire"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  repertoire has song
db.repertoire.hasMany(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.song.belongsTo(db.repertoire,{as: "repertoire"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});


//TimeslotSong
// timeslotSong has timeslot
db.timeslotSong.hasMany(db.eventTimeslot,{as: "eventTimeslot"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.eventTimeslot.belongsTo(db.timeslotSong,{as: "timeslotSong"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
//  timeslotSong has song
db.timeslotSong.hasMany(db.song,{as: "song"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});
db.song.belongsTo(db.timeslotSong,{as: "timeslotSong"},{foreignkey: {allowNull: false }, onDelete: "CASCADE"});

module.exports = db;

