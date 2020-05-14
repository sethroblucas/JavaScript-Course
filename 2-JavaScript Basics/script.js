//************************************************* */
// VARIABLES AND DATA TYPES
/* var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job); */

//************************************************* */
// VARIABLE MUTATION AND TYPE CORRECTION

/* var firstName = "John";
var age = 28;

console.log(firstName + firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// VARIABLE MUTATION
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName); */

//************************************************* */
// BASIC OPERATORS

/* var year, yearJohn, yearMark;
var year = 2018;
ageJohn = 28;
ageMark = 33;

// MATH OPERATORS
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// LOGICAL OPERATORS
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// TYPEOF OPERATOR
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark > John");
var x;
console.log(typeof x); */

//************************************************* */
// OPERATOR PRECEDENCE

/* var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isfullAge = now - yearJohn >= fullAge; //true
console.log(isfullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x); */

//************************************************* */
// CODING CHALLENGE #1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

/* // #1
markMass = 78; //kg
markHeight = 1.73; //m

johnMass = 85; //kg
johnHeight = 2.15; //m

// #2
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

// #3
higherBMI = markBMI > johnBMI;

// #4
console.log("Is Mark's BMI higher than John's? " + higherBMI); */

//************************************************* */
// IF / ELSE STATEMENTS

/* var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

// #1
markMass = 78; //kg
markHeight = 1.73; //m

johnMass = 150; //kg
johnHeight = 2.15; //m

// #2
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than Johns");
} else {
  console.log("John's BMI is higher than Marks");
} */

//************************************************* */
// BOOLEAN LOGIC

/* var firstName = "John";
var age = 21;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  // Between 13 and 20 === age >= 13 AND age < 20
  console.log(firstName + " is a teen");
} else if (age > 20 && age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
} */

//************************************************* */
// THE TERNANRY OPERATOR AND SWITCH STATEMENTS

// var firstName = "John";
// var age = 14;

// // Ternary operator
// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// /* if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// } */

// // switch statement
// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teen.");
//     break;
//   case age >= 2 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }

//************************************************* */
// TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/* var height;

height = 223;

if (height || height === 0) {
  console.log("var is defined");
} else {
  console.log("var is not defined");
}

// Equality operators
if (height == "223") {
  console.log("The == operator does type coercion!");
} */

//************************************************* */

// CODING CHALLENGE #2

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

// STEP #1
/* var johnScore1 = 150;
var johnScore2 = 120;
var johnScore3 = 98;

var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
console.log(johnAverage);

var mikeScore1 = 114;
var mikeScore2 = 182;
var mikeScore3 = 127;

var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
console.log(mikeAverage);

// STEP #2
if (johnAverage > mikeAverage) {
  console.log("John's average score is higher at " + johnAverage);
} else if (johnAverage == mikeAverage) {
  console.log("Both John and Mike's teams averaged the same");
} else {
  console.log("Mike's average score is higher at " + mikeAverage);
}

// STEP 3
var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;

var maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;
console.log(maryAverage);

if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  console.log("Mary's average score is higher at " + maryAverage);
} else if (johnAverage > maryAverage && johnAverage > mikeAverage) {
  console.log("John's average score is higher at " + johnAverage);
} else if (johnAverage == maryAverage && johnAverage == mikeAverage) {
  console.log("There is a draw!");
} else {
  console.log("Mikes's average score is higher at " + mikeAverage);
} */

//************************************************* */
// FUNCTIONS
