import React from 'react';
import s from './landingPage.module.css';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className={`${s.containert}`}>
        <div className={s.button}>
        <Link to='/home' className={s.link}>
          <h2>Home</h2>
        </Link>
        </div>

    </div>
  )
};