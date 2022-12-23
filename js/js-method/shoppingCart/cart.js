const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");

console.log(shoppingCart);
