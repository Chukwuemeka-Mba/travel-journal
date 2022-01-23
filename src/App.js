import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./images/vacay.jpeg";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
