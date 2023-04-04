import React from "react";
import s from "./createRecipe.module.css";
import { useState } from "react";
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../redux/action/action";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  console.log(diets);

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
      str: "",
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

  console.log(
    "recipeData",
    recipeData /* .steps[recipeData.steps.length-1].ingredients */
  );

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngRecipe({ ...ingRecipe, [e.target.name]: e.target.value });
  };

  const handleSteps_Step = (e) => {
    e.preventDefault();
    setRecipeData({
      ...recipeData,
      steps: [
        ...recipeData.steps.slice(0, recipeData.steps.length - 1),
        {
          ...recipeData.steps[recipeData.steps.length - 1],
          step: e.target.value,
        },
      ],
    });
    setErrors(
      validation({
        ...recipeData,
        [e.target.name]: e.target.value,
        /*  steps: [
        //con esto su uvica en el ultimo index
        ...recipeData.steps.slice(0, recipeData.steps.length - 1),
        {
          //ya ubicado en el ultimo index
          ...recipeData.steps[recipeData.steps.length - 1],
          step: e.target.value,
        },
      ], */
      })
    );
  };
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
          step: recipeData.steps[recipeData.steps.length - 1].step,
          ingredients:
            recipeData.steps[recipeData.steps.length - 1].ingredients,
        },
      ],
    });
    setIngRecipe({
      str: "",
      arr: [],
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    let flag = Object.values(errors).every((cur) => cur === null);
    if (
      !recipeData.name ||
      !recipeData.image ||
      !recipeData.summary ||
      recipeData.diets.length === 0 ||
      !flag
    ) {
      return alert("datos por completar 1");
    }
    if (flag) {
      setRecipeData({
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
      setIngRecipe({
        str: "",
        arr: [],
      });
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');

      // Deseleccionar todas las opciones seleccionadas
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      dispatch(createRecipe(recipeData));
    }
  };
  return (
    <div className={s.containerd}>
      <form className={s.form1} onSubmit={handleSend}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "90%",
            height: "90%",
            alignItems: "center",
          }}
        >
          <div className={s.content_img_name_score_diets}>
            <label htmlFor="name" className={s.labels}>
              Name
              <input
                className={s.input_text}
                type="text"
                id="name"
                name="name"
                value={recipeData.name}
                onChange={handleinputChange}
                autoComplete="off"
              />
            </label>
            {errors.name ? <span className={s.errors}>{errors.name}</span> : null}

            <div style={{textAlign:"start"}}>
              <h3 style={{ textAlign: "center" }}>Type diets</h3>
              <div className={s.checkbox}>
                {diets.length ? (
                  <div className={s.checkbox}>
                    {diets.map((cur) => (
                      <label htmlFor={cur} key={cur}>
                        <input
                          type="checkbox"
                          id={cur}
                          name="diets"
                          value={cur}
                          onChange={handleAddDiets}
                        />
                        {cur}
                      </label>
                    ))}
                  </div>
                ) : (
                  console.log("nada")
                )}
              </div>
              {recipeData.diets.length === 0 ? (
                <span
                  style={{
                    display:"block",
                    textAlign: "center",
                  }}
                  className={s.errors}
                >
                  {errors.diets}
                </span>
              ) : null}
            </div>

            <label htmlFor="healthScore" className={s.labels}>
              Health score
              <input
                type="number"
                id="healthScore"
                name="healthScore"
                value={recipeData.healthScore}
                onChange={handleinputChange}
                style={{ width: "70px", padding: "10px ", textAlign: "center" }}
                className={s.input_text}
              />
            </label>
            {errors.healthScore ? <span className={s.errors}>{errors.healthScore}</span> : null}

            <label htmlFor="image" className={s.labels}>
              Image
              <input
                type="text"
                id="image"
                name="image"
                value={recipeData.image}
                onChange={handleinputChange}
                className={s.input_text}
              />
              {recipeData.image && (
                <button onClick={handleClearImage} 
              className={s.button_img}
                >X</button>
              )}
            </label>
              {errors.image ? <span className={s.errors}>{errors.image}</span> : null}
            <img src={recipeData.image} alt="" width="100px" style={{display:"flex",justifyContent:"center",margin:"0 40%",width:"110px"}}/>
          </div>

          <div className={s.summary_steps}>
            <div className={s.content_summary}>
              <b>Summary</b>
              <textarea
                name="summary"
                type="textarea"
                id="summary"
                value={recipeData.summary}
                onChange={handleinputChange}
              ></textarea>
              {errors.summary ? <span className={s.errors}>{errors.summary}</span> : null}
            </div>

            <div className={s.content_steps}>
              <div className={s.content_steps_step}>
                <b>
                  Step number{" "}
                  {recipeData.steps[recipeData.steps.length - 1].number}{" "}
                </b>

                <textarea
                  placeholder="Instruction"
                  value={recipeData.steps[recipeData.steps.length - 1].step}
                  onChange={handleSteps_Step}
                  name="recipeData.steps[recipeData.steps.length-1].step"
                ></textarea>
                {errors.steps ? <span className={s.errors}>{errors.steps}</span> : null}
              </div>

              <div className={s.content_steps_ingredients}>
                <input
                  type="text"
                  placeholder="Ingredients"
                  value={ingRecipe.str}
                  onChange={handleAddIngredient}
                  name="str"
                  className={s.input_text}
                />
                <button onClick={handleClick} value={ingRecipe.str} name="arr" className={s.button_step} style={{marginLeft:"5px"}}>
                  add ingredient
                </button>

                {recipeData.steps[recipeData.steps.length - 1].ingredients
                  .length > 0 ? (
                  <ul style={{}}>
                    {recipeData.steps[
                      recipeData.steps.length - 1
                    ].ingredients.map((cur) => (
                      <ol value={cur} key={cur}>
                        {cur}
                        <button onClick={handleDeleteIng} value={cur} style={{borderRadius:"15px",border:"",background:"transparent"}} >
                          x
                        </button>
                      </ol>
                    ))}
                  </ul>
                ) : null}
              </div>

              <button onClick={handleAddStep} className={s.button_step}>Next step</button>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="send"
          className={s.send}
        ></input>
      </form>
    </div>
  );
}
