const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100000000;
    actual = sum(90000000, 10000000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-7,-3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(5, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 10000000;
    actual = subtract(100000000, 90000000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -4;
    actual = subtract(-7,-3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5,0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 90000000;
    actual = multiply(90000, 1000);
    expect(actual).toBe(expected);
  });

  test('can multiply negative numbers', () => {
    expected = -21;
    actual = multiply(-7,3);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(5,0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(6, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 90000;
    actual = divide(90000000, 1000);
    expect(actual).toBe(expected);
  });

  test('can divide negative numbers', () => {
    expected = -3;
    actual = divide(-21,7);
    expect(actual).toBe(expected);
  });

  test('can divide by 1', () => {
    expected = 5;
    actual = divide(5,1);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 1;
    actual = modulus(7, 3);
    expect(actual).toBe(expected);
  });

  test('can modulus two large positive numbers', () => { 
    expected = 1000;
    actual = modulus(90001000, 10000000);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = 2;
    actual = modulus(-7,-3);
    expect(actual).toBe(expected);
  });

  test('can modulus positive number with negative number', () => {
    expected = 1;
    actual = modulus(7,-3);
    expect(actual).toBe(expected);
  });

  test('can modulus negative number with positive number', () => {
    expected = 2;
    actual = modulus(-7,3);
    expect(actual).toBe(expected);
  });

  test('can modulus one', () => {
    expected = 0;
    actual = modulus(5,1);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can test if small positive whole number is even', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('can test if small positive whole number is not even', () => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected);
  });

  test('can test if large positive whole number is not even', () => {
    expected = false;
    actual = even(42763482391);
    expect(actual).toBe(expected);
  });

  test('can test if small negative whole number is even', () => {
    expected = true;
    actual = even(-4);
    expect(actual).toBe(expected);
  });

  test('can test if small negative whole number is not even', () => {
    expected = false;
    actual = even(-5);
    expect(actual).toBe(expected);
  });

  test('can test if non-integer number is not even', () => {
    expected = false;
    actual = even(4.2);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can test if small positive whole number is odd', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
  });

  test('can test if small positive whole number is not odd', () => {
    expected = false;
    actual = odd(6);
    expect(actual).toBe(expected);
  });

  test('can test if large positive whole number is not odd', () => {
    expected = false;
    actual = odd(42763482394);
    expect(actual).toBe(expected);
  });

  test('can test if small negative whole number is odd', () => {
    expected = true;
    actual = odd(-5);
    expect(actual).toBe(expected);
  });

  test('can test if small negative whole number is not odd', () => {
    expected = false;
    actual = odd(-4);
    expect(actual).toBe(expected);
  });

  test('can test if non-integer number is not odd', () => {
    expected = false;
    actual = odd(4.2);
    expect(actual).toBe(expected);
  });

});
