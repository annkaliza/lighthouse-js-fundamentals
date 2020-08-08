//Create a JavaScript file that prints out our ingredients.

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("The contents of ingredients with a while loop:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;

}
// Write a for loop that prints out the contents of ingredients:

console.log("The contents of ingredients with a for loop:");
for (let i = 0; i < ingredients.length; i++) {
 console.log(ingredients[i]);

}

// Write any loop (while or for) that prints out the contents of ingredients backwards:


console.log("The contents of ingredients with a for loop backwards:");
for (let i =ingredients.length - 1; i >= 0; i--) {
 console.log(ingredients[i]);

}