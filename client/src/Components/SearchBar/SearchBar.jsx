import s from './search.module.css'
import search from '../../assets/searchbar.png';
import { useDispatch } from 'react-redux';
import { searchRecipeName } from '../redux/action/action';
import { useState } from 'react';

export default function SearchBar() {
   const dispatch=useDispatch();
   const [value,setValue]=useState("");

   const handleChange=(e)=>{
      setValue(e.target.value)
      console.log(value)
   };
   const handleDispatch=(e)=>{
      e.preventDefault();
      console.log(value)
      dispatch(searchRecipeName(value))
   };

   return (
      <>
      <form className={`${s.content_buscador}`} onSubmit={handleDispatch}>
         <input className={`${s.buscador}`} type='search' value={value} onChange={handleChange}/>
         <button className={`${s.search_button}`} ><img src={search} id={s.img_search} /></button>
      </form>
      </>
   );
}
