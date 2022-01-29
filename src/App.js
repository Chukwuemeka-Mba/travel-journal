import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./images/vacay.jpeg";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./Data";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Cards = data.map((item) => {
  return <Content key={item.id} {...item} />;
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <section className={classes.cardBody} id="places">
        {Cards}
      </section>
    </div>
  );
}

export default App;
