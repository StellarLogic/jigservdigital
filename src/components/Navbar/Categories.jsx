import React from "react";
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
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Categories = ({
  expanded,
  onChange,
  categories: { data: categories, loading },
}) => {
  const classes = useStyles();

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
        Categories
      </AccordionSummary>
      <AccordionDetails>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {!loading &&
            categories.map(({ id, attributes }) => (
              <ListItem button key={id}>
                <ListItemIcon>
                  <img
                    src={`${process.env.REACT_APP_IMG}${attributes.unselected_icon}`}
                    alt=""
                    className={classes.icons}
                  />
                </ListItemIcon>
                <ListItemText primary={attributes.name} />
              </ListItem>
            ))}
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
    width: "30px",
  },
}));

const mapStateToProps = (state) => ({
  categories: state.common.categories,
});

export default connect(mapStateToProps)(Categories);
