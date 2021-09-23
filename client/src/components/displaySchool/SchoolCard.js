import React from "react";
import useStyles from './useStyles'

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SchoolCard = (props) => {
  const { schools } = props;
  const classes = useStyles();
  return (
    <div className={classes.card_container}>
      {Object.keys(schools).map((school, i) => {
        return (
          <div className={classes.card}>
            <Card sx={{ width: 200 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {schools[i].location}
                </Typography>
                <Typography variant="h5" component="div">
                  {schools[i].name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link
                    style={{ color: "#2563a2", textDecoration: "none" }}
                    to={`/schooldetail/${schools[i].school_uid}`}
                    params={{ school_uid: schools[i].school_uid }}
                  >
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default SchoolCard;
