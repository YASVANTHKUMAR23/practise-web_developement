
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
