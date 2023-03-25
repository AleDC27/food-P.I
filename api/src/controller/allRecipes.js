const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY } = process.env;

const allRecipes = async () => {
  const apiFodd = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${YOUR_API_KEY}`
  );
  const allRecipesResults = apiFodd.data.results.map(cur=>{
    let analyzedInstructions=cur.analyzedInstructions
    return {
    id:cur.id,
    name:cur.title,
    image:cur.image,
    diets:cur.diets,
    healthScore:cur.healthScore,
    summary:cur.summary.replace(/(<([^>]+)>)/gi, ""),
    steps:analyzedInstructions[0]?.steps
  }})
  return allRecipesResults;
};
module.exports = allRecipes;
