//replacement of multiple if checks

// let value = prompt('Enter a value')


// switch (value) {

//     case '0': //if(value == '0')
//         alert('hello world')
//     default:
//         alert('no case satisfied')

// }


//ex2

// let value = 3

// switch (value) {

//     case 1: //if(value == 1)
//         alert('the value is very small')
//         break;
//     case 2:
//         alert('exactly')
//         break;
//     case 3:
//         alert('The value is too big')
//         break;
//     default:
//         alert('wrong number')
// }


let browser = prompt('Enter your browser name', '')

switch (browser) {

    case 'Firefox':
        alert('js engine is spidermonkey')
        break;
    case 'Chrome':
    case 'Edge':
    case 'Opera':
        alert('js engine is v8')
        break;
    default:
        alert('this broswer is not supported')
}
//homework for today
//convert if else 
