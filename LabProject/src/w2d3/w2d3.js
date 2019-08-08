//problem 1: Define a filter function
String.prototype.filter = function (arg) {
    return this.replace(arg, "").replace("  ", " ");
};

//problem 2: Write a BubbleSort algorithm
Array.prototype.bubbleSort = function () {
    let self = this;
    const swap = (i, j) => {
        let temp = self[i];
        self[i] = self[j];
        self[j] = temp;
    }
    for (let i = 0; i < self.length; i++) {
        for (let j = 1; j < self.length; j++) {
            if (self[j - 1] > self[j]) {
                swap(j - 1, j);
            }
        }
    }

    return self;
}

//problem 3:
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby =
        function () {
            console.log("My name is " + this.name + " and my hobby is " + this.hobby);
        }
}

Person.prototype.species = "homo sapien";

const Teacher = Object.create(Person);
Teacher.constructor = (name, subject) => {
    this.subject = subject;
    return new Person( name);
};
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

const person = new Person("Minh Sang", 30, "Swimming");
person.hobby();

const teacher1 = Object.create(Teacher);
teacher1.constructor("Keith Levi", "Teaching");
teacher1.teach("English");

const teacher2 = Object.create(Teacher);
teacher2.constructor("Mohamed", "Badminton");
teacher2.teach("Math");
//end problem 3

console.log("Expected output of [6,4,0, 3,-2,1].bubbleSort() is [-2, 0, 1, 3, 4, 6] "
    + myFunctionTestArr([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort()));

console.log("Expected output of \"This house is not nice!\".filter('not') is \"This house is nice!\" "
    + myFunctionTest("This house is nice!", "This house is not nice!".filter('not')));

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
