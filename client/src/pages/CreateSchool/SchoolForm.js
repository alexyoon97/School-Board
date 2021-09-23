import React, { useState } from "react";
import useStyles from "./useStyles";

import { Button, TextField, Typography, Alert, Stack } from "@mui/material";
import { Box } from "@mui/system";

const SchoolForm = (props) => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);

  const {
    setImage,
    setName,
    setLocation,
    setAbout,
    setAdmission,
    handleSubmit,
  } = props;

  const checkImgType = (e) => {
    const rawFile = e.target.files[0];
    console.log(rawFile)
    if (
      rawFile.type !== "image/jpeg" &&
      rawFile.type !== "image/jpg" &&
      rawFile.type !== "image/gif" &&
      rawFile.type !== "image/png"
    ) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      e.target.value = null
    }
    else{
      setImage(rawFile);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
      <div className={classes.image_field}>
        <Typography variant="subtitle1">Image (gif, jpeg, jpg, png)</Typography>
        <Button variant="contained" component="label">
          <input
            type="file"
            accept="image/gif,image/jpeg,image/jpg,image/png,"
            onChange={(e) => {checkImgType(e)}}
          />
        </Button>
      </div>

      <TextField
        id="name"
        label="Name"
        type="search"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="about"
        label="About"
        type="search"
        multiline
        rows={4}
        margin="normal"
        onChange={(e) => setAbout(e.target.value)}
      />
      <TextField
        id="location"
        label="Location"
        type="search"
        multiline
        rows={4}
        margin="normal"
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        id="admission"
        label="Admission"
        type="search"
        multiline
        rows={4}
        margin="normal"
        onChange={(e) => setAdmission(e.target.value)}
      />
      <Box textAlign="center">
        <Button type="submit" size="large" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      {alert ? (
        <Stack
          sx={{
            direction: "column",
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          spacing={2}
        >
          <Alert severity="warning">
            Please check the type of file (png, jpeg, jpg, gif)
          </Alert>
          ;
        </Stack>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default SchoolForm;
