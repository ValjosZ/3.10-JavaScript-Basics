// // 1.
// //Generate a random number from 0 to 1, using `Math.random()`.
// var a = Math.ceil(Math.random() * 10);
// console.log(a);

// //Generate an integer random number from 1 to 10, using `Math.random()` and `Math.ceil()`.

// // 2.
//Create an array of twenty integer random numbers from 1 to 10, using some loops.

// var arr = [];
// for (i=1; i<=20; i++) {
//     var a = Math.ceil(Math.random() * 10)
//     arr.push(a)
// }
// console.log(arr);


//3.
//create your loop to output numbers from the array

// Create a program that will output every even **value** from this array (use `for ... in`).
// Additionally, the program must stop after **value** of 1 was found (using break).
// The program must also bypass every **index** divided by 5 (using continue).

var arr = []
for (i=1; i<=20; i++) {
    var a = Math.ceil(Math.random() * 10)
    arr.push(a)
}
console.log(arr)

var element = ''
for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 1) {break}
    if (arr[index] % 5 == 0) {continue}
    else if (arr[index] % 2 == 0){
        element += arr[index]
    }
}
console.log(element)

// arr.forEach(myFunction)
// function myFunction(item) {
//      var line2 = ''
// //     for (var i = 1; i < array.length; i++) {
//          if (item % 2 == 0){
//              line2 += item;
//          } else return
// //     }
//      console.log(line2)
    
// }



