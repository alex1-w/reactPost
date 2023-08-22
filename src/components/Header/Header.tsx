import styles from "./Header.module.scss";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGeolocation } from "react-use";
import { MiniCart } from "../MiniCart/MiniCart";

export const Header = () => {
  // const loc = useGeolocation()
  // console.log(useGeolocation());

  return (

    <header className={styles.header}>

      <MiniCart />

      <Link to="/">
        {/* <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          PACKAGE
        </Typography> */}
        <h1>PACKAGE</h1>
      </Link>

      <div className={styles.userBlock}>
        {/* <TextField
          type="text"
          size="small"
          placeholder="Search..."
          className={styles.userBlock__inp}
        /> */}
        <button>
          <p>LOGIN</p>
        </button>
      </div>
    </header>

  );
};
