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

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography>
            <img
              src={logo}
              alt="EzCommerce"
              height="35px"
              className={classes.image}
            />
            EZCommerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
