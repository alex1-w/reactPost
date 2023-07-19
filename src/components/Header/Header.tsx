import styles from "./Header.module.scss";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGeolocation } from "react-use";

export const Header = () => {
  // const loc = useGeolocation()
  console.log(useGeolocation());

  return (
    <header className={styles.header}>
      {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton> */}

      <Link to="/">
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          PACKAGE
        </Typography>
      </Link>

      <div className={styles.userBlock}>
        <TextField
          type="text"
          size="small"
          placeholder="Search..."
          className={styles.userBlock__inp}
        />
        <button>
          <p>LOGIN</p>
        </button>
      </div>
    </header>
  );
};
