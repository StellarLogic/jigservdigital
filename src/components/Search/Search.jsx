import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";

const Search = () => {
  const [setting, setsetting] = useState(false);
  const {
    block,
    root,
    rootNext,
    iconButton,
    input,
    divider,
    icons,
  } = useStyles({
    setting,
  });

  const handleSetting = () => {
    setsetting(!setting);
  };

  return (
    <Paper className={block}>
      <Paper component="form" className={root}>
        <InputBase
          className={input}
          placeholder="Search for Courses / Programs"
        />
        <IconButton type="submit" className={iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={iconButton}
          aria-label="directions"
          onClick={handleSetting}
        >
          {setting ? (
            <CloseIcon className={icons} />
          ) : (
            <SettingsIcon className={icons} />
          )}
        </IconButton>
      </Paper>
      {setting && (
        <Paper component="form" className={rootNext}>
          <InputBase className={input} placeholder="Programs Category" />
          <Divider className={divider} orientation="vertical" />
          <InputBase className={input} placeholder="Location" />
        </Paper>
      )}
    </Paper>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    block: {
      padding: ({ setting }) => (setting ? "20px" : "40px"),
      background: theme.palette.colors.primary,
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%,0)",
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 650,
      borderRadius: "0",
      marginBottom: ({ setting }) => (setting ? "20px" : "0px"),
    },

    rootNext: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 650,
      borderRadius: "0",
    },

    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },

    icons: {
      color: theme.palette.colors.secondary,
    },
  };
});

export default Search;
