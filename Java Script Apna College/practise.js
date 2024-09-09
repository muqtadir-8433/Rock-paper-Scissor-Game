//Assignment Operators

// let a = 3;
// let b = 2;
// let c = 4;
// let d = 10;
// let e = 287;

// a += 4;
// b -= 1;
// c *= 3;
// d /= 2;
// e %= 10;

// console.log("a = ", a);
// console.log("b = ", b);
// console.log("c = ", c);
// console.log("d = ", d);
// console.log("e = ", e);


//Logical & operators

// let a = 6;
// let b = 2;
// let cond1 = a>b;
// let cond2 = b ===2;

// console.log("cond1 & cond2 = ", a>b && b === 2);


//Logical OR Operators

// let a = 2;
// let b = 3;
// let cond1 = a>2;
// let cond2 = b===2;
// console.log("cond1 || cond2 = ", a>2 || b === 2);


//Conditional Statement IF- Else 
// let x = 3;
// if(x%2 === 0){
//     console.log("x is even number");
// }else{
//     console.log("x is odd number");
// }


//Else if 

// let mode = "DarkBlue"
// let color;
// if(mode == "dark"){
//     color = "black";
// }else if (mode == "yellow"){
//     color = "Yellow";
// }else if (mode == "light"){
//     color = "White";
// }else{
//     color = "Pink";
// }
// console.log(color);


//Multiple 5 or not 
// let num = prompt("Enter a number");
// if(num % 5 === 0){
//     console.log(num , "is multiple of 5");
// }else{
//     console.log(num , "is not a multiple of 5");
// }




//Write a code which can give grades to student according to their score
// 90-100,A
// 70-89,B
// 60-69,C
// 50-59,D
// 0-49,F 

// let score = 90;
// let grade;
// if (score >=90 && score <=100){
//     grade = "A";
// }else if(score >=70 && score <= 89){
//     grade = "B";
// }else if(score >= 60 && score <= 69){
//     grade = "C";
// }else if(score >= 50 && score <= 59){
//     grade = "D";
// }else if (score >= 0 && score <= 49){
//     grade = "F";
// }
// console.log("According to your score your grade was ", grade);




// Print all even number from 0 to 100
// console.log("Even Number from 0 to 100")
// for(num = 0; num<=100; num++){
//     if(num % 2 === 0){
//         console.log("num = ", num);
//     }
// }




// Create a game where you start with any random game number . Ask the useer to keep 
// guessing  the game number until the user enter correct value.



// let gameNum = 25;
// let userName = prompt("Guess the game number");
// while(gameNum != userName){
//     userName = prompt("You Entered Wrong number . Guess again : ")
// }
// console.log("Congratulation , you entered the right number");






//Prompt the username to enter their fullname . Generate a username for them based on the input . 
//Start username with@, followed by their full name and enditng with the fullname lengt
// eg : user name = "muqtdairqureshi", username should be "@muqtadirqureshi123"


// let Name = prompt("Enter Full Name Without Space");
// let userName = "@" + Name + Name.length;
// console.log(userName); 




//For a given array with marks of student  [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }

// let avg = sum / marks.length;
// console.log(`Average Marks of Student is ${avg}`);



//For a given array with price of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];

// for (let i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] = items[i]-offer;
// }
// console.log(items);



//Create an Array to store companies  "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a.Remove the first company from the array
// b.Remove Uber & ADD Ola in its place 
// c. Add Amazon At the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.splice(0, 1);
// companies.splice(1,1, "Ola");
// companies.push("Amazon");
// console.log(companies);




// const arrowSum = (a,b) =>{
//     console.log(a+b);
// }
// const arrowMul = (x,y) =>{
//     console.log(x*y);
// }
// arrowSum(5,3);
// arrowMul(4,5);



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


//Create a H2 heading element with text "Hello JavaScript ". Append from "Apna College Students " to this text using JS

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + "From Apna College Students ";

// console.dir(h2.innerText);


// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(let div of divs){
//     div.UniqueText = `new unique value ${idx}`;
//     idx++;
//     console.dir(div.UniqueText);
// }





//Create a new button element . GIve it a text "click me " , background color of red and text color of white 
//Insert the button as the first element inside the body tag 

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me !";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn);


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me !";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// document.querySelector("body").prepend(newBtn);


//Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

// let modeBtn = document.querySelector("#mode");
// let currMode = "Light";   //dark

// modeBtn.addEventListener("click", () =>{
//     if (currMode == "Light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else{
//         currMode = "Light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
    
//     console.log(currMode);
// }); 


/* <button id="mode">change mode</button> */

let modeBtn = document.querySelector("#mode");
let currMode = "Light";

modeBtn.addEventListener("click", () =>{
    if (currMode == "Light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});





