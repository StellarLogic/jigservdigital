import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, FormControlLabel } from "@material-ui/core/";
import moment from "moment";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import HourglassEmptyOutlinedIcon from "@material-ui/icons/HourglassEmptyOutlined";
import Checkbox from "@material-ui/core/Checkbox";

const ProgramCard = ({
  program_card_image,
  name,
  delivery,
  program_fee,
  university_logo,
  start_date,
  apply_by,
  university_name,
  onChange,
  checkedStatus,
  isCompact = false,
}) => {
  const classes = useStyles();
  // console.log(checkedStatus);
  if (isCompact)
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        className={`${isCompact ? classes.compact : ""}`}
      >
        <div className={classes.imgblock}>
          <div className={classes.overlay}></div>
          <img
            src={`${process.env.REACT_APP_IMG}${program_card_image}`}
            alt=""
            className={classes.img}
          />
        </div>{" "}
        <div className={classes.textBlock}>
          <Typography variant="h1" component="h2" className={classes.title}>
            {name.length > 50 ? `${name.substring(0, 40)}...` : name}
          </Typography>
        </div>
      </Grid>
    );

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>
        <div className={classes.imgblock}>
          <span className={classes.live}>{delivery}</span>
          <span className={classes.fee}>{program_fee}</span>

          <FormControlLabel
            value="end"
            control={
              <Checkbox
                color="primary"
                className={classes.inputCheck}
                onChange={onChange}
                checked={checkedStatus}
              />
            }
            className={classes.checkbox}
            label="COMPARE"
            labelPlacement="end"
          />
          <div className={classes.overlay}></div>
          <img
            src={`${process.env.REACT_APP_IMG}${program_card_image}`}
            alt=""
            className={classes.img}
          />
        </div>
        <div className={classes.textBlock}>
          <img
            src={`${process.env.REACT_APP_IMG}${university_logo}`}
            alt=""
            className={classes.logo}
          />
          <Typography variant="h1" component="h2" className={classes.title}>
            {name.length > 50 ? `${name.substring(0, 40)}...` : name}
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            className={classes.university}
          >
            {university_name}
          </Typography>
          <Grid container>
            <Grid item sm={6} className={classes.left}>
              <EventOutlinedIcon className={classes.iconLeft} />
              {moment(start_date).format("DD MMM,YYYY")}
            </Grid>
            <Grid item sm={6} className={classes.right}>
              <HourglassEmptyOutlinedIcon className={classes.iconRight} />
              {moment(apply_by).format("DD MMM,YYYY")}
            </Grid>
          </Grid>
        </div>
        <Grid item sm={12} className={classes.viewDetails}>
          View Details
        </Grid>
      </Paper>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  compact: {
    "& $img": {
      width: " 100%",
      minHeight: "auto",
    },
    "& $textBlock": {
      padding: "10px 10px 0 10px",
      fontSize: "12px",
    },
    "& $title": {
      fontSize: "12px",
    },
  },
  title: {
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bold",
    minHeight: "42px",
  },
  university: {
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "10px",
  },
  paper: {
    width: "fit-content",
    borderRadius: "0",
  },
  img: {
    width: "auto",
    objectFit: "cover",
    minHeight: "250px",
    display: "block",
  },
  imgblock: {
    position: "relative",
  },
  live: {
    background: theme.palette.colors.primary,
    color: theme.palette.common.white,
    position: "absolute",
    bottom: 0,
    padding: "5px ",
    fontSize: "12px",
    zIndex: "1",
  },
  ".MuiCheckbox-root": {
    color: "#fff",
  },
  fee: {
    background: theme.palette.colors.primary,
    color: theme.palette.common.white,
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: "5px ",
    fontSize: "12px",
    zIndex: "1",
  },
  textBlock: {
    position: "relative",
    padding: "75px 20px 20px 20px",
  },
  logo: {
    position: "absolute",
    height: "100px",
    width: "100px",
    background: theme.palette.common.white,
    objectFit: "contain",
    left: "50%",
    top: "0",
    transform: "translate(-50%,-50%)",
    padding: "10px",
    boxShadow: "1px 1px 2px #00000029",
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconLeft: {
    marginRight: "2px",
    fontSize: "18px",
  },
  iconRight: {
    marginLeft: "2px",
    fontSize: "18px",
  },
  viewDetails: {
    background: theme.palette.colors.primary,
    color: theme.palette.common.white,
    width: "auto",
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
    transition: "all 0.3s",
    border: `2px solid ${theme.palette.colors.primary}`,
    "&:hover": {
      background: theme.palette.common.white,
      color: theme.palette.colors.primary,
    },
  },
  checkbox: {
    position: "absolute",
    background: theme.palette.colors.primary,
    color: theme.palette.common.white,
    padding: "5px",
    right: 0,
    zIndex: "1",
    margin: 0,
  },
  inputCheck: {
    padding: "0",
    color: "#fff",
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

export default ProgramCard;
