import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import SchoolCard from "./SchoolCard";
import useStyles from "./useStyles";

const SchoolDetail = () => {
  const classes = useStyles();
  const { school_uid } = useParams();
  const [school, setSchool] = useState();
  const [ran, setRan] = useState();

  const findSchool = async () => {
    await fetch(`/school/findschool/${school_uid}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setSchool(data))
      .catch((e) => ({
        error: { message: "Unable to connect to server" },
      }));
  };

  useEffect(() => {
    findSchool();
    return () => {
      setRan({});
    };
  }, []);

  return (
    <>
      <Nav />
      <div className={classes.main_container}>
        {school ? (
          <SchoolCard school={school} school_uid={school_uid} />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default SchoolDetail;
