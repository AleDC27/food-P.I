import React, { useEffect, useState } from "react";
import CardRecipe from "../Card Recipe/CardRecipe";
import s from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { recipes } from "../redux/action/action";
import Paginacion from '../Paginacion/Paginacion'

export function Home() {
    const dispatch=useDispatch();

  const recipesAll = useSelector((state) => state.recipesAll);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const maxPage = Math.ceil( recipesAll.length / perPage);

  return (
    <div className={s.container}>
      <h1>Home</h1>
      <div className={s.content_cards}>
        {recipesAll.length===0?null
          :recipesAll.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((cur) => (
            <CardRecipe
              key={cur.id}
              image={cur.image}
              name={cur.name}
              diets={cur.diets}
            />
          ))}
      </div>
      <Paginacion maxPage={maxPage} page={page} setPage={setPage} />
    </div>
  );
}
