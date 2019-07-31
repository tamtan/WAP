// protected namespace
// use strict
// well formatted code with short comment on each function or method

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

// console.log("Expected output of max(30,6) is 30 " + myFunctionTest(30, max(30, 6)));

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
var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

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

