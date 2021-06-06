import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className="btn">
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="contato" className="btn">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
