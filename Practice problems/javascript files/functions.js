function armstrong() {
    var a, b, c, d, arm = 0;
    let num = Number(prompt('Enter Number'));
    temp = num;
    while (temp > 0) {
        a = temp % 10
        temp = parseInt(temp / 10);
        arm = arm + a * a * a;
    }
    if (arm == num) {
        alert("armstrong number");
    }
    else {
        alert("not armstrong number");
    }
}

let colors = ["red", "olive", "green", "pink", "purple"];
var index;
function backColor() {
    index = Math.floor(Math.random(colors) * colors.length);
    document.body.backgroundColor = colors[index];
}

function primeCheck() {
    num = Number(prompt("Enter number:"));
    var flag = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag++;
        }
    }
    if (flag == 0) {
        alert("Number is prime");
    }
    else {
        alert("Number is not a prime");
    }
}

function evenOdd() {
    num = Number(prompt('Enter Number'));
    if (num % 2 == 0) {
        alert("Number is even");
    }
    else {
        alert("Number is odd");
    }
}

function factorial() {
    num = Number(prompt('Enter Number'));
    let fact = 1;
    for (let index = 2; index <= num; index++) {
        fact *= index;
    }
    alert("factorial is " + fact);
}

function bmi() {
    let height = Number(prompt('Enter height'));
    let weight = Number(prompt("Enter weight"));
    let ans = (703 * weight) / (height ** 2);
    if (ans > 18.5 && ans < 24.9) {
        alert("You are underweight");
    }
    else if (ans > 25 && ans < 29.9) {
        alert("You have a normal weight.");
    }
    else if (bmi > 30) {
        alert("You are obese.");
    }
    else {
        alert("invalid")
    }
}

function perimeter() {
    let choice = Number(prompt("Press 1 for retangle\nPress 2 for circle"));
    if (choice === 1) {
        var length = Number(prompt("Enter length:"));
        var breadth = Number(prompt("Enter breadth:"));
        var result = length + breadth;
        alert("The perimeter is" + result);
    } else if (choice === 2) {
        var radius = Number(prompt("Enter radius:"));
        var result = 2 * 3.147 * radius;
        alert("The perimeter is" + result);
    }
    else {
        alert("invalid")
    }
}

function area() {
    let choice = Number(prompt("Press 1 for retangle\nPress 2 for circle"));
    if (choice === 1) {
        var length = Number(prompt("Enter length:"));
        var breadth = Number(prompt("Enter breadth:"));
        var result = length * breadth;
        alert("The area is" + result);
    } else if (choice === 2) {
        var radius = Number(prompt("Enter radius:"));
        var result = 2 * 3.147 * radius ** 2;
        alert("The area is" + result);
    }
    else {
        alert("invalid")
    }
}

function leapYear() {
    let year = Number(prompt("Enter number:"));
    if (year >= 0) {
        if (year % 4 === 0) {
            alert("Year " + year + " is a leap year");
        } else {
            alert("Year " + year + " is not a leap year");
        }
    }
    else {
        alert("invalid");
    }
}

function fibo() {
    num = Number(prompt("Enter the nth term of fibonacci series:"));
    var t1, t2, t3;
    if (num === 0) {
        alert("The 0th term is 0");
    }
    else if (num === 2 || num === 1) {
        alert("The " + num + "th term is 1");
    }
    else {
        t1 = 0;
        t2 = 1;
        t3 = 1;
        for (var i = 0; i < num-3; i++) {
            t1 = t2;
            t2 = t3;
            t3 = t2 + t1;
        }
        alert("The " + num + "th term is " + t3);
    }
}