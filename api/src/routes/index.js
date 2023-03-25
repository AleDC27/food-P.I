const { Router } = require("express");
require("dotenv").config();
const { YOUR_API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const allRecipes = require("../controller/allRecipes");
const recipeId = require("../controller/recipes/recipesId");
const recipesPost = require("../controller/recipes/recipesPost.js");
const recipeGetName = require("../controller/recipes/recipesGetName");
const diets = require('../controller/diets/diets');

const { Recipe } = require("../db");
const {Diets} = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//prueba
router.get("/test", (req, res) => {
  try {
    console.log(YOUR_API_KEY);
    res.status(200).send("todo ok");
  } catch (error) {}
});
//all
router.get("/allRecipes", async (req, res) => {
  try {
    const results = await allRecipes();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
//all databases
router.get("/recipesDB", async (req, res) => {
  try {
    const allReci = await Recipe.findAll();
    res.status(200).json(await allReci);
  } catch (error) {
    res.status(404).json(error);
  }
});
//716426

//buscar receta por id
router.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipeId(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//buscar receta por nombre por query
router.get("/recipes", async (req, res) => {
  console.log("llego")
  try {
    const { name } = req.query;
    if (!name) {
      const allReci = await Recipe.findAll();
      const allReciApi=await allRecipes()
      let allResult=allReci.concat(allReciApi);
      return res.status(400).json(allResult);
    }
    const recipe = await recipeGetName(name);
    res.status(200).send(recipe);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

//agregar receta por body
router.post("/recipes", async (req, res) => {
  try {
    const { name, image, diets, healthScore, summary,steps } = req.body;
    if (!name || !image || !diets || !healthScore || !summary) {
      return res.status(400).send("missing data to complete");
    }
    const newRecipe = await recipesPost({
      name,
      image,
      diets,
      healthScore,
      summary,
      steps
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/diets", async (req, res) => {
  try {
    let result=await diets();
    res.status(200).json(result)
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
