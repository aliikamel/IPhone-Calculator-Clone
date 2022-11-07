import React, { useState } from "react"
import ReactDOM from "react-dom"
import Phone from "./Phone"

function App() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [operator, setOperator] = useState(null)
    const [opIsClicked, setOpIsClicked] = useState(false)

    function handleNum(num){
        if(!opIsClicked){
            setValue1(value1 + num)
        } else if(opIsClicked){
            setValue2(value2 + num)
        }
        
    }

    function handleOperator(operator){
        setOpIsClicked(true)
        setOperator(operator)
    }

    function handleCalculate(){
        let answer = 0;
        if(operator === "+"){
            answer = (Number(value1) + Number(value2))
        } else if (operator === "-"){
            answer = (Number(value1) - Number(value2))
        } else if (operator === "x"){
            answer = (Number(value1) * Number(value2))
        } else if (operator === "÷"){
            answer = (Number(value1) / Number(value2))
        }
        setValue1(answer);
        setValue2(0)
        setOpIsClicked(false)
    }

    function clear(){
        setValue1(0)
        setValue2(0)
        setOpIsClicked(false)
    }

    return (
        <div>
            <Phone
            handleNumApp={handleNum} 
            handleOpApp={handleOperator}
            value1={value1}
            value2={value2}
            opisclicked={opIsClicked}   
            calculate = {handleCalculate}
            clear = {clear}
            />
        </div>
    )
}

export default App