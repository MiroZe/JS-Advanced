class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }
  loadProducts(array) {
    array.forEach((product) => {
      let [productName, quantity, price] = product.split(" ");
      price = Number(price);
      quantity = Number(quantity);
      if (this.budgetMoney >= price) {
        this.budgetMoney -= Number(price);
        if (!this.stockProducts[productName]) {
          this.stockProducts[productName] = 0;
        }
        this.stockProducts[productName] += Number(quantity);
        this.history.push(`Successfully loaded ${quantity} ${productName}`);
      } else {
        this.history.push(
          `There was not enough money to load ${quantity} ${productName}`
        );
      }
    });
    return `${this.history.join("\n")}`;
  }
  addToMenu(meal, neededProducts, price) {
    let recipe = [];

    if (!this.menu[meal]) {
      neededProducts.forEach((product) => {
        let [nameIn, quantity] = product.split(" ");
        quantity = Number(quantity);
        let temp = {};
        temp[nameIn] = quantity;
        recipe.push(temp);
        this.menu[meal] = {
          price,
          recipe,
        };
      });

      let arr = Object.keys(this.menu);
      if (arr.length == 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
        return `Great idea! Now with the ${meal} we have ${arr.length} meals in the menu, other ideas?`;
      }
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
  }
  showTheMenu() {
    if (Object.keys(this.menu).length == 0) {
      return `Our menu is not ready yet, please come later...`;
    } else {
      let output = "";
      let menuArr = Object.entries(this.menu);
      menuArr.forEach(
        (menu) => (output += `${menu[0]} - $ ${menu[1].price}\n`)
      );
      return output.trim();
    }
  }

  makeTheOrder(meal) {
    let isAllStored = true;
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    this.menu[meal].recipe.forEach((el) => {
      for (let name in el) {
       
        if (
          (!Object.keys(this.stockProducts).includes(name)) ||
          this.stockProducts[name] < el[name]
        ) {
          isAllStored = false;
          break;
        } else {
          this.stockProducts[name] -= el[name];
        }
      }
    });
    if (isAllStored) {
      this.budgetMoney += this.menu[meal].price;
      

      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    } else {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }
  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
