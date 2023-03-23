import React from 'react';
import s from './landingPage.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recipes } from '../redux/action/action';

export function LandingPage() {
  const dispatch=useDispatch();
  const onClickHandler=()=>{
    console.log("yes")
    dispatch(recipes())
  };
  return (
    <div className={`${s.containert}`}>
        <div className={s.button}>
        <Link to='/home' className={s.link} onClick={onClickHandler}>
          <h2>Home</h2>
        </Link>
        </div>

    </div>
  )
};