import React from "react";
import useStyles from "./styles";

export const AboutContent = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.headerStyle}>About</h2>
      Full Stack Web and Mobile Developer, Coding Bootcamp Graduate and{" "}
      <strong>Enrolled</strong> undergraduate Computer Science degree. Love
      coding would like to have the opportunity to sharpened my skills.
    </div>
  );
};

export const GoalContent = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.headerStyle}>Goal</h2>
      My goal is to become a great sofware engineer get challenge and better and
      both frontend developer - HTML5, CSS3, Bootstrap, javaScript React AND
      backend developer in nodeJs and Java
    </div>
  );
};

export const SkillContent = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.headerStyle}>Skills </h2>
      <span className={classes.subHeaderStyle}>Coding Bootcamp:</span>
      <br />
      <div>
        HTML5, CSS3, Bootstrap, javaScript, React, React-native, nodeJs,
      </div>
      <span className={classes.subHeaderStyle}>HCC Commmunity College:</span>
      <br />
      <div>Java, mySql, web design & development</div>
    </div>
  );
};
