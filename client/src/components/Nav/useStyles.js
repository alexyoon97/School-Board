import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  nav_container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 6vh",
    alignItems: "center",
  },
  nav_sub_container: {
    "& span": {
      padding: "1vh",
      "&:hover": {
        color: "black",
      },
    },
    fontSize: "2vh",
    color: "#777777",
    cursor: "pointer",
  },
  logo: {
    width: "31vh",
    height: "100%",
  },
  font_blue: {
    color: "#9dc4e2",
  },
});

export default useStyles;
