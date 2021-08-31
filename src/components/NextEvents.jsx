import React from "react";
import mainStyles from "../styles/main.module.css";
import { Link } from "react-router-dom";
import { events } from "../utils/events.js";

export default function NextEvents() {
  return (
    <ul key="1" className={mainStyles.listEvents}>
      {events.map((event) => {
        return (
          <Link key={event.id} to={`/evento/${event.name}`} className={mainStyles.events}>
            <li key={event.id}>{event.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}
