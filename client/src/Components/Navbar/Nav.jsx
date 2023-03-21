import React from "react";
import style from "./nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {

  return (
    <div className={style.content_search}>
      <SearchBar/>
    </div>
  );
}
