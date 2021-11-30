import React from "react";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.toolbar} />
      <div className={classes.mainBg}>
        <div className="img-mobile-view ">
          <img src="asset/fitness.jpeg" alt="tread mill" />
        </div>
        <div className={classes.mainText}>
          <p className={classes.mainText}>
            {" "}
            <strong>
              How many months does it take to transform your body?
            </strong>{" "}
            This is a question that many people who are considering working out
            or have recently started exercising often wonder about. Many would
            like to see results within a few short weeks. However, is this
            physically possible? How long does it take to get in shape?
          </p>
          <p className={classes.mainText}>
            <strong>Determine How Much Weight You Should Lose</strong>The best
            way to do this is by calculating your BMI. Your Body Mass Index –
            aka BMI – is a person’s weight in kilograms divided by the square of
            their height in meters (2). You can do this by using a reputable BMI
            calculator or by going to a doctor who may help you get a more
            accurate estimate. A healthy BMI for a healthy weight ranges from
            18.5 to 24.9 (11). Anymore means that you are overweight and any
            less will mean that you are underweight.
          </p>
          <p className={classes.mainText}>
            <strong>Take A Critical Look At Your Diet</strong> The type of foods
            and drinks that you consume are most probably the main hurdle in
            your weight loss and fitness goals. You are unlikely to achieve any
            of these if you are not eating the right things and in the right
            way. Here are some things that you should avoid to achieve your ‘how
            to get in shape’ goals.
          </p>
        </div>
      </div>

      <div className={classes.mainBg}>
        <div className={classes.mainText}>
          <p className={classes.mainText}>
            {" "}
            <strong>
              How many months does it take to transform your body?
            </strong>{" "}
            This is a question that many people who are considering working out
            or have recently started exercising often wonder about. Many would
            like to see results within a few short weeks. However, is this
            physically possible? How long does it take to get in shape?
          </p>
          <p className={classes.mainText}>
            <strong>Determine How Much Weight You Should Lose</strong>The best
            way to do this is by calculating your BMI. Your Body Mass Index –
            aka BMI – is a person’s weight in kilograms divided by the square of
            their height in meters (2). You can do this by using a reputable BMI
            calculator or by going to a doctor who may help you get a more
            accurate estimate. A healthy BMI for a healthy weight ranges from
            18.5 to 24.9 (11). Anymore means that you are overweight and any
            less will mean that you are underweight.
          </p>
          <p className={classes.mainText}>
            <strong>Take A Critical Look At Your Diet</strong> The type of foods
            and drinks that you consume are most probably the main hurdle in
            your weight loss and fitness goals. You are unlikely to achieve any
            of these if you are not eating the right things and in the right
            way. Here are some things that you should avoid to achieve your ‘how
            to get in shape’ goals.
          </p>
        </div>
        <div>
          <img src="asset/fitnesss.jpeg" alt="tread mill" />
        </div>
      </div>
    </main>
  );
};
//#015871
export default About;
