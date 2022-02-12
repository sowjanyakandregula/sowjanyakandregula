console.log("Hello sowjanya");
console.log(5 + 5);
console.log(5 * 2);
console.log(3 + 4);
console.log( "sowjanya" +  "kandregula" );

//console.log(5 % 2);
console.log(4 % 2);
const name = "sowjanya";
let currentLocation = "home";
currentLocation = "outside";
console.log(name,"is currently at" , currentLocation);
let person ="sowjanya";
let place = "restaurant";
let food ="burger";
console.log(person, " went to the ", place, " to eat ", food, ".");
person = "kaddu";
place = "kitchen";
food = "milk";
console.log(person, " went to the " + place + " to drink " + food + ".");
let count = 0;
count = count + 1;
count += 1;
count ++;
console.log(count + " should be equal to 3 ");
let a = 1;
let b = 2;
let temp = a;
console.log(" BEFORE > a is: ", a, " - and b is: ", b);
a = b;
b = a;
b = temp;
console.log("AFTER > a is: ", a, " - and b is: ", b);
a = 1;
b = 2; 
temp = a;
console.log(temp);
a = b;
console.log(a);
b = a;
console.log(b);
b = temp;
console.log(3 > 4);
let x = 10;
let y = x++;
console.log(y);
console.log(x);
console.log(x < y);
console.log(3 === "3");
const sunny =  true;
const warm = true;
console.log(sunny != warm);
console.log(10 + 5);
let c = 3;
let d = 3;
console.log(c >= d);
const city = "Michigan";
const season = "Winter";
console.log("I Love" + city + "in" + season);
let number = 3;
number++;
console.log(number + "should be 4");

let age = 25
if (age <= 1){
    person = "baby";

}else if (age < 12){
    person = "child";

}else if (age < 20){
    person = "teenager";

}else{
    person = "adult";
}
console.log(person);
let a1;
let b2 = null;
let c3= undefined;
let d4= 4;
let e5 = "five";
let f6 = a1 || b2 || c3 || d4 || e5;
console.log(f6);

let person1 = null;
let eatsDairy;
let eatsMeat = "yes";


if (!eatsDairy && !eatsMeat) {
    person1 = "vegan";
} else if (!eatsMeat) {
   person1 = "vegetarian";

} else {
   person1 = "no dietary restrictions";
}
console.log(person1);

//ternary operators

/*const person2 = (!eatsDairy  && !eatsMeat)
    ? "vegan"
    :  !eatsMeat
        ? "vegetarian"
        : "no dietary restrictions"

*/

