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
