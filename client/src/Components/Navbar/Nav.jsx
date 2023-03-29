import React from "react";
import style from "./nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { orderRecipes, filterRecipes } from "../redux/action/action";
import { useDispatch } from "react-redux";

export default function Navbar() {
const dispatch=useDispatch();
  const handleDispatch=(e)=>{
    const {name,value}=e.target;
    if(name==="order")return dispatch(orderRecipes(value));
    if(name==="filter")return dispatch(filterRecipes(value));
  }

  return (
    <div className={style.content_search}>
      <div>
        <select name="order" onChange={handleDispatch}>

          <option value="Default">Default</option>
          <option value="Asendente">Asendente</option>
          <option value="Desendente">Desendente</option>
        </select>
        <select name="filter" onChange={handleDispatch} >
          <option value="All diets">All diets</option>
          <option value="gluten free">gluten free</option>
          <option value="dairy free">dairy free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          <option value="vegan">vegan</option>
          <option value="paleolithic">paleolithic</option>
          <option value="primal">primal</option>
          <option value="whole 30">whole 30</option>
          <option value="pescatarian">pescatarian</option>
          <option value="ketogenic">ketogenic</option>
          <option value="fodmap friendly">fodmap friendly</option>
        </select>
      </div>
      <SearchBar/>
    </div>
  );
}
