import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./style";
const Card = ({ classes, data: { title, sub, color } }) => {
  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subHolder}>
        {sub.map((skill, i) => (
          <div className={classes.subTitle} key={i}>
            {skill}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Card);
