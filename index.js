// Bring in the necessary elements into JS with query selector.
const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert-container");

// Add an event listener to our button
btn.addEventListener("click", () => {
  createPassword();
});

// Add an event listener to our copy icon.
copyIcon.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alert.classList.remove("active");
    setTimeout(() => {
      alert.classList.add("active");
    }, 2000);
  }
  // setTimeout method to make the notification disappear after 2s.
  // If you don't use an if statement, the notification will still appear if you pressed the copy button with no password generated, which is something that is wrong.
});

// Create and define function createPassword

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    // console.log(randomNum, password);
  }
  input.value = password;
  alert.innerText = password + " copied!"; // We don't have access to password in copyPassword function. And since we dont see the notification before copying, we can put the alert.innerText within the createPassword() function.
}

function copyPassword() {
  input.select(); // Select your input value.
  input.setSelectionRange(0, 9999); // Recommended for mobile use.
  navigator.clipboard.writeText(input.value); // To copy our input value to clipboard
}
