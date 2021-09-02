import React from "react";
import { useHistory, useParams } from "react-router-dom";
import eventStyles from "../styles/main.module.css";
import { events } from "../utils/events.js";

export default function Event(props) {
  const history = useHistory();
  const id = props.name;
  return (
    <div className={eventStyles.course}>
      <div className={eventStyles.description}>
        <h1>Usted está en el evento: {id}</h1>
        {events.map((event) => {
          if (event.name === id) {
            return <div key={event.id}>{event.description}</div>;
          } else return <div key={event.id}></div>;
        })}
      </div>
      <button onClick={history.goBack} className={eventStyles.buttonback}>
        REGRESAR
      </button>
    </div>
  );
}
