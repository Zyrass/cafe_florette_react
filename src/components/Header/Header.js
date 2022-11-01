import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <span>
          <NavLink to="/">CAFE FLORETTE</NavLink>
        </span>
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
