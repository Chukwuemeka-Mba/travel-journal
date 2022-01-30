import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  icons: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: "white",
    marginBottom: "0px",
  },
  imgClass: {
    height: "200px",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  locationIcon: {
    marginTop: "15px",
  },
}));
function ImageCard(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Card className={classes.cardBody}>
          <CardMedia
            component="img"
            height="140"
            image={props.imageUrl}
            alt="green iguana"
            className={classes.imgClass}
          />
          <CardContent>
            <span className={classes.icons}>
              <LocationOnOutlinedIcon className={classes.locationIcon} />
              <h3>{props.location}</h3>
              <a href={props.googleMapsUrl} className={classes.icons}>
                <h3> View on Google Maps </h3>
              </a>
            </span>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.title}
              component="div"
            >
              {props.title}
            </Typography>
            <span className={classes.icons}>
              <h3>{props.startDate} -</h3>
              <h3>{props.endDate}</h3>
            </span>
            <Typography variant="body2" className={classes.desc}>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
}

export default ImageCard;
