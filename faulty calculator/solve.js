let a = Number(prompt('Enter your First Number'))
let b = Number(prompt('Enter your Second Number'))
let c = prompt('Select operation( + , - , / , * )')
// let d = Math.random()
let d = 0.09

if (d < 0.1) {

    if (c == '+') {

        console.log(a - b);

    }
    else if (c == '-') {

        console.log(a + b);

    }
    else if (c == '/') {

        console.log(a ** b);

    }
    else if (c == '*') {

        console.log(a / b);

    }
    else{
        console.log("Retry");
    }

}
else {


    if (c == '+') {

        console.log(a + b);

    }
    else if (c == '-') {

        console.log(a - b);

    }
    else if (c == '/') {

        console.log(a / b);

    }
    else if (c == '*') {

        console.log(a * b);

    }
    else{
        console.log("Retry");
    }


}