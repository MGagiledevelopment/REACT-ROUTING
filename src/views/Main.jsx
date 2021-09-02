import React from "react";
import mainStyles from "../styles/main.module.css";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ListCourses from "../components/ListCourses";
import NextEvents from "../components/NextEvents";
import Course from "../components/Course";
import Event from "../components/Event";
import Notfound from "../components/Notfound";
import { cursos } from "../utils/courses";
import { events } from "../utils/events";

export default function Seccion2() {
  return (
    <main className={mainStyles.main}>
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={ListCourses} path="/listaCursos"></Route>
        <Route component={NextEvents} path="/proximoseventos"></Route>
        {cursos.map((curso) => {
          return (
            <Route
              key={curso.id}
              exact
              render={() => {
                return <Course name={`${curso.name}`} />;
              }}
              path={`/curso/:${curso.name}`}
            ></Route>
          );
        })}

        {events.map((evento) => {
          console.log(evento.name);
          return (
            <Route
              key={evento.id}
              exact
              render={() => {
                return <Event name={`${evento.name}`} />;
              }}
              path={`/evento/:${evento.name}`}
            ></Route>
          );
        })}
        {/* <Route component={Event} path="/evento/:id"></Route> */}
        <Route component={Notfound} path="*"></Route>
      </Switch>
    </main>
  );
}
