//everything happens in execution context
//execution context => contains the code that is currently ruuning or getting executed
//Global execution context (GEC) => where all the js code that is not inside a function gets executed
//Function execution context (FEC) => fec is created on function call

//execution context is divided into variable environment(memory part) and thread of execution (code execution part)
//Execution has two phases => Creation Phase (Memory) and Execution Phase (Code)

//1. GEC is created
//2. In phase 1 , all the variables, parameters, fucntions etc
//are assigned memory even before the program  runs in this case 
//variable a and function x
//note that all the variables will be assigned undefined
//all the fuctions are stored exactly in the memory
// debugger
// var a = 10
// console.log(a)

// function x() {
//     var b = 20
//     console.log(b)
// }
// x()
// console.log('hello')



//hoisting 

// console.log(a)
// var a = 10

// x()
// function x() {
//     console.log('hello world')
// }

//temporal dead zone => time when u cannot acces variables using
//let and const till their initialization
// let a = 10
// console.log(a)


//Assignment
//Create execution contexts of these examples


//ex 1

var message = 'hello everyone'
console.log(message)

function a() {
    var b = 30
    console.log(b)
}
a()

function sum(num1, num2) {
    let result = num1 + num2
    return result
}
sum()

console.log('bye all')


//ex 2

var a = 'program starts'
console.log(a)

function x() {
    let a = 10
    function y() {
        let b = 20
        console.log(a)
        function z() {
            console.log(b)
        }
        z()
    }
    y()
}
x()

var b = 'program ends'
console.log(b)








