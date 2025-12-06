const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Optimization = sequelize.define('Optimization', {
  asin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalTitle: DataTypes.TEXT,
  originalBullets: DataTypes.TEXT,
  originalDescription: DataTypes.TEXT,

  optimizedTitle: DataTypes.TEXT,
  optimizedBullets: DataTypes.TEXT,
  optimizedDescription: DataTypes.TEXT,
  optimizedKeywords: DataTypes.TEXT,
}, {
  timestamps: true // createdAt & updatedAt
});

module.exports = Optimization;
