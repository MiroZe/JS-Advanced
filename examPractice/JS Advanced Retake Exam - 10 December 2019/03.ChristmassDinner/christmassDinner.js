class ChristmasDinner {
  constructor(budget) {
    if (+budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }

    this.budget = +budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(array) {
    const product = array[0];
    const price = array[1];
    if (+price > this.budget) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.products.push(product);
      this.budget -= price;
      return `You have successfully bought ${product}!`;
    }
  }
  recipes(reciepeObj) {
    
    let allProductsHave = true;
    reciepeObj.productsList.forEach((element) => {
      if (!this.products.includes(element)) {
          allProductsHave = false;
        throw new Error("We do not have this product");
      }
    });
    if (allProductsHave) {
      let currentReciepe = {
        recipeName: reciepeObj.recipeName,
        productsList: reciepeObj.productsList
      };
      this.dishes.push(currentReciepe);
    }
    return `${reciepeObj.recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    let current = [];

    let check = this.dishes.find((el) => el.recipeName === dish);
    if (!check) {
      throw new Error("We do not have this dish");
    }

    if (this.guests[name]) {
      throw new Error("This guest has already been invited");
    } else {
      this.guests[name] = dish;

      return `You have successfully invited ${name}!`;
    }
  }
  showAttendance() {
    let output = "";
    for (const key in this.guests) {
       
      let dish = this.guests[key];
      let name = key;
      let products = [];
      this.dishes.forEach((el) => {
        if (el.recipeName === dish) {
          products = el.productsList;
        }
      });
      output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
    }
    return output.trim();
  }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
