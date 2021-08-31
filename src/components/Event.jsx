import React from "react";
import { useHistory, useParams } from "react-router-dom";
import eventStyles from "../styles/main.module.css";
import { events } from "../utils/events.js";

export default function Event(props) {
  const history = useHistory();
  const params = useParams();
  const id = params.id;

  console.log(id);

  return (
    <div className={eventStyles.course}>
      <div className={eventStyles.description}>
        <h1>Usted está en el evento: {id}</h1>
        {events.map((curso) => {
          if (curso.className === params.id) {
            return <div>{curso.description}</div>;
          } else return <></>;
        })}
      </div>
      <button onClick={history.goBack}>REGRESAR</button>
    </div>
  );
}
