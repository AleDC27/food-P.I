import React from 'react';
import s from './error.module.css';
import error from '../../assets/404.jpg';
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <div className={s.containerd}>
      
        <h1>Error 404 Not Found</h1>
      <img src={error} alt="" />
      <Link to="/" className={s.link} >Back</Link>
    </div>
  )
}
