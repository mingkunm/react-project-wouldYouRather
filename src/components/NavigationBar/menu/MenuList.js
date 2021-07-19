import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "./MenuItem";

function MenuList() {
  const classes = useStyle();

  return (
    <div className={classes.menuList}>
      <MenuItem name={"Home"} />
      <MenuItem name={"New Question"} />
      <MenuItem name={"Leader Board"} />
    </div>
  );
}

const useStyle = makeStyles(() => ({
  menuList: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "345px",
  },
}));

export default MenuList;
