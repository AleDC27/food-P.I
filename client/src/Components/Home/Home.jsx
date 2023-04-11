import React, { useEffect, useState } from "react";
import CardRecipe from "../Card Recipe/CardRecipe";
import s from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Paginacion from "../Paginacion/Paginacion";
import Loading from "../Loading/Loaging";
import { orderRecipes, filterRecipes } from "../redux/action/action";

export function Home() {
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(true);

  const handleDispatch = (e) => {
    const { name, value } = e.target;
    if (name === "order") return dispatch(orderRecipes(value));
    if (name === "filter") return dispatch(filterRecipes(value));
  };

  const recipesAll = useSelector((state) => state.recipesAll);

  const diets = useSelector((state) => state.diets);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const maxPage = Math.ceil(recipesAll.length / perPage);


  useEffect(()=>{
    if(recipesAll.length===0){
      setLoading(true)
    }else{
      setLoading(false)
    }
  })


  return (
    <div className={s.container}>

<SearchBar />

<div className={s.filters}>
        <select name="order" onChange={handleDispatch}>
          <option value="Default">Default</option>
          <option value="Asendente">Asendente</option>
          <option value="Desendente">Desendente</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Max health score">Max health score </option>
          <option value="Min health score">Min health score</option>
        </select>
        <select name="filter" onChange={handleDispatch}>
          <option value="All diets">All diets</option>
          <option value="Locales">Locales</option>
          <option value="Created">Created</option>
          {diets&&diets.map(cur=>{
            return <option value={cur} key={cur}>{cur}</option>
          })}
        </select>
      </div>

      {(loading)?<Loading/>:null}
      <div className={s.content_cards}>
        {recipesAll.length === 0|| typeof recipesAll==='string'||typeof recipesAll[recipesAll.length-1]==='string'
          ? <h1>Not result</h1>
          : recipesAll.length>0?
              recipesAll.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
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
              )):<h1>Not result</h1>}
      </div>
      <Paginacion maxPage={maxPage} page={page} setPage={setPage} />
    </div>
  );
}
