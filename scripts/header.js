// LOGO
const logo = document.getElementById("logo");

const logoPic = document.createElement("picture");
const logoImg = document.createElement("img");
const logoLarge = document.createElement("source");

logoPic.appendChild(logoLarge);
logoPic.appendChild(logoImg);

logoPic.setAttribute("class", "logo-pic");


logoImg.setAttribute("class", "logo");
logoImg.setAttribute("src", "/images/ccii-logo-small.webp");
logoImg.setAttribute("alt", "CCII logo");
// logoImg.setAttribute("height", "30px");


logoLarge.setAttribute("srcset", "/images/ccii-svg-logo-long-vect1.svg");
logoLarge.setAttribute("media", "(min-width: 619px)");

logo.appendChild(logoPic);

// SOCIAL MEDIA ICONS
const socials = document.getElementById("socials");
const smallSocials = document.getElementById("small-socials");
const socialUL = document.createElement("ul");
const smlSocialUL = document.createElement("ul");

socials.appendChild(socialUL);
smallSocials.appendChild(smlSocialUL);
const iconArray = [
  {
    href: "https://www.facebook.com/p/Capital-City-Illinois-Indivisible-61574735680682/",
    src: "/images/icons8-facebook-logo-50.svg",
    alt: "Facebook icon",
  },
  {
    href: "https://bsky.app/profile/ccilindivisible.bsky.social",
    src: "/images/icons8-bluesky-logo-48.svg",
    alt: "Bluesky icon",
  },
  {
    href: "https://www.instagram.com/ccilindivisible/",
    src: "/images/icons8-instagram-50.svg",
    alt: "Instagram icon",
  },
  {
    href: "https://www.threads.com/@ccilindivisible",
    src: "/images/threads.png",
    alt: "Threads icon",
  },
];

function renderIcons(ul){
  iconArray.forEach((icon) => {
  const socialLink = document.createElement("a");
  const socialSVG = document.createElement("img");
  const socialLI = document.createElement("li");

  socialLink.appendChild(socialSVG);

  socialLink.setAttribute("href", `${icon.href}`);
  socialSVG.setAttribute("src", `${icon.src}`);
  socialSVG.setAttribute("alt", `${icon.alt}`);
  socialLink.setAttribute("target", "_blank");
  socialLink.setAttribute("rel", "noopener noreferrer");
  socialSVG.className="social-link";

  socialLI.appendChild(socialLink);
  ul.appendChild(socialLI);
});
}

renderIcons(socialUL);
renderIcons(smlSocialUL);




//Small social media icons



//DONATE BUTTON

const donate = document.getElementById("big-donate-button");
const donateSml = document.getElementById("small-donate");

function renderDonateBtn(button) {
  const donateBtn = document.createElement("button");
  donateBtn.setAttribute("class", "donate-btn");

  donateBtn.textContent = "Donate";

  button.appendChild(donateBtn);

  donateBtn.setAttribute(
    "onclick",
    "window.open('https://secure.actblue.com/donate/indivisiblecc1335522274','_blank');"
  );
}

renderDonateBtn(donate);
renderDonateBtn(donateSml);




//SEARCH BAR

// const search = document.getElementById("search");

// const searchForm = document.createElement("form");
// searchForm.className = "search-form";
// searchForm.setAttribute("action", "/search");
// searchForm.setAttribute("method", "GET");
// const input = document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("name", "q");
// input.setAttribute("placeholder", "Search...");
// input.className="search-bar";

// const searchIcon = document.createElement("img");
// searchIcon.src = "images/search-icon.svg";
// searchIcon.alt = "Search";
// searchIcon.className = "search-icon";


// search.appendChild(searchForm);
// searchForm.appendChild(input);
// searchForm.appendChild(searchIcon);

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const query = input.value.trim();
//   if (query) {
//     // Redirect to search results page
//     globalThis.location.href = `/search.html?q=${encodeURIComponent(query)}`;
//   }
// });

// searchIcon.addEventListener("click", () => {
//   searchForm.requestSubmit(); 
// });

//     const params = new URLSearchParams(globalThis.location.search);
//     const query = params.get("q");

//     const resultsDiv = document.getElementById("results");

//     if (!query) {
//       resultsDiv.textContent = "Please enter a search term.";
//     } else {
//       resultsDiv.textContent = `Search results for: "${query}"`;

//       // TODO: Add logic to show real results here
//     }


