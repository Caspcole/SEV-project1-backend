// Not needed
// const db = require("../models");
// const { Op } = require("sequelize");
// const Session = db.session;

// // Create and Save a new session
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.token) {
//     res.status(400).send({
//       message: "token can not be empty!",
//     });
//     return;
//   } else if (!req.body.email) {
//     res.status(400).send({
//       message: "email can not be empty!",
//     });
//     return;
//   } else if (!req.body.expirationDate) {
//     res.status(400).send({
//       message: "expiration date can not be empty!",
//     });
//     return;
//   } else if (!req.body.userId) {
//     res.status(400).send({
//       message: "user ID can not be empty!",
//     });
//     return;
//   }

//   const session = {
//     token: req.body.token,
//     email: req.body.email,
//     expirationDate: req.body.expirationDate,
//     userId: req.body.userId,
//   };

//   // Create and Save a new session
//   Session.create(session)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the session.",
//       });
//     });
// };

// // Retrieve all evaluations from the database
// exports.findAll = (req, res) => {
//   Session.findAll()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving sessions.",
//       });
//     });
// };

// // Retrieve a(n) session by id
// exports.findById = (req, res) => {
//   const id = req.params.id;
//   Session.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: "Cannot find session with id=" + id,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving session with id=" + id,
//       });
//     });
// };

// // Update a(n) session by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;
//   Session.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Session was updated successfully.",
//         });
//       } else {
//         res.send({
//           message:
//             "Cannot update session with id=" +
//             id +
//             ". Maybe the session was not found or req.body is empty!",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating session with id=" + id,
//       });
//     });
// };

// // Delete a(n) session with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;
//   Session.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Session was deleted successfully!",
//         });
//       } else {
//         res.send({
//           message:
//             "Cannot delete session with id=" +
//             id +
//             ". Maybe the session was not found",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete session with id=" + id,
//       });
//     });
// };

// // Delete all session from the database.
// exports.deleteAll = (req, res) => {
//   Session.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} sessions were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all sessions.",
//       });
//     });
// };
