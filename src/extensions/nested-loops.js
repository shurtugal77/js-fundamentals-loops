const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}
console.log(`Result of simpleOne: ${simpleOne}`)
console.log(simpleOne)
console.log('\n')

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

let outerLoopIndex

for (let i = START; i <= END; i++) {
  nestedOne.push([])
  outerLoopIndex = i // Set counter outside of for loops for current item in array

  for (let n = 0; n < outerLoopIndex; n++) {
    nestedOne[outerLoopIndex - 1].push(outerLoopIndex) // push the same number to the outer loop index
  }
}
console.log(`Result of nestedOne: ${nestedOne}`)
console.log(nestedOne)
console.log('\n')

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

// Outer loop  1   2   3   4
//            [1] [2] [3] [4]
// Index       0   1   2   3

outerLoopIndex = 0

for (let i = START; i <= END; i++) {
  nestedTwo.push([])
  outerLoopIndex = i

  for (let x = outerLoopIndex; x > 0; x--) {
    nestedTwo[outerLoopIndex - 1].push(x)
  }
}
console.log(`Result of nestedTwo: ${nestedTwo}`)
console.log(nestedTwo)
console.log('\n')

// Expected $[2][2] = 2 to equal 1.
// Expected $[3][2] = 3 to equal 2.

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

outerLoopIndex = 0
let innerLoopIndex

for (let i = START; i <= END; i++) {
  deepOne.push([])
  outerLoopIndex = i

  for (let n = 0; n < outerLoopIndex; n++) {
    deepOne[outerLoopIndex - 1].push([])
    innerLoopIndex = n

    for (let x = 0; x < innerLoopIndex + 1; x++) {
      deepOne[outerLoopIndex - 1][innerLoopIndex].push(outerLoopIndex)
    }
  }
}

console.log(`Result of deepOne: ${deepOne}`)
console.log(deepOne)
console.log('\n')

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

outerLoopIndex = 0
innerLoopIndex = 0

for (let i = START; i <= END; i++) {
  deepTwo.push([])
  outerLoopIndex = i

  for (let n = 0; n < outerLoopIndex; n++) {
    deepTwo[outerLoopIndex - 1].push([])
    innerLoopIndex = n

    for (let x = 0; x < innerLoopIndex + 1; x++) {
      deepTwo[outerLoopIndex - 1][innerLoopIndex].push(x + 1)
    }
  }
}

console.log(`Result of deepTwo: ${deepTwo}`)
console.log(deepTwo)
console.log('\n')

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

outerLoopIndex = 0
innerLoopIndex = 0
let sumOfSquares
let numbersInArray

for (let i = START; i <= END; i++) {
  deepThree.push([])
  outerLoopIndex = i

  for (let n = 0; n < outerLoopIndex; n++) {
    deepThree[outerLoopIndex - 1].push([])
    innerLoopIndex = n
    sumOfSquares = 0
    numbersInArray = 0

    for (let x = 0; x < innerLoopIndex + 1; x++) {
      // deepThree[outerLoopIndex - 1][innerLoopIndex].push(x + 1)
      // sumOfSquares += (deepThree[outerLoopIndex - 1][innerLoopIndex][x])**2

      sumOfSquares += (x + 1) ** 2
      numbersInArray += 1
    }
    deepThree[outerLoopIndex - 1][innerLoopIndex] = [
      sumOfSquares / numbersInArray
    ]
  }
}

console.log(`Result of deepThree: ${deepThree}`)
console.log(deepThree)
console.log('\n')

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
