function solve() {
  const taskInput = document.getElementById("task");
  const descriptinInput = document.getElementById("description");
  const dateInput = document.getElementById("date");
  const addButton = document.getElementById("add");
  const openSection = document.querySelector(
    ".wrapper section:nth-child(2) div:nth-child(2)"
  );

  addButton.addEventListener("click", add);

  function add(e) {
    e.preventDefault();
    if (
      taskInput.value !== "" &&
      descriptinInput.value !== "" &&
      dateInput.value !== ""
    ) {
      let article = document.createElement("article");
      let h3 = document.createElement("h3");
      h3.textContent = taskInput.value
      let p1 = createElement("p");
      p1.textContent = `Description: ${descriptinInput.value}`
      let p2 = createElement("p");
      p2.textContent = `Due Date: ${dateInput.value}`
      let div = createElement("div");
      article.appendChild(h3);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(div);
      openSection.appendChild(article);
      taskInput.value = "";
      descriptinInput.value = "";
      dateInput.value = "";
      const btnOne = article.querySelectorAll("button")[0];
      const btnTwo = article.querySelectorAll("button")[1];
      btnOne.addEventListener("click", inProgress);
      btnTwo.addEventListener("click", () => {
        article.remove();
      });
    }

    function inProgress(e) {
      const inProgressSection = document.querySelector(
        ".wrapper section:nth-child(3) div:nth-child(2)"
      );
      const deleteButton = e.target.parentElement.querySelector(".red");
      inProgressSection.appendChild(e.target.parentElement.parentElement);
      deleteButton.className = "orange";
      deleteButton.textContent = "Finish";
      e.target.className = "red";
      e.target.textContent = "Delete";
      e.target.addEventListener("click", () => {
        e.target.parentElement.parentElement.remove();
      });
      deleteButton.addEventListener("click", () => {
        const completeSection = document.querySelector(
          ".wrapper section:nth-child(4) div:nth-child(2)"
        );
        completeSection.appendChild(e.target.parentElement.parentElement);

        e.target.parentElement.remove();
      });
    }
    function deleteArticle(e) {
      e.target.parentElement.parentElement.remove();
    }
  }

  function createElement(element, input) {
    const newElement = document.createElement(element);
    if (element == "div") {
      newElement.className = "flex";
      const greenBtn = document.createElement("button");
      greenBtn.className = "green";
      greenBtn.textContent = "Start";
      const redBtn = document.createElement("button");
      redBtn.className = "red";
      redBtn.textContent = "Delete";
      newElement.appendChild(greenBtn);
      newElement.appendChild(redBtn);
    } 
    return newElement;
  }
}
