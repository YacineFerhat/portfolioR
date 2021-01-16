import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./style";
import Grid from "@material-ui/core/Grid";
import data from "data/project";
import Card from "components/card";
const Project = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>My projects</div>
      <div className={classes.subTitle}>Come and check my work !</div>
      <Grid container justify="center" className={classes.grid} spacing={3}>
        {data.map((card, i) => (
          <Grid key={i} item xl={3} md={4} sm={6} xs={12}>
            <Card data={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Project);
