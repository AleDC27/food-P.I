const allRecipes=require('./allRecipes');

const allDiets = async () => {
  const apiFodd = await allRecipes();
  const dietas = apiFodd.map(cur=>cur.diets);
  const uniquesDiets=dietas.reduce((acc,cur)=>acc.concat(cur));
  const resultsDiets=[...new Set(uniquesDiets)];
  return resultsDiets
};
module.exports = allDiets;


// const AllDiets = 
//["Whole30","Low FODMAP","Primal","Paleo","Pescetarian",
//"Vegan","Ovo-Vegetarian","Lacto-Vegetarian","Vegetarian",
//"Ketogenic","Gluten Free"];