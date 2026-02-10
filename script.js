
"use strict";

function practise() {
    return "Hello dude, how are you ";
}

function swap_numbers() {
    let a = 10;
    let b = 15;
    let temp;

    temp = b;
    b = a;
    a = temp;

    return `a = ${a}, b = ${b}`;
}

function grade_cal() {
    const mark = 90;
    let grade;

    if (mark == 100) grade = "Centum";
    else if (mark >= 90) grade = "A";
    else if (mark > 75) grade = "B";
    else if (mark > 50) grade = "C";
    else grade = "Concentrate On Studies...";

    return grade;
}

function looping() {
    const arr = [4, 5, 6];

    for (const array of arr) {
        return array;
    }
}


// SELECT HTML ELEMENTS ONLY ONCE

let btn = document.getElementById("button");
let form = document.querySelector(".input");
let input = document.getElementById("nameinp");
let output = document.getElementById("Result");

console.log("Button:", btn);
console.log("Form:", form);
console.log("Input:", input);


// BUTTON EVENT

btn.addEventListener("click", () => {

    let result1 = practise();
    let result2 = swap_numbers();
    let result3 = grade_cal();
    let result4 = looping();

    output.innerHTML = `
        1. ${result1}<br>
        2. ${result2}<br>
        3. ${result3}<br>
        4. ${result4}
    `;

    output.style.display = "block";
});


// FORM AND LOCAL STORAGE

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let forminp = input.value;

    localStorage.setItem("name", JSON.stringify(forminp));

    let saveditem = JSON.parse(localStorage.getItem("name"));

    console.log(saveditem);

    output.innerHTML = `Welcome ${saveditem}`;

    output.style.display = "block";

});

const MAX_COUNT = 100;
const MIN_COUNT = -100;
let count = 0;
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

if (incBtn && decBtn && countEl) {
  incBtn.addEventListener("click", () => {
    count = Math.min(count + 1, MAX_COUNT);
    countEl.textContent = count;
  });
  decBtn.addEventListener("click", () => {
    count = Math.max(count - 1, MIN_COUNT);
    countEl.textContent = count;
  });
}

// Press "r" to reset the counter
document.addEventListener("keydown", (e) => {
  if (e.key === "r" && countEl && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
    count = 0;
    countEl.textContent = count;
  }
});

// ---------- Todo list ----------
const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") {
    alert("Please type a task first");
    return;
  }
  const li = document.createElement("li");
  li.textContent = text;
  todoList.appendChild(li);
  todoInput.value = "";
}

todoBtn.addEventListener("click", addTodo);
// ---------- end todo list ----------

// ---------- Counter reset button ----------
const resetBtn = document.getElementById("reset");

if (resetBtn && countEl) {
  resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.textContent = count;
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
