var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {

    if(this.beans < this.drinkRequirements[drinkType]) {
      console.log("Sorry, we're all out of beans!");
    } else if (this.drinkRequirements.hasOwnProperty(drinkType)) {
      this.beans -= this.drinkRequirements[drinkType];
    } else {
      console.log("Sorry, we don't make " + drinkType);
    }
  },

  buySupplies: function(amount){
    var beanPrice = 5;
    this.beans += amount;
    this.money -= amount * beanPrice;

  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

// Now give the coffeeShop a money property and the ability to buy more supplies with a buySupplies method.
// It should reduce the amount of money depending on how many beans are purchased.
// You decide how much the beans cost ;)