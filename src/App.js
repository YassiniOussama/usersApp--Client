import React from 'react';
import { Container, Grow, Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import Main from './main/main';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import imgHouse from '../src/images/house.jpg'
import { Link } from 'react-router-dom';
const App = () => {

    const classes = useStyles();
    return (
        <>
            <div className={classes.navBar} >
                <AppBar position="static">
                    <Toolbar>
                        <img className={classes.image} src={imgHouse} alt="users" />
                        <Link className={classes.title} variant="h2" >
                            Users App
                        </Link>
                        <Button color="inherit">Login</Button>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <Container maxWidth="lg">
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Main />
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    );
}

export default App;