import React from 'react';
import s from './cardRecipe.module.css';

export default function CardRecipe(props) {
  return (
    <div className={s.containerd}>
      <img src={props.image} alt="image food" />
      <h1>{props.name}</h1>
      <span>{props.diets}</span>
    </div>
  )
}
