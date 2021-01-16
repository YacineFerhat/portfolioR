import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./panel.style";
import avatar from "assets/avatar.svg";

const Panel = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>Dev Software / Full-stack</div>
      <div className={classes.subTitle}>
        I design and code websites, and I love what I do.
      </div>
      <div className={classes.logo}>
        <img src={avatar} className={classes.avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default withStyles(styles)(Panel);
