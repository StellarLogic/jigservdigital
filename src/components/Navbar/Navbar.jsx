import React, { useState } from "react";
import {
  Grid,
  Container,
  Drawer,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import images from "../../assets/images/images";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import Category from "./Categories";
import Universities from "./Universities";

const { logo } = images;

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Grid container justify="space-between">
        <Grid item xs={2}>
          <img src={logo} alt="" className={classes.logo} />
        </Grid>
        <Grid item xs={1} className={classes.menuIconWrapper}>
          <MenuIcon
            className={classes.menuIcon}
            onClick={() => setState(!state)}
          />
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={state}
        className={classes.drawer}
        onClose={() => {
          return setState(!state), setExpanded(null);
        }}
      >
        <Category expanded={expanded === "p1"} onChange={handleChange("p1")} />
        <Universities
          expanded={expanded === "p2"}
          onChange={handleChange("p2")}
        />
        <ListItem button>
          <ListItemText primary="Course Recommendation" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="For Organization" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Discussion forum" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Blog" />
        </ListItem>
      </Drawer>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "150px",
    // height: () => console.log(theme),
  },
  menuIconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    color: theme.palette.common.white,
    cursor: "pointer",
  },
}));

const mapStateToProps = (state) => ({
  categories: state.common.categories,
});

export default connect(mapStateToProps)(Navbar);
