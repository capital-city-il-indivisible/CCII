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
text.innerHTML = "Days to <br> Midterm Election: ";
text.setAttribute("class","countdown-text");

const textSub = document.createElement("p");
textSub.innerHTML="Nov 3, 2026";
textSub.setAttribute("class", "countdwn-sub-txt");

timer.appendChild(text);
timer.appendChild(numText);
timer.appendChild(textSub);
