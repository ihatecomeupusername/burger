module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define("Destinations", {
    name: DataTypes.STRING,
  });
  return destinations;
};
