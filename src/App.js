import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [input, setInput] = useState('');

  const calculateResult = (input) => {
    if(input.length === 0) return;
    const operators = ['+', '-', '*', '/', '%'];
    let operator = null;
    for(let i of input){
      if(operators.includes(i)){
        operator = i;
        break;
      }
      // console.log("hell");
    }
    if(!operator) {
      setInput(parseFloat(input).toString());
      return;
    }
    const[operand1, operand2] = input.split(operator).map(parseFloat);
    let result;
    try{switch(operator){
      case '+': 
      result = operand1 + operand2;
      break;
      case '-': 
      result = operand1 - operand2;
      break;
      case '*': 
      result = operand1 * operand2;
      break;
      case '/': 
      if(operand2 == 0){
        throw new Error('Avoid diving by Zero')
      }
      result = operand1 / operand2;
      break;
      case '%': 
      result = operand1 % operand2;
      break;
      default:
        throw new Error("Invalid Input Please try Again");
    }}
    catch(err){
      setInput(err)
    }
    setInput(result.toString());
    // result
  }

  const handleButtonClick = (char) => {
    if(char == 'C') setInput('');
    else if(char == '<') 
      setInput(prevValue => prevValue.slice(0, -1));
    else if(char == '=')
      calculateResult(input);
    else{
      setInput(prevValue => prevValue + char);
    }
  }
  return (
    <div className='container'>
      <div className='screen' ><h1>{input}</h1></div>
      <div className='buttons' >
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('<')}>del</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('00')}>00</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  )
}

export default App
