import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./header.style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>Yacine Ferhat</div>
      <div>
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/yacineFerhat"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon className={classes.icon} />{" "}
        </a>
        <a
          className={classes.link}
          rel="noreferrer"
          target="_blank"
          href="https://github.com/YacineFerhat"
        >
          <GitHubIcon className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
