

// console.log('hello everyone')

// //timer would be in ms
// //settimeout is an asynchronous function
// //it will not pause the execution of other functions


setTimeout(function () {
    console.log('timer expires')
}, 0000)
function printOneToFive(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }

}
console.log(printOneToFive(5))



