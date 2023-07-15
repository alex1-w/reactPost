import styles from './Header.module.scss'
import { IconButton, TextField, Toolbar, Typography, makeStyles, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export const Header = () => {
    

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

            <Link to='/'>
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    PACKAGE
                </Typography>
            </Link>

            <div className={styles.userBlock}>
                <TextField type="text" size='small' placeholder='Search...' className={styles.userBlock__inp} />
                <button><p>LOGIN</p></button>
            </div>
        </header>
    )
}