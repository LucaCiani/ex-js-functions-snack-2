function somma(num1, num2) {
    return console.log(num1 + num2);
}

const sommaConst = function (num1, num2) {
    return console.log(num1 + num2);
};

const sommaArrow = (num1, num2) => {
    return console.log(num1 + num2);
};

somma(1, 1);

sommaConst(2, 2);

sommaArrow(3, 3);
