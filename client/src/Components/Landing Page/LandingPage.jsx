import React from "react";
import s from "./landingPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recipes, diets } from "../redux/action/action";
import cocina from "../../assets/cocina.png";

export function LandingPage() {
  const dispatch=useDispatch();
  const onClickHandler=()=>{
    dispatch(recipes());
    dispatch(diets())
  };
  return (
    <div className={`${s.containert}`}>
    <div className={s.content_button}>
      <div className={s.button}>
        <Link to="/home" className={s.link}  onClick={onClickHandler}>
          <img src={cocina} alt="img" className={s.img_kitchen} />
        </Link>
      </div>
    </div>
  </div>
  )
};

//no request
/* export function LandingPage() {
  return (
    <div className={`${s.containert}`}>
      <div className={s.content_button}>
        <div className={s.button}>
          <Link to="/home" className={s.link}>
            <img src={cocina} alt="img" className={s.img_kitchen} />
          </Link>
        </div>
      </div>
    </div>
  );
}
 */