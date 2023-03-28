import React from "react";
import "../styles/Card.css";
function Card(props){
    return(
        <div className="containerCard">
        <p>Name: {props.name}</p>
        <p>Job: {props.job}</p>
        <p>Hobby: {props.hobby}</p>
        </div>
    );
}
export default Card;