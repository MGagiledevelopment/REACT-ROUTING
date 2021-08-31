import React from "react";
import mainStyles from "../styles/main.module.css";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ListCourses from "../components/ListCourses";
import NextEvents from "../components/NextEvents";
import Course from "../components/Course";
import Event from "../components/Event"
import Notfound from "../components/Notfound";


export default function Seccion2() {
  
  return (
    <main className={mainStyles.main}>
      <Switch>
      <Route component={Home} exact path="/"></Route>
      <Route component={ListCourses} path="/listaCursos"></Route>
      <Route component={NextEvents} path="/proximoseventos"></Route>
      <Route exact component={Course} path="/curso/:id"></Route>
      {/* <Route render={()=>{return <Course/>}} path="/curso/:id"></Route> */}
      <Route component={Event} path="/evento/:id"></Route>
      <Route component={Notfound} path="*"></Route>
      </Switch>
    </main>
  );
}
