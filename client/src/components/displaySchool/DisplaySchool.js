import React, { useEffect, useState } from "react";
import SchoolCard from "./SchoolCard";

const DisplaySchool = () => {
  const [schools, setSchools] = useState({});

  const getSchools = async (e) => {
    await fetch("school/getSchool", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((e) => ({
        error: { message: "Unable to connect to server" },
      }));
  };
  useEffect(() => {
    getSchools();
  }, [schools]);

  return schools ? <SchoolCard schools={schools} /> : <div></div>;
};

export default DisplaySchool;
