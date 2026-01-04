const includeCapital = document.getElementById("includeCapital");
const includeSmall = document.getElementById("includeSmall");
const includeSpecial = document.getElementById("includeSpecial");
const includeNumber = document.getElementById("includeNumber");
const totalLength = document.getElementById("totalLength");
const generatedResult = document.getElementById("generatedResult");
const warningMessage = document.getElementById("warning");

function generatePassword() {
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$&()-";
  const numbers = "0123456789";
  const lengthOfPassword = Number(totalLength.value);
  let password = "";
  let whatInclude = "";

  whatInclude += includeCapital.checked ? capitalLetters : "";
  whatInclude += includeSmall.checked ? smallLetters : "";
  whatInclude += includeSpecial.checked ? specialChars : "";
  whatInclude += includeNumber.checked ? numbers : "";

  if (whatInclude.length > 0) {
    for (let i = 0; i < lengthOfPassword; i++) {
      let randomIndex = Math.floor(Math.random() * whatInclude.length);
      password += whatInclude[randomIndex];
    }
    generatedResult.textContent = password;
    warningMessage.textContent = ``;
  } else {
    warningMessage.textContent = "Please select at least one option";
  }
}
