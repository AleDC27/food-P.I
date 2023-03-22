import React, { useEffect, useState } from "react";
import CardRecipe from "../Card Recipe/CardRecipe";
import s from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { recipes } from "../redux/action/action";

export function Home() {
  /*   const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(recipes())
  },[]) */
  const recipesAll = useSelector((state) => state.recipesAll);
  // console.log(recipesAll.length);

  const food_per_page = 9;
  const [foods, setFoods] = useState(recipesAll);
  //console.log(foods.length)
  const [pagFoods, setPageFoods] = useState(
    [...recipesAll].splice(0, food_per_page)
  );
  const [currentPage, setCurrentPage] = useState(0);
  console.log("page_food", pagFoods.length);

  const nextHandler = () => {
    const allElements = foods.length;
    console.log(allElements);
    const nextPage = currentPage + 1;

    const firstIndex = nextPage * food_per_page;
    console.log(firstIndex)
    if (firstIndex >= allElements) return;
    setPageFoods([...foods].splice(firstIndex, food_per_page));
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * food_per_page;
    setPageFoods([...foods].splice(firstIndex, food_per_page));
    setCurrentPage(prevPage);
  };
  return (
    <div className={s.container}>
      <h1>Home</h1>
      <div className={s.content_cards}>
        <h1>{currentPage}</h1>
        {pagFoods.map((cur) => (
          <CardRecipe
            key={cur.id}
            image={cur.image}
            name={cur.name}
            diets={cur.diets}
          />
        ))}
      </div>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}
