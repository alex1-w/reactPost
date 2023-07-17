import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import cn from 'classnames'
const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    fill="white"
    viewBox="0 0 320 512"
  >
    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
  </svg>
);
const links = [
  {
    name: "Шаг 1",
    link: "/",
  },
  {
    name: "Шаг 2",
    link: "/step-two",
  },
  {
    name: "Шаг 3",
    link: "/step-three",
  },
  {
    name: "Шаг 4",
    link: "/step-four",
  },
  {
    name: "Шаг 5",
    link: "/step-five",
  },
];

export const Navigation = () => {
  return (
    <nav className={styles.main}>
      <ul>
        {links.map((link) => (
          <li key={link.link}>
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? styles.linkActive : "")}
            >
              <p> {link.name}</p>
              {arrowIcon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
