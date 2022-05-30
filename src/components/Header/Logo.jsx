import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '30px',
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <NavLink to="/" className={classes.nav}>
      Logo
    </NavLink>
  );
};

export default Logo;
