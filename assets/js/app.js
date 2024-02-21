// Get DOM elements
const input = document.getElementById("email-input"),
  errorTitle = document.querySelector(".error__title"),
  subscribeBtn = document.getElementById("subscribe"),
  signUpPage = document.getElementById("signup"),
  successPage = document.getElementById("success"),
  gridContainer = document.querySelector(".grid__container"),
  dismissBtn = document.getElementById("dismiss");

// Disable autocomplete for email input
input.setAttribute("autocomplete", "off");

// Function to validate email on subscribe button click
function validateEmail() {
  const email = input.value;

  // Check if the email is valid
  if (email.includes("@") && email.includes(".")) {
    console.log("Valid email:", email);
    // Hide error, remove error class, and show success page
    errorTitle.style.display = "none";
    input.classList.remove("error");
    signUpPage.style.display = "none";
    successPage.style.display = "block";

    // Add success animation class to the success page
    successPage.classList.add("success-animation");
  } else {
    console.error("Invalid email:", email);
    // Show error, add error class to input, and add error animation class
    errorTitle.style.display = "block";
    input.classList.add("error");

    input.classList.add("error-animation");
  }
}

// Function to dismiss success message on dismiss button click
function dismissMessage() {
  successPage.style.display = "none";
  signUpPage.style.display = "block";
  gridContainer.style.display = "grid";

  // Remove animation classes
  successPage.classList.remove("success-animation");
  input.classList.remove("error-animation");
}

// Add event listeners for button clicks
subscribeBtn.addEventListener("click", validateEmail);
dismissBtn.addEventListener("click", dismissMessage);
