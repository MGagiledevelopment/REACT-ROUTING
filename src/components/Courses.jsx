import React from "react";
import mainStyles from "../styles/main.module.css";
import { cursos } from "../utils/courses";

export default function Courses() {
  return (
    <div className={mainStyles.courses}>
      {cursos.map((curso) => {
        return (
          <ul className={mainStyles.list} key={curso.id}>
            <li>{curso.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
