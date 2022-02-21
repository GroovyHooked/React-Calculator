import { useState, useRef } from 'react';

import "./App.scss";

import Mycalculator from "./logic.js";

import Zero from "./components/numbers/zero.js";
import One from "./components/numbers/one.js";
import Two from "./components/numbers/two.js";
import Three from "./components/numbers/three.js";
import Four from "./components/numbers/four.js";
import Five from "./components/numbers/five.js";
import Six from "./components/numbers/six.js";
import Seven from "./components/numbers/seven.js";
import Eight from "./components/numbers/eight.js";
import Nine from "./components/numbers/nine.js";

import Addition from "./components/operators/addition.js";
import Division from "./components/operators/division.js";
import Multiplication from "./components/operators/multiplication.js";
import Subtraction from "./components/operators/substraction.js";
import Equal from "./components/operators/equal.js";

import Display from "./components/various/display.js";
import Clear from "./components/various/clear.js";
import Modulus from "./components/various/modulus.js";
import PositiveOrNegative from "./components/various/positiveOrNegative.js";
import Comma from "./components/various/comma.js";



function App() {

  const [selector, setSelector] = useState()

  const numRef0 = useRef()

  const displayNum = () => {
    const foo = numRef0.current.attribute
    console.log(foo)
    setSelector(foo)
    const num = document.querySelector(selector)
    const display = document.querySelector('.result')
    display.innerHTML += num.innerHTML
    console.log('test')
  };

  const display = () => {
    console.log('test')
  }
  return (
    <div className="container">
      <header className="App-header">
        <h3>Calculator</h3>
      </header>
      <table>
        <Display />
        <tbody>
          <tr>
            <Clear />
            <PositiveOrNegative />
            <Modulus />
            <Division />
          </tr>
          <tr>
            <Seven />
            <Eight />
            <Nine />
            <Multiplication />
          </tr>
          <tr>
            <Four />
            <Five />
            <Six />
            <Subtraction />
          </tr>
          <tr>
            <One />
            <Two />
            <Three />
            <Addition />
          </tr>
          <tr>
            <Zero  ref={numRef0} onClick={displayNum} />
            <Comma display={display} />
            <Equal />
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default App;
