var coffeeShop = {
  beans: 40,
  money: 100,

  // drinkRequirements: {
  //   latte: 10,
  //   americano: 5,
  //   doubleShot: 15,
  //   frenchPress: 12
  // },

  drinkRequirements: {
    latte: {price: 10, beanRequirement: 10},
    americano: {price: 5, beanRequirement: 5},
    doubleShot: {price: 15, beanRequirement: 15},
    frenchPress: {price: 12, beanRequirement: 12}
  },

  makeDrink: function (drinkType) {

    // if(this.drinkRequirements.hasOwnProperty(drinkType)) {
    //   if(this.beans < this.drinkRequirements[drinkType].beanRequirement) {
    //     console.log("Sorry, we're all out of beans!");
    //   } else {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    //   }
    // }

  },

  buySupplies: function(amount){
    var beanPrice = 5;
    this.beans += amount;
    this.money -= amount * beanPrice;

  },

  buyDrink: function(drinkType){

    if (this.drinkRequirements.hasOwnProperty(drinkType)) {
      if (this.beans > this.drinkRequirements[drinkType].beanRequirement){
        this.money += this.drinkRequirements[drinkType].price;
        this.makeDrink(drinkType);
      } else {
        console.log("Sorry, we're all out of beans!");
      }
    }

  }

};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");

// This is a business! We need more money to buy more beans!
// Add properties to each drink object so they have a price and a beanRequirement property.
// Then, create a buyDrink method that increased the amount of money the coffeeShop has
// (depending on the drinks price) and invokes the makeDrink method.