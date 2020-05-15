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

/* function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane"); */

//************************************************* */
// FUNCTION STATEMENTS AND EXPRESSIONS

// FUNCTION EXPRESSION
/* var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark")); */

//************************************************* */
// ARRAYS

// INITIALIZE ARRAY
/* var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// MUTATE ARRAY
names[1] = "Ben";
console.log(names);
names[names.length] = "Mary";
console.log(names);

// DIFFERENT
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner); */

//************************************************* */
// CODING CHALLENGE #3
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

// STEP #1 & 2
/* var beforeBill = [124, 48, 268];
var tips = [];
var afterBill = [];

var totalCalc = function (bill) {
  if (bill < 50) {
    return bill + bill * 0.2;
  } else if (bill >= 50 && bill <= 200) {
    return bill + bill * 0.15;
  } else {
    return bill + bill * 0.1;
  }
};

var tipCalc = function (bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill >= 50 && bill <= 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
};

var tipOne = tipCalc(beforeBill[0]);
var tipTwo = tipCalc(beforeBill[1]);
var tipThree = tipCalc(beforeBill[2]);

tips[tips.length] = tipOne;
tips[tips.length] = tipTwo;
tips[tips.length] = tipThree;
console.log(tips);

var billOne = totalCalc(beforeBill[0]);
var billTwo = totalCalc(beforeBill[1]);
var billThree = totalCalc(beforeBill[2]);

afterBill[afterBill.length] = billOne;
afterBill[afterBill.length] = billTwo;
afterBill[afterBill.length] = billThree;
console.log(afterBill); */

//************************************************* */
// OBJECTS AND PROPERTIES

// object literal
/* var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane); */

//************************************************* */
// OBJECTS AND METHODS

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1992,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2018 - this.birthYear;
//   },
// };

// john.calcAge();
// console.log(john);

//************************************************* */
// CODING CHALLENGE #4
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

// STEP 1
/* var mark = {
  firstName: "Mark",
  lastName: "Daniels",
  mass: 176,
  height: 2.6,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

var john = {
  firstName: "John",
  lastName: "Fireball",
  mass: 240,
  height: 2.5,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

// STEP 2
mark.calcBMI();
console.log(mark);

john.calcBMI();
console.log(john);

// STEP 3
if (mark.BMI > john.BMI) {
  console.log(mark.firstName + "'s BMI is higher at " + mark.BMI);
} else if (john.BMI > mark.BMI) {
  console.log(john.firstName + "'s BMI is higher at " + john.BMI);
} else {
  console.log("The BMIs are equal!");
} */

//************************************************* */
// LOOPS AND ITERATION

/* for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to tje console, i++
// ...
// i = 9, 1 9 10 true, log i to tje console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

for (var i = 0; i < 20; i += 2) {
  console.log(i);
}

// FOR LOOP
var john = ["John", "Smith", 1990, "teacher", false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// WHILE LOOP
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
 */
// CONTINUE AND BREAK STATEMENTS
/* var john = ["John", "Smith", 1990, "teacher", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

var john = ["John", "Smith", 1990, "teacher", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

// LOOPING BACKWARDS
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
} */
//************************************************* */
// CODING CHALLENGE #5

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

// STEPS 1 - 4
/* var john = {
  fullName: "John D",
  orgBills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.newBills = [];

    for (var i = 0; i < this.orgBills.length; i++) {
      var percentage;
      var bill = this.orgBills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.newBills[i] = bill + bill * percentage;
    }
  },
};

john.calcTips();
console.log(john);

// STEPS 5 - 8
var mark = {
  fullName: "Mark F",
  orgBills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.newBills = [];

    for (var i = 0; i < this.orgBills.length; i++) {
      var percentage;
      var bill = this.orgBills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.newBills[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// CALCS
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + " paid more.");
} else {
  console.log(mark.fullName + " paid more.");
} */

//************************************************* */
