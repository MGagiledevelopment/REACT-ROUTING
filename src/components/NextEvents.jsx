import React from "react";
import mainStyles from "../styles/main.module.css";
import { events } from "../utils/events.js";

export default function NextEvents() {
  return (
    <div className={mainStyles.listEvents}>
      {events.map((event) => {
        console.log(event);
        return (
          <ul className={mainStyles.events} key={event.id}>
            <li>{event.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
