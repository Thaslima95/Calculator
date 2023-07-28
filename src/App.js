import './App.css';
import { useState } from 'react';
import styled from 'styled-components'
import {Delete} from '@styled-icons/feather/Delete';
import {Divide} from '@styled-icons/fa-solid/Divide';
import { SquareRootVariable } from 'styled-icons/fa-solid';

function App() {
  const [res,setRes]=useState("0")
  const [hide,setHide]=useState("0")
  const handlebutton=(e)=>{
    if(res!="0")
    {
      setRes(res.concat(e.target.name))
    }
    else{
      setRes(e.target.name)
    }
  
  }
  const evaluate=()=>{
    try{
      setRes(eval(res).toString())
      
    }
    catch(err)
    {
      setRes("error")
    }
  }
  const backspace=()=>{
    setRes(res.slice(0,-1))
  }
  const clear=()=>{
    setRes("0")
  }
  const square=()=>{
    setRes(Math.pow(res,2).toString())
    
  }
  const squareroot=()=>{
    setRes(Math.sqrt(res).toString())
    
  }
  const dot=()=>{
    if(res.split('').includes('.'))
    {
      setRes(res)
    }
    else{
      setRes(res.concat('.'))
    }
  }
  return (
    <div className="maincontainer">
        <div className="resultcontainer" >{res}</div>
        <div className="keyscontainer">
          <div className="grid-container">
                <button onClick={handlebutton}  name="%" className="grid-item" id="mod">%</button>
                <button onClick={clear} name="clears"className="grid-item" id="Clears">CE</button>
                <button onClick={clear} name="clear"className="grid-item" id="clear">C</button>
                <button onClick={backspace} name="backspace"className="grid-item" id="backspace"><Delete size="12"/></button>
                <button onClick={handlebutton} name="1/x"className="grid-item" id="onebyx"><small>1/x</small></button>
                <button onClick={square} name=""className="grid-item" id="sqaure">x<sup><small>2</small></sup></button>
                <button onClick={squareroot} name=""className="grid-item" id="squareroot"><small>2</small><SquareRootVariable className='sqaure' size="15"/></button>
                <button onClick={handlebutton} name="/"className="grid-item" id="division"><Divide size="14"/></button>
                <button onClick={handlebutton} name="7"className="grid-item" id="seven">7</button>
                <button onClick={handlebutton} name="8"className="grid-item" id="eight">8</button>
                <button onClick={handlebutton} name="9"className="grid-item" id="nine">9</button>
                <button onClick={handlebutton} name="*"className="grid-item" id="multiply">x</button>
                <button onClick={handlebutton} name="4"className="grid-item" id="four">4</button>
                <button onClick={handlebutton} name="5"className="grid-item" id="five">5</button>
                <button onClick={handlebutton} name="6"className="grid-item" id="six">6</button>
                <button onClick={handlebutton} name="-"className="grid-item" id="minus">-</button>
                <button onClick={handlebutton} name="1"className="grid-item" id="one" >1</button>
                <button onClick={handlebutton} name="2"className="grid-item" id="two">2</button>
                <button onClick={handlebutton} name="3"className="grid-item" id="three">3</button>
                <button onClick={handlebutton} name="+"className="grid-item" id="plus">+</button>
                <button onClick={handlebutton} name=""className="grid-item" id="plusminus">+/-</button>
                <button onClick={handlebutton} name="0"className="grid-item" id="0">0</button>
                <button onClick={dot} name="."className="grid-item" id="dot">.</button>
                <button onClick={evaluate} name="euqal"className="grid-item" id="equal">=</button>
                
            </div>
          </div>
        </div>
  );
}

export default App;
