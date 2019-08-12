import React from "react";
import "./style.css";

function PokemonCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={"img"} src={props.image} onClick={() => {props.clickHandler(props.id)}}/>
        </div>
      </div>
    );
  }

  export default PokemonCard;
