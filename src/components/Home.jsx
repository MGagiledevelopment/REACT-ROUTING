import React from "react";
import mainStyles from "../styles/main.module.css";

export default function () {
  return (
    <div className={mainStyles.home}>
      <img
        className={mainStyles.iconhome}
        src="./images/education.svg"
        alt="image"
        width="111rem"
      />
      <h1>Ingresá a nuestra sección de cursos para saber más.</h1>
    </div>
  );
}
