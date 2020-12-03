const Sequelize = require('sequelize');
const env = process.env.NODE_ENV||'development';
const config = require('../config/config');

const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.Reply = require('./reply')(sequelize, Sequelize)
db.Post = require('./post')(sequelize, Sequelize)

// /**외래키 설정 */
db.User.hasMany(db.Reply, { foreignKey: 'writer', sourceKey: 'email'})
db.Reply.belongsTo(db.User, { foreignKey: 'writer', sourceKey: 'email'})

db.User.hasMany(db.Post, {foreignKey: 'writer', sourceKey: 'email'})
db.Post.belongsTo(db.User, { foreignKey: 'writer', sourceKey: 'email'})


module.exports = db;