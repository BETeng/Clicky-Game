import React from "react";
import "./style.css";

function Score(props) {
  return (
    <>
      <h4 className={"text-white text-center"}>Score {props.score}</h4>
      <h4 className={"text-white text-center"}>{props.message}</h4>
    </>
  );
}

export default Score;
