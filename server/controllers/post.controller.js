const db = require("../models");
const Post = db.posts;
const User = db.users;

exports.create = (req, res) => {
  Post.bulkCreate(req.body.posts)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post."
      });
    });
};

exports.findAll = async (req, res) => {
  const posts = await Post.findAll({ include: User }).then((data) => data);

  await res.send(posts);
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id, { include: User })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Post with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Post with id=" + id
      });
    });
};
