import React, { useState } from "react"
import ReactDOM from "react-dom"
import Phone from "./Phone"
import Header from "./Header";

function App() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [operator, setOperator] = useState(null)
    const [opIsClicked, setOpIsClicked] = useState(false)

    function handleNum(num) {
        if (!opIsClicked) {
            let newValue1 = value1 + num;
            setValue1(newValue1.indexOf('0') === 0 ? newValue1.substring(1) : newValue1)
        } else if (opIsClicked) {
            let newValue2 = value2 + num;
            setValue2(newValue2.indexOf('0') === 0 ? newValue2.substring(1) : newValue2)
        }

    }

    function handleOperator(operator) {
        setOpIsClicked(true)
        setOperator(operator)
        if (operator === "%") {
            let answer = 0;
            answer = (Number(value1) / 100)
            setValue1(answer.toString().substring(0, 7));
            setValue2(0)
            setOpIsClicked(false)
        }
    }

    function handleOpposite(value) {
        let answer = 0;
        if (value === "value1") {
            if (value1 > 0) {
                answer = (Number(value1) - (Math.abs(value1) * 2))
            } else if (value1 < 0) {
                answer = (Number(value1) + (Math.abs(value1) * 2))
            }
            setValue1(answer.toString().substring(0, 7));
            setValue2(0)
            setOpIsClicked(false)
        } else if (value === "value2") {
            if (value2 > 0) {
                answer = (Number(value2) - (Math.abs(value2) * 2))
            } else if (value2 < 0) {
                answer = (Number(value2) + (Math.abs(value2) * 2))
            }
            setValue2(answer.toString().substring(0, 7));
            setOpIsClicked(false)
        }
    }

    function handleCalculate() {
        let answer = 0;
        if (operator === "+") {
            answer = (Number(value1) + Number(value2))
        } else if (operator === "-") {
            answer = (Number(value1) - Number(value2))
        } else if (operator === "x") {
            answer = (Number(value1) * Number(value2))
        } else if (operator === "÷") {
            answer = (Number(value1) / Number(value2))
        }
        setValue1(answer.toString().substring(0, 7));
        setValue2(0)
        setOpIsClicked(false)
    }

    function clear() {
        setValue1(0)
        setValue2(0)
        setOpIsClicked(false)
    }

    return (
        <div>
            <Header />
            <Phone
                handleNumApp={handleNum}
                handleOpApp={handleOperator}
                value1={value1}
                value2={value2}
                opisclicked={opIsClicked}
                calculate={handleCalculate}
                clear={clear}
                opposite={handleOpposite}
            />
        </div>
    )
}

export default App