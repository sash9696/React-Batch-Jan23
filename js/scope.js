//scope, scopechaining, lexical scope, closures

//scopechaining and lexical scope 
//function can access the value through its lexical environment
//for example parent's lexical scope, grandparent scope until global scope comes
// function x() {
//     let a = 10
//     function y() {
//         let b = 20

//         function z() {
//             let c = 30
//             console.log('hello world')

//         }
//         z()
//     }
//     y()
//     console.log(a)
// }
// x()
// console.log(a)


//closures

//function bundled or attached with its lexical environment


// function x(){
//     let a = 10
//     function y(){
//         console.loga(a)
//     }
//     y()
// }
// x()

//functions as first class citizens

// function x() {

//     let a = 20

//     function y() {
//         console.log(a)
//     }

//     return y
// }
// let newFunc = x()

// ///1000 lines of code
// newFunc()



// function x() {

//     let a = 20

//     function y() {
//         let b = 30

//         function z() {
//             console.log(a)
//             console.log(b)
//         }
//         return z
//     }


//     return y
// }
// let newY = x()

// let newZ = newY()

// newZ() //prints sum


//closures are inner functions that have access to variables and parameters of the outer funnction even after the outer function has returned

//private methods with closures



// var b = 100

// function x() {

//     b = 200

//     return function y() {
//         console.log(b)
//     }
// }

// x()()

// function run(a) {
//     var b = a
//     return function y() {
//         b = b + 10

//         return b
//     }
// }

// const func = run(50) // b = 50
// func() //b = 50 + 10 = 60
// console.log(func()) //b = 60 + 10 = 70



//currying where we can pass multiple arguments inside functions


// function curriedSum(a) {
//     return function y(b) {

//         return function z(c) {
//             return a + b + c
//         }

//     }
// }


// console.log(curriedSum(10)(20)(30)) //sum 60





