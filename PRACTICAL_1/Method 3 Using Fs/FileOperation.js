import fs from "fs";
import { add, sub, mul, div } from "./Calc.js";
const cal = fs.readFileSync("./input.txt", "utf-8");
const arr = [];

cal.split(/\r?\n/).forEach((line) => {
  arr.push(line);
});

for (let i = 0; i < arr.length / 3; i++) {
  let a = arr[i * 3 + 0];
  let b = arr[i * 3 + 1];
  let c = arr[i * 3 + 2];

  a = parseInt(a);
  b = parseInt(b);

  if (c === "ADD") {
    let d = add(a, b);
    fs.appendFileSync("output.txt", d.toString() + "\n");
  } else if (c === "SUB") {
    let d = sub(a, b);
    fs.appendFileSync("output.txt", d.toString() + "\n");
  } else if (c === "MUL") {
    let d = mul(a, b);
    fs.appendFileSync("output.txt", d.toString() + "\n");
  } else if (c === "DIV") {
    let d = div(a, b);
    fs.appendFileSync("output.txt", d.toString() + "\n");
  }
}
