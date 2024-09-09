// let str = "                     Apna      College               JS                1           ";
// console.log(str.trim());







// let str ="Apna";
// console.log(str[2])

// let str ="Apna";
// console.log(str.length);





// let obj = {
//     item:"pen",
//     price:10,
// }

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);




// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);











//Prompt the username to enter their fullname . Generate a username for them based on the input . 
//Start username with@, followed by their full name and enditng with the fullname lengt
// eg : user name = "muqtdairqureshi", username should be "@muqtadirqureshi123"


let fullName = prompt("Enter your fullname without space");

let username = "@" + fullName + fullName.length;
console.log(username);

