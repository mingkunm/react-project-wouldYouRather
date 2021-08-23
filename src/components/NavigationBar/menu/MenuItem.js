import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function MenuItem({ name, active }) {
  const classes = useStyle();

  return (
    <>
      <span className={`${classes.menuItem} ${active && classes.active}`}>
        {name}
      </span>
    </>
  );
}

const useStyle = makeStyles((theme) => ({
  menuItem: {
    fontSize: "20px",
    padding: "10px 25px",
    transition: "all 0.2s ease",
    clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#efefef",
      cursor: "pointer",
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: "#efefef",
  },
}));

export default MenuItem;
