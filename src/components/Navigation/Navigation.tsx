import styles from "./Navigation.module.scss";
import { useData } from "../../providers/DataContext";
import { NavLink } from "react-router-dom";
import cn from 'classnames'
import { useAccessProvider } from "../../providers/AccessProvider";
import { arrowIcon } from "../../data/icontsSvg";

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

  const { access } = useAccessProvider()

  return (
    <nav className={styles.main}>

      <ul>
        {links.map((link, index) => (

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



{/* <ul>
        <li>
          <NavLink
            to={links[0].link}
            className={styles.item}
          >
            <p> {links[0].name}</p>
            {arrowIcon}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={links[1].link}
            className={cn(styles.item,)}
          >
            <p> {links[1].name}</p>
            {arrowIcon}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={links[2].link}
            className={styles.item}>
            <p>{links[2].name}</p>
            {arrowIcon}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={links[3].link}
            className={styles.item}>
            <p> {links[3].name}</p>
            {arrowIcon}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={links[4].link}
            className={styles.item}          >
            <p> {links[4].name}</p>
            {arrowIcon}
          </NavLink>
        </li>

      </ul>
    </nav>
 */}