function solve() {
  let textElement = document.getElementById("text");
  let inputText = textElement.value;
  let conventionElement = document.getElementById("naming-convention");
  let conventionName = conventionElement.value;
  let resultElement = document.getElementById("result");

  let wordsArray = inputText.split(" ");

  let result = [];

  if (conventionName === "Camel Case") {
    let newWord = "";
    result = [wordsArray[0].toLowerCase()];
    for (let i = 1; i < wordsArray.length; i++) {
      let word = wordsArray[i];
      let firstChar = word[0].toUpperCase();
      newWord += firstChar;
      for (let m = 1; m < word.length; m++) {
        newWord += word[m].toLowerCase();
      }

      result.push(newWord);
      newWord = "";
    }
  } else if (conventionName === "Pascal Case") {
    let newWord = "";

    for (word of wordsArray) {
      for (let i = 0; i < word.length; i++) {
        if (i === 0) {
          let firstChar = word[i].toUpperCase();
          newWord += firstChar;
        } else {
          newWord += word[i].toLowerCase();
        }
      }
      result.push(newWord);
      newWord = "";
    }
  } else {
    resultElement.textContent = "Error!";
  }

  if (result.length > 0) {
    resultElement.textContent = result.join("");
  }
}