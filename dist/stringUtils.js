"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = isPalindrome;
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}
