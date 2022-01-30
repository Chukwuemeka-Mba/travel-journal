import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import data from "./Data";
import useWindowPosition from "./Scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

function Content() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  const Cards = data.map((item) => {
    return <ImageCard key={item.id} {...item} />;
  });
  return (
    <div className={classes.root}>
      <section className={classes.cardBody} id="places" checked={checked}>
        {Cards}
      </section>
    </div>
  );
}

export default Content;
