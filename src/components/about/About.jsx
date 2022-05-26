import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import { AboutContent } from "../index";
import { GoalContent } from "../index";
import { SkillContent } from "../index";

const About = () => {
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
                  image="asset/com.jpg"
                />
                <CardContent className="content-card">
                  <Typography variant="body2" color="text.secondary">
                    <AboutContent />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </div>
        <div className="profI-divider">
          <div className="border">
            <Grid className="display-grid">
              <Card>
                <CardMedia
                  component="img"
                  alt="profile picture"
                  height="500"
                  image="asset/web.jpg"
                />
                <CardContent className="content-card">
                  <Typography variant="body2" color="text.secondary">
                    <GoalContent />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </div>
        <div className="profII-divider">
          <div className="border">
            <Grid className="display-grid">
              <Card>
                <CardMedia
                  component="img"
                  alt="profile picture"
                  height="500"
                  image="asset/multicom.jpg"
                />
                <CardContent className="content-card">
                  <Typography variant="body2" color="text.secondary">
                    <SkillContent />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </div>
      </div>
    </main>
  );
};
//#015871
export default About;
