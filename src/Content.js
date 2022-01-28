import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
  },
  cardBody: {
    margin: "10px",
    fontFamily: "Nunito",
    background: "rgba(0, 0, 1, 0.2)",
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "white",
  },
  imgClass: {
    height: "200px",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
}));

function Content(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <Card className={classes.cardBody}>
          <CardMedia
            component="img"
            height="140"
            image={props.imageUrl}
            alt="green iguana"
            className={classes.imgClass}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.title}
              component="div"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" className={classes.desc}>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
}

export default Content;
