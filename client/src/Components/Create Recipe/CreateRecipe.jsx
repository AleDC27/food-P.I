import React from "react";
import s from "./createRecipe.module.css";
import { useState } from "react";
import { validation } from "./validation";

export default function CreateRecipe() {
  const [errors, setErrors] = useState({
    name: null,
    image: null,
    diets: null,
    healthScore: null,
    summary: null,
    steps: null,
  });

  //usamos esto para el value del input steps
  const [ingRecipe, setIngRecipe] = useState({
    str: "",
    arr: [],
  });
  let [numberStep, setNumberStep] = useState(1);

  const [recipeData, setRecipeData] = useState({
    name: "",
    image: "",
    diets: [],
    healthScore: 1,
    summary: "",
    steps: [
      {
        number: numberStep,
        step: "",
        ingredients: [],
        length: { number: "", unit: "" },
      },
    ],
  });

  const handleinputChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
    setErrors(validation({ ...recipeData, [e.target.name]: e.target.value }));
  };

  const handleAddDiets = (e) => {
    console.log(e.target.value);
    if (recipeData.diets.includes(e.target.value)) {
      setRecipeData({
        ...recipeData,
        diets: recipeData.diets.filter((cur) => cur !== e.target.value),
      });
    } else {
      setRecipeData({
        ...recipeData,
        diets: [...recipeData.diets, e.target.value],
      });
    }
  };

  //eliminamos todo lo del input image
  const handleClearImage = () => {
    setRecipeData({ ...recipeData, image: "" });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (ingRecipe.arr.includes(e.target.value))
      return alert("no pueden repetir ingredientes");
    setIngRecipe({
      ...ingRecipe,
      str:"",
      [e.target.name]: [...ingRecipe.arr, e.target.value],
    });

    setRecipeData({
      ...recipeData,
      steps: [
        //con esto su uvica en el ultimo index
        ...recipeData.steps.slice(0, recipeData.steps.length - 1),
        {
          //ya ubicado en el ultimo index
          ...recipeData.steps[recipeData.steps.length - 1],
          ingredients: [
            ...recipeData.steps[recipeData.steps.length - 1].ingredients,
            e.target.value,
          ],
        },
      ],
    });
  };

  //delete ingredients
  const handleDeleteIng = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setIngRecipe({
      ...ingRecipe,
      arr: ingRecipe.arr.filter((cur) => {
        return cur !== e.target.value;
      }),
    });

    setRecipeData({
      ...recipeData,
      steps: [
        ...recipeData.steps.slice(0, recipeData.steps.length - 1),
        {
          ...recipeData.steps[recipeData.steps.length - 1],
          ingredients: recipeData.steps[
            recipeData.steps.length - 1
          ].ingredients.filter((cur) => cur !== e.target.value),
        },
      ],
    });
  };

  console.log("ingRecipe", ingRecipe.arr);
  console.log(
    "recipeData",
    recipeData /* .steps[recipeData.steps.length-1].ingredients */
  );

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngRecipe({ ...ingRecipe, [e.target.name]: e.target.value });
  };

  const handleSteps_Step=(e)=>{
    e.preventDefault();
    setRecipeData({...recipeData,
      steps:[...recipeData.steps.slice(0,recipeData.steps.length-1),
      {
        ...recipeData.steps[recipeData.steps.length - 1],
        step:e.target.value
      }
      ]
    })
    setErrors(validation({
      ...recipeData,
      [e.target.name]:e.target.value
     /*  steps: [
        //con esto su uvica en el ultimo index
        ...recipeData.steps.slice(0, recipeData.steps.length - 1),
        {
          //ya ubicado en el ultimo index
          ...recipeData.steps[recipeData.steps.length - 1],
          step: e.target.value,
        },
      ], */
    }))
  }
  const handleAddStep = (e) => {
    e.preventDefault();
    setNumberStep(++numberStep);
    console.log(recipeData);

    //crea un nuevo obj
    setRecipeData({
      ...recipeData,
      steps: [
        ...recipeData.steps,
        recipeData.steps.push({
          number: numberStep,
          step: "",
          ingredients: [],
          length: { number: "", unit: "" },
        }),
      ],
    });

    //este es para el numero de paso el step 
    setRecipeData({
      ...recipeData,
      
      steps: [
        //con esto su uvica en el ultimo index
        ...recipeData.steps.slice(0, recipeData.steps.length - 1),
        {
          //ya ubicado en el ultimo index
          ...recipeData.steps[recipeData.steps.length - 1],
          number: numberStep,
          step:recipeData.steps[recipeData.steps.length - 1].step,
          ingredients:recipeData.steps[recipeData.steps.length - 1].ingredients
        },
      ],
    });
    setIngRecipe({
      str: "",
      arr: [],
    })
  };

  const handleSend = () => {
    alert("Recipe created successfully");
  };
  return (
    <div className={s.containerd}>
      <h1>CreateRecipe</h1>
      <form className={s.form1}>
        <div className={s.form}>
          <div className={s.content_img_name_score_diets}>
            <label htmlFor="name">
              name
              <input
                type="text"
                id="name"
                name="name"
                value={recipeData.name}
                onChange={handleinputChange}
              />
            </label>
            {errors.name ? <span>{errors.name}</span> : null}

            <h3>Type diets</h3>
            <div className={s.checkbox}>
              <label htmlFor="gluten free<">
                <input
                  type="checkbox"
                  id="gluten free"
                  name="diets"
                  value="gluten free"
                  onChange={handleAddDiets}
                />
                gluten free
              </label>
              <label htmlFor="dairy free">
                <input
                  type="checkbox"
                  id="dairy free"
                  name="diets"
                  value="dairy free"
                  onChange={handleAddDiets}
                />
                dairy free
              </label>
              <label htmlFor="lacto ovo vegetarian">
                <input
                  type="checkbox"
                  id="lacto ovo vegetarian"
                  name="diets"
                  value="lacto ovo vegetarian"
                  onChange={handleAddDiets}
                />
                lacto ovo vegetarian
              </label>
              <label htmlFor="vegan">
                <input
                  type="checkbox"
                  id="vegan"
                  name="diets"
                  value="vegan"
                  onChange={handleAddDiets}
                />
                vegan
              </label>
              <label htmlFor="paleolithic">
                <input
                  type="checkbox"
                  id="paleolithic"
                  name="diets"
                  value="paleolithic"
                  onChange={handleAddDiets}
                />
                paleolithic
              </label>
              <label htmlFor="primal">
                <input
                  type="checkbox"
                  id="primal"
                  name="diets"
                  value="primal"
                  onChange={handleAddDiets}
                />
                primal
              </label>
              <label htmlFor="whole 30">
                <input
                  type="checkbox"
                  id="whole 30"
                  name="diets"
                  value="whole 30"
                  onChange={handleAddDiets}
                />
                whole 30
              </label>
              <label htmlFor="pescatarian">
                <input
                  type="checkbox"
                  id="pescatarian"
                  name="diets"
                  value="pescatarian"
                  onChange={handleAddDiets}
                />
                pescatarian
              </label>
              <label htmlFor="fodmap friendly">
                <input
                  type="checkbox"
                  id="fodmap friendly"
                  name="diets"
                  value="fodmap friendly"
                  onChange={handleAddDiets}
                />
                fodmap friendly
              </label>
              <label htmlFor="ketogenic">
                <input
                  type="checkbox"
                  id="ketogenic"
                  name="diets"
                  value="ketogenic"
                  onChange={handleAddDiets}
                />
                ketogenic
              </label>
              {recipeData.diets.length === 0 ? (
                <span>{errors.diets}</span>
              ) : null}
            </div>

            <label htmlFor="healthScore">
              Health score
              <input
                type="number"
                id="healthScore"
                name="healthScore"
                value={recipeData.healthScore}
                onChange={handleinputChange}
                style={{ width: "100px" }}
              />
            </label>
            {errors.healthScore ? <span>{errors.healthScore}</span> : null}

            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={recipeData.image}
              onChange={handleinputChange}
            />
            {recipeData.image && <button onClick={handleClearImage}>X</button>}
            {errors.image ? <span>{errors.image}</span> : null}
            <img src={recipeData.image} alt="" width="100px" />
          </div>

          <div className={s.content_summary}>
            <h3>Summary</h3>
            <textarea
              name="summary"
              type="textarea"
              id="summary"
              value={recipeData.summary}
              onChange={handleinputChange}
            ></textarea>
            {errors.summary ? <span>{errors.summary}</span> : null}
          </div>

          <div className={s.content_steps}>
            <h3>Steps</h3>
            <span>step number {recipeData.steps[recipeData.steps.length-1].number} </span>

            <textarea
              placeholder="Instruction"
              value={recipeData.steps[recipeData.steps.length-1].step}
              onChange={handleSteps_Step}
              name="recipeData.steps[recipeData.steps.length-1].step"
              cols="30"
              rows="10"
            ></textarea>
            {errors.steps?<span>{errors.steps}</span>:null}
            <input
              type="text"
              placeholder="Ingredients"
              value={ingRecipe.str}
              onChange={handleAddIngredient}
              name="str"
            />
            <button onClick={handleClick} value={ingRecipe.str} name="arr">
              add ingredient
            </button>

            {recipeData.steps[recipeData.steps.length - 1].ingredients.length > 0 ? (
              <ul>
                {recipeData.steps[recipeData.steps.length - 1].ingredients.map((cur) => (
                  <ol value={cur} key={cur}>
                    {cur}
                    <button onClick={handleDeleteIng} value={cur}>
                      x
                    </button>
                  </ol>
                ))}
              </ul>
            ) : null}

            <button onClick={handleAddStep}>Next step</button>
          </div>
        </div>
        <input type="submit" value="Send" onClick={handleSend} />
      </form>
    </div>
  );
}
