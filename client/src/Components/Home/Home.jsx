import React, { useEffect, useState } from "react";
import CardRecipe from "../Card Recipe/CardRecipe";
import s from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { recipes } from "../redux/action/action";
import Paginacion from "../Paginacion/Paginacion";

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(1 + 1);
  });
  const recipesAll = useSelector((state) => state.recipesAll);
  const copyRecipesAll = useSelector((state) => state.copyRecipesAll);
  const diets = useSelector((state) => state.diets);
  console.log(recipesAll);
  //console.log(copyRecipesAll)
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const maxPage = Math.ceil(recipesAll.length / perPage);
  console.log(diets)
  return (
    <div className={s.container}>
      <div className={s.content_cards}>
        {recipesAll.length === 0
          ? null
          : recipesAll
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((cur) => (
                <CardRecipe
                  key={cur.id}
                  image={cur.image}
                  name={cur.name}
                  diets={cur.diets}
                  id={cur.id}
                  summary={cur.summary}
                  healthScore={cur.healthScore}
                  steps={cur.analyzedInstructions}
                />
              ))}
      </div>
      <Paginacion maxPage={maxPage} page={page} setPage={setPage} />
    </div>
  );
}
