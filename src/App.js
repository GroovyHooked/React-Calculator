import "./App.scss";

import Mycalculator from "./logic.js";
import Title from "./title";
import Number from "./components/numbers/Number.js";
import Operator from "./components/operators/Operator";

import Equal from "./components/operators/equal.js";

import Display from "./display.js";
import Clear from "./components/various/clear.js";
import Modulus from "./components/various/modulus.js";
import PositiveOrNegative from "./components/various/positiveOrNegative.js";
import Comma from "./components/various/comma.js";

function App() {
  return (
    <div className="container">
      <Title />
      <table>
        <Display />
        <tbody>
          <tr>
            <Clear />
            <PositiveOrNegative />
            <Modulus />
            <Operator operator="/" cssClass="division" />
          </tr>
          <tr>
            <Number number="7" col_span="1" />
            <Number number="8" col_span="1" />
            <Number number="9" col_span="1" />
            <Operator operator="*" cssClass="multiplication" />
          </tr>
          <tr>
            <Number number="4" col_span="1" />
            <Number number="5" col_span="1" />
            <Number number="6" col_span="1" />
            <Operator operator="-" cssClass="subtraction" />
          </tr>
          <tr>
            <Number number="1" col_span="1" />
            <Number number="2" col_span="1" />
            <Number number="3" col_span="1" />
            <Operator operator="+" cssClass="addition" />
          </tr>
          <tr>
            <Number number="0" col_span="2" />
            <Comma />
            <Equal />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
