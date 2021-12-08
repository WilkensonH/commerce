import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";

// import Typography from "@mui/material/Typography";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <main>
      <div className="divider">
        <img src="asset/ezcom.png" alt="" />
        <div className="prof-divider">
          <div className="border">
            <Grid className="display-grid">
              <Card>
                <CardMedia
                  component="img"
                  alt="profile picture"
                  height="500"
                  image="asset/wilkpic.png"
                />
                <CardContent className="content-card">
                  <Typography variant="body2" color="text.secondary">
                    Full Stack Web and Mobile Developer, Coding Bootcamp
                    Graduate and <strong>Enrolled</strong> undergraduate
                    Computer Science degree. Love coding would like to have the
                    opportunity to sharpened my skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </div>
      </div>
      <Card>
        <CardContent className="content-text">
          <Typography variant="body2" color="text.secondary">
            Full Stack Web and Mobile Developer, Coding Bootcamp Graduate and{" "}
            <strong>Enrolled</strong> undergraduate Computer Science degree.
            Love coding would like to have the opportunity to sharpened my
            skills.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="content-text">
          <Typography variant="body2" color="text.secondary">
            Full Stack Web and Mobile Developer, Coding Bootcamp Graduate and{" "}
            <strong>Enrolled</strong> undergraduate Computer Science degree.
            Love coding would like to have the opportunity to sharpened my
            skills.
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
};
//#015871
export default About;
