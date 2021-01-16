import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./style";
import Grid from "@material-ui/core/Grid";
import data from "data/skills";
import Card from "components/skillCard";
const Skills = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>My skills</div>
      <div className={classes.subTitle}>
        During the past years, I had the chance to learn these tecks
      </div>
      <Grid container justify="center" className={classes.grid} spacing={3}>
        {data.map((card, i) => (
          <Grid key={i} item xl={3} md={4} sm={6} xs={12}>
            <Card key={i} data={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Skills);
