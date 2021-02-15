import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SchoolIcon from "@material-ui/icons/School";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const Universities = ({
  expanded,
  onChange,
  universities: { top, others, loading },
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = (panel) => (event, isExpanded) => {
    setOpen(open !== panel ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      className={classes.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        Universities
      </AccordionSummary>
      <AccordionDetails>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button onClick={handleClick("p1")}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Top Universities/B-Schools" />
            {open == "p1" ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open === "p1"} timeout="auto" unmountOnExit>
            {!loading &&
              top.map(({ id, attributes }) => (
                <ListItem button key={id}>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      attributes.name.length >= 10
                        ? `${attributes.name.substr(0, 20)}...`
                        : attributes.name
                    }
                  />
                </ListItem>
              ))}
          </Collapse>
          <ListItem button onClick={handleClick("p2")}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Other Universities/B-Schools" />
            {open == "p2" ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open == "p2"} timeout="auto" unmountOnExit>
            {!loading &&
              others.map(({ id, attributes }) => (
                <ListItem button key={id}>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      attributes.name.length >= 10
                        ? `${attributes.name.substr(0, 20)}...`
                        : attributes.name
                    }
                  />
                </ListItem>
              ))}
          </Collapse>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.common.white,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  icons: {
    width: "35px",
  },
}));

const mapStateToProps = (state) => ({
  universities: state.common.universities,
});

export default connect(mapStateToProps)(Universities);
