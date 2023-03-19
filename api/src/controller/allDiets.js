const axios=require('axios');
require("dotenv").config();
const allRecipes=require('./allRecipes')

const allDiets = async () => {
  const apiFodd = await allRecipes();
  const dietas = apiFodd.map(cur=>cur.diets);
  const uniquesDiets=dietas.reduce((acc,cur)=>acc.concat(cur));
  console.log(uniquesDiets.length);
  const resultsDiets=[...new Set(uniquesDiets)];
  console.log(resultsDiets)
};
allDiets()
module.exports = allDiets;







// const AllDiets = 
//["Whole30","Low FODMAP","Primal","Paleo","Pescetarian",
//"Vegan","Ovo-Vegetarian","Lacto-Vegetarian","Vegetarian",
//"Ketogenic","Gluten Free"];