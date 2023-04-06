import React from "react";
import s from "./about.module.css";
import linkeding from '../../assets/logo-linkeding.png';
import gitHub from '../../assets/logo-GitHub.png';

export default function About() {
  return (
    <div className={s.containert}>
      <h1>Foods</h1>
      <div className={s.content_data}>
        <p>
          Hola mi nombre es Alejandro,este es mi proyecto individual de <a
            className={s.link}
            href="https://www.soyhenry.com/"
            target="_blank"
          >Henry</a> con la tematica de foods donde creamos una aplicacion web utilizando
          la api de aplicación web a partir de la API spoonacular. esta app
          cuenta con filtrado y ordenamineto de las recetas,un search que busca
          por nombre indiferentemente de mayusculas o minisculas, una seccion de
          detalles para mas info, un componente para que el usuario pueda crear
          recetas y quede r3egistrada en la base de datos y paginado.
        </p>
        <hr />
        <p>
          Esta app cuenta tanto con front,Back y Base de datos.
          </p>
          <hr />
         <p>Las tegnologias usadas para la SPA fueron: React, React-Router-dom,
          Redux, Express, Jest, SQL, Sequelize, Node.js, PostgreSQL.
        </p>
        <div className={s.logos}>
        <a href="https://www.linkedin.com/in/walter-alejandro-gordillo-487293258/" target="blank"><img src={linkeding} alt="" /></a>
        <a href="https://github.com/AleDC27/food-P.I" target="blank"><img src={gitHub} alt="" /></a>
        </div>
      </div>
    </div>
  );
}
