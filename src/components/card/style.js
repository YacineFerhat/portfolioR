export default {
  holder: {
    position: "relative",
    height: 300,

    borderRadius: "15px",
    color: "white",
    willChange: "transform, opacity",
  },
  titleHolder: {
    height: 300,
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
  },
  title: {
    fontSize: "55px",
    letterSpacing: 2.5,
    fontFamily: "sweet",
  },
  actionHolder: {
    borderRadius: "15px",
    height: 300,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
    position: "absolute",
  },

  subTitle: {
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: 2,
    lineHeight: 2,
  },

  btnHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderRadius: "15px",
    border: "1px solid #7a8193",
    width: 125,
    textDecoration: "none",
    color: "white",
    marginTop: 20,
    padding: "15px 5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
};
