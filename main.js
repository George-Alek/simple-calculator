document.getElementById("num1").addEventListener("click", one)
document.getElementById("num2").addEventListener("click", two)
document.getElementById("num3").addEventListener("click", three)
document.getElementById("num4").addEventListener("click", four)
document.getElementById("num5").addEventListener("click", five)
document.getElementById("num6").addEventListener("click", six)
document.getElementById("num7").addEventListener("click", seven)
document.getElementById("num8").addEventListener("click", eight)
document.getElementById("num9").addEventListener("click", nine)
document.getElementById("num0").addEventListener("click", zero)
document.getElementById("plus").addEventListener("click", add)
document.getElementById("subtraction").addEventListener("click", sub)
document.getElementById("multiplication").addEventListener("click", multi)
document.getElementById("divison").addEventListener("click", div)
document.getElementById("equals").addEventListener("click", equal)
document.getElementById("clear").addEventListener("click", clear)
document.getElementById("dot").addEventListener("click", dec)
bank1 = "";
bank2 = "";
opt = "";
flag = true;

function one() {
  document.getElementById("answer").innerHTML += "1";
  if (flag === true) {
    bank1 += "1";
  }
  else {
    bank2 += "1";
  }
}

function two() {
  document.getElementById("answer").innerHTML += "2";
  if (flag === true) {
    bank1 += "2";
  }
  else {
    bank2 += "2";
  }
}

function three() {
  document.getElementById("answer").innerHTML += "3";
  if (flag === true) {
    bank1 += "3";
  }
  else {
    bank2 += "3";
  }
}

function four() {
  document.getElementById("answer").innerHTML += "4";
  if (flag === true) {
    bank1 += "4";
  }
  else {
    bank2 += "4";
  }
}

function five() {
  document.getElementById("answer").innerHTML += "5";
  if (flag === true) {
    bank1 += "5";
  }
  else {
    bank2 += "5";
  }
}

function six() {
  document.getElementById("answer").innerHTML += "6";
  if (flag === true) {
    bank1 += "6";
  }
  else {
    bank2 += "6";
  }
}

function seven() {
  document.getElementById("answer").innerHTML += "7";
  if (flag === true) {
    bank1 += "7";
  }
  else {
    bank2 += "7";
  }
}

function eight() {
  document.getElementById("answer").innerHTML += "8";
  if (flag === true) {
    bank1 += "8";
  }
  else {
    bank2 += "8";
  }
}

function nine() {
  document.getElementById("answer").innerHTML += "9";
  if (flag === true) {
    bank1 += "9";
  }
  else {
    bank2 += "9";
  }
}

function zero() {
  document.getElementById("answer").innerHTML += "0";
  if (flag === true) {
    bank1 += "0";
  }
  else {
    bank2 += "0";
  }
}

function add() {

  if (flag === true) {
    document.getElementById("answer").innerHTML += "+";
    opt = "+";
    flag = false;
  }
  else if (flag === false) {
    equal()
    bank2 = "";
    document.getElementById("answer").innerHTML += "+";
    opt = "+";
  }
  console.log(bank1,bank2,opt,flag);
}

function sub() {
console.log(bank1,bank2);
  if (flag === true) {
    flag = false;
    document.getElementById("answer").innerHTML += "-";
    opt = "-";
  }
  else if (flag === false) {
    equal();
    bank2 = "";
    document.getElementById("answer").innerHTML += "-";
    opt = "-";
  }
}

function multi() {
  if (flag === true) {
    document.getElementById("answer").innerHTML += "*";
    opt = "*";
    flag = false;
  }
  else if (flag === false) {
    equal();
    bank2 = "";
    document.getElementById("answer").innerHTML += "*";
    opt = "*";
  }
}

function div() {

  if (flag === true) {
    document.getElementById("answer").innerHTML += "/";
    opt = "/";
    flag = false;
  }
  else if (flag === false) {
    equal();
    bank2 = "";
    document.getElementById("answer").innerHTML += "/";
    opt = "/";
  }
}

function dec() {
  if (flag === true) {
    document.getElementById("answer").innerHTML += ".";
    bank1 += ".";
  }
  else {
    document.getElementById("answer").innerHTML += ".";
    bank2 += ".";
  }
}

function equal() {
  if (opt === "+") {
    console.log(bank1,bank2,opt,flag)
    bank1 = parseFloat(bank1) + parseFloat(bank2);
    document.getElementById("answer").innerHTML = bank1
  }
  else if (opt === "-") {
    console.log(bank1,bank2,opt,flag)
    bank1 = parseFloat(bank1) + parseFloat(bank2);
    document.getElementById("answer").innerHTML = bank1
  }
  else if (opt === "/") {
    bank1 = parseFloat(bank1) + parseFloat(bank2);
    document.getElementById("answer").innerHTML = bank1
  }
  else if (opt === "*") {
    bank1 = parseFloat(bank1) + parseFloat(bank2);
    document.getElementById("answer").innerHTML = bank1
  }
  opt = "";
  // bank2 = "";
}

function clear() {
  document.getElementById("answer").innerHTML = "s";
  bank1 = "";
  bank2 = "";
  opt = "";
  flag = true;
}
