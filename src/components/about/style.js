export default {
  root: {
    backgroundColor: "#dbdae6",
    padding: "5% 10%",
    textAlign: "center",
  },

  title: {
    fontSize: "35px",
    fontWeight: 700,
    letterSpacing: 2.5,
  },

  subTitle: {
    fontSize: "22px",
    fontWeight: 500,
    marginTop: 30,
    letterSpacing: 2.5,
  },

  avatar: {
    maxHeight: 350,
  },
  "@media (max-width: 700px)": {
    avatar: {
      maxHeight: 250,
    },
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    letterSpacing: 2.5,
    lineHeight: 2,
  },
  quote: {
    fontWeight: 900,
  },
  btnHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: 200,
    backgroundColor: "#282b34",
    padding: "10px 10px",
    borderRadius: "15px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
};
