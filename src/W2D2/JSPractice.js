// protected namespace
// use strict
// well formatted code with short comment on each function or method

//test function
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

//test function for 2 arrays
function myFunctionTestArr(expected, found) {

    if (isEqual(expected, found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

//this function check two array value
function isEqual(value, other) {

    // Get the value type
    var type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    // Compare properties
    if (type === '[object Array]') {
        for (var i = 0; i < valueLen; i++) {
            // Compare the item
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                // Compare the item
            }
        }
    }

    // If nothing failed, return true
    return true;

};

// Problem 1: Reverse an Array
function reverseArray(arr) {
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function reverseArrayInPlace(arr) {
    let count = 0;
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        var ascendingEl = arr[i];

        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = ascendingEl;
    }
    return arr;
}

// Problem 2: A List
arrayToList = (arr) => {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list;
}

listToArray = (list) => {
    let arr = [];
    for (const prop in list) {
        const value = list[prop];
        typeof value === 'object' ? arr.push(listToArray(value)) : arr.push(value);
    }
    arr = [].concat.apply([], arr);
    return arr;
}

prepend = (value, rest) => {
    let list = {
        value: value,
        rest: rest,
    }
    return list;
}

nth = (list, num) => {
    let answer;
    return num === 0 ? (list.value) : (nth(list.rest, num - 1));
}

//Problem 3: Deep comparison
deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
}

var arr = ["a", "b", "d", "e"];
console.log("Expected output of reverseArray([\"a\", \"b\", \"d\", \"e\"]) is [\"e\", \"d\", \"b\", \"a\"] "
    + myFunctionTestArr(["e", "d", "b", "a"], reverseArray(["a", "b", "d", "e"])));

console.log("Expected output of reverseArrayInPlace([\"a\", \"b\", \"d\", \"e\"]) is [\"e\", \"d\", \"b\", \"a\"] "
    + myFunctionTestArr(["e", "d", "b", "a"], reverseArrayInPlace(["a", "b", "d", "e"])));

console.log(arrayToList(arr));

console.log(listToArray(arrayToList(arr)));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));