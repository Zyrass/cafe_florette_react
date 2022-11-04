// dependancies
import { useState } from "react";
import { NavLink } from "react-router-dom";

// scss
import styles from "./Header.module.scss";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClickMenu() {
    setShowMenu(!showMenu);
  }

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
      <i
        onClick={handleClickMenu}
        className={`mr-20 fa-solid fa-${showMenu ? "xmark" : "bars"}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className={styles.calc}></div>
          <div className={styles.headerXS}>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setShowMenu(false)}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/localisation" onClick={() => setShowMenu(false)}>
                  Nous trouver
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setShowMenu(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
