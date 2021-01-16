import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./style";
const Footer = ({ classes }) => {
  return <div className={classes.root}>2021 &#169; ALL RIGHTS RESERVED</div>;
};

export default withStyles(styles)(Footer);
