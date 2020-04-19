// Assignment Code
var passwordGenerate = prompt("Please select the length of the password", "enter 8 or 128 characters");

if (passwordGenerate !== "8" && passwordGenerate !== "128") {
  alert("please enter a valid character");
} else {
  var password = document.createElement(passwordGenerate);
  password.textContent = "Generate password" + passwordGenerate;
  document.body.appendChild(password);
}

button.onclick=function() {
// Write password to the #password input
password (); 
}
function password() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

value();

var nextPassword = confirm("Would you like to add another tag?");
if (nextPassword === true) {
  var nextpasswordGenerate = prompt("ABCDEFGHIJKLMNOPQRSTUVWXYZ" && passwordGenerate !== "abcdefghijklmnopqrstuvwxyz" && passwordGenerate !== "123456789" && passwordGenerate)
  if (nextpasswordGenerate !== "ABCDEFGHIJKLMNOPQRSTUVWXYZ" && nextpasswordGenerate !== "abcdefghijklmnopqrstuvwxyz" && nextpasswordGenerate !== "123456789" && nextpasswordGenerate !== "!@#$%^&*?+") {
    alert("please enter a valid password");
  } else {
    var secondpasswordGenerate = document.createElement(secondpasswordGenerate);
    secondpasswordGenerate.textContent = "This is our second tag via prompts, it's a " + secondpasswordGenerate;
    document.body.appendChild(secondpasswordGenerate);
  }
}
var generateBtn;
// Add event listener to generate button
generateBtn.addEventListener("click", function(writePassword) {
  writePassword.preventDefault();
  generate = generateBtn.value;
  document.querySelector(".wrapper").style.fontFamily = generate;
});