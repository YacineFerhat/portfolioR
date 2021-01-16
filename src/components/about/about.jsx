import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./style";
import { Grid } from "@material-ui/core";
import avatar from "assets/avatar2.svg";
import { useSpring, animated } from "react-spring";
const About = ({ classes }) => {
  const interp = (i) => (r) =>
    `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });

  return (
    <div className={classes.root}>
      <div className={classes.title}> About me</div>
      <div className={classes.subTitle}>Wanna know more about me ?</div>
      <Grid container justify="center" className={classes.grid} spacing={3}>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <img className={classes.avatar} src={avatar} alt="avatar" />
        </Grid>

        <Grid
          className={classes.description}
          item
          xl={6}
          md={6}
          sm={12}
          xs={12}
        >
          I'm Yacine Ferhat, a freelancer in the web dev, I mainly use the MERN
          stack to build my websites, I've been doing so since 2019.
          <br />
          I have a master's degree in computer science that helps me solve
          problems more easily.
          <br />
          Why do I code? I do love to solve complex problems in real life, so I
          made it my job as well.
          <div className={classes.quote}>
            It's not a job if u enjoy doing it!{" "}
          </div>
          and that's my case.
        </Grid>
      </Grid>
      <div className={classes.btnHolder}>
        <animated.div
          style={{ transform: radians.interpolate(interp(1)) }}
          className={classes.button}
        >
          <a className={classes.link} href="mailto:yacine.frhat@gmail.com">
            {" "}
            Contact me !
          </a>
        </animated.div>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
