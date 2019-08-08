function showGreet() {
    alert("Hello, world");
}

function setFontSize() {
    var taContent = document.getElementById("ta_content");
    taContent.style.fontSize = "24pt";
}

function setFontWeight() {
    var taContent = document.getElementById("ta_content");
    var isChecked = document.getElementById("cb").checked;
    if (isChecked) {
        taContent.style.fontWeight = "bold";
        taContent.style.color = "green";
        taContent.style.textDecoration = "underline";
    } else {
        taContent.style.fontWeight = "normal";
        taContent.style.color = "black";
        taContent.style.textDecoration = "none";

    }
}

function increaseFontSizeBy2() {
    var taContent = document.getElementById("ta_content");
    var cur = taContent.style.fontSize;
    if (cur == '') cur = 14; //default font size
    taContent.style.fontSize = parseInt(cur) + 2 + "pt";
}

function setBackgroundd() {

    document.body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}