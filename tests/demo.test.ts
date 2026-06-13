import { describe, it, expect } from 'vitest';
import { add, factorial } from '../src/math';
import { isPalindrome } from '../src/stringUtils';

describe('add', () => {
    it('returns sum', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });
});

describe('factorial', () => {
    it('returns factorial', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(5)).toBe(120);
    });
    it('throws for negative', () => {
        expect(() => factorial(-1)).toThrow('Negative numbers not allowed');
    });
});

describe('isPalindrome', () => {
    it('detects palindromes', () => {
        expect(isPalindrome('A man a plan a canal panama')).toBe(true);
        expect(isPalindrome('hello')).toBe(false);
    });
});
