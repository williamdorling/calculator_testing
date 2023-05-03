const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
}

const modulus = function(a, b){
    if (b < 0){
        b *= -1;
    }
    let output = a % b;
    if (output < 0){
        output = b + output
    }
    return output;
};

const even = function(a){
    return a%2 === 0;
};

const odd = function(a){
    if(a<0){
        a *= -1;
    }
    return a % 2 === 1;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
