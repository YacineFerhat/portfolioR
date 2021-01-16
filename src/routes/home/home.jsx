import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./home.style";
import Panel1 from "components/panel1";
import Header from "components/header";
import Skills from "components/skills";
import Project from "components/project";
import About from "components/about";
import Footer from "components/footer";
const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <Panel1 />
      <Project />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};
export default withStyles(styles)(Home);
