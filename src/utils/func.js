// Takes a property name and returns a function
// that takes an item and returns that item's property
export const prop = prop => item => item[prop];

// Takes two numbers and returns their sum
export const sum = (x, y) => x + y;

// Takes a property name and a value, and return a function
// that takes an item and checks if that item's property is different from taken value
export const removeBy = (prop, value) => item => item[prop] !== value;
