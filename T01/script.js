// // 1
// //Using loops (`for` or `while`), write a function, printing numbers from a to b, divisible by c.
// function numbersInLoops(a, b, c){
//     for (var i = a; i < b; i++){
//         console.log(i)
//         if(i % c == 0){
//             console.log('This number is divisible by ' + c + ':' + i);
//         }
//     }
// }
// //calling:
// //numbersInLoops(10, 20, 3);

// // 2
// //Write a function with will output a multiplication table with size of a given argument.
// function multiplicationTable(n){
//     var line = '';
//     for (var i =1; i <=n; i++){
//         for (var j = 1; j<= n; j++){
//             line += j * i + ' ';
//         }
//         console.log(line);
//         line = '';
//     }
// }
// //calling:
// //multiplicationTable(4);

// 3
//Write a function, outputting a christmas tree of a given height, made of asterisk `*` character.
function christmasTree(n) {
  var tree = ''
  for (var i = 1; i <= n; i++) {
    tree = ''
    for (var j = i; j <= n; j++) {
      tree += ' '
    }
  }
  // for loop many times
}
//calling:
christmasTree(4)

// var txt = "";
// for(i=1;i<=10;i++){
//   txt = "";
//   for(j=i;j<10;j++){
//     txt += " ";
//   }
//   for(k=0;k<(i*2)-1;k++){
//     txt += "*";
//   }
//   console.log(txt);
// }

// 4
//Christmas Tree By Night
function christmasTreeByNight(n) {
  //TODO write your code
}

// // 5
// // Write a function which will accept 3 numbers and check, whether they form a pythagorean triple.
// // Modify the function so that it works, regardless the order of the arguments.
// function pythagoreanTriple(a, b, c){
//     if (c*c == (a*a) + (b*b)){
//         console.log('True')
//     } else if (a*a == (c*c) + (b*b)) {
//         console.log('True')
//     } else if (b*b == (c*c) + (a*a)) {
//         console.log('True')
//     } else
//     console.log('Not true')
// }
// pythagoreanTriple(4,3,6);

// 6
//Write a function which will count surface area of a given shape (triangle, rectangle, trapezoid), using `switch`.
function surfaceArea(shape, a, b, c) {
  //TODO write your code
}
//calling:
//surfaceArea("triangle",2,5)
