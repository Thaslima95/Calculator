import React, { useReducer,useState } from 'react';
import styled from 'styled-components';
import {Delete} from '@styled-icons/feather/Delete';
import {Divide} from '@styled-icons/fa-solid/Divide';
import { SquareRootVariable } from 'styled-icons/fa-solid';


const reducer=(state,action)=>{
   const evaluate=(state)=>{
      let previous=parseFloat(state.previousvalue)
      let current=parseFloat(state.firstValue)
      if(isNaN(previous) || isNaN(current)) return ''
      let calculate=''
      switch(state.operation)
      {
        case '+':
          calculate=previous + current
          break;
        case '-':
          calculate=previous - current
          break;
        case '*':
          calculate=previous * current
          break;
        case '/':
          calculate=previous / current
          break;
        case '%':
          calculate=previous % current
          break;
        case 'square':
          console.log(current)
           calculate=current*current
      }
      return calculate.toString()
    }
    switch(action.type)
    {
        case 'Add-Digit':
          if(action.payload=="0"&& state.firstValue=="0") return state
          if(action.payload=="."&& state.firstValue.includes('.')) return state
          if(state.overwrite)
          {
            return {
              
              firstValue:action.payload,
              overwrite:false
            }
          }
            return {...state,firstValue:`${state.firstValue || ""}${action.payload}`}
        case 'Operation-Digit':
          if(state.firstValue==null && state.previousvalue==null) return state
          if(state.previousvalue==null)
          {
            return {
              ...state,
              operation:action.payload,
              previousvalue:state.firstValue,
              firstValue:null
            }
            
          }
          if(state.firstValue==null)
          {
            return{
              ...state,
              operation:action.payload
            }
          }
          return{
            ...state,
            previousvalue:evaluate(state),
            operation:action.payload,
            firstValue:null

          }
        case 'Evaluate':
          if(state.firstValue==null || state.previousvalue==null || state.operation==null) return state
          return{
            ...state,
            overwrite:true,
            previousvalue:null,
            operation:null,
            firstValue:evaluate(state)
          }
        case 'Clear':
          return {}
        case 'Square':
           if(state.overwrite)
          {
            return {
              
              firstValue:action.payload,
              overwrite:false
            }
          }
          return{
            ...state,
            operation:null,
            previousvalue:null,
            overwrite:true,
            firstValue:Number(state.firstValue)*Number(state.firstValue),
            
          }
         case 'SquareRoot':
           if(state.overwrite)
          {
            return {
              
              firstValue:action.payload,
              overwrite:false
            }
          }
          return{
            ...state,
            operation:null,
            previousvalue:null,
            overwrite:true,
            firstValue:Math.sqrt(state.firstValue).toFixed(2),
            
          }
    }
   
}
export default function Calc() {
    const [{firstValue="0",previousvalue,operation},dispatch]=useReducer(reducer,{})
  return (
    <div className="maincontainer">
        <div className="resultcontainer" >
          <div className="previous-value">{previousvalue} {operation}</div>
          <div className="current-values">{firstValue}</div>
        </div>
        <div className="keyscontainer">
          <div className="grid-container">
                <button onClick={()=>dispatch({type:'Operation-Digit',payload:"%"})}  name="%" className="grid-item" id="mod">%</button>
                <button  name="clears"className="grid-item" id="Clears">CE</button>
                <button onClick={()=>dispatch({type:'Clear'})} name="clear"className="grid-item" id="clear">C</button>
                <button  name="backspace"className="grid-item" id="backspace"><Delete size="12"/></button>
                <button  name="1/x"className="grid-item" id="onebyx"><small>1/x</small></button>
                <button onClick={()=>dispatch({type:'Square',payload:"square"})} name=""className="grid-item" id="sqaure">x<sup><small>2</small></sup></button>
                <button onClick={()=>dispatch({type:'SquareRoot',payload:"squareRoot"})} name=""className="grid-item" id="squareroot"><small>2</small><SquareRootVariable className='sqaure' size="15"/></button>
                <button onClick={()=>dispatch({type:'Operation-Digit',payload:"/"})} name="/"className="grid-item" id="division"><Divide size="14"/></button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:7})} name="7"className="grid-item" id="seven">7</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:8})} name="8"className="grid-item" id="eight">8</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:9})} name="9"className="grid-item" id="nine">9</button>
                <button onClick={()=>dispatch({type:'Operation-Digit',payload:"*"})} name="*"className="grid-item" id="multiply">x</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:4})} name="4"className="grid-item" id="four">4</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:5})} name="5"className="grid-item" id="five">5</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:6})} name="6"className="grid-item" id="six">6</button>
                <button onClick={()=>dispatch({type:'Operation-Digit',payload:"-"})} name="-"className="grid-item" id="minus">-</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:1})}name="1"className="grid-item" id="one" >1</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:2})} name="2"className="grid-item" id="two">2</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:3})} name="3"className="grid-item" id="three">3</button>
                <button onClick={()=>dispatch({type:'Operation-Digit',payload:"+"})} name="+"className="grid-item" id="plus">+</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:1})} name=""className="grid-item" id="plusminus">+/-</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:0})} name="0"className="grid-item" id="0">0</button>
                <button onClick={()=>dispatch({type:'Add-Digit',payload:"."})} name="."className="grid-item" id="dot">.</button>
                <button onClick={()=>dispatch({type:'Evaluate',payload:"="})} name="euqal" className="grid-item" id="equal">=</button>
                
            </div>
          </div>
        </div>
  );
}
