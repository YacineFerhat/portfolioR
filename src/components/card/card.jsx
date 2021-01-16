import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import styles from "./style";

const Card = ({
  classes,
  data: { title, Description, link, image, color },
}) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateX(${flipped ? 180 : 0}deg) rotateY(${
      flipped ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className={classes.holder}
    >
      <a.div
        className={classes.titleHolder}
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          backgroundColor: color,
        }}
      >
        <div className={classes.title}>{title}</div>
      </a.div>
      <a.div
        className={classes.actionHolder}
        style={{
          opacity,
          backgroundColor: color,
          transform: transform.interpolate(
            (t) => `${t} rotateX(180deg)  ${t} rotateY(180deg) rotate(180deg)`
          ),
        }}
      >
        <div className={classes.subTitle}>{Description}</div>
        <div className={classes.btnHolder}>
          <a
            rel="noreferrer"
            href={link}
            target="_blank"
            className={classes.btn}
          >
            Visit Website
          </a>
        </div>
      </a.div>
    </div>
  );
};
export default withStyles(styles)(Card);
