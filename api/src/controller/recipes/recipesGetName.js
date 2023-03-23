const allRecipes=require('../allRecipes');
const {Recipe}=require('../../db');
const { Op } = require('sequelize');

const recipeGetName=async(name)=>{

        //buscar en base de datos
        const recipeDB=await Recipe.findAll({
                where:{name:{[Op.iLike]:name}}
        })
        //buscar en api
        const allRecipe=await allRecipes();
        const filterName=allRecipe.filter(cur=>cur.name.toLowerCase().includes(name.toLowerCase()))
        //const filterName=allRecipe.filter(cur=>cur.name.toLowerCase()===name.toLowerCase());
        
        console.log(recipeDB)
        console.log(filterName)
        if(filterName.length>0 || recipeDB.length>0){
                let result=await( recipeDB.concat(filterName));
                console.log(result.length)
                return result;
        } 

        throw new Error("There are no recipes with that name");
}

module.exports=recipeGetName