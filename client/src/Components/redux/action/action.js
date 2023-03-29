import { ALL_RECIPES, DETAIL_ID, ORDER_RECIPES, FILTER_RECIPES } from "./actionTypes";

export function recipes() {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3001/recipes")
        .then((result) => result.json())
        .then((data) =>
          dispatch({
            type: ALL_RECIPES,
            payload: data,
          })
        );
    } catch (error) {
      console.log("error " + error.message);
    }
  };
};

export function detailId(id) {
  return async function (dispatch) {
    try {
      await fetch(`http://localhost:3001/recipes/${id}`)
        .then((result) => result.json())
        .then((data) =>
          dispatch({
            type: DETAIL_ID,
            payload: data,
          })
        );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function orderRecipes(value){
    return {
        type:ORDER_RECIPES,
        payload:value
    }
};

export function filterRecipes(value){
  return {
    type:FILTER_RECIPES,
    payload:value
  }
}