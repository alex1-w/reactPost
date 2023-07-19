import { arrowIcon } from "../../data/icontsSvg";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

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
