import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../assets/logo.png";

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography>
            <span className={classes.logo}>EZ</span>
            <span className={classes.logoHover}>Commerce</span>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
