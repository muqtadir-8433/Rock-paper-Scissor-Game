//looping over an array

//Print all elements of an array 
//For loop

// let heroes = ["ironman", "thor", "hulk", "antman", "SPideman", "shktiman"]
// for (let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

//Output 
// ironman
// thor
// hulk
// antman
// SPideman
// shktiman





//For a given array with marks of student  [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     // console.log(val);
//     sum = sum+val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);



//For a given array with price of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.


// let items = [250, 645, 300, 900, 50];

// for(let i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log(items);




// Splice

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);





// let foodItems = ["apple", "banana", "lichi"];
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);





// let foodItems = ["apple", "banana", "lichi"];
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);





// let foodItems = ["apple", "banana", "lichi"];
// foodItems.unshift("antman");
// console.log(foodItems);




// let foodItems = ["apple", "banana", "lichi"];
// foodItems.shift();
// console.log(foodItems);




//Create an Array to store companies  "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a.Remove the first company from the array
// b.Remove Uber & ADD Ola in its place 
// c. Add Amazon At the end



let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(0,1);
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies);

