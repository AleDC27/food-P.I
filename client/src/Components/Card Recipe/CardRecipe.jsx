import React from 'react';
import s from './cardRecipe.module.css';
import { Link, useNavigate } from 'react-router-dom';


export default function CardRecipe(props) {
  const navigate=useNavigate();
  const handleClick=()=>{
     navigate(`/detail/${props.id}`,{ replace: true })
  }
  return (
      //<Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
    <div className={s.containerd} onClick={handleClick}>
      <img src={props.image} alt="image food" />
      <h1>{props.name}</h1>
      <span>{props.diets}</span>
    </div>
     // </Link>
  )
}
