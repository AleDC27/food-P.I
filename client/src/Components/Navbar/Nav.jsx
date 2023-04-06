import React, { useState } from "react";
import s from "./nav.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {

const [isOpen,setIsOpen]=useState(false);

  return (
    <div className={s.conteinerd}>



      <div
      className=  {`${s.content_link} ${isOpen?s.open :s.content_link} `}
    /*   className={`${styles.menuLinks} ${menuOpen ? styles.open : ""}`} */
    >
      <Link to="/home" className={s.nav_link}>
        Home
      </Link>
      <Link to="/createRecipe" className={s.nav_link}>
        Create recipe
      </Link>
      <Link to="/about" className={s.nav_link}>
        About
      </Link>

    </div>


      

      <div className={s.mainBotoon} onClick={()=>{setIsOpen(!isOpen) 
        console.log(isOpen)}}>
         <span className={s.mainButtonLine} />
        <span className={s.mainButtonLine} />
        <span className={s.mainButtonLine} />
      </div>
    </div>
  );
}
