function addAndRemove(input) {
  let initial = 1;
  let result = [];

  for (let element of input) {
    let currentNumber = initial++;
    if (element === "add") {
      result.push(currentNumber);
    } else {
      result.pop();
    }
  }
  if (result.length > 0) {
    result.forEach((el) => console.log(el));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "add", "add"]);
