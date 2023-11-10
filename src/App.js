import React from 'react';
import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';


const App = () => {
  const [result, setResult] = useState(0);
  const handleClick = (event) => {
    setResult(result + event.target.name);
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error")
    }
  }
  return (
    <div className='App'>
      <form action="">
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <Button func={clear} text='Clear' className={true} id="clear"/>
        <Button func={backspace} text='C' className={true} id="backspace"/>

        <Button name='/' func={handleClick} text='&divide;'/>
        <Button name='7' func={handleClick} text='7'/>
        <Button name='8' func={handleClick} text='8'/>
        <Button name='9' func={handleClick} text='9'/>
        <Button name='*' func={handleClick} text='&times;'/>
        <Button name='4' func={handleClick} text='4'/>
        <Button name='5' func={handleClick} text='5'/>
        <Button name='6' func={handleClick} text='6'/>
        <Button name='-' func={handleClick} text='&ndash;'/>
        <Button name='1' func={handleClick} text='1'/>
        <Button name='2' func={handleClick} text='2'/>
        <Button name='3' func={handleClick} text='3'/>
        <Button name='+' func={handleClick} text='+'/>
        <Button name='0' func={handleClick} text='0'/>
        <Button name='.' func={handleClick} text='.'/>
        
        <Button func={calculate} text='=' className={true} id="result"/>
      </div>
    </div>
  )
}

export default App