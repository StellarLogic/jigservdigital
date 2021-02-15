import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  Button,
  TextField,
} from "@material-ui/core/";

const Subscribe = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.main}>
      <Grid className={classes.inner}>
        <Typography variant="h1" component="h2" className={classes.title}>
          Subscribe to our Newsletter
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-size-small"
              variant="filled"
              size="small"
              placeholder="Enter Name"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-size-small"
              variant="filled"
              size="small"
              placeholder="Enter Email"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-size-small"
              variant="filled"
              size="small"
              placeholder="Enter Whatsapp Number"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-size-small"
              variant="filled"
              size="small"
              placeholder="Enter Area Of Intrest"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              className={classes.button}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    height: "100px",
    borderTop: `100px solid ${theme.palette.colors.secondary}`,
    background: theme.palette.colors.primary,
  },
  inner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "85%",
    background: theme.palette.common.white,
    padding: "50px 100px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    width: "90%",
    marginBottom: "20px",
    "& input": {
      padding: "5px",
      background: theme.palette.common.white,
    },
  },
  button: {
    background: theme.palette.colors.primary,
    padding: "10px 20px",
    borderRadius: "0",
  },
}));
export default Subscribe;
