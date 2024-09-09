// let div = document.querySelector("div");
// console.dir(div);








//Create a H2 heading element with text "Hello JavaScript ". Append from "Apna College Students " to this text using JS

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + "From Apna College Students";
// console.dir(h2.innerText);






//Create 3 divs with common class name . Access them and add some unique text to each of them 

let divs = document.querySelectorAll(".box");

let idx = 1;
for(let div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
    console.dir(div.innerText);
}
