import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <span>
        <NavLink to="/">CAFE FLORETTE</NavLink>
      </span>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/localisation">Nous trouver</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
