function add(a, b) {
    checkType(a, b);
    return a + b;
}

function subtract(a, b) {
    checkType(a, b);
    return a - b;
}

function multiply(a, b) {
    checkType(a, b);
    return a * b;
}

function divide(a, b) {
    checkType(a, b);
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

function checkType(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }
}



module.exports={
    add,
    subtract,
    multiply,
    divide,
    checkType,
}