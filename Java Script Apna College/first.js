//Practise Question 1
// const product = {
//     title: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// console.log(product);




//Practise Question 2
// const profile = {
//     username: "Shradha Khapra",    
//     isFollow: "false",
//     followers: 569,
//     following: 4,
// }

// console.log(profile);

//Exeptional        console.log(typeof profile["followers"]);



// Assignment Operators

// let a = 5;
// let b = 2;
// let c = 3;
// let d = 10;
// let e = 287;

// a += 4;  // a = a + 4 -> a = 5 + 4 -> a = 9
// b -= 1;  // b = b - 1 -> b = 2 - 1 -> b = 1
// c *= 4;  // c = c * 4 -> c = 3 * 4 -> c = 12
// d /= 5;  // d = d / 5 -> d = 10 / 5 -> d = 2
// e %= 10; // e = e % 10 -> e = 287 % 10 -> e = 7
// console.log("a = ", a);  // Outputs: a = 9
// console.log("b = ", b);  // Outputs: b = 4
// console.log("c = ", c);  // Outputs: c = 0.3333333333333333
// console.log("d = ", d);  // Outputs: d = 2
// console.log("e = ", e);


//Logical AND Operators

// let a = 6;
// let b = 8;
// // let cond1 = a<b;
// // let con2 = a===6;
// console.log("cond1 && cond2 = ", a<b && a===6);



// //Logical OR Operator

// let c = 5;
// let d = 4;
// console.log("cond1 || cond2", c>d || c===3);

// // Logical Not ! Operator

// let x = 2;
// let y = 1;
// console.log("!(2<1) = " , ! (x<y));



//Conditional Statement Only If  1

// let age=19;
// if(age>18){
//     console.log("You can vote");
// }
// if(age<18){
//     console.log("You can't vote");
// }




//Conditional Statement Only If  2

// let mode = "dark";
// let color;
// if(mode == "dark"){
//     color = "black"
// }
// if(mode == "light"){
//     color = "white"
// }
// console.log(color);





// Conditional Statement If-Else     1

// let mode = "dark";
// let color;
// if(mode == "dark"){
//     color = "black"
// }
// else{
//     color = "light"
// }
// console.log(color);





// Conditional Statement If-Else     2

// let age = 2;
// if(age >= 18){
//     console.log("You can Vote");
// }
// else{
//     console.log("You can't Vote")
// }


// Odd or Even

// let num = 13;
// if(num % 2 == 0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }



// Conditional-Statement Else-If Statement

// let mode="black";
// let color;
// if(mode == "black"){
//     color="black";
// }else if(mode == "pink"){
//      color="Pink";
// }else if(mode == "yellow"){
//     color="Yellow";
// }else{
//     color="White";
// }
// console.log(color);



//Multiple 5 no or not 
// let num = prompt("Enter a number : ");
// if (num % 3 === 0){
//     console.log(num , "is a multiple of 3");
// }
// else{
//     console.log(num , "is not a multiple of 5");
// }



//Write a code which can give grades to student according to their score
// 90-100,A
// 70-89,B
// 60-69,C
// 50-59,D
// 0-49,F 

let score = 75;
let grade;
if (score >=90 && score <= 100){
     grade = "A";
}else if(score >= 70 && score <= 89){
     grade = "B";
}else if (score >=60 && score <=69){
     grade = "C";
}else if (score >=50 && score <=59){
     grade = "D";
}else if (score >=0 && score <= 49){
     grade = "F";
}
console.log("According to your score , your grade was : ", grade)