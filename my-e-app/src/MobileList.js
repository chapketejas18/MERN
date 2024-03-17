import React from "react";
import "./MobileList.css";

function MobileList(props){
    return(
        <div className="main">
            <img className="image" src={props.image} alt=""/>
            <div>
            <h1>{props.mobileName}</h1>
            <p>{props.price}</p>
            <button>Add to cart</button>
            </div>
        </div>
    )
}
export default MobileList;