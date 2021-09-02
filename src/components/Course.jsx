import React from "react";
import { useHistory, useParams } from "react-router-dom";
import courseStyles from "../styles/main.module.css";
import { cursos } from "../utils/courses";

export default function Course(props) {
  const history = useHistory();
  const id = props.name;

  return (
    <div className={courseStyles.course}>
      <div className={courseStyles.description}>
        <h1>Usted está en el curso de {id}</h1>
        {cursos.map((curso) => {
          if (curso.name === id) {
            return <div key={curso.id}>{curso.description}</div>;
          } else return <div key={curso.id}></div>;
        })}
      </div>
      <button onClick={history.goBack} className={courseStyles.buttonback}>
        REGRESAR
      </button>
    </div>
  );
}
