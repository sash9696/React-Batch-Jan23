//for different conditions we want to perform diff actions

//if operator , ? => question mark or conditional operator


// let time = prompt('What is the entering time?')

//{}
// if (time < 10) {
//     alert('You can come to the class');
// }
// if (time < 10) alert('You can come to the class')

// if (time < 10) {
//     alert('You can come to the class');
// } else if (time < 11) {
//     alert('You can come to the class but stand outside');
// } else { //else is optional
//     alert('Go back to the hostel')
// }

// let accessAllowed;

// let age = prompt('How old are you?', '');

// if (age > 18) {
//     alert('access is allowed')
// } else {
//     alert('access not allowed')
// }

//using conditional oeprator , ?

//let output = condition  ? value1 : value2

let age = prompt('How old are you?', '');

let accessAllowed = age > 18 ? 'access is allowed' : 'access is not allowed'

alert(accessAllowed)