// setTimeout(() =>{
//     console.log("hello");
// }, 5000); 






// console.log("One");
// console.log("Tne");

// setTimeout(() =>{
//     console.log("hello");
// }, 5000); 

// console.log("Three");
// console.log("Four");



 





// function getData(dataId, getNextData) {

//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });










//CALLBACK HELL

// function getData(dataId, getNextData) {

//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, ()=>{
//     console.log("getting data2........");
//     getData(2, ()=>{
//     console.log("getting data3........");
//         getData(3, ()=>{
//     console.log("getting data4........");
//             getData(4);
//         });
//     });
// });









// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("data", dataId);
//         resolve("success");
//         // reject("error");
//         if(getNextData){
//             getNextData();
//         }
//     }, 8000);
// });
// }











// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log(" I am a promise");
//         resolve("success");
//         // reject("error");
//     });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });














// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data 2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("Fetching data1.....");
// asyncFunc1().then((res)=> {
//     console.log("Fetching Data 2.....");
//     asyncFunc2().then((res)  => {});
// });




















// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// //Promise Chain

// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// })




//ASYNC FUNCTION 
//kisi bhi normal function ko hum async function bana sakte hai 


async function hello(){
    console.log("hello");
}








//Async-Await
// function api() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200); // success
//         }, 2000);
//     });
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }

// console.log(getWeatherData());






 







//Async-Await
// function getData(dataId) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log("getting data1.......");
//     await getData(1);
//     console.log("getting data2.......");
//     await getData(2);
//     console.log("getting data3.......");
//     await getData(3);
//     console.log("getting data4.......");
//     await getData(4);
//     console.log("getting data5.......");
//     await getData(5);
// }

// console.log(getAllData());









//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
//ASYNC FUNCTION WITHOUT CALLING A FUNCTION   , IT IS IMMEDIATELY INVOKED                 LIKE console.log(getAllData());
//DUBARA USE NAHI KAR PAYENGE YE CODE KO , PHIR COPY PASTE HI KARNA PADEGA BAAR BAAR 

// function getData(dataId) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// (async function() {
//     console.log("getting data1.......");
//     await getData(1);
//     console.log("getting data2.......");
//     await getData(2);
//     console.log("getting data3.......");
//     await getData(3);
//     console.log("getting data4.......");
//     await getData(4);
//     console.log("getting data5.......");
//     await getData(5);
// })();

