import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function UserInfo() {
  const classes = useStyle();

  return (
    <div className={classes.userInfoWrap}>
      <div className={classes.userInfoAuth}>
        <span>Hello, Gavin Ma</span>
        <span>Logout</span>
      </div>
    </div>
  );
}

const useStyle = makeStyles(() => ({
  userInfoWrap: {
    width: "30%",
    minWidth: "230px",
    flexWrap: "nowrap",
  },
  userInfoAuth: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default UserInfo;
