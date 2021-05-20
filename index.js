// Rewrite a js function as an Arror Function
// to start quokka on an existing file if installed use ctr+k, q
const addFive = function(num) {
    return num + 5;
};
console.log(addFive(5));


// rewrite with 2 options
const addFiveArrow = num => {
    return num + 5;
};

const addFiveArrowImplicit = num => num + 5;

// no arguments
const noArgArrow = () => true;

// more than 1 argument
const coupleArgArrow = (argOne, argTwo) => argOne + argTwo;

console.log(addFiveArrow(5));
console.log(addFiveArrowImplicit(5));
console.log(noArgArrow());
console.log(coupleArgArrow(1, 2));


// Implement array map with array.reduct method
const array = [1, 2, 3, 4, 5];

const mappingFunction = v => v + 1;

const mappedArray = array.map(mappingFunction);

console.log(mappedArray);

const customMapping = (array, mappingFunction) => {

    return array.reduce( //..using spreading function ... 
        (accumulator, value) => [ ... accumulator, mappingFunction(value)],
        []
        );
    };

console.log(customMapping(array, mappingFunction));



// Filter out duplicates from js array
const basket = ["apple", "pear", "pine", "apple", "pear"];

const FilterFunc = arr =>
    arr.filter((item, index) => arr.indexOf(item) == index);

console.log(FilterFunc(basket));
// so apple has index of 0, pear index of 1, pine index 2
// when you reach apple at index 3 it doesn't have an index of 0 (apple is index 0) so filtered out
// same for pear at index 4.


// Remove Duplicates from an array with reduce
//const basket = ["apple", "pear", "pine", "apple", "pear"]; basket is already defined in filterFunc above

const reduceFunc = arr =>
    arr.reduce(
        (accumulator, value) =>
            accumulator.includes(value) ? accumulator : [ ... accumulator, value],
            []
    );

console.log(reduceFunc(basket));


// Remove Duplicates from an array with set data structure
//const basket = ["apple", "pear", "pine", "apple", "pear"]; basket is already defined in filterFunc above

const set = new Set(basket);
console.log(set.size);

const setArray = [ ... set];

console.log(setArray);

const setFunction = arr => [ ... new Set(arr)];
console.log(setFunction(basket));

//const setFunction = arr => [ ... new Set(arr)];
//console.log(setFunction([1,2,3,4,5,1,2,3,1,1]);



// Write a palindrome check function using string and array methods
const testString = "Rotor"; // remember palindrome is case sensitive so maybe test if string is lowercase first
const notPalindrome = "teststring";

const palindromeCheck = string => {
    const lowerCaseString = string.toLowerCase(); //convert string to lc

    const reversedString = lowerCaseString
        .split("") //split the string
        .reverse() //reverse each letter
        .join(""); // join
    return lowerCaseString == reversedString;
    };

console.log(palindromeCheck(testString));

// Rewrite palindrome with arrow function
//const testString = "RoToR";
//const notPalindrome = "TEStstring";

// const palindromeCheck = string => 
// string.toLowerCase() === 
// string.toLowerCase().split('').reverse().join('')

// console.log(palindromeCheck(testString));


// Write an anagram check function
const anagramOne = "Astronomer";
const anagramTwo = "moon starer";
const notAnagram = "hello world";

const anagramCheck = (stringOne, stringTwo) => {
    // first change to lowercase to check for equality
    // next arrange letters in string by alphabet
const modifyString = string => string.toLowerCase()
    .split("")
    .sort()
    .filter(char => char.match(/[a-za-z]/))
    .join("");  //the char.match filters out any special char that may be present such as !*'

    //console.log("first: ", modifyString(stringOne));
    //console.log("second: ", modifyString(stringTwo));
    console.log(modifyString(stringOne) == modifyString(stringTwo));
    return modifyString(stringOne) == modifyString(stringTwo);
    };

    anagramCheck(anagramOne, anagramTwo);



// Capitalize string function with array and string methods
const capString = "The quick brown fox jumps over the lazy dog";

const capitalizeString = string => {
    const splitString = string.split(' ')
    //console.log(splitString);
    const capitalizedStringArray = splitString.map(
        v => v[0].toUpperCase() + v.slice(1));
    //console.log(capitalizedStringArray);

    const result = capitalizedStringArray.join(" ");
    //console.log(result);
    return result;
};

capitalizeString(capString);



// Flatten nested array using recursive reduce function


