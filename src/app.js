/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let conc = [who, action, what, when];

  let excuse = "";

  for (let i = 0; i <= conc.length - 1; i++) {
    let num = Math.floor(Math.random() * conc[i].length);

    excuse = excuse + " " + conc[i][num];
  }

  document.getElementById("excuse").innerText = excuse;

  console.log(excuse);
};
