import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { Toolbar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    textAlign: "center",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#f44336",
  },
  title: {
    color: "#fff",
    font: "bold",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Travel <span className={classes.colorText}>Journal</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <h1 className={classes.title}>
          Welcome to My
          <span className={classes.colorText}>Travel Journal</span>
        </h1>
      </div>
    </div>
  );
}
