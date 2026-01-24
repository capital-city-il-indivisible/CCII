let footer = document.getElementById("footer-content");

const today = new Date();
const year = today.getFullYear();

footer.innerHTML = ` Email us at <a href="mailto:capitalcityillinoisindivisible@gmail.com">capitalcityillinoisindivisible@gmail.com</a><br><br> Capital City Illinois Indivisible | Springfield, IL | © ${year} <br><br> <a href="attributions.html">Attributions</a> `;

