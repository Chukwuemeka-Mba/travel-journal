import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <h1>My Island</h1>
          <IconButton>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
