//------------------------------SUBMIT BUTTON----------------------------------------
const joinDiv = document.querySelector(".join-submit-btn");
const submitBtn = document.createElement("button");
joinDiv.appendChild(submitBtn);
submitBtn.textContent = "Join";
submitBtn.setAttribute("class", "join");
submitBtn.setAttribute("type", "submit");

submitBtn.addEventListener("click", function (event) {
  const form = document.querySelector("form[name='join']");
  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    return;
  }
});

//--------------------------------FORM VALIDATION--------------------------------------

const form = document.querySelector("form[name='join']");
const fields = ["firstName", "lastName", "email", "phone", "zip", "motivation"];
const skillsChecks = document.getElementsByName("skills");
const errorDiv = document.getElementById("optionsError");

  // Live validation for checkboxes
  skillsChecks.forEach((cb) => {
    cb.addEventListener("change", () => {
      const anyChecked = Array.from(skillsChecks).some((cb) => cb.checked);
      if (anyChecked) {
        errorDiv.style.display = "none";
      } else {
        errorDiv.style.display = "block";
      }
    });
  });


const validateName = (name) => /^[\p{L}' -]{1,50}$/u.test(name);
const customValidators = {
  firstName: validateName,
  lastName: validateName,
};

function isFieldValid(input) {
  const value = input.value.trim();

  // 1. HTML validity first
  if (!input.checkValidity()) return false;

  // 2. Custom rule if this field has one
  if (customValidators[input.id]) {
    return customValidators[input.id](value);
  }

  return true;
}

fields.forEach((id) => {
  const input = document.getElementById(id);
  const errorDiv = document.getElementById(id + "Error");

  // Live validation
  input.addEventListener("input", () => {
    if (isFieldValid(input)) {
      errorDiv.style.display = "none";
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      errorDiv.style.display = "block";
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });
});


form.addEventListener("submit", (event) => {
  let valid = true;
  const anyChecked = Array.from(skillsChecks).some((cb) => cb.checked);
  if (!anyChecked) {
    valid = false;
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }

  fields.forEach((id) => {
    const input = document.getElementById(id);
    const errorDiv = document.getElementById(id + "Error");

    if (!isFieldValid(input)) {
      errorDiv.style.display = "block";
      input.classList.add("invalid");
      input.classList.remove("valid");
      valid = false;
    } else {
      errorDiv.style.display = "none";
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  });

  if (!valid) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
