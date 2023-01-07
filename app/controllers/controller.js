const Terrain = require("../models/Terrain");

// Create and Save a new Utilisateur
exports.create = (req, res) => {


 new  Terrain({
    titre: req.body.titre,
    lieu: req.body.lieu,
    superficie: req.body.superficie,
    Geolocalisation: req.body.Geolocalisation,
    service: req.body.service,
    prix: req.body.prix,
    
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
  Terrain.find()
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
  Terrain.findById(req.params.terrainId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.terrainId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.terrainId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.terrainId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  Terrain.findByIdAndUpdate(
    req.params.terrainId,
    {
      message: req.body.message,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.terrainId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.terrainId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.terrainId,
      });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  Terrain.findByIdAndRemove(req.params.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.messageId,
      });
    });
};