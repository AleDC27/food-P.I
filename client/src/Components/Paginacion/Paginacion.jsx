import React from "react";
import s from "./paginacion.module.css";
import { useState } from "react";

export default function Paginacion({ maxPage, page, setPage }) {
  const [input, setInput] = useState(1);
  const prevHandler = () => {
    //usamos page y no input para que evitar bug en input
    setInput(page - 1);
    setPage(page - 1);
  };
  const nextHandler = () => {
    setInput(page + 1);
    setPage(page + 1);
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maxPage) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };
  return (
    <div className={s.containerd}>
      <h1>pagina {page}</h1>
      <button onClick={prevHandler} disabled={page <= 1}>
        Back
      </button>
      <input
        className={s.pag_input}
        value={input}
        autoComplete="off"
        name="page"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <span>de {maxPage} </span>
      <button onClick={nextHandler} disabled={page >= maxPage}>
        Next
      </button>
    </div>
  );
}
