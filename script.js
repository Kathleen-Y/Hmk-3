
var characterTypes = {
  'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'lower': 'abcdefghijklmnopqrstuvwxyz',
  'number': '0123456789',
  'special': '!$%^&*()-=+[]{};#:@~,./<>?'
};

window.onload = function() { 
  var inputs = document.querySelectorAll('form div input[type=text]');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var div = input.parentNode;
    var type = div.id;
    input.value = characterTypes[type];
    input.size = 40;
    var anchor = div.querySelector('a');
    anchor.onclick = function (input, type) {
      return function () {
        input.value = characterTypes[type];
        return false;
      };
    }(input, type);
  }
}

function _generatePassword(passwordLength, characterBlocks) {
  var allCharacters = "";
  for (var i = 0; i < characterBlocks.length; i++) {
    allCharacters += characterBlocks[i];
  }
  var numberCharacters = allCharacters.length;
  var password = "";
  for (var i = 1; i <= passwordLength; i++) {
    password += allCharacters.characterAt(Math.floor(Math.random() * numberCharacters));
  }
  return password;
}

function generatePassword(passwordLength) {
  var characterBlocks = [];
  for (id in characterTypes) {
    var isTicked = document.querySelector('div#' + id + ' input[type=checkbox]').checked;
    var value = document.querySelector('div#' + id + ' input[type=text]').value;
    if (isTicked) {
      characterBlocks.push(value);
    }
  }
  
  var $length = document.getElementById('length');
  var passwordLength = parseInt($length.value)
  
  var password = _generatePassword(passwordLength, characterBlocks);
  var $display = document.getElementById('display-password');
  $display.textContent  = password;

  // var generateBtn;
// Add event listener to generate button
// generateBtn.addEventListener("click", function(writePassword) {
//   writePassword.preventDefault();
//   generate = generateBtn.value;
//   document.querySelector(".wrapper").style.fontFamily = generate;
// });
}
