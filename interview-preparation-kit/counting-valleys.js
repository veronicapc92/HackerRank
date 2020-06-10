"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
  let level = 0;
  let valleys = 0;

  for (let i = 0; i < n; i++) {
    let direction = 0;
    if (s.charAt(i) === "D") {
      direction--;
      level--;
    } else {
      direction++;
      level++;
    }
    if (level === 0 && direction > 0) {
      valleys++;
    }
  }

  return valleys;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const s = readLine();

  let result = countingValleys(n, s);

  ws.write(result + "\n");

  ws.end();
}
