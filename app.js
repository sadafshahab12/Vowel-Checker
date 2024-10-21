function checkVowel() {
  const character = document.getElementById("character").value.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const resultDiv = document.querySelector(".result");
  let isVowel = false;

  for (let i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      isVowel = true;
      break;
    }
  }

  if (isVowel) {
    resultDiv.classList.add("display");
    resultDiv.innerHTML = `It is a vowel.`;
  } else {
    resultDiv.classList.add("display");
    resultDiv.innerHTML = `It is not a vowel.`;
  }
}
