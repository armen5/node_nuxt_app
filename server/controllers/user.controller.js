const db = require("../models");
const User = db.users;
const Post = db.posts;

exports.create = (req, res) => {
  User.bulkCreate(req.body.users)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findAll = (req, res) => {
  User.findAll({ include: Post })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id, { include: Post })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};
