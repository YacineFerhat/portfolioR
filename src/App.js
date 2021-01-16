import React from "react";
import GlobalFonts from "fonts/font";

import Home from "routes/home";
const App = () => {
  return (
    <React.Fragment>
      <GlobalFonts />
      <Home />
    </React.Fragment>
  );
};

export default App;
