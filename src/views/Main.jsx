import React from "react";
import mainStyles from "../styles/main.module.css";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Courses from "../components/Courses";
import NextEvents from "../components/NextEvents";

export default function Seccion2() {
  return (
    <div className={mainStyles.main}>
      <Route component={Home} exact path="/"></Route>
      <Route component={Courses} path="/cursos"></Route>
      <Route component={NextEvents} path="/proximoseventos"></Route>
    </div>
  );
}
