const Form = require("../models/Form");

// Create and Save a new Utilisateur
exports.create = (req, res) => {


 new Form ({
    nom: req.body.nom,
    prenom: req.body.prenom,
    contact: req.body.contact,
    email: req.body.email,
  })
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  Form.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  Form.findById(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.userId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  Form.findByIdAndUpdate(
    req.params.userId,
    {
      message: req.body.message,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.userId,
      });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  Form.findByIdAndRemove(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "user not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.userId,
      });
    });
};