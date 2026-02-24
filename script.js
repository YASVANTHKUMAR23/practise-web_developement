
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
const todoCount = document.getElementById("todo-count");

let todos = [];
let currentFilter = "all";

try {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
} catch (err) {
  todos = [];
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  todoList.innerHTML = "";
  document.getElementById("empty-msg").style.display = todos.length === 0 ? "block" : "none";

  todos.forEach((todo, index) => {
    if (currentFilter === "active" && todo.done) return;
    if (currentFilter === "done" && !todo.done) return;
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.created) li.title = "Added " + new Date(todo.created).toLocaleString();
    if (todo.done) li.classList.add("done");

    li.addEventListener("click", () => toggleTodo(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Delete this task?")) {
        deleteTodo(index);
      }
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });

  todoCount.textContent = todos.length + (todos.length === 1 ? " task" : " tasks");
  saveTodos();
}

function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") {
    alert("Please type a task first");
    return;
  }
  const isDuplicate = todos.some((t) => t.text.toLowerCase() === text.toLowerCase());
  if (isDuplicate) {
    alert("That task already exists");
    return;
  }
  todos.push({ text: text, done: false, created: Date.now() });
  todoInput.value = "";
  todoInput.focus();
  render();
}

function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

render();

document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll(".filters button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
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

// ---------- Footer clock ----------
function updateClock() {
  const el = document.getElementById("clock");
  if (el) el.textContent = new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

// ---------- Dark mode ----------
const themeBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("theme") || "light";
} catch (err) {}
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const next = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (err) {}
});

// ---------- Message character counter ----------
const messageBox = document.getElementById("message");
const charCount = document.getElementById("char-count");

messageBox.addEventListener("input", () => {
  charCount.textContent = messageBox.value.length + " / 200";
});

document.getElementById("contact-form").addEventListener("reset", () => {
  charCount.textContent = "0 / 200";
});

// ---------- Contact form ----------
const contactForm = document.getElementById("contact-form");

function setError(id, message) {
  document.getElementById(id + "-error").textContent = message;
  document.getElementById(id).classList.toggle("invalid", message !== "");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  if (name.length < 2) {
    setError("name", "Name must be at least 2 characters");
    valid = false;
  } else {
    setError("name", "");
  }

  if (!emailPattern.test(email)) {
    setError("email", "Enter a valid email address");
    valid = false;
  } else {
    setError("email", "");
  }

  if (message.length < 10) {
    setError("message", "Message must be at least 10 characters");
    valid = false;
  } else {
    setError("message", "");
  }

  return valid;
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("form-status");
  if (validateForm()) {
    status.textContent = "Thanks! Your message was validated.";
    contactForm.reset();
  } else {
    status.textContent = "";
  }
});

// ---------- Greeting ----------
function showGreeting() {
  const hour = new Date().getHours();
  let text = "Good evening";
  if (hour < 12) text = "Good morning";
  else if (hour < 18) text = "Good afternoon";
  document.getElementById("greeting").textContent = text + "! Keep practising.";
}

showGreeting();

// ---------- Shortcut: press / to focus the task input ----------
document.addEventListener("keydown", (e) => {
  const typing = ["INPUT", "TEXTAREA"].includes(e.target.tagName);
  if (e.key === "/" && !typing) {
    e.preventDefault();
    todoInput.focus();
  }
});

// ---------- Fetch users ----------
const loadUsersBtn = document.getElementById("load-users");
const userList = document.getElementById("user-list");
const userStatus = document.getElementById("user-status");

async function loadUsers() {
  userStatus.textContent = "Loading...";
  userStatus.classList.remove("error-text");
  loadUsersBtn.disabled = true;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const users = await response.json();

    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name + " (" + user.email + ")";
      userList.appendChild(li);
    });
    userStatus.textContent = "Loaded " + users.length + " users";
  } catch (err) {
    userStatus.textContent = "Could not load users: " + err.message;
    userStatus.classList.add("error-text");
  } finally {
    loadUsersBtn.disabled = false;
  }
}

loadUsersBtn.addEventListener("click", loadUsers);
// ---------- end fetch users ----------

// ---------- Search loaded users ----------
const userSearch = document.getElementById("user-search");

userSearch.addEventListener("input", () => {
  const query = userSearch.value.toLowerCase();
  userList.querySelectorAll("li").forEach((li) => {
    li.style.display = li.textContent.toLowerCase().includes(query) ? "" : "none";
  });
});
