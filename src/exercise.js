const shoppingList = ['Milk', 'Tea', 'Eggs', 'Bread', 'Sugar', 'Coffee']

// 1. Replace CONDITION with a condition that is true while i is less than the length of the shopping list
for (let i = 0; i < shoppingList.length; i++) {
  // 2. Console log the value of i, save the file and run it to see what your loop does
  console.log(i)
}

console.log('\nExercise 3')
// 3. Using the above loop as a reference (don't copy and paste), create a for loop that console logs each item in the shopping list
for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i])
}

console.log('\nExercise 4')
// 4. Create a for loop that console logs an item in the shopping list if it's Eggs
const myItemUpper = 'EGGS'
const myItemLower = 'eggs'

for (let i = 0; i < shoppingList.length; i++) {
  if (
    shoppingList[i].toUpperCase() === myItemUpper ||
    shoppingList[i].toLowerCase() === myItemLower
  ) {
    console.log(shoppingList[i])
  }
}

console.log('\nExercise 5')
// 5. Create a for loop that console logs an item in the shopping list if it is not Eggs
const bannedItem = 'Eggs'

for (let i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] !== bannedItem) {
    console.log(shoppingList[i])
  }
}

console.log('\nExercise 6')
// 6. Create a for loop that console logs "I found Sugar" if the shopping list contains Sugar
const isSugar = 'Sugar'

for (let i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === isSugar) {
    // console.log('I found sugar')
    // console.log("I found", shoppingList[i])
    console.log(`I found ${shoppingList[i]}`) // most preferable ***** KEEP IT DRY = DON'T REPEAT YOURSELF KISS = KEEP IT SIMPLE STUPID
  }
}

console.log('\nExercise 7')
// 7. Create a for loop that starts at the end of the shopping list and runs to the beginning.
// console log each item

for (let i = shoppingList.length - 1; i >= 0; i--) {
  console.log(`Element at index ${i}: ${shoppingList[i]}`)
}

console.log('\nExercise 8')
// 8. Create a for loop that console logs "I found Tea" if the shopping list contains Tea,
// otherwise console log "I don't need Tea". The log should only run once the loop has finished;
// use a variable to keep track of whether you've found Tea in the shopping list
let hasTea

for (let i = 0; i < shoppingList.length; i++) {
  if (shoppingList[i] === 'Tea') {
    hasTea = true
    break
  }
}

if (hasTea) {
  // trufy
  console.log('I found Tea')
} else {
  console.log("I don't need Tea")
}
