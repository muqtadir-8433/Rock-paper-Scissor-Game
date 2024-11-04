const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data......");      
    let response = await fetch(URL);            //FETCH API KUCH DATA LEKAR AATI HAI , 
    console.log(response);     //JSON FORMAT    //YE DATA READABLE FORMAT ME NAHI AHAI ,
    let data = await response.json();          //ISKO READABLE FORMAT ME KARNE KE LIYE HUM .json method ko call lagate  hai  , .json method readbale format me banata hai
    factPara.innerText = data[2].text;        //jisko hum use kar sakte hai , html page per
};

btn.addEventListener("click", getFacts);