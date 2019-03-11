import React, { Component } from "react";

const Like = props => {
  let classes = "fa fa-heart";

  if (props.liked) classes += "-o";
  return (
    <i
      onClick={props.onclick}
      style={{ cursor: "pointer" }}
      className={classes}
      area-hidden="true"
    />
  );
};

export default Like;
