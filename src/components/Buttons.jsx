import React from "react";
import { Fab } from "@mui/material";

function Buttons(props) {


    return (
        <Fab id={props.id} value={props.value} onClick={() => {props.onClick(props.value)}} className={props.class}><p>{props.value}</p></Fab>
    )
}

export default Buttons