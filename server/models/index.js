const dbConfig = require("../config/db.config.js");
const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

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

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.JSON
  },
  phone: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  company: {
    type: DataTypes.JSON
  }
});

const Post = sequelize.define("post", {
  userId: {
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  body: {
    type: DataTypes.STRING
  }
});

Post.belongsTo(User);
User.hasMany(Post, {
  foreignKey: "userId"
});

db.posts = Post;
db.users = User;

module.exports = db;
