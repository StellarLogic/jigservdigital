import React, { useState } from "react";
// import { createPortal } from "react-dom/cjs/react-dom.development";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { Button, Grid, makeStyles, Divider } from "@material-ui/core/";
import ProgramCard from "../ProgramCard/ProgramCard";
import constants from "../../constants";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import RemoveIcon from "@material-ui/icons/Remove";

const Compare = ({
  compare: { data: compare, minimized },
  removeAll,
  setminimize,
}) => {
  const classes = useStyles();
  let compareBlock = null;

  compareBlock = (
    <Grid className={classes.compare}>
      {!minimized && (
        <>
          <RemoveIcon
            className={classes.minimize}
            onClick={() => setminimize(true)}
          />
          <Grid container spacing={2} className={classes.parentContainer}>
            {compare.map(({ id, attributes }) => (
              <ProgramCard key={id} {...attributes} isCompact />
            ))}
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Button
                    className={`${classes.button} left`}
                    onClick={() => removeAll()}
                  >
                    RemoveAll
                  </Button>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item xs={6}>
                  <Button className={`${classes.button} right`}>Compare</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
      <CompareArrowsIcon
        className={classes.maximize}
        onClick={() => setminimize(false)}
      />
    </Grid>
  );

  if (!compare.length) {
    compareBlock = null;
  }
  return createPortal(compareBlock, document.getElementById("compare"));
};

const useStyles = makeStyles((theme) => ({
  compare: {
    position: "fixed",
    bottom: "75px",
    right: "20px",
    zIndex: "1000",
    width: "fit-content",
    maxWidth: "600px",
  },
  parentContainer: {
    background: theme.palette.common.white,
    padding: "30px 0 0 0 ",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  button: {
    width: "100%",
    background: theme.palette.colors.primary,
    color: theme.palette.common.white,
    borderRadius: "0",
    border: `2px solid ${theme.palette.colors.primary}`,

    "&:hover": {
      color: theme.palette.colors.primary,
    },
    "&.left": {
      width: "calc(100% - 5px )",
    },
    "&.right": {
      width: "calc(100% - 5px)",
      marginLeft: "5px",
    },
  },
  minimize: {
    position: "absolute",
    right: 0,
    top: 0,
    cursor: "pointer",
  },
  maximize: {
    position: "absolute",
    right: 0,
    bottom: -60,
    cursor: "pointer",
    background: theme.palette.common.white,
    fontSize: "46px",
    borderRadius: "50%",
    border: "10px solid white",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
}));

const mapStateToProps = (state) => ({
  compare: state.compare,
});

const mapDispatchToProps = (dispatch) => ({
  removeAll: () =>
    dispatch({
      type: constants.REMOVEALLCOMPARE,
    }),
  setminimize: (payload) =>
    dispatch({
      type: constants.SETMINIMISZED,
      payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
