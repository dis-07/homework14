/////       #1

const user = localStorage.getItem('userData');

const person = JSON.parse(user);

if (user !== null) {
    console.log(person)
} else {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((result) => localStorage.setItem('userData', JSON.stringify(result)))
}


/////       #2

// function isValidDateFormat(str) {

//     // const date = new Date(str);
//     let regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/

//     return regexp.test(str);
// }

// console.log(isValidDateFormat("2012/09/18 12:10"));
// console.log(isValidDateFormat("2012:09:18 12:10"));

// ///////     #3

// function isAfter(date, dateToCompare) {

//     const dateArter = new Date(date);
//     const dateBecame = new Date(dateToCompare);

//     return dateArter > dateBecame;
// }
// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
// console.log(isAfter(1648636135000, 1648549735000)); // true
// console.log(isAfter(1648549735000, 1648636135000)); // false

// console.log(isAfter(new Date(1996, 10, 4), new Date(1901, 12, 12)));