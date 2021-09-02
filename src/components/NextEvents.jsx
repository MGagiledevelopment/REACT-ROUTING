import React from "react";
import mainStyles from "../styles/main.module.css";
import { Link } from "react-router-dom";
import { events } from "../utils/events.js";

export default function NextEvents() {
  return (
    <ul className={mainStyles.listEvents}>
      {events.map((evento) => {
       
        return (
          <Link key={evento.id} to={`evento/${evento.name}`} className={mainStyles.events}>
            <li key={evento.id}>{evento.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}
