import React from "react";
import { Link } from "react-router-dom";
import mainStyles from "../styles/main.module.css";
import { cursos } from "../utils/courses";

export default function ListCourses() {
  return (
    <ul key="1" className={mainStyles.courses}>
      {cursos.map((curso) => {
        return (
          <Link
            key={curso.id}
            to={`curso/${curso.name}`}
            className={mainStyles.list}
          >
            <li key={curso.id}> {curso.name} </li>
          </Link>
        );
      })}
    </ul>
  );
}
