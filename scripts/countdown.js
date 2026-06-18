const timer = document.getElementById("timer");
const electionDay = new Date ("2026-11-03T00:00:00");
const present = new Date();

const diff = electionDay - present;
const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
let daysString = String(daysLeft);
const numText = document.createElement("p");
numText.innerHTML = daysString;
console.log('Daystring: ', daysString);
console.log(daysLeft);
numText.setAttribute("class", "days-left");

const text = document.createElement("p");
text.innerHTML="Days to Election: ";
text.setAttribute("class","countdown-text");

timer.appendChild(text);
timer.appendChild(numText);
