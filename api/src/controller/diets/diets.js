const allDiets = require("../allDiets");
const {Diets} = require("../../db");

const diets = async () => {
  const typeDiets =await allDiets();
  const result = await Diets.bulkCreate(typeDiets.map(name => ({ name })))
  return result;
};
module.exports = diets;
