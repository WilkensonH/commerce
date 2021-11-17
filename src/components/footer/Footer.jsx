import React from "react";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className='footer'>
      <div className="ocean foot">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className={classes.root}>&copy;Wilkenson</div>
      </div>
    </div>
  );
};

export default Footer;
