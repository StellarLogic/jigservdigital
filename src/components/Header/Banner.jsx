import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Search from "../Search/Search";

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.container}>
        <h2 className={classes.sub}>Profile-based</h2>
        <h1 className={classes.title}>Program Recommendations</h1>
        <Search />
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    zIndex: "2",
    minHeight: "500px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.common.white,
    background: theme.palette.colors.secondary,
    width: "fit-content",
    padding: "5px 20px",
    margin: "0 0 50px 0",
    fontSize: "42px",
  },
  sub: {
    color: theme.palette.common.white,
    width: "fit-content",
    margin: "0",
    fontSize: "32px",
    fontWeight: "normal",
  },
}));

export default Banner;
