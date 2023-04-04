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
  console.log(recipeDetail && recipeDetail.steps);

  return (
    <div className={s.containerd}>
      {recipeDetail && (
        <div className={s.contend_card}>
          <div className={s.contend_card_img}>
            <img src={recipeDetail.image} alt="image food" />
          </div>
          <div className={s.contend_card_datos}>
            <h1>{recipeDetail.name}</h1>
            <h4>Health score : {recipeDetail.healthScore}</h4>
            <h4>
              Diets:{" "}
              {recipeDetail.diets &&
                recipeDetail.diets.map((cur) => (
                  <span key={cur}> {cur}, </span>
                ))}{" "}
            </h4>
            <Link to="/home" style={{ textDecoration: "none" }} className={s.link}>
              Home
            </Link>
          </div>
        </div>
      )}

      <div className={s.contend_summary}>
        {recipeDetail && (
          <div>
            <h3>Summary</h3>
            <span>{recipeDetail.summary}</span>
          </div>
        )}
      </div>

      {recipeDetail && (
        <div className={s.content_steps}>
          <h3 style={{ width: "100%" }}>Steps</h3>
          {recipeDetail.steps.map((cur) => {
            return (
              <div key={cur.number} className={s.step_card}>
                <b style={{ width: "100%" }}>Step number {cur.number}: </b>
                <span>{cur.step}</span>
                <br />
                <b>Ingredients: </b>
                {cur.ingredients &&
                  cur.ingredients.map((ing) => {
                    return <span key={ing.id}>{ing.name},</span>;
                  })}
                . <br />
                {cur.length && (
                  <span>
                    {cur.length.number} {cur.length.unit}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className={s.content_steps}></div>
    </div>
  );
}
