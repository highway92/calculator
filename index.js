const input = document.querySelector(".input");
const output = document.querySelector(".output");
const calculator = document.querySelector(".calculator");

function typeValue() {
  let e = window.event;

  if (
    e.target.value !== "C" &&
    e.target.value !== "/" &&
    e.target.value !== "*" &&
    e.target.value !== "+" &&
    e.target.value !== "-" &&
    e.target.value !== "="
  ) {
    output.value += parseInt(e.target.value);
    output.value = eval(output.value);
  } else if (e.target.value === "C") {
    output.value = "";
  } else if (e.target.value === "=") {
    output.value = eval(output.value);
  } else if (e.target.value === "-") {
    output.value += "-";
  } else if (e.target.value === "+") {
    output.value += "+";
  } else if (e.target.value === "*") {
    output.value += "*";
  } else if (e.target.value === "/") {
    output.value += "/";
  }
}
