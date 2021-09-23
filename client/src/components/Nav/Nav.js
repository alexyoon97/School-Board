import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";

import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Dreamschool from "../../images/dreamschool_logo.png";

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav_container}>
      <Link to="/">
        <img
          className={classes.logo}
          src={Dreamschool}
          alt="dreamschool logo"
        />
      </Link>
      <span>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search by address" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </span>
      <div className={classes.nav_sub_container}>
        <span>About</span>
        <span>Search</span>
        <span className={classes.font_blue}>Sign In</span>
        <span className={classes.font_blue}>Family Registration</span>
      </div>
    </div>
  );
};

export default Nav;
