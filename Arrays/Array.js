// const arr1 = [1,2,3,4]
// console.log(arr1)

// const arr2 = new Array(1,2,3,4)
// console.log(arr2)


// const arr = [0,1,2,3,4,5]

// functions of Array

// console.log(arr.length)
// arr.push(6)
// console.log(arr)
// arr.push(7)
// console.log(arr)
// arr.pop()
// arr.pop()
// console.log(arr)

// console.log(arr.includes(3))
// console.log(arr.indexOf(4))

// arr.unshift(8)
// console.log(arr)
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr)


// slice vs splice            very important

const arr = [0,1,2,3,4,5,6]

console.log(`Original Array is : ${arr}`)

console.log(`Array after performing SLICE operation : ${arr.slice(2,5)}`)

console.log(`Original Array is : ${arr}`) // output clearly shows that slice function doesn't modify the original array

console.log(`Array after performing SPLICE operation : ${arr.splice(2,5)}`)

console.log(`Original Array is : ${arr}`) // output clearly shows that splice function modifies the original array.