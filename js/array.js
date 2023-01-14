





//ordered collection
//contiguous memory location

//two syntaxes for creating arrays
// let arr = []

// let arr = new Array(4).fill()
// arr

//arrays and objects

//primitive and non primitve

//boolean , strings and numbers are passed by value

// var  a = 10
// var  b = a

// a = 20
// a
// b
//arrays , functions and objects are passed by reference
// let array1 = [10,20,30]

// let array2 = array1

// array2[1] = 1000
// array1
// array2


//array methods

//last element
//  let array = [10,20,30,40,50]

// let lastIndex = array.length - 1
// console.log(array[lastIndex])

//at
// console.log(array.at(-1))

//pop/push , shift/unshift
// let array = [10,20,30,40,50]

// // array.push(60)
// // array.push(70)
// // array
// // array.pop()
// // array
// console.log(array[2])
// array.shift()
// array.shift()
// array
// // array.unshift(1000)
// // array



//loops

// let array = [10,20,30,40,50]

// // for( let i = 0; i < array.length; i++){
// //     console.log(array[i])
// // }

// for (let index in array){
//     console.log(index)
// }

// for (let num of array){
//     console.log(num)
// }


//add/remove items in the array


//splice
//swiss knife => insert, remove, replace

//array.splice(startIndex, deleteCount, arg1,arg2,arg3.........)

// let array = ['I', 'love','programming','right','now']
// // console.log(array.splice(1,1))
// // array

// array.splice(0,3, "Let's", "dance")
// array


// let array = ['I', 'study','Javascript']

// array.splice(2,0, 'complex', 'language')
// array

// let array = [10,20,50]

// array.splice(-1,0,30,40)
// array

//slice

//syntax is array.slice(startIndex, endIndex) => not including endIndex

// let array = ['h','e','l','l','o']

// console.log(array.slice(1,3))
// console.log(array.slice(-2))
// console.log(array.slice(1))


//iterate

//callbacks => functions passed inside another functions

// let array = [10,20,30,40]

// array.forEach(function(item,index,array){
//     //do something

//     item
//     index
//     array
// })


//Searching in array

//indexOf/lastIndexOf/includes

//indexOf => returns the index if value is found otherwise it returns -1
//includes => returns true if value is found otherwise it returns false

//lastIndexOf => looks the value from right to left
// let array = [10,20,30,false, true]

// console.log(array.indexOf(2000))
// console.log(array.includes(20))

//find /findIndex/ findLastIndex

//find something on the basis of condition

// let users = [
//     {id:1, name:'John', age:20},
//     {id:2, name:'Peter',age:40}
// ]

// // let user = users.find(function(item, index, array){
// //     return item.age == 20
// // })
// // let user = users.find((item) =>  item.id == 1)
// // user
// let user = users.findIndex((item) =>  item.id == 2)
// user


///map , filter and reduce are higher order functions

//map
//transform an array

// let nums = [1,2,3,4,5,6,7,8]

// let transformedArray =  nums.map(function(num){
//     return num*3
// })

// let nums = [1,2,3,4,5,6,7,8]

// let transformedArray =  nums.map((num) => num*2)
// transformedArray

// let array = ['John', 'Peter', 'Jonathan']


// let transformedArray = array.map((item) => item.length )
// transformedArray


//filter 
//returns the array of all the matching elements

// let users = [
//     {id:1, name:'John', age:20},
//     {id:2, name:'Peter',age:40},
//     {id:3, name:'Jonathan',age:40}
// ]

// let someUsers = users.filter((item) => item.id < 3 )
// someUsers


//reduce

//create a single value out of the array


let nums = [10, 20, 30, 40]

// let result = nums.reduce(function (accumulator, current) {
//     accumulator
//     accumulator = accumulator + current
//     return accumulator
// }, 0)
// result

//implicit single liner

// let sum = nums.reduce((acc, curr) => acc + curr, 0)
// sum





