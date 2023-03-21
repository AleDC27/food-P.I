const allRecipes=require('../allRecipes');
const {Recipe}=require('../../db')

const recipeGetName=async(name)=>{
        const allRecipe=await allRecipes();
        const filterName=allRecipe.filter(cur=>cur.name.toLowerCase().includes(name.toLowerCase()))
        //const filterName=allRecipe.filter(cur=>cur.name.toLowerCase()===name.toLowerCase());
        if(filterName.length>0) return filterName;
        
        //buscar en base de datos
        const recipeDB=await Recipe.findAll({
                where:{name:name.toLowerCase()}
        })
        if(recipeDB.length>0) return recipeDB;

        throw new Error("There are no recipes with that name");
}

module.exports=recipeGetName