import React, { useState } from 'react';
import HistoryBox from './historyBox';

 
const Calculator =()=>{
    const [result, setResult] = useState("");
    const [mixedHistory] = useState([]);
    const [additionHistory] = useState([]);
    const [substractionHistory] = useState([]);
    const [multiplicationHistory] = useState([]);
    const [divisionHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
  
  
    const handleClick=(e)=>{
      console.log(e.target.value);
      setResult(result + e.target.value);
      if(e.target.value==="C"){
        setResult("");
        setShowHistory(false)
      }else if(e.target.value==="DEL"){
        setResult(result.slice(0,-1))
        console.log(result);
      }else if (e.target.value==="="){
        try{
          setResult(eval(result).toString())
          console.log(result)
          var val = eval(result);
          
          if (
            result.includes("+") &&
            !result.includes("-") &&
            !result.includes("*") &&
            !result.includes("/")
          ) {
            additionHistory.push(result +"="+ val);
            console.log("add",additionHistory);
            localStorage.setItem("Add",additionHistory)
  
            
          } else if (
            result.includes("-") &&
            !result.includes("+") &&
            !result.includes("*") &&
            !result.includes("/")
          ) {
            substractionHistory.push(result +"="+ val);
            console.log("sub",substractionHistory);
            localStorage.setItem("Sub",substractionHistory)
  
          } else if (
            result.includes("*") &&
            !result.includes("-") &&
            !result.includes("+") &&
            !result.includes("/")
          ) {
            multiplicationHistory.push(result +"="+ val);
            console.log("mul",multiplicationHistory);
            localStorage.setItem("Mul",multiplicationHistory)
  
          } else if (
            result.includes("/") &&
            !result.includes("-") &&
            !result.includes("*") &&
            !result.includes("+")
          ) {
            divisionHistory.push(result +"="+ val);
            console.log("div",divisionHistory);
            localStorage.setItem("Div",divisionHistory)
  
          } else {
        mixedHistory.push(result + "=" + val);
        console.log(mixedHistory)
        localStorage.setItem("mixedHistory",mixedHistory)
          }
        }catch(err){
          setResult("ERROR")
        }
      }
    }
  
    const History =()=>{
      if (showHistory===true){
        setShowHistory(false);
      }else{
      setShowHistory(true);
      }
    }
  
    // const clearStorage=()=>{
    //   localStorage.clear();
    // }
  
    return(
        <div class="container">
          <div onClick={History} class="tag">
                History
            </div>
            {
              showHistory ? <HistoryBox/> : null
            }
            {/* <HistoryBox/> */}
            {/* <div id="history">
                <b>Mixed</b>
                <div>{localStorage.getItem("mixedHistory")}</div>
                <b>Addition</b>
                <div>{localStorage.getItem("Add")}</div>
                <b>Substraction</b>
                <div>{localStorage.getItem("Sub")}</div>
                <b>Multiplication</b>
                <div>{localStorage.getItem("Mul")}</div>
                <b>Division</b>
                <div>{localStorage.getItem("Div")}</div>
                <div class="tag" onClick={clearStorage}>
                    Clear History
                </div>
            </div> */}
            <div class="calculator">
                <div class="result">
                    <div id="calculate">
                      {result}
                    </div>
                </div>
            </div>
            <div class="keyboard">
                <div class="num">
                    <button class="btn btn-light number" value="1" onClick={handleClick}>1</button>
                    <button class="btn btn-light number" value="2" onClick={handleClick}>2</button>
                    <button class="btn btn-light number" value="3" onClick={handleClick}>3</button>
                    <button class="btn btn-light number" value="4" onClick={handleClick}>4</button>
                    <button class="btn btn-light number" value="5" onClick={handleClick}>5</button>
                    <button class="btn btn-light number" value="6" onClick={handleClick}>6</button>
                    <button class="btn btn-light number" value="7" onClick={handleClick}>7</button>
                    <button class="btn btn-light number" value="8" onClick={handleClick}>8</button>
                    <button class="btn btn-light number" value="9" onClick={handleClick}>9</button>
                    <button class="btn btn-light number" value="0" onClick={handleClick}>0</button>
                    <button class="btn btn-light number" value="." onClick={handleClick}>.</button>
                    <button class="btn btn-light number" value="=" onClick={handleClick}>=</button>
                </div>
                <div class="ops">
                    <button class="btn btn-dark operation" value="DEL" onClick={handleClick}>DEL</button>
                    <button class="btn btn-dark operation" value="C" onClick={handleClick}>C</button>
                    <button class="btn btn-dark operation" value="/" onClick={handleClick}>/</button>
                    <button class="btn btn-dark operation" value="*" onClick={handleClick}>X</button>
                    <button class="btn btn-dark operation" value="-" onClick={handleClick}>-</button>
                    <button class="btn btn-dark operation" value="+" onClick={handleClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;