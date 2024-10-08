console.log(`ALab-308.5.1 Creating Reusable Functions`);

//**********Part 1************* */
console.log(`**********Part 1***************`)

//Take an array of numbers and return the sum.
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(`1. Sum of numbers in array: ${sum([4, 6, 5, 8])}`);

//Take an array of numbers and return the average.
function avg(arr) {
    return (sum(arr) / arr.length);
}
console.log(`2. Average of numbers in array: ${avg([4, 5, 6, 8])}`);

//Take an array of strings and return the longest string
function longestStr(arr) {
    let longestStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestStr.length) {
            longestStr = arr[i];
        }
    }
    return longestStr;
}
console.log(`3. Longest string in array: ${longestStr(['bruce', 'occupation', 'runner', 'bilbo'])}`);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(arr, num) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
console.log(`4. Strings longer than given number: `)
console.log(stringsLongerThan(['bruce', 'occupation', 'runner', 'bilbo'], 5));
//console.log("4. Strings longer than given number: " + stringsLongerThan(['bruce', 'occupation', 'runner', 'bilbo'], 5));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n, min = 2) {
    if (min >= n) {
        return;
    }
    console.log(min);
    printNumbers(n, min + 1);
}
console.log("5. Numbers between 1 and n: ");
printNumbers(6);



//console.log(`                                                   `);
//**********Part 2************* */
console.log(`**********Part 2***************`)
//Use callback functions alongside Array methods to accomplish the following:
//Sort the array by age.
let arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function sortAge(obj1, obj2) {
    return obj1.age - obj2.age;
}
console.log(`Sorted array according to age:`)
console.log(arr.sort(sortAge));
//console.log(arr);

//Filter the array to remove entries with an age greater than 50.
function filterAge(obj) {
    return obj.age <= 50;
}
console.log(`Removed entries with age greater than 50:`)
console.log(arr.filter(filterAge));

//Map the array to change the “occupation” key to “job” and increment every age by 1
function modifyKeyAndIncrementAge(obj) {
    let newObj = { ...obj };
    newObj['job'] = newObj['occupation'];
    delete newObj['occupation'];
    newObj.age = parseInt(newObj.age) + 1;
    return newObj;
}
console.log(`Modified occupation key to job and incremented age by 1:`)
console.log(arr.map(modifyKeyAndIncrementAge));
//console.log(arr);

//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.
function sumOfAges(sum, obj) {
    return sum + parseInt(obj.age);
}
console.log("Sum of ages using reduce(): " + arr.reduce(sumOfAges, 0));

let sum1 = arr.reduce(sumOfAges, 0);

let avgOfAges = sum1 / arr.length;
console.log("Average of ages: " + avgOfAges);





console.log(`                                                   `);
//**********Part 3************* */
console.log(`**********Part 3***************`)

//Take an object and increment its age field.
//Take an object, make a copy, and increment the age field of the copy. Return the copy.

let object1 = { id: "48", name: "Barry", occupation: "Runner", age: 25 };
function updateAgeAndAddDate(obj) {
    if (obj.hasOwnProperty("age")) {
        obj.age = obj.age + 1;
    } else {
        obj.age = 0;
    }
    obj.updated_at = new Date();
    return obj;
}
console.log(`1. Checking for age property, if exists incrementing age by 1, else adding age property and setting it to 0. 
2. Adding the 'updated_at' property with value equal to current date.`);
console.log(updateAgeAndAddDate(object1));
console.log(object1);


let object2 = { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 };
function copyObjAndIncrementAge(obj) {
    let copyObj = obj;
    if (copyObj.hasOwnProperty("age")) {
        copyObj.age = copyObj.age + 1;
    } else {
        copyObj.age = 0;
    }
    copyObj.updated_at = new Date();
    return copyObj;
}
console.log(`1. Making a copy of an existing object
2. Incrementing age field of the copy if exists, else setting age to 0`);
console.log(copyObjAndIncrementAge(object2));
console.log(object2);
console.log(`Because its pass by reference, the changes made in the copy reflects in original object as well`)

let object3 = copyObjAndIncrementAge(object2);
const someDay = new Date("1999-07-01");
//setting time to copy
object3.updated_at.setTime(someDay.getTime());
console.log("Updating Date object in copy of object results in updation of Date field in original object as well.");
console.log(object2);
console.log(object3)






