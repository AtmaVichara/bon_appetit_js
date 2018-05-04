import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"



describe("Pantry", () => {
  const pantry = new Pantry()
  const r = new Recipe()
  describe("attributes", () => {
    it("has stock attribute", () => {
      expect(pantry.stock).is.a('object')
    })
  })

  describe("functions", () => {
    describe("stockCheck functionality", () => {
      it("should return stock of food", () => {
        expect(pantry.stockCheck("Cheese")).to.eq(0)
      })
    })

    describe("restock functionality", () => {
      it("adds food and quantity to stock", () => {
        pantry.restock("Cheese", 10)

        expect(pantry.stock["Cheese"]).to.equal(10)

        pantry.restock("Cheese", 20)

        expect(pantry.stock["Cheese"]).to.equal(30)
      })
    })

    describe("addToShoppingList functionality", () => {
      it("adds ingredients to shoppingList", () => {
        r.addIngredient("Cheese", 20)
        r.addIngredient("Flour", 20)

        pantry.addToShoppingList(r)

        expect(pantry.shoppingList["Cheese"]).to.equal(20)
        expect(pantry.shoppingList["Flour"]).to.equal(20)

        const newR = new Recipe("Spaghetti")
        newR.addIngredient("Noodles", 10)
        newR.addIngredient("Sauce", 10)
        newR.addIngredient("Cheese", 5)
        pantry.addToShoppingList(newR)

        expect(pantry.shoppingList["Cheese"]).to.equal(25)
        expect(pantry.shoppingList["Flour"]).to.equal(20)
        expect(pantry.shoppingList["Noodles"]).to.equal(10)
        expect(pantry.shoppingList["Sauce"]).to.equal(10)
      })
    })
  })
})
