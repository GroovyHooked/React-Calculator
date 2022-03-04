class Mycalculator {
  constructor(num1, factor, num2) {
    this.num1 = Number(num1);
    this.factor = factor;
    this.num2 = Number(num2);
  }
  add() {
    return this.num1 + this.num2;
  }
  multi() {
    return this.num1 * this.num2;
  }
  divid() {
    return this.num1 / this.num2;
  }
  minus() {
    return this.num1 - this.num2;
  }
  whichCalc() {
    if (this.factor === "*") {
      return this.multi();
    }
    if (this.factor === "+") {
      return this.add();
    }
    if (this.factor === "/") {
      return this.divid();
    }
    if (this.factor === "-") {
      return this.minus();
    }
  }
}

export default Mycalculator;
