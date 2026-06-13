"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.factorial = factorial;
function add(a, b) {
    return a + b;
}
function factorial(n) {
    if (n < 0)
        throw new Error('Negative numbers not allowed');
    if (n === 0)
        return 1;
    return n * factorial(n - 1);
}
