import React,{useEffect} from 'react';
import CardRecipe from '../Card Recipe/CardRecipe';
import s from './home.module.css';
import {useDispatch} from 'react-redux';

export default function Home() {
  const dispatch=useDispatch;
  return (
    <div className={s.containert}>
      <h1>Home</h1>
      <CardRecipe/>
    </div>
  )
}
