import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function MenuItem({ name }) {
  const classes = useStyle();

  return (
    <>
      <span className={classes.menuItem}>{name}</span>
    </>
  );
}

const useStyle = makeStyles(() => ({
  menuItem: {
    fontSize: "20px",
  },
}));

export default MenuItem;
