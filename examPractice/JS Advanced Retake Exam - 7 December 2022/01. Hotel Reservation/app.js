window.addEventListener("load", solve);

function solve() {
  const inputs = Array.from(document.querySelectorAll("form input"));
  let [firstNameInput, lastNameInput, inDateInput, outDateInput, guestInput] =
    inputs;
  const nextBtn = document.getElementById("next-btn");
  const finalh1 = document.getElementById("verification");

  const infoListUl = document.querySelector(".info-list");
  const confirmListUl = document.querySelector(".confirm-list");

  nextBtn.addEventListener("click", add);

  function add(e) {
    e.preventDefault();
    const numberIn = Number(inDateInput.value.split("-").join(""));
    const numberOut = Number(outDateInput.value.split("-").join(""));
    if (
      !firstNameInput.value ||
      !lastNameInput.value ||
      !inDateInput.value ||
      !outDateInput.value ||
      !guestInput.value ||
      numberIn > numberOut
    ) {
      return;
    }
    const values = {
      "first-name": firstNameInput.value,
      "last-name": lastNameInput.value,
      "date-in": inDateInput.value,
      "date-out": outDateInput.value,
      "people-count": guestInput.value,
    };
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const inDate = inDateInput.value;
    const outDate = outDateInput.value;
    const guest = guestInput.value;
    const li = document.createElement("li");
    li.className = "reservation-content";
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;
    const p1 = document.createElement("p");
    p1.textContent = `From date: ${inDate}`;
    const p2 = document.createElement("p");
    p2.textContent = `To date: ${outDate}`;
    const p3 = document.createElement("p");
    p3.textContent = `For ${guest} people`;
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    const continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    infoListUl.appendChild(li);
    inputs.forEach((el) => (el.value = ""));
    nextBtn.disabled = true;

    editBtn.addEventListener("click", edit);
    function edit(e) {
      e.preventDefault();
      inputs.forEach((input) => (input.value = values[input.id]));
      li.remove();
      nextBtn.disabled = false;
    }
    continueBtn.addEventListener("click", confirm);
    function confirm(e) {
      e.preventDefault();
      editBtn.remove();
      continueBtn.remove();
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.className = "cancel-btn";
      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirm";
      confirmBtn.className = "confirm-btn";
      li.appendChild(cancelBtn);
      li.appendChild(confirmBtn);
      confirmListUl.appendChild(li);
      cancelBtn.addEventListener("click", () => {
        nextBtn.disabled = false;
        li.remove();
        finalh1.className = "reservation-cancelled";
        finalh1.textContent = "Cancelled.";
      });
      confirmBtn.addEventListener("click", () => {
        nextBtn.disabled = false;
        li.remove();
        finalh1.className = "reservation-confirmed";
        finalh1.textContent = "Confirmed.";
      });
    }
  }
}
