import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  Container,
} from "@material-ui/core/";
import Subscribe from "./Subscribe";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";

const { logo } = images;

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Subscribe />
      <Grid className={classes.footer}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <img src={logo} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h1" component="h2" className={classes.title}>
                Quick Links
              </Typography>
              <ul className={classes.lists}>
                <li className={classes.item}>
                  <Link to="/">Home</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">About</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/"> Contact us</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">Privacy</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">Policy</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">Terms and Conditions</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h1" component="h2" className={classes.title}>
                Social links
              </Typography>
              <ul className={classes.lists}>
                <li className={classes.item}>
                  <Link to="/">Facebook</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">Twitter</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/"> Instagram</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">Linkedin</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">Youtube</Link>
                </li>
                <li className={classes.item}>
                  <Link to="/">WhatsApp</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.colors.primary,
    paddingTop: "200px",
  },
  logo: {
    width: "150px",
  },
  title: {
    fontSize: "18px",
    color: theme.palette.common.white,
  },
  lists: {
    color: theme.palette.common.white,
    listStyle: "none",
    padding: "0",
  },
  item: {
    marginBottom: "5px",
    "& a": {
      color: theme.palette.common.white,
      textDecoration: "none",

      "&:hover": {
        opacity: "0.7",
      },
    },
  },
}));
export default Footer;
