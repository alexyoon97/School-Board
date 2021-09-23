import React from "react";
import Nav from "../../components/Nav/Nav";
import useStyles from "./useStyles";
import DisplaySchool from "../../components/displaySchool/DisplaySchool";

import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <div className={classes.main_container}>
        <div className={classes.create_form}>
          <Typography variant="h3">Create your School here now!</Typography>

          <Button
            style={{ width: "25vh", margin: "auto" }}
            variant="contained"
            size="large"
          >
            <Link
              to="/createschool"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create
            </Link>
          </Button>
        </div>
        <DisplaySchool />
      </div>
    </>
  );
};

export default Home;
