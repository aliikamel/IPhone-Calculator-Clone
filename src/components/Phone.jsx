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
                <h2>{!props.opisclicked ? props.value1 : props.value2}</h2>
            </div>
            <div className="buttons-area">
                <div className="row1">
                    <Buttons value="AC" onClick={props.clear}  class={circularButtonClass + " light-grey"} />
                    <Buttons value="+/-" class={circularButtonClass + " light-grey"} />
                    <Buttons value="%" class={circularButtonClass + " light-grey"} />
                    <Buttons value="÷" onClick={handleOperator} class={circularButtonClass + " operators"} />
                </div>
                <div className="row2">
                    <Buttons value="7" onClick={handleNum}  class={circularButtonClass + " numbs"} />
                    <Buttons value="8" onClick={handleNum}  class={circularButtonClass + " numbs"} />
                    <Buttons value="9" onClick={handleNum}  class={circularButtonClass + " numbs"} />
                    <Buttons value="x" onClick={handleOperator} class={circularButtonClass + " operators"} />
                </div>
                <div className="row3">
                    <Buttons value="4" onClick={handleNum}  class={circularButtonClass + " numbs"} />
                    <Buttons value="5" onClick={handleNum}  class={circularButtonClass + " numbs"} />
                    <Buttons value="6" onClick={handleNum}  class={circularButtonClass + " numbs"} />
                    <Buttons value="-" onClick={handleOperator} class={circularButtonClass + " operators"} />
                </div>
                <div className="row4">
                    <Buttons value="1" onClick={handleNum} class={circularButtonClass + " numbs"} />
                    <Buttons value="2" onClick={handleNum} class={circularButtonClass + " numbs"} />
                    <Buttons value="3" onClick={handleNum} class={circularButtonClass + " numbs"} />
                    <Buttons value="+" onClick={handleOperator} class={circularButtonClass + " operators"} />
                </div>
                <div className="row5">
                    <Buttons value="0" onClick={handleNum} class={zeroButtonClass + " numbs"} />
                    <Buttons value="." onClick={handleNum} class={circularButtonClass + " numbs"} />
                    <Buttons value="=" onClick={props.calculate} class={circularButtonClass + " numbs"} />
                </div>
            </div>
        </div>
    )
}

export default Phone