import React from "react";
import headerStyles from "../styles/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={headerStyles.header}>
      <ul className={headerStyles.options}>
        <li>
          <Link className={headerStyles.li} to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={headerStyles.li} to="/cursos">
            {" "}
            Cursos{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className={headerStyles.li} to="/proximoseventos">
            {" "}
            Próximos Eventos
          </Link>
        </li>
      </ul>
    </div>
  );
}
