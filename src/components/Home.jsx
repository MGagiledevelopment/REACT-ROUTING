import React from "react";
import mainStyles from "../styles/main.module.css";

export default function () {
  return (
    <div className={mainStyles.home}>
      <img
        className={mainStyles.iconhome}
        src="./images/education.svg"
        alt="img"
        width="111rem"
      />
      <h1>Ingresá a la sección de cursos para conocer más.</h1>
    </div>
  );
}
