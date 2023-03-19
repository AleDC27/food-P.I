const { Recipe } = require("../../db");

const recipesPost = async ( {name, image, diets, healthScore, summary} ) => {
  const postRecipe = await Recipe.create({
    name,
    image,
    diets,
    healthScore,
    summary,
  });
  return postRecipe;
};

module.exports = recipesPost;
