import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";

import Footer from "../footer/Footer";
import useStyles from "./styles";

const Home = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.toolbar} />
      <div className="svgBackg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#015871 "
            fill-opacity="1"
            d="M0,224L1440,320L1440,0L0,0Z"
          ></path>
        </svg>
       
          <div className="main-product">
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.root}>aa</Card>
              </Grid>
            </Grid>
          </div>     
        <div className={classes.toolbar} />
      </div>
      {/* <div className={classes.toolbar} /> */}
      <Footer />
    </main>
  );
};
//#015871
export default Home;
