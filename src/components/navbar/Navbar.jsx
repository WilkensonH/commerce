import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: "#710147C4" }}>
          <Typography component={Link} to="/about">
            <div className={classes.logoContainer}>
              <div className={classes.logoText}>
                <span className={classes.logo}>EZComm</span>
              </div>
            </div>
          </Typography>
          <div className={classes.grow} />
          <div>
            <Typography
              className={classes.navLinks}
              component={Link}
              to="/about"
            >
              <span className={classes.navLinks}>About</span>
            </Typography>
            <Typography component={Link} to="/">
              <span className={classes.navLinks}>Shopping</span>
            </Typography>
          </div>
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                arial-label="show cart items"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
