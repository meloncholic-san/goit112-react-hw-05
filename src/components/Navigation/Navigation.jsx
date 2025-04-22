import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function Navigation() {
  return (
    <nav className={css.nav}>
    <ul className={css.list}>
      <li>
        <NavLink to="/" className={getLinkStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={getLinkStyles}>
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
  );
}
