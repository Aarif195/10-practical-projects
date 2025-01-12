function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(cleanStr);

  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(reversedStr);

  return cleanStr === reversedStr;
}

function plaindromeCheker() {
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");

  if (isPalindrome(inputText.value)) {
    result.textContent = `"${inputText.value}" is a Palindrome`;
  } else {
    result.textContent = `"${inputText.value}" is not a Palindrome`;
  }

  result.classList.add("fadein");
  inputText.value = "";
}

document
  .getElementById("chekerButton")
  .addEventListener("click", plaindromeCheker);