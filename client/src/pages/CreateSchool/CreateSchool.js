import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import SchoolForm from "./SchoolForm";
import useStyles from "./useStyles";
import Nav from "../../components/Nav/Nav";

import { Typography } from "@mui/material";

const CreateSchool = () => {
  const classes = useStyles();
  const history = useHistory();

  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [admission, setAdmission] = useState("");
  const [imageKey, setImageKey] = useState("");

  const postImage = async () => {
    const formData = new FormData();
    formData.append("image", image);

    let key = await fetch("school/uploadschoolimage", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(function (res) {
        return res.imageKey;
      })
      .catch((e) => ({
        error: { message: "Unable to connect to server" },
      }));
    setImageKey(key);
  };
  const createSchool = async () => {
    await fetch("school/createschool", {
      method: "POST",
      body: JSON.stringify({ name, about, location, admission, imageKey }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((e) => ({
        error: { message: "Unable to connect to server" },
      }));
  };

  const handleSubmit = async (e) => {
    await postImage();
    if (image) {
      createSchool();
      history.push("/");
    }
  };
  const props = {
    setImage,
    setName,
    setAbout,
    setLocation,
    setAdmission,
    handleSubmit,
    image,
  };

  return (
    <>
      <Nav />
      <div className={classes.main_container}>
        <Typography variant="h4" style={{ marginTop: "5vh" }}>
          Add a School
        </Typography>
        <SchoolForm {...props} />
      </div>
    </>
  );
};

export default CreateSchool;
