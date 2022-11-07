import React from "react";
import Buttons from "./Buttons";
const circularButtonClass = "btn-circle btn-xl"
const zeroButtonClass = "btn-circle btn-0"

function Phone(props) {

    function handleNum(num){
        props.handleNumApp(num)
    }

    function handleOperator(operator){
        props.handleOpApp(operator)
    }

    return (
        <div className="phone">

            <div className="input-area">
                <h2>{props.value2 === 0 ? props.value1 : props.value2}</h2>
            </div>
            <div className="buttons-area">
                <div className="row1">
                    <Buttons value="AC" onClick={props.clear} id={"light-grey"}  class={circularButtonClass} />
                    <Buttons value="+/-" onClick={() => { props.opposite(props.value2 === 0 ? "value1" : "value2")}} id={"light-grey"} class={circularButtonClass} />
                    <Buttons value="%" onClick={handleOperator} id={"light-grey"} class={circularButtonClass} />
                    <Buttons value="÷" onClick={handleOperator} id={"operators"} class={circularButtonClass} />
                </div>
                <div className="row2">
                    <Buttons value="7" onClick={handleNum} id={"numbs"}   class={circularButtonClass} />
                    <Buttons value="8" onClick={handleNum} id={"numbs"}   class={circularButtonClass} />
                    <Buttons value="9" onClick={handleNum} id={"numbs"}   class={circularButtonClass} />
                    <Buttons value="x" onClick={handleOperator} id={"operators"} class={circularButtonClass} />
                </div>
                <div className="row3">
                    <Buttons value="4" onClick={handleNum} id={"numbs"}  class={circularButtonClass} />
                    <Buttons value="5" onClick={handleNum} id={"numbs"}  class={circularButtonClass} />
                    <Buttons value="6" onClick={handleNum} id={"numbs"}  class={circularButtonClass} />
                    <Buttons value="-" onClick={handleOperator} id={"operators"} class={circularButtonClass} />
                </div>
                <div className="row4">
                    <Buttons value="1" onClick={handleNum} id={"numbs"} class={circularButtonClass} />
                    <Buttons value="2" onClick={handleNum} id={"numbs"} class={circularButtonClass} />
                    <Buttons value="3" onClick={handleNum} id={"numbs"} class={circularButtonClass} />
                    <Buttons value="+" onClick={handleOperator} id={"operators"} class={circularButtonClass} />
                </div>
                <div className="row5">
                    <Buttons value="0" onClick={handleNum} id={"numbs"} class={zeroButtonClass} />
                    <Buttons value="." onClick={handleNum} id={"numbs"} class={circularButtonClass} />
                    <Buttons value="=" onClick={props.calculate} id={"operators"} class={circularButtonClass} />
                </div>
            </div>
        </div>
    )
}

export default Phone