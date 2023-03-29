import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { detailId } from "../redux/action/action";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailId(id));
  }, [id]);
console.log(recipeDetail&&recipeDetail.steps)
  return (
    <div className={s.containerd}>
      {recipeDetail && (
        <div className={s.contend_card}>
          <h1>{recipeDetail.name}</h1>
          <img src={recipeDetail.image} alt="image food" />
          <span>{recipeDetail.healthScore}</span>
        </div>
      )}
                <Link to='/home' >Home</Link>
      <div className={s.contend_summary}>
        {recipeDetail && (
          <div>
            <span>{recipeDetail.summary}</span>
          </div>
        )}
      </div>
      {recipeDetail && (
          <div className={s.content_steps}>
            <h1>steps</h1>
            {recipeDetail.steps.map(cur=>{
             return <div key={cur.number}>
                <h3>paso numero {cur.number} </h3>
                <span>{cur.step}</span>
                {cur.ingredients&&cur.ingredients.map(ing=>{
                 return <div key={ing.id} >
                    <h3>{ing.name}</h3>
{/*                     <img src={ing.image} alt="" /> */}
                  </div>
                })}
                {cur.length&&<span>{cur.length.number}{cur.length.unit}</span>}
              </div>
            })}
          </div>
        )}
      <div className={s.content_steps}></div>
    </div>
  );
}

/* import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { detailId } from "../redux/action/action";

export default function Detail() {
  const { id } = useParams();
  const recipesAll = useSelector((state) => state.recipesAll);

  const recipeDetail=recipesAll.find(cur=>cur.id===Number(id));

  return (
    <div className={s.containerd}>
      {recipeDetail && (
        <div className={s.contend_card}>
          <h1>{recipeDetail.name}</h1>
          <div className={s.contend_info} >
          <img src={recipeDetail.image} alt="image food" className={s.contend_card_img} />
          <span>Puntos de salud:{recipeDetail.healthScore}</span>
          <span>{recipeDetail.diets}</span>
          </div>
        </div>
      )}
      <div className={s.contend_summary}>
        {recipeDetail && (
          <div>
            <span>{recipeDetail.summary}</span>
          </div>
        )}
      </div>
      {recipeDetail && (
          <div className={s.content_steps}>
            <h1>steps</h1>
            {recipeDetail.steps.map(cur=>{
             return <div key={cur.number}>
                <h3>paso numero {cur.number} </h3>
                <span>{cur.step}</span>
                {cur.ingredients&&cur.ingredients.map(ing=>{
                 return <div key={ing.id} >
                    <h3>{ing.name}</h3>
                  </div>
                })}
                {cur.length&&<span>{cur.length.number}{cur.length.unit}</span>}
              </div>
            })}
          </div>
        )}
      <div className={s.content_steps}></div>
    </div>
  );
}

 */