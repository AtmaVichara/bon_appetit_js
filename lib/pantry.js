export default class Pantry {
  constructor () {
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck (food) {
    if(!this.stock[food]) {
      return 0
    } else {
      return this.stock[food]
    }
  }

  restock (food, quantity) {
    if(!this.stock[food]) {
      this.stock[food] = 0
      this.stock[food] += quantity
    } else {
      this.stock[food] += quantity
    }
  }

  addToShoppingList (recipe) {
    for(let food of Object.keys(recipe.ingredients)) {
      if(this.shoppingList.hasOwnProperty(food)) {
        this.shoppingList[food] += recipe.ingredients[food]
      } else {
        this.shoppingList[food] = recipe.ingredients[food]
      }
    }
  }
}
