

var Sequelize = require('sequelize');
//var sequelize = require

module.exports = function(sequelize, DataTypes) {

var burger = sequelize.define('burger', {
burger_name : {
  type : Sequelize.STRING,
  allowNull: false,

  validate: {
        len: [1, 160]
      }
},

devoured: {
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue: 0

}
});

return burger;

};


