module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "performance_t2",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
