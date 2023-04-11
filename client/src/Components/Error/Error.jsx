import React from 'react';
import s from './error.module.css';
import error from '../../assets/404.jpg'

export default function Error() {
  return (
    <div className={s.containerd}>
        <h1>Error 404 Not Found</h1>
      <img src={error} alt="" />
    </div>
  )
}
