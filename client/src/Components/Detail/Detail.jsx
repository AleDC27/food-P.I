import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import s from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { detailId } from "../redux/action/action";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loaging";

export default function Detail() {
  const { id } = useParams();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  console.log(recipeDetail)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(detailId(id))
    .then(() => setLoading(false))
    .catch(() => setLoading(false));
  }, [id]);



  //console.log(recipeDetail && recipeDetail.steps);

  return (
    <div className={s.containerd}>
      {loading?<Loading/>:null}
      {recipeDetail===null? null:recipeDetail && (
        <div className={s.contend_card}>
          <div className={s.contend_card_img}>
            <img src={recipeDetail[0].image} alt="image food" />
          </div>
          <div className={s.contend_card_datos}>
            <h1>{recipeDetail[0].name}</h1>
            <h4>Health score : {recipeDetail[0].healthScore}</h4>
            <h4>
              Diets:{" "}
              {recipeDetail[0].diets &&
                recipeDetail[0].diets.map((cur) => (
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
            <span>{recipeDetail[0].summary}</span>
          </div>
        )}
      </div>

      {recipeDetail && (
        <div className={s.content_steps}>
          <h3 style={{ width: "100%" }}>Steps</h3>
          {recipeDetail[0].steps.map((cur) => {
            return (
              <div key={cur.number} className={s.step_card}>
                <b style={{ width: "100%" }}>Step number {cur.number}: </b>
                <span>{cur.step}</span>
                <br />

                <b>Ingredients: </b>
                { cur.ingredients &&
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
