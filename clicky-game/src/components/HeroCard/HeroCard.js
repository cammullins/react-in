import React from "react";
import "./HeroCard.css";

const HeroCard = props => (
  <div className="card" onClick={() => props.heroClick(props.id)}>
    <div className="img-container">
      {/* <img alt={props.name} src={props.image} /> */}
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
      <p>{props.id}</p>
 
      </div> 

 
  </div>
);

export default HeroCard;
