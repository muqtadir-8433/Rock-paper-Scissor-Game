// function sum(a,b){
//     return a+b;
// }










// const arrowSum = (a,b) => {
//     console.log(a+b);
// };
// console.log(arrowSum);
// // console.log(sum);

// const arrowMul=(x,y)=>{
//     console.log(x*y);
// }
// console.log(arrowMul);








// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// const arrowMul = (x, y) => {
//     console.log(x * y);
// };

// // Call the arrow functions
// arrowSum(5, 3);   // Outputs: 8
// arrowMul(4, 5);   // Outputs: 20



//Create a function using the "function" keyword that takes a String as an argument & returs the number of vowel in the string.

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" ||
//            char === "e" || 
//            char === "i" || 
//            char === "o" || 
//            char === "u" ){
//             count++;
//         }
//     }
//     // console.log(count);
//     return count;
// }

//Output   countVowels("apnacollege");


//Create an arrow function to perform the same task

// const countVow = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" ||
//            char === "e" || 
//            char === "i" || 
//            char === "o" || 
//            char === "u" ){
//             count++;
//         }
//     }
//       console.log(count);
//     return count;
// };

//Output countVow("aabc");


//MAP

// let nums = [2, 3, 4, 5, 6];

// let newArr = nums.map((val) => {
//     return val*val;
// });

// console.log(newArr);



// We are given array of marks of student . Filter out of the marks of student that score 90+ [97, 64, 32, 49, 99, 96, 86];



// let marks = [97, 64, 32, 49, 99, 96, 86];

// let scoredArr = marks.filter((val) =>{
//     return val >90;
// });
// console.log(scoredArr);





//Take a number n as input from the user . Create an array from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array 
//Use the reduce method to calculate product of all numbers in the array 

// let n = prompt("Enter a number : ");

// let arr = [];                                 //1 se lekar n tak value store karna hai     so we kept an empty 
// for (let i = 1; i<=n; i++){
//     // arr[] = i                              i ki value 1 hogi to 1 store hoga , 2 hogi to 2 store hoga , and so on       1 2 3 4 5 6 7 8 
//     arr[i - 1] = i;                           //1(0)th index per store hoga ,  2(1)th index per store hoga ,  and so on     3(2) 4(3) 5(4)
// }
// console.log(arr);


//Use the reduce method to calculate sum of all numbers in the array 

// let sum = arr.reduce((res , curr) =>{
//     return res + curr;
// });
// console.log("Sum = ", sum);


//Use the reduce method to calculate product of all numbers in the array 

// let product = arr.reduce((res , curr) =>{
//     return res * curr;
// });
// console.log("Product = ", product)




