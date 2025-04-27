import { derived, writable } from "svelte/store";

const INGREDIENTS = [
    { "id": 1, "name": "Spaghetti", "type": "Pasta", "unit": "500g pack", "price": 3.20 , "img" : "Spaghetti.jpg"},
    { "id": 2, "name": "Eggs", "type": "Dairy", "unit": "dozen", "price": 7.00, "img" : "Eggs.jpg" },
    { "id": 3, "name": "Pancetta", "type": "Meat", "unit": "100g", "price": 5.90, "img" : "Pancetta.jpg"},
    { "id": 4, "name": "Parmesan Cheese", "type": "Dairy", "unit": "100g", "price": 6.50 , "img" :"ParmesanCheese.jpg"},
    { "id": 5, "name": "Black Pepper", "type": "Spice", "unit": "50g jar", "price": 3.80 , "img" :"BlackPepper.jpg"},
    { "id": 6, "name": "Broccoli", "type": "Vegetable", "unit": "head", "price": 3.50 , "img" :"Broccoli.jpg"},
    { "id": 7, "name": "Carrots", "type": "Vegetable", "unit": "1kg bag", "price": 4.20 , "img" :"Carrots.jpg"},
    { "id": 8, "name": "Bell Peppers", "type": "Vegetable", "unit": "each", "price": 2.70 , "img" :"BellPeppers.jpg"},
    { "id": 9, "name": "Garlic", "type": "Spice", "unit": "bulb", "price": 2.50 , "img" :"Garlic.jpg"},
    { "id": 10, "name": "Soy Sauce", "type": "Condiment", "unit": "250ml bottle", "price": 3.60 , "img" :"SoySauce.jpg"},
    { "id": 11, "name": "Sesame Oil", "type": "Oil", "unit": "100ml", "price": 4.90 , "img" :"SesameOil.jpg"},
    { "id": 12, "name": "Chicken Breast", "type": "Meat", "unit": "500g", "price": 9.80 , "img" :"ChickenBreast.jpg"},
    { "id": 13, "name": "Yogurt", "type": "Dairy", "unit": "500g tub", "price": 5.00 , "img" :"Yogurt.jpg"},
    { "id": 14, "name": "Tomato Puree", "type": "Vegetable", "unit": "400g can", "price": 2.60, "img" : "TomatoPuree.jpg"},
    { "id": 15, "name": "Garam Masala", "type": "Spice", "unit": "40g packet", "price": 3.40 , "img" :"GaramMasala.jpg"},
    { "id": 16, "name": "Onion", "type": "Vegetable", "unit": "1kg bag", "price": 4.00 , "img" :"Onion.jpg"},
    { "id": 17, "name": "Heavy Cream", "type": "Dairy", "unit": "250ml bottle", "price": 3.80 , "img" :"HeavyCream.jpg"},
    { "id": 18, "name": "Tomatoes", "type": "Vegetable", "unit": "500g", "price": 4.60 , "img" :"Tomatoes.jpg"},
    { "id": 19, "name": "Cucumber", "type": "Vegetable", "unit": "each", "price": 3.00 , "img" :"Cucumber.jpg"},
    { "id": 20, "name": "Red Onion", "type": "Vegetable", "unit": "each", "price": 2.10 , "img" :"RedOnion.jpg"},
    { "id": 21, "name": "Kalamata Olives", "type": "Vegetable", "unit": "200g jar", "price": 6.80, "img" : "KalamataOlives.jpg"},
    { "id": 22, "name": "Feta Cheese", "type": "Dairy", "unit": "200g", "price": 7.20 , "img" : "FetaCheese.jpg"},
    { "id": 23, "name": "Olive Oil", "type": "Oil", "unit": "500ml bottle", "price": 9.50 , "img" :"OliveOil.jpg"},
    { "id": 24, "name": "Banana", "type": "Fruit", "unit": "bunch", "price": 3.90 , "img" :"Banana.jpg"},
    { "id": 25, "name": "Flour", "type": "Grain", "unit": "1.5kg bag", "price": 3.40 , "img" :"Flour.jpg"},
    { "id": 26, "name": "Milk", "type": "Dairy", "unit": "2L bottle", "price": 5.10 , "img" :"Milk.jpg"},
    { "id": 27, "name": "Baking Powder", "type": "Baking", "unit": "100g tin", "price": 2.30 , "img" :"BakingPowder.jpg"},
    { "id": 28, "name": "Mushrooms", "type": "Vegetable", "unit": "400g", "price": 5.50 , "img" :"Mushrooms.jpg"},
    { "id": 29, "name": "Vegetable Broth", "type": "Liquid", "unit": "1L carton", "price": 4.70 , "img" :"VegetableBroth.jpg"},
    { "id": 30, "name": "Butter", "type": "Dairy", "unit": "500g block", "price": 7.80 , "img" :"Butter.jpg"}
];

export const ingredientStore = writable(INGREDIENTS);

export function getIngredientById(id){
    return INGREDIENTS.find(item => item.id === id);
}