window.addEventListener("load", solve);

function solve() {
  const inputs = Array.from(document.querySelectorAll("input, textarea"));
  const [modelInput, yearInput, textInput, priceInput] = inputs;
  const addButton = document
    .getElementById("add")
    .addEventListener("click", add);
  const tbody = document.getElementById("furniture-list");
  const totalSumField = document.querySelector(".total-price");
  let sum = 0;

  function add(e) {
    e.preventDefault();
    const values = {
      model: modelInput.value,
      year: yearInput.value,
      description: textInput.value,
      price: priceInput.value,
    };
    let isEmpty = true;
    inputs.forEach((el) => {
      if (el.value == "") {
        isEmpty = false;
      }
    });
    if (!isEmpty || yearInput.value < 0 || priceInput.value < 0) {
      return;
    }
    const tr = createEl("tr", "", "info");
    const td1 = createEl("td", values.model);
    const td2 = createEl("td", `${Number(values.price).toFixed(2)}`);
    const moreInfoBtn = createEl("button", "More Info", "moreBtn");
    const buyBtn = createEl("button", "Buy it", "buyBtn");
    const td3 = createEl("td");
    td3.appendChild(moreInfoBtn);
    td3.appendChild(buyBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    const tr2 = createEl("tr", "", "hide");
    tr2.style.dysplay = "none";
    const td4 = createEl("td", `Year: ${values.year}`);
    const td5 = createEl("td", `Description: ${values.description}`);
    td5.colspan = "3";
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tbody.appendChild(tr);
    tbody.appendChild(tr2);
    inputs.forEach((el) => (el.value = ""));
    moreInfoBtn.addEventListener("click", show);
    function show(e) {
      if (moreInfoBtn.textContent === "More Info") {
        tr2.style.display = "contents";
        moreInfoBtn.textContent = "Less Info";
      } else {
        moreInfoBtn.textContent = "More Info";
        tr2.style.display = "none";
      }
    }
    buyBtn.addEventListener("click", buy);
    function buy(e) {
      sum += Number(values.price);
      tr.remove();
      tr2.remove();
      totalSumField.textContent = sum.toFixed(2);
    }

    function createEl(type, value, className) {
      let el = document.createElement(type);
      if (value) {
        el.textContent = value;
      }
      if (className) {
        el.className = className;
      }
      return el;
    }
  }
}
