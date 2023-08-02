import './App.css';
import { useState } from 'react';
import styled from 'styled-components'
import {Delete} from '@styled-icons/feather/Delete';
import {Divide} from '@styled-icons/fa-solid/Divide';
import { SquareRootVariable } from 'styled-icons/fa-solid';
import CalculatorTwo from './CalculatorTwo';
import Calc from './Calc';

function App() {
  
  return (
    <div className="maincontainer">
        {/* <CalculatorTwo/> */}
        <Calc/>
        </div>
  );
}

export default App;
