console.log("conditional.js is loaded");
const thirsty = "true";
let getDrink = "null";
if (thirsty === false){
    getDrink = false;
}else if (thirsty === true){
    getDrink = true;
}
console.log(thirsty , " should be equal", getDrink);

const light =  "blue";
let DriveCar =  "null";

if (light === "red") {
    DriveCar = "stop";

}else if (light === "yellow") {
    DriveCar = "wait";
}else if (light === "green") {
    DriveCar = "go";
}else{
    DriveCar = "lightMalfunction";

}
console.log("light is" , light , "so car should" , DriveCar );

const car = "manual";
let driver = null;
const distance = 12;

if(distance >= 10 && car === "manual"){
    driver = "Sofia";
    
}else if(distance < 10 && car == "automatic"){
    driver = "Diego";
}

console.log("The car is", car, "and the distance is", distance, "so the driver is", driver);



let tempM = 15;
if (tempM <= 15){
    console.log("wear a jacket");
}else if(tempM > 15){
    console.log("It's hot");
}

let number = 15;
if( typeof number != "number"){
    console.log("Error", "please input a number");

}else if (number  % 2 == 0){
    console.log(number, "is even");
}else {
    console.log(number, "is odd");
}

let people;
let notEatingVeg = false;
let notEatingDairy = true;
if (notEatingVeg == notEatingDairy){
    people = "vegan";
}else if(notEatingVeg){
    people ="Non vegeterians";
}else{
    people = "not doing diet";
}
console.log("person is", people);

const j = 1;
const k = 1;
const l = 1;
var answer = "null";
if(j == k  && k == l){
    answer = "all are eaual";
}
else if(j == k){
    answer = 'j and k are equal';
}else if(j == l){
    answer = "j and l are equal";
}else if( k == l) {
    answer = "k and l are equal";
}else {
    answer = "all are different";
}  
console.log(answer);

const ager = 25;
canVote = null;

if (typeof ager != "number"){
    canVote = "Input is not a number";
}else if (ager < 18){
    canVote = "Too young";
}else{
    canVote = "Legal voting age";
}
console.log(canVote);

let tempR = 25;
let weather = null;

if (tempR <= 15){
    weather = "freezing";
}else if (tempR > 15 && tempR <= 30){
    weather = "warm";
}else {
     weather = "hot";
}
console.log ( "The temperature is", tempR, "so the weather is", weather);

/*let temperature = 0;
let wearjacket = "warm" ? true : 
false;
console.log(temperature);
*/



    