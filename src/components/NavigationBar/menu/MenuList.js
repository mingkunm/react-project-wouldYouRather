import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "./MenuItem";

function MenuList() {
  const classes = useStyle();

  return (
    <div className={classes.menuList}>
      <MenuItem name={"Home"} active={true} />
      <MenuItem name={"New Question"} active={false} />
      <MenuItem name={"Leader Board"} active={false} />
    </div>
  );
}

const useStyle = makeStyles(() => ({
  menuList: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "480px",
  },
}));

export default MenuList;
