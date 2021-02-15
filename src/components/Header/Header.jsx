import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import constants from "../../constants";
import images from "../../assets/images/images";
import Banner from "./Banner";
import useFetchData from "./fetchData";

const { banner } = images;

const Header = ({ getCategories, getUniversities }) => {
  const classes = useStyles();
  const { categories, universities } = useFetchData();

  useEffect(() => {
    getCategories(categories);
    getUniversities(universities);
  }, [categories, getCategories, getUniversities, universities]);

  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <Navbar />
      </div>
      <div className={classes.banner}>
        <div className={classes.overlay}></div>
        <Banner />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  nav: {
    background: theme.palette.colors.primary,
    padding: "5px 0",
  },
  banner: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    padding: "150px 0 0",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
}));

const mapDispatchToProps = (dispatch) => ({
  getCategories: (payload) =>
    dispatch({
      type: constants.GETCATEGORIES,
      payload,
    }),

  getUniversities: (payload) =>
    dispatch({
      type: constants.GETUNIVERSITIES,
      payload,
    }),
});

export default connect(null, mapDispatchToProps)(Header);
