import React from 'react'
import useStyles from "./styles";
 
const Footer = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div>&copy;Wilkenson</div>
      </div>
    );
}

export default Footer
