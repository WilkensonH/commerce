import React from "react";
import {} from "@material-ui/core";

import { AboutContent } from "../index";

const About = () => {
  return (
    <main>
      <div className="divider">
        <img src="asset/ezcom.png" alt="" />
        <div className="prof-divider">
          <div className="border">
            <AboutContent />
          </div>
        </div>
      </div>
    </main>
  );
};
//#015871
export default About;
