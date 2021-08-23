import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Components
import MenuList from "./menu";
import UserInfo from "./userInfo";

function NavigationBar() {
  const classes = useStyle();

  return (
    <div className={classes.navWrap}>
      <div className={classes.navContainer}>
        <MenuList />
        <UserInfo />
      </div>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  navWrap: {
    height: "50px",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    borderBottom: `${theme.palette.primary.main} 4px solid`,
  },
  navContainer: {
    width: "60vw",
    maxWidth: "750px",
    minWidth: "700px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default NavigationBar;
