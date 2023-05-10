/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'categories',
    },
  );

  return Categories;
};
