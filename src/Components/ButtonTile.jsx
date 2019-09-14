import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  done: {
    backgroundColor: "#4BC077",
    color: "#ffffff",
    marginLeft: theme.spacing(5),
    fontSize: 15,
    padding: 2
  },
  clear: {
    backgroundColor: "#D64F48",
    color: "#ffffff",
    marginLeft: theme.spacing(5),
    fontSize: 15,
    padding: 2
  },
  warning: {
    backgroundColor: "#FF9828",
    color: "#ffffff",
    marginLeft: theme.spacing(5),
    fontSize: 15,
    padding: 2
  },
  maintenance: {
    backgroundColor: "#7F8DE1",
    color: "#ffffff",
    marginLeft: theme.spacing(5),
    fontSize: 15,
    padding: 2
  }
}));

export default function ButtonTile(props) {
  const classes = useStyles();
  const { label, type, ...other } = props;

  return (
    <div>
      <Button variant="contained" color="default" className={classes.button}>
        {label}
        {type === 0 && (
          <DoneIcon className={classes.done} aria-label={"done"} />
        )}
        {type === 1 && (
          <ClearIcon className={classes.clear} aria-label={"clear"} />
        )}
        {type === 2 && (
          <PriorityHighIcon
            className={classes.warning}
            aria-label={"warning"}
          />
        )}
        {type === 3 && (
          <BuildIcon
            className={classes.maintenance}
            aria-label={"maintenance"}
          />
        )}
      </Button>
    </div>
  );
}

ButtonTile.propTypes = {
  label: PropTypes.string,
  type: PropTypes.number
};
