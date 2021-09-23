import React, { useState } from "react";
import useStyles from "./useStyles";

import { Button, Typography, Input, Alert, Stack } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const SchoolCard = (props) => {
  const classes = useStyles();
  const { school, school_uid } = props;

  const [image, setImage] = useState([]);
  const [name, setName] = useState(school[0].name);
  const [about, setAbout] = useState(school[0].about);
  const [location, setLocation] = useState(school[0].location);
  const [admission, setAdmission] = useState(school[0].admission);

  const [imageKey, setImageKey] = useState("");
  const [schoolImageURL, setSchoolImageURL] = useState(
    `/school/getSchoolImage/${school[0].image_key}`
  );

  const [edit, setEdit] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [alert, setAlert] = useState(false);

  const updateInfo = async (e) => {
    await fetch("/school/updateSchool", {
      method: "PUT",
      body: JSON.stringify({
        name,
        about,
        location,
        admission,
        school_uid,
        imageKey,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json(), setEdit(true), setHidden(false))
      .catch((e) => ({
        error: { message: "Unable to connect to server" },
      }));
  };
  const editImg = (e) => {
    const rawFile = e.target.files[0];
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
      return;
    }
    setSchoolImageURL(URL.createObjectURL(rawFile));
    setImage(rawFile);

    const formData = new FormData();
    formData.append("image", image);

    fetch("/school/uploadschoolimage", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImageKey(data.imageKey))
      .catch((e) => ({
        error: { message: "Unable to connect to server" },
      }));
    setHidden(true);
  };
  const cancelEdit = () => {
    setHidden(false);
    setEdit(true);
  };
  return (
    <>
      <div className={classes.edit_container}>
        <div className={classes.school_info}>
          <div className={classes.school_img}>
            <img src={schoolImageURL} alt="school"></img>
            {!edit ? (
              <label htmlFor="contained-button-file">
                <input
                  style={{ display: "none" }}
                  id="contained-button-file"
                  accept="image/gif,image/jpeg,image/jpg,image/png,"
                  type="file"
                  onChange={(e) => editImg(e)}
                />
                <Button
                  variant="contained"
                  component="span"
                  style={{ width: "100%" }}
                >
                  Upload
                </Button>
              </label>
            ) : (
              <div></div>
            )}
          </div>

          <div className={classes.input_container}>
            <div className={classes.input_field}>
              <Typography variant="body1">Name: </Typography>
              <Input
                multiline
                inputProps={{ style: { fontSize: 20, marginTop: "3vh" } }}
                size="medium"
                disabled={edit}
                defaultValue={school[0].name}
                onChange={(e) => {
                  setHidden(true);
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_field}>
              <Typography variant="body1">Location: </Typography>
              <Input
                multiline
                inputProps={{ style: { fontSize: 20, marginTop: "3vh" } }}
                size="medium"
                disabled={edit}
                defaultValue={school[0].location}
                onChange={(e) => {
                  setHidden(true);
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_field}>
              <Typography variant="body1">About: </Typography>
              <Input
                multiline
                inputProps={{ style: { fontSize: 20, marginTop: "3vh" } }}
                size="medium"
                disabled={edit}
                defaultValue={school[0].about}
                onChange={(e) => {
                  setHidden(true);
                  setAbout(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_field}>
              <Typography variant="body1">Admission: </Typography>
              <Input
                multiline
                inputProps={{ style: { fontSize: 20, marginTop: "3vh" } }}
                size="medium"
                disabled={edit}
                defaultValue={school[0].admission}
                onChange={(e) => {
                  setHidden(true);
                  setAdmission(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {hidden ? (
          <>
            <Button
              onClick={() => updateInfo()}
              style={{ margin: "5vh auto", width: "10vh" }}
              variant="contained"
            >
              Submit
            </Button>
          </>
        ) : (
          <div>
            {edit ? (
              <Button style={{ margin: "5vh" }} onClick={() => setEdit(!edit)}>
                Edit
              </Button>
            ) : (
              <Button style={{ margin: "5vh" }}>
                <CancelIcon onClick={cancelEdit} />
              </Button>
            )}
          </div>
        )}
      </div>
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
    </>
  );
};

export default SchoolCard;
