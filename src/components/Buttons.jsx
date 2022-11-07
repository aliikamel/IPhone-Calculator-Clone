import React from "react";

function Buttons(props) {


    return (
        <button value={props.value} onClick={() => {props.onClick(props.value)}} className={props.class}><p>{props.value}</p></button>
    )
}

export default Buttons