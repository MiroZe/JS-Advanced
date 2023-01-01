function colorize() {
  let rowElements = document.querySelectorAll("tr");

  let arr = Array.from(rowElements);
  arr.forEach((element, index) => {
    if (index % 2 !== 0) {
      element.style.backgroundColor = "teal";
    }
  });
}
