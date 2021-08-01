const emailInputElement = document.getElementById("email");
const submitBtn = document.getElementById("submit");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener("click", function () {
  if (!isValidEmail(emailInputElement.value)) {
    emailInputElement.style.border = "1px solid hsl(354, 100%, 66%)";
    emailInputElement.nextElementSibling.textContent = "Please provide a valid email address";
  } else {
    emailInputElement.style.border = "1px solid hsl(223, 100%, 88%)";
    emailInputElement.nextElementSibling.textContent = "";
  }
});
