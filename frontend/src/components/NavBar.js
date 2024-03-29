import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import './components.css';

import Search from './Search'

import { useStateValue } from '../state'
import { Link, useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontSize: '40px',
    },
    main: {
        textDecoration: 'none',
        fontFamily: "Lobster", 
        color: 'black',
        fontSize: "50px",
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    }, 
  }));

const NavBar = () => {
      
    const [{ user }, dispatch] = useStateValue();
    const classes = useStyles();
    const location = useLocation();
    const renderUserOrLogin = () => {
        if (localStorage.getItem("key")) {
            return (
            <React.Fragment>
                <Button>
                    <Link className={classes.link} to="/profile">
                        {localStorage.getItem("username")}
                    </Link>
                </Button>
            </React.Fragment>
            );
        } else {
            return (
                <Button>
                    <Link className={classes.link} to="/login">Login</Link>
                </Button>
            );
        }
    }

    const maybeRenderSearch = () => {
        if (location.pathname !== "/search") {
           return (<Search className={classes.search}/>)
        } else {}
    }

    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="title" color="inherit">
                <Link className={classes.main} to="/search">
                        Blueberry
                    </Link>
                </Typography>
                {maybeRenderSearch()}
                {renderUserOrLogin()}
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;